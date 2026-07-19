function Result({
    quiz,
    userAnswers,
    onRestart,
    onReview
}) {

    let score = 0;

    quiz.forEach((question, index) => {

        if (userAnswers[index] === question.answer) {

            score++;

        }

    });

    const percentage = Math.round(
        (score / quiz.length) * 100
    );

    let badge = "";
let badgeColor = "";

if (percentage >= 90) {
    badge = "🏆 Expert";
    badgeColor = "#facc15";
}
else if (percentage >= 75) {
    badge = "🥈 Advanced";
    badgeColor = "#38bdf8";
}
else if (percentage >= 50) {
    badge = "🥉 Intermediate";
    badgeColor = "#22c55e";
}
else {
    badge = "📚 Beginner";
    badgeColor = "#ef4444";
}

    return (

        <div className="result-screen">

            <h1>
                🎉 Quiz Completed
            </h1>

            <div className="score-card">
                <h3
                    style={{
                        color: badgeColor,
                        fontSize: "30px",
                        marginBottom: "20px"
                    }}
                >
                    {badge}
                </h3>

                <h2>

                    {score} / {quiz.length}

                </h2>

                <p>

                    Accuracy : {percentage}%

                </p>

            </div>

            <div className="result-details">

                <div>

                    ✅ Correct

                    <h2>

                        {score}

                    </h2>

                </div>

                <div>

                    ❌ Wrong

                    <h2>

                        {quiz.length - score}

                    </h2>

                </div>

            </div>

            <button
                className="review-btn"
                onClick={onReview}
            >
                📖 Review Answers
            </button>

            <button

                className="restart-btn"

                onClick={onRestart}

            >

                🔄 Play Again

            </button>

        </div>

    );

}

export default Result;