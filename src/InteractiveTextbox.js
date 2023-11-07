import React, { useState } from 'react';

function InteractiveTextbox() {
  const [text, setText] = useState('');

  const handleTextChange = (e) => {
    setText(e.target.value);
  };

  return (
    <div>
      <input
        type="text"
        value={text}
        onChange={handleTextChange}
        placeholder="Type here..."
      />
      <p>You typed: {text}</p>
    </div>
  );
}

export default InteractiveTextbox;
