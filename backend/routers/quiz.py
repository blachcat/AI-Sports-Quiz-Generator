from fastapi import APIRouter
from models.quiz_models import QuizRequest
from services.rag_service import generate_quiz_with_rag

router = APIRouter()


@router.post("/generate-quiz")
def generate_quiz(data: QuizRequest):

    quiz = generate_quiz_with_rag(
        sport=data.sport,
        difficulty=data.difficulty,
        num_questions=data.num_questions,
    )

    return {
        "status": "success",
        "quiz": quiz
    }