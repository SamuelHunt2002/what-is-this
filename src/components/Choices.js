import React from "react";

const Choices = ({ object, choices, setChoices, checkAnswer }) => {
  const handleClick = (choice) => {
    checkAnswer(choice === object.name);
    setChoices([]);
  };

  return (
    <div>
      {choices.map((choice, index) => (
        <button key={index} onClick={() => handleClick(choice)}>
          {choice}
        </button>
      ))}
    </div>
  );
};

export default Choices;
