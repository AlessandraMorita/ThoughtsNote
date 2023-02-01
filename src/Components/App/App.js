import React, { useState } from 'react';
import { AddThoughtForm } from '../AddThoughtForm/AddThoughtForm';
import { Thought } from '../Thought/Thought';

function App() {
  const [thoughts, setThoughts] = useState([]);

  const addThought = (thought) => {
    setThoughts((prev) => {
      return [...prev, thought];
    });
  };

  const removeThought = (thoughtIdToRemove) => {
    setThoughts((thoughts) => {
      return thoughts.filter((thought) => {
        return thought.id !== thoughtIdToRemove;
      });
    });
  };

  return (
    <div className="App">
      <header>
        <h1>Passing Thoughts</h1>
        <p>This is a place for your passing thoughts. They'll be removed after 15 seconds.</p>
      </header>
      <main>
        <AddThoughtForm addThought={addThought} />
        <ul className="thoughts">
        {console.log(thoughts)}
          {thoughts.map((thought) => (
            <Thought key={thought.id} thought={thought} removeThought={removeThought} />
          ))}
        </ul>
      </main>
    </div>
  );
}


export default App;
