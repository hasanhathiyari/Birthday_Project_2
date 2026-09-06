import { useState } from "react";
import { AnimatePresence } from "framer-motion";

import BackgroundEffects from "../Components/BackgroundEffects";

const questions = [
  {
    question:
      "When Abbas wants to convince Arwa, what does he use?",
    options: [
      "Logic",
      "Cute faces",
      "Bribery",
      "Running away",
    ],
    answer: 1,
  },
  {
    question:
      "What is Abbas's special ability?",
    options: [
      "Cooking",
      "Remembering everything Arwa loves",
      "Sleeping through alarms",
      "Losing arguments on purpose",
    ],
    answer: 1,
  },
  {
    question:
      "What has Abbas's photo skill been officially classified as?",
    options: [
      "Professional model",
      "Ruining perfect poses",
      "Camera-shy",
      "Photographer of the year",
    ],
    answer: 1,
  },
  {
    question:
      "What suspicious activity was detected during the investigation?",
    options: [
      "Too much sleeping",
      "Excessive eating",
      "Fart activity",
      "Running away from Arwa",
    ],
    answer: 2,
  },
];

const Quiz = ({ nextPage }) => {
  const [currentQuestion, setCurrentQuestion] =
    useState(0);

  const [selectedAnswer, setSelectedAnswer] =
    useState(null);

  const current =
    questions[currentQuestion];

  const selectAnswer = (index) => {
    if (selectedAnswer !== null) return;

    setSelectedAnswer(index);

    setTimeout(() => {
      if (
        currentQuestion <
        questions.length - 1
      ) {
        setCurrentQuestion(
          currentQuestion + 1
        );

        setSelectedAnswer(null);
      } else {
        nextPage();
      }
    }, 1000);
  };

  return (
    <section className="mission-page quiz-page">
      <BackgroundEffects />

      <div className="quiz-content">
        <p className="system-label">
          SYSTEM TEST INITIATED
        </p>

        <h1 className="quiz-title">
          LET'S SEE IF YOU KNOW YOUR WIFE WELL
          ENOUGH TO CONTINUE.
        </h1>

        <p className="question-count">
          QUESTION {currentQuestion + 1} /{" "}
          {questions.length}
        </p>

        <h2 className="question-text">
          {current.question}
        </h2>

        <div className="answers">
          {current.options.map(
            (option, index) => {
              const letters = [
                "A",
                "B",
                "C",
                "D",
              ];

              let className =
                "answer-button";

              if (
                selectedAnswer !== null
              ) {
                if (
                  index === current.answer
                ) {
                  className += " correct";
                } else if (
                  index === selectedAnswer
                ) {
                  className += " wrong";
                }
              }

              return (
                <button
                  key={option}
                  className={className}
                  onClick={() =>
                    selectAnswer(index)
                  }
                >
                  {letters[index]}. {option}
                </button>
              );
            }
          )}
        </div>
      </div>
    </section>
  );
};

export default Quiz;