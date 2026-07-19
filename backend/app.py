from fastapi import FastAPI
from fastapi.middleware.cors import CORSMiddleware
from routers.quiz import router as quiz_router

app = FastAPI(
    title="AI Sports Quiz Generator API"
)

app.add_middleware(
    CORSMiddleware,
    allow_origins=[
        "http://localhost:5173",
        "http://127.0.0.1:5173",
    ],
    allow_credentials=True,
    allow_methods=["*"],
    allow_headers=["*"],
)

app.include_router(quiz_router)


@app.get("/")
def root():
    return {"message": "Backend Running"}