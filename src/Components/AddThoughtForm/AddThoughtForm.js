import React, {useState} from 'react';
import { generateId, getNewExpirationTime } from '../utilities/utilities';

export function AddThoughtForm(props) {
  const [inputText, setInputText] = useState('');

  const handleTextChange = ({target}) => {
    setInputText(target.value);
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    if(!inputText) {
      return;
    }
    let newThought = {
      id: generateId(),
      text: inputText,
      expiresAt: getNewExpirationTime()
    };
    props.addThought(newThought);
    setInputText('');
  };

  return (
    <form className="AddThoughtForm" onSubmit={handleSubmit} >
      <input
        type="text"
        aria-label="What's on your mind?"
        placeholder="What's on your mind?"
        onChange={handleTextChange}
        value={inputText}
      />
      <input type="submit" value="Add" />
    </form>
  );
}