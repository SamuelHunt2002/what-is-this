import React from "react";
import "./Choices.css";

const Choices = ({ object, choices, checkAnswer }) => {
  const handleChoiceClick = (choice) => {
    const isCorrect = choice === object.name;
    checkAnswer(isCorrect);
  };

  return (
    <div className="choices-container">
      {choices.map((choice, index) => (
        <button key={index} className="choice-button" onClick={() => handleChoiceClick(choice)}>
          {choice}
        </button>
      ))}
    </div>
  );
};

export default Choices;