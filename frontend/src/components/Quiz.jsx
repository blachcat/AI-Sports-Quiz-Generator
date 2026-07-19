import { useState } from "react";

function Quiz({ quiz, onFinish }) {

    const [currentQuestion, setCurrentQuestion] = useState(0);

    const [answers, setAnswers] = useState([]);

    const handleOptionClick = (option) => {

        const updatedAnswers = [...answers];

        updatedAnswers[currentQuestion] = option;

        setAnswers(updatedAnswers);

    };

    const nextQuestion = () => {

        if (currentQuestion < quiz.length - 1) {

            setCurrentQuestion(currentQuestion + 1);

        } else {

            onFinish(answers);

        }

    };

    const previousQuestion = () => {

        if (currentQuestion > 0) {

            setCurrentQuestion(currentQuestion - 1);

        }

    };

    const question = quiz[currentQuestion];

    return (

        <div className="quiz-screen">

            <div className="progress">

                Question {currentQuestion + 1} / {quiz.length}

            </div>

            <div className="progress-bar">

                <div
                    className="progress-fill"
                    style={{
                        width: `${((currentQuestion + 1) / quiz.length) * 100}%`
                    }}
                />

            </div>

            <div className="quiz-card">

                <h2>{question.question}</h2>

                {

                    question.options.map((option, index) => (

                        <button

                            key={index}

                            className={
                                answers[currentQuestion] === option
                                    ? "option selected"
                                    : "option"
                            }

                            onClick={() => handleOptionClick(option)}

                        >

                            {option}

                        </button>

                    ))

                }

            </div>

            <div className="navigation">

                <button

                    onClick={previousQuestion}

                    disabled={currentQuestion === 0}

                >

                    Previous

                </button>

                <button onClick={nextQuestion}>

                    {

                        currentQuestion === quiz.length - 1

                            ? "Finish Quiz"

                            : "Next"

                    }

                </button>

            </div>

        </div>

    );

}

export default Quiz;