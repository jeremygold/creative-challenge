import React, { useState } from 'react';
import inspirations from './inspirations.json';

const App: React.FC = () => {
  const [challenges, setChallenges] = useState(getRandomChallenges());

  function getRandomInt(max: number) {
    return Math.floor(Math.random() * max);
  }

  function getRandomChallenges() {
    const len = inspirations.list.length;
    const randomChallenges = [];
    for (let i = 0; i < 3; i++) {
      randomChallenges.push(inspirations.list[getRandomInt(len)]);
    }
    return randomChallenges;
  }

  return (
    <div className="app-container">
      <h1>Creative Challenge</h1>
      <div className="challenge-list">
        {challenges.map((challenge, index) => (
          <div key={index} className="challenge-item">{challenge}</div>
        ))}
      </div>
      <button className="refresh-button" onClick={() => setChallenges(getRandomChallenges())}>Refresh</button>
    </div>
  );
};

export default App;
