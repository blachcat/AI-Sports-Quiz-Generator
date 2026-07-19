import json
from google import genai
from config import GEMINI_API_KEY

client = genai.Client(api_key=GEMINI_API_KEY)


def generate_text(sport, difficulty, num_questions, context=""):

    prompt = f"""
You are a sports quiz generator.

Generate {num_questions} {difficulty} level multiple choice questions about {sport}.

Use the following retrieved knowledge while generating the quiz.

Retrieved Knowledge:
{context}

Return ONLY valid JSON.

Format:

[
  {{
    "question": "...",
    "options": [
      "...",
      "...",
      "...",
      "..."
    ],
    "answer": "...",
    "explanation": "..."
  }}
]

Do not write markdown.
Do not write ```json.
Do not write any extra text.
Return only JSON.
"""

    response = client.models.generate_content(
        model="gemini-flash-latest",
        contents=prompt,
    )

    return json.loads(response.text)