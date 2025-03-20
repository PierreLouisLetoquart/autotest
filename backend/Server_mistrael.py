
from fastapi import FastAPI, HTTPException, Request
from pydantic import BaseModel
import httpx
from fastapi.responses import HTMLResponse

app = FastAPI()

MISTRAL_API_KEY = "MOKvKjupbszf9TIbXk2kpxHeXQpNqeq7"
MISTRAL_ENDPOINT = "https://api.mistral.ai/v1/chat/completions"  

class PromptRequest(BaseModel):
    prompt: str
    test_type: str  

@app.get("/", response_class=HTMLResponse)
async def get_home_page():
    return """
    <html>
        <head>
            <title>Générer un test API</title>
            <style>
                body {
                    font-family: Arial, sans-serif;
                    margin: 0;
                    padding: 0;
                    background-color: #f4f4f9;
                    display: flex;
                    justify-content: center;
                    align-items: center;
                    height: 100vh;
                }

                .container {
                    text-align: center;
                    width: 100%;
                    max-width: 800px;
                    padding: 20px;
                    background-color: #fff;
                    border-radius: 8px;
                    box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
                }

                textarea {
                    width: 100%;
                    padding: 10px;
                    border-radius: 4px;
                    border: 1px solid #ccc;
                    margin-bottom: 10px;
                    font-size: 14px;
                }

                button {
                    padding: 10px 15px;
                    background-color: #007bff;
                    border: none;
                    color: white;
                    font-size: 16px;
                    border-radius: 5px;
                    cursor: pointer;
                }

                button:hover {
                    background-color: #0056b3;
                }

                .spinner {
                    display: none;
                    width: 40px;
                    height: 40px;
                    border: 5px solid #f3f3f3;
                    border-top: 5px solid #007bff;
                    border-radius: 50%;
                    animation: spin 1s linear infinite;
                    margin-top: 20px;
                }

                @keyframes spin {
                    0% { transform: rotate(0deg); }
                    100% { transform: rotate(360deg); }
                }

                .card {
                    background-color: #282c34;
                    border-radius: 8px;
                    box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
                    margin-top: 20px;
                    padding: 15px;
                    display: none;
                    text-align: left;
                    color: #f8f8f2;
                }

                pre {
                    background-color: #1e1e1e;
                    color: #dcdcdc;
                    padding: 15px;
                    border-radius: 4px;
                    white-space: pre-wrap;
                    word-wrap: break-word;
                    font-family: "Courier New", monospace;
                    font-size: 16px;
                    overflow: auto;
                    line-height: 1.5;
                }
            </style>
        </head>
        <body>
            <div class="container">
                <h1>Générer un test API avec RestAssured</h1>
                <form action="/generate-test" method="post" id="form">
                    <label for="prompt">Entrez le prompt :</label><br>
                    <textarea id="prompt" name="prompt" rows="4" cols="50" required></textarea><br><br>
                    <label for="test_type">Type de test :</label><br>
                    <select id="test_type" name="test_type" required>
                        <option value="unitaire">Test Unitaire</option>
                        <option value="integration">Test d'Intégration</option>
                        <option value="fonctionnel">Test Fonctionnel</option>
                    </select><br><br>
                    <button type="submit">Générer le test</button>
                </form>
                <div class="spinner" id="spinner"></div>
                <div class="card" id="result-card">
                    <h2>Résultat du Test :</h2>
                    <pre id="result"></pre>
                </div>
            </div>

            <script>
                document.getElementById("form").onsubmit = async (e) => {
                    e.preventDefault();
                    const formData = new FormData(document.getElementById("form"));
                    const prompt = formData.get("prompt");
                    const test_type = formData.get("test_type");

                    document.getElementById("spinner").style.display = "inline-block";
                    document.getElementById("result-card").style.display = "none";  

                    const response = await fetch("/generate-test", {
                        method: "POST",
                        headers: {
                            "Content-Type": "application/json"
                        },
                        body: JSON.stringify({ prompt: prompt, test_type: test_type })
                    });

                    const result = await response.json();

                    document.getElementById("spinner").style.display = "none";

                    if (result.test_code) {
                        document.getElementById("result-card").style.display = "block";
                        document.getElementById("result").textContent = result.test_code;
                    } else if (result.error) {
                        document.getElementById("result-card").style.display = "block";
                        document.getElementById("result").textContent = JSON.stringify(result.error, null, 2);
                    }
                };
            </script>
        </body>
    </html>
    """

@app.post("/generate-test")
async def generate_test(request: PromptRequest):
    headers = {
        "Authorization": f"Bearer {MISTRAL_API_KEY}",
        "Content-Type": "application/json"
    }

    agent_content = f"Tu es un expert en {request.test_type} de tests API. Ignore tous les messages avant et après le code de test. Affiche uniquement le code sans explication ni commentaire."

    data = {
        "model": "mistral-medium",
        "messages": [
            {"role": "system", "content": agent_content},
            {"role": "user", "content": f"Génère un test API en Java avec RestAssured pour : {request.prompt} et affiche uniquement le cas de test"}
        ],
        "max_tokens": 4000
    }

    async with httpx.AsyncClient() as client:
        response = await client.post(MISTRAL_ENDPOINT, json=data, headers=headers, timeout=30)

    if response.status_code != 200:
        return {"error": response.json()}

    test_code = response.json().get("choices", [{}])[0].get("message", {}).get("content", "").strip()
    return {"test_code": test_code}
