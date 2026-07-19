from pydantic import BaseModel

class QuizRequest(BaseModel):
    sport: str
    difficulty: str
    num_questions: int