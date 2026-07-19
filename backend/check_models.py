from google import genai
from config import GEMINI_API_KEY

client = genai.Client(api_key=GEMINI_API_KEY)

print("Models that support generateContent:\n")

for model in client.models.list():
    if "generateContent" in getattr(model, "supported_actions", []):
        print(model.name)