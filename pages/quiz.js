import { useEffect, useState } from "react"

export default function Quiz() {
  const [idx, setIdx ] = useState(0);
  const [selectedAnswer, setSelectedAnswer ] = useState(null);
  const [correctAnswers, setCorrectAnswers ] = useState(0);
  const [wrongAnswers, setWrongAnswers ] = useState(0);
  const [questions, setQuestions ] = useState([
    {
      question:
        "Rolex is a company that specializes in what type of product?",
      answers: { a: "Bags", b: "Watches", c: "Shoes", d: "Laptops" },
      correctAnswer: "b",
    },
    {
      question: "When did Facebook launch?",
      answers: { a: "2005", b: "2008", c: "2003", d: "2004" },
      correctAnswer: "d",
    },
    {
      question:
        "Albert Einstein had trouble with mathematics when he was in school?",
      answers: { a: "True", b: "False" },
      correctAnswer: "b",
    },
  ]);
  const answered = (e) => {
    const selAnswer = e.target.value;
      setSelectedAnswer(selAnswer);
      if (selAnswer == questions[idx].correctAnswer) {
        setCorrectAnswers((prev) => prev + 1);
      } else {
        setWrongAnswers((prev) => prev + 1);
      }
  };
  const nextQuestion = () => {
    setIdx((prev) => prev + 1);
    setSelectedAnswer(null);
      // document.querySelectorAll("input").forEach((el) => (el.checked = false));
  }

  const showResults = () => {
    setIdx((prev) => prev + 1);
  }
  const resetQuiz = () => {
    setIdx(0);
    setSelectedAnswer(null);
    setCorrectAnswers(0);
    setWrongAnswers(0);
  };

  useEffect(() => {

  }, [idx]);
  return (
    <>
      <div id="app" className="flex w-full h-screen justify-center items-center">
        <div className="w-full max-w-xl p-3">
          <h1 className="font-bold text-5xl text-center text-indigo-700">
            Simple Quiz
          </h1>
          <div className="bg-white p-12 rounded-lg shadow-lg w-full mt-8">
            { idx < questions.length ? (
              <div>
                <p className="text-2xl font-bold">{ questions[idx].question }{`__${idx}`}{`__${selectedAnswer}`}</p>
                { Object.keys(questions[idx].answers).map((key, _) => (
                  <label
                    key={`${idx}_${key}`}
                    className={`block mt-4 border border-gray-300 rounded-lg py-2 px-6 text-lg ${selectedAnswer || 'hover:bg-gray-100 cursor-pointer'} ${selectedAnswer != key || 'bg-red-200'}`}
                  >
                    <input
                      type="radio"
                      className="hidden"
                      value={key}
                      onChange={answered}
                      disabled={selectedAnswer}
                    />
                    { questions[idx].answers[key] }
                  </label>
                ))}
                <div className="mt-6 flow-root">
                  { selectedAnswer && idx < questions.length - 1 && (
                    <button
                      onClick={nextQuestion}
                      className="float-right bg-indigo-600 text-white text-sm font-bold tracking-wide rounded-full px-5 py-2"
                    >
                      Next &gt;
                    </button>
                  )}
                  { selectedAnswer && idx == questions.length - 1 && (
                    <button
                      onClick={showResults}
                      className="float-right bg-indigo-600 text-white text-sm font-bold tracking-wide rounded-full px-5 py-2"
                    >
                      Finish
                    </button>
                  )}
                </div>
              </div>
            ) : (
              <div>
                <h2 className="text-bold text-3xl">Results</h2>
                <div className="flex justify-start space-x-4 mt-6">
                  <p>
                    Correct Answers:
                    <span className="text-2xl text-green-700 font-bold"
                      >{ correctAnswers }</span
                    >
                  </p>
                  <p>
                    Wrong Answers:
                    <span className="text-2xl text-red-700 font-bold"
                      >{ wrongAnswers }</span
                    >
                  </p>
                </div>
                <div className="mt-6 flow-root">
                  <button
                    onClick={ resetQuiz }
                    className="float-right bg-indigo-600 text-white text-sm font-bold tracking-wide rounded-full px-5 py-2"
                  >
                    Play again
                  </button>
                </div>
              </div>
            )}
          </div>
        </div>
      </div>
      <footer className="text-center">
        <a
          href="https://github.com/rodionsibov/symmetrical-doodle"
          target="_blank"
          rel="noreferrer noopener"
          title="Viewing existing code on GitHub. Simple Quiz App using Vue 3 and Tailwind CSS"
          ><i className="fab fa-github fa-2x"></i></a
        ><br />
        <small id="year"></small>
      </footer>
    </>
  )
}