import React, {useState} from 'react';
import './NewNote.scss';

function NewNote(props){

  const[desc, setDesc] = useState('');

  const changeDescHandler = event => {
    const value = event.target.value;
    setDesc(value);
  }

  const current = new Date();

  const addNote = () => {
    const note ={
      body: desc,
      date: `${current.getDate()}/${current.getMonth()+1}/${current.getFullYear()}`
    };
    props.onAdd(note);
    setDesc('');
  }

  return(
    <div className="new-note">
      <input 
        type="text" 
        value={desc}
        onChange={changeDescHandler} />
      <button 
        className="add-note" 
        onClick={() => addNote()}> dodaj notatkę
      </button>
    </div>
  );
}

export default NewNote;