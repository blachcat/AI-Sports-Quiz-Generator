import { useState } from "react";
import API from "../services/api";

function QuizForm({
    setQuiz,
    setScreen,
    setLoading
}) {

    const [sport, setSport] = useState("Cricket");
    const [difficulty, setDifficulty] = useState("Easy");
    const [questions, setQuestions] = useState(5);

    const handleSubmit = async (e) => {

        e.preventDefault();

        setLoading(true);

        try {

            const response = await API.post("/generate-quiz", {

                sport: sport,
                difficulty: difficulty,
                num_questions: Number(questions),

            });

            setQuiz(response.data.quiz);

            setScreen("quiz");

        }

        catch (error) {

            console.error(error);

            alert("Failed to generate quiz");

        }

        finally {

            setLoading(false);

        }

    };

    return (

        <div className="quiz-form">

            <form onSubmit={handleSubmit}>

                <div className="form-group">

                    <label>Sport</label>

                    <select
                        value={sport}
                        onChange={(e) => setSport(e.target.value)}
                    >
                        <option>Cricket</option>
                        <option>Football</option>
                        <option>Basketball</option>
                        <option>Tennis</option>
                        <option>Badminton</option>
                    </select>

                </div>

                <div className="form-group">

                    <label>Difficulty</label>

                    <select
                        value={difficulty}
                        onChange={(e) => setDifficulty(e.target.value)}
                    >
                        <option>Easy</option>
                        <option>Medium</option>
                        <option>Hard</option>
                    </select>

                </div>

                <div className="form-group">

                    <label>Questions</label>

                    <input
                        type="number"
                        min="1"
                        max="10"
                        value={questions}
                        onChange={(e) => setQuestions(e.target.value)}
                    />

                </div>

                <button
                    type="submit"
                    className="generate-btn"
                >
                    🚀 Generate Quiz
                </button>

            </form>

        </div>

    );

}

export default QuizForm;