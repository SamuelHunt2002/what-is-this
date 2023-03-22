import React, { useState, useEffect } from "react";
import axios from "axios";

const ImageQuestion = ({ setObject }) => {
  const [objects, setObjects] = useState([]);

  useEffect(() => {
    const fetchObjects = async () => {
      const response = await axios.get("/greek_objects.json");
      setObjects(response.data);
    };

    fetchObjects();
  }, []);

  useEffect(() => {
    if (objects.length > 0) {
      const randomObject = objects[Math.floor(Math.random() * objects.length)];
      setObject(randomObject);
    }
  }, [objects, setObject]);

  return (
    <div>
      {objects.length > 0 && (
        <img src={objects.imageUrl} alt="Greek object" style={{ width: "100%" }} />
      )}
    </div>
  );
};

export default ImageQuestion;
