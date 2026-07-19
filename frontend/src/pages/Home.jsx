import { useState } from "react";
import LoadingScreen from "../components/LoadingScreen";
import ReviewAnswers from "../components/ReviewAnswers";
import Result from "../components/Result";

import Navbar from "../components/Navbar";
import QuizForm from "../components/QuizForm";
import Quiz from "../components/Quiz";

import hero from "../assets/hero.png";

function Home() {

    const [quiz, setQuiz] = useState([]);

    const [loading, setLoading] = useState(false);

    const [screen, setScreen] = useState("home");

    const [userAnswers, setUserAnswers] = useState([]);

    const handleQuizGenerated = (generatedQuiz) => {

        setQuiz(generatedQuiz);

        setScreen("quiz");

    };

    const handleFinish = (answers) => {

        setUserAnswers(answers);

        setScreen("result");

    };

    if (loading) {

        return (
            <>
                <Navbar />
                <LoadingScreen />
            </>
        );

    }

    return (

        <>

            <Navbar />

            {

                screen === "home" &&

                <>

                    <div className="hero-section">

                        <div className="hero-left">

                            <h1>
                                AI Sports Quiz Generator
                            </h1>

                            <p>

                                Generate intelligent sports quizzes using
                                <strong> Gemini AI</strong>,
                                <strong> Retrieval-Augmented Generation</strong>,
                                and
                                <strong> ChromaDB</strong>.

                            </p>

                            <QuizForm
                                setQuiz={handleQuizGenerated}
                                setScreen={setScreen}
                                setLoading={setLoading}
                            />

                        </div>

                        <div className="hero-right">

                            <img

                                src={hero}

                                alt="Hero"

                            />

                        </div>

                    </div>

                </>

            }

            {
                loading && <LoadingScreen />
            }

            {

                screen === "quiz" && (

                    <Quiz

                        quiz={quiz}

                        onFinish={handleFinish}

                    />

                )

            }

            {
    screen === "result" &&

    <Result
        quiz={quiz}
        userAnswers={userAnswers}
        onReview={() => setScreen("review")}
        onRestart={() => {

            setQuiz([]);
            setUserAnswers([]);
            setScreen("home");

        }}
    />
    }
    {
    screen === "review" &&

    <ReviewAnswers
        quiz={quiz}
        userAnswers={userAnswers}
        onBack={() => setScreen("result")}
    />
}

        </>

    );

}

export default Home;