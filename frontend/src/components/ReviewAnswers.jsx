function ReviewAnswers({
    quiz,
    userAnswers,
    onBack
}) {

    return (

        <div className="review-screen">

            <h1>
                📖 Review Answers
            </h1>

            {

                quiz.map((question, index) => (

                    <div
                        className="review-card"
                        key={index}
                    >

                        <h2>

                            Question {index + 1}

                        </h2>

                        <p>

                            <strong>

                                {question.question}

                            </strong>

                        </p>

                        <div className="your-answer">

                            <h4>

                                Your Answer

                            </h4>

                            <p>

                                {

                                    userAnswers[index]

                                }

                            </p>

                        </div>

                        <div className="correct-answer">

                            <h4>

                                Correct Answer

                            </h4>

                            <p>

                                {

                                    question.answer

                                }

                            </p>

                        </div>

                        <div className="explanation-box">

                            <h4>

                                Explanation

                            </h4>

                            <p>

                                {

                                    question.explanation

                                }

                            </p>

                        </div>

                    </div>

                ))

            }

            <button

                className="restart-btn"

                onClick={onBack}

            >

                ← Back to Result

            </button>

        </div>

    );

}

export default ReviewAnswers;