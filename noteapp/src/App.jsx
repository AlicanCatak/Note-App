import React, { useState } from 'react';
import NoteForm from './components/NoteForm';
import NoteList from './components/NoteList';

import './App.css';


const App = () => {
  const [notes, setNotes] = useState([]);
  const [filter, setFilter] = useState('');

  const addNote = (text, color) => {
    setNotes([...notes, { text, color }]);
  };

  const filteredNotes = notes.filter(note => note.text.includes(filter));

  return (
    <div className='app'>
      <div class="loader"></div>
      <h1>Note App</h1>
      <NoteForm onAddNote={addNote} />
      <div>
      <input 
        type="text" 
        placeholder="Notları filtrele" 
        value={filter} 
        onChange={(e) => setFilter(e.target.value)} 
      />
      </div>
      <NoteList notes={filteredNotes} />
    </div>
  );
};

export default App;
