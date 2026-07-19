from services.chroma_service import search_documents
from services.gemini_service import generate_text


def generate_quiz_with_rag(sport, difficulty, num_questions):
    results = search_documents(
        query=sport,
        sport=sport
    )

    documents = results["documents"][0]

    context = "\n".join(documents)

    return generate_text(
        sport=sport,
        difficulty=difficulty,
        num_questions=num_questions,
        context=context
    )