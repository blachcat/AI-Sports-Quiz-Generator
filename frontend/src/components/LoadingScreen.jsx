function LoadingScreen() {

    return (

        <div className="loading-screen">

            <div className="loading-card">

                <h1>🤖 Generating Your AI Quiz</h1>

                <div className="loading-step">
                    🔍 Searching ChromaDB Knowledge Base...
                </div>

                <div className="loading-step">
                    📚 Retrieving Sports Information...
                </div>

                <div className="loading-step">
                    🧠 Gemini is Generating Questions...
                </div>

                <div className="loading-step">
                    ✨ Almost Ready...
                </div>

                <div className="loader"></div>

            </div>

        </div>

    );

}

export default LoadingScreen;