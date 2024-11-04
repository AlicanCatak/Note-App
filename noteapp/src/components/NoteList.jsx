import React from 'react';


const NoteList = ({ notes }) => {
  return (
    <div>
      {notes.map((note, index) => (
        <div key={index} style={{ backgroundColor: note.color }}>
          {note.text}
        </div>
      ))}
    </div>
  );
};

export default NoteList;
