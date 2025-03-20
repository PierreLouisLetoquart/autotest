
from fastapi import FastAPI, HTTPException, Request
from pydantic import BaseModel
import httpx
from fastapi.responses import HTMLResponse

app = FastAPI()

MISTRAL_API_KEY = ""
MISTRAL_ENDPOINT = "https://api.mistral.ai/v1/chat/completions"  

class PromptRequest(BaseModel):
    prompt: str
    test_type: str  


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
