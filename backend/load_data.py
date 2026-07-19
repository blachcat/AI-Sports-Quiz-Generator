import json
from services.chroma_service import add_documents

with open("data/sports_knowledge.json", "r") as f:
    data = json.load(f)

add_documents(data)

print("Sports knowledge loaded successfully!")