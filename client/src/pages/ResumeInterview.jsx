import { useState, useEffect } from "react";

function ResumeInterview() {

  const [file, setFile] = useState(null);
  const [questions, setQuestions] = useState([]);
  const [interviewStarted, setInterviewStarted] = useState(false);
  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [timeLeft, setTimeLeft] = useState(45 * 60);
  const [answer, setAnswer] = useState("");
  const [showScore, setShowScore] = useState(false);

  const uploadResume = () => {

    if (!file) {
      alert("Please select a resume first");
      return;
    }

    setQuestions([
      "Explain React useEffect Hook.",
      "Difference between SQL WHERE and HAVING.",
      "What is Machine Learning?",
      "Explain OOP principles.",
      "Difference between BFS and DFS."
    ]);

  };

  const submitAnswer = () => {

    if (!answer.trim()) {
      alert("Please enter an answer");
      return;
    }

    setShowScore(true);

    alert("Answer Submitted Successfully!");

    setAnswer("");

  };

  useEffect(() => {

    if (!interviewStarted) return;

    const timer = setInterval(() => {

      setTimeLeft((prev) => {

        if (prev <= 1) {
          clearInterval(timer);
          return 0;
        }

        return prev - 1;

      });

    }, 1000);

    return () => clearInterval(timer);

  }, [interviewStarted]);

  return (

    <div className="min-h-screen bg-gradient-to-br from-[#050816] via-[#0b1120] to-black text-white p-10">

      <h1 className="text-5xl font-bold mb-8 text-center">
        Resume Interview
      </h1>

      <div className="bg-white/5 border border-white/10 rounded-3xl p-8 max-w-4xl mx-auto">

        <input
          type="file"
          accept=".pdf,.doc,.docx"
          id="resumeInput"
          style={{ display: "none" }}
          onChange={(e) => setFile(e.target.files[0])}
        />

        <div className="flex gap-4 justify-center">

          <button
            onClick={() =>
              document.getElementById("resumeInput").click()
            }
            className="bg-green-500 text-black px-6 py-3 rounded-2xl font-semibold"
          >
            📄 Select Resume
          </button>

          <button
            onClick={uploadResume}
            className="bg-blue-500 text-white px-6 py-3 rounded-2xl font-semibold"
          >
            🚀 Generate Questions
          </button>

        </div>

        {file && (
          <p className="mt-4 text-green-400 text-center">
            Selected: {file.name}
          </p>
        )}

        {questions.length > 0 && (

          <div className="mt-8">

            <div className="text-center">

              <button
                onClick={() => setInterviewStarted(true)}
                className="bg-green-500 text-black px-6 py-3 rounded-2xl font-semibold mb-6"
              >
                ▶ Start Interview
              </button>

            </div>

            {interviewStarted && (

              <div className="bg-black/20 border border-white/10 rounded-2xl p-6 mb-6">

                <div className="mb-4 text-yellow-400 text-xl font-bold">
                  ⏱ Time Left: {Math.floor(timeLeft / 60)}:
                  {(timeLeft % 60).toString().padStart(2, "0")}
                </div>

                <h2 className="text-2xl font-bold mb-3">
                  Current Question
                </h2>

                <p className="text-lg mb-4">
                  {questions[currentQuestion]}
                </p>

                <textarea
                  value={answer}
                  onChange={(e) => setAnswer(e.target.value)}
                  placeholder="Type your answer here..."
                  className="w-full h-40 bg-black/30 border border-white/10 rounded-2xl p-4 mb-4 outline-none"
                />

                <button
                  onClick={submitAnswer}
                  className="bg-green-500 text-black px-6 py-3 rounded-2xl font-semibold mb-4"
                >
                  ✅ Submit Answer
                </button>

                <div className="flex gap-4">

                  <button
                    disabled={currentQuestion === 0}
                    onClick={() =>
                      setCurrentQuestion(currentQuestion - 1)
                    }
                    className="bg-gray-700 px-4 py-2 rounded-xl"
                  >
                    ⬅ Previous
                  </button>

                  <button
                    disabled={
                      currentQuestion === questions.length - 1
                    }
                    onClick={() =>
                      setCurrentQuestion(currentQuestion + 1)
                    }
                    className="bg-blue-500 px-4 py-2 rounded-xl"
                  >
                    ➡ Next
                  </button>

                </div>

                {showScore && (

                  <div className="mt-6 bg-black/30 border border-white/10 rounded-2xl p-6">

                    <h2 className="text-2xl font-bold mb-4 text-green-400">
                      Interview Score Card
                    </h2>

                    <p className="mb-2">
                      Communication: 8/10
                    </p>

                    <p className="mb-2">
                      Technical Skills: 9/10
                    </p>

                    <p className="mb-2">
                      Problem Solving: 8/10
                    </p>

                    <p className="mb-2">
                      Confidence: 7/10
                    </p>

                    <hr className="my-4 border-gray-600" />

                    <p className="text-xl font-bold text-yellow-400">
                      Overall Score: 80%
                    </p>

                  </div>

                )}

              </div>

            )}

            <h2 className="text-2xl font-bold mb-4 text-center">
              Generated Interview Questions
            </h2>

            <div className="space-y-3">

              {questions.map((question, index) => (

                <div
                  key={index}
                  className="bg-black/20 border border-white/10 p-4 rounded-2xl"
                >
                  {index + 1}. {question}
                </div>

              ))}

            </div>

          </div>

        )}

      </div>

    </div>

  );

}

export default ResumeInterview;