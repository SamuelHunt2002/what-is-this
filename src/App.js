import React, { useState, useEffect } from "react";
import ImageQuestion from "./components/ImageQuestion";
import Choices from "./components/Choices";
import Score from "./components/Score";

const App = () => {
  const [object, setObject] = useState(null);
  const [objects, setObjects] = useState([]);
  const [choices, setChoices] = useState([]);
  const [score, setScore] = useState(0);
  const [total, setTotal] = useState(0);

  useEffect(() => {
    if (object) {
      const choice1 = object.name;
      const incorrectObjects = objects.filter((obj) => obj.id !== object.id);
      const randomIncorrectObject = incorrectObjects[Math.floor(Math.random() * incorrectObjects.length)];
      const choice2 = randomIncorrectObject.name;
      const shuffledChoices = [choice1, choice2].sort(() => Math.random() - 0.5);
      setChoices(shuffledChoices);
    }
  }, [object, objects]);

  const checkAnswer = (isCorrect) => {
    if (isCorrect) {
      setScore(score + 1);
    }
    setTotal(total + 1);
    
    // Load the next question
    const remainingObjects = objects.filter((obj) => obj.id !== object.id);
    const randomObject = remainingObjects[Math.floor(Math.random() * remainingObjects.length)];
    setObject(randomObject);
  };

  return (
    <div className="App">
      <h1>What is this?!</h1>
      <ImageQuestion object={object} setObject={setObject} objects={objects} setObjects={setObjects} />
      {object && (
        <Choices object={object} choices={choices} setChoices={setChoices} checkAnswer={checkAnswer} />
      )}
      <Score score={score} total={total} />
    </div>
  );
};

export default App;
