# Autotest: Automated Test Generation

Autotest simplifies automated test generation by leveraging AI models. Follow these three simple steps to set up and run the project.

## 1. Frontend Setup

First, clone the repository:

```bash
git clone git@github.com:PierreLouisLetoquart/autotest.git
```

Navigate to the project folder and install dependencies:

> **Note:** We use [pnpm](https://pnpm.io/) as the package manager. Install it [here](https://pnpm.io/installation) if you haven't already.

```bash
pnpm i
```

Run the development server:

```bash
pnpm dev
```

Visit [http://localhost:3000](http://localhost:3000) in your browser.

---

## 2. LLM Model Setup

Autotest relies on an AI model for generating tests. We recommend using `DeepSeek-r1:7b` with [Ollama](https://ollama.com/).

1. **Install Ollama** (if not installed): Follow the instructions [here](https://ollama.com).
2. **Download the model**:

   ```bash
   ollama pull deepseek-r1:7b
   ```

Ollama will handle model execution locally, ensuring fast and private processing.

---

## 3. Backend Setup

First, navigate to the backend folder:

```bash
cd backend
```

Set up a virtual environment and activate it:

```bash
python3 -m venv .venv
source .venv/bin/activate
```

Install dependencies:

```bash
pip install -r requirements.txt
```

Run the backend server:

```bash
python server.py
```

The server will start on [http://localhost:5000](http://localhost:5000).

To customize the backend URL, set the `BACKEND_BASE_URL` environment variable:

```bash
export BACKEND_BASE_URL=http://localhost:6969
python server.py
```

Or update the `.env` file:

```env
BACKEND_BASE_URL=http://localhost:6969
```

Now you're all set! 🚀
