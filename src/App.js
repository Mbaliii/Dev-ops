import React, { useState } from 'react';

const TextInput = () => {
  const [text, setText] = useState('');

  const handleInputChange = (event) => {
    setText(event.target.value);
  };

  return (
    <div>
      <div>learn react</div>
      <label htmlFor="textInput">Enter Text: </label>
      <input
        type="text"
        id="textInput"
        value={text}
        onChange={handleInputChange}
        placeholder="Type here..."
      />
      <p>Entered Text: {text}</p>
    </div>
  );
};

export default TextInput;
