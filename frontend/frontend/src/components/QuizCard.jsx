function QuizCard({
  question,
  options,
  answer,
  explanation,
}) {
  return (
    <div className="quiz-card">

      <h2>{question}</h2>

      <ul>

        {options.map((option, index) => (

          <li key={index}>{option}</li>

        ))}

      </ul>

      <div className="answer">

        <strong>Correct Answer:</strong>

        <p>{answer}</p>

      </div>

      <div className="explanation">

        <strong>Explanation</strong>

        <p>{explanation}</p>

      </div>

    </div>
  );
}

export default QuizCard;