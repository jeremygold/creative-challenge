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
    <div>
      <h1>Creative Challenge</h1>
      <ul>
        {challenges.map((challenge, index) => (
          <li key={index}>{challenge}</li>
        ))}
      </ul>
      <button onClick={() => setChallenges(getRandomChallenges())}>Refresh</button>
    </div>
  );
};

export default App;
