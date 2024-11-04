import React, { useState } from 'react';


const NoteForm = ({ onAddNote }) => {
  const [text, setText] = useState('');
  const [color, setColor] = useState('#ffffff');

  const handleSubmit = (e) => {
    e.preventDefault();
    if (text.trim()) {
      onAddNote(text, color);
      setText('');
    }
  };

  return (
    <form onSubmit={handleSubmit}>
      <textarea 
        value={text} 
        onChange={(e) => setText(e.target.value)} 
        placeholder="Bir not yaz..." 
      />
      <input 
        type="color" 
        value={color} 
        onChange={(e) => setColor(e.target.value)} 
      />
      <button type="submit">Ekle</button>
    </form>
  );
};

export default NoteForm;
