import React from "react";

const Score = ({ score, total }) => {
  return (
    <div>
      <h2>
        Score: {score} / {total}
      </h2>
    </div>
  );
};

export default Score;
