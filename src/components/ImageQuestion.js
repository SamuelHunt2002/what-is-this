import React, { useState, useEffect } from "react";
import axios from "axios";
import "./ImageQuestion.css";

const ImageQuestion = ({ object, setObject, objects, setObjects }) => {
  useEffect(() => {
    const fetchObjects = async () => {
      const response = await axios.get("/greek_objects.json");
      setObjects(response.data);
    };

    fetchObjects();
  }, [setObjects]);

  useEffect(() => {
    if (objects.length > 0) {
      const randomObject = objects[Math.floor(Math.random() * objects.length)];
      setObject(randomObject);
    }
  }, [objects, setObject]);

  return (
    <div className="image-container">
      {object && (
        <img src={object.imageUrl} alt="Greek object" className="greek-object-image" />
      )}
    </div>
  );
};

export default ImageQuestion;
