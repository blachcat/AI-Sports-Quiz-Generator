from services.gemini_service import generate_text

quiz = generate_text(
    sport="Cricket",
    difficulty="Easy",
    num_questions=3
)

print(quiz)