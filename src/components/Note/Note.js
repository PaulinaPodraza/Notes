import React from 'react';
import './Note.scss';
import { Link} from 'react-router-dom';


function Note(props) {
  return (
    <div className="note" >
      <p className="date">
        <Link to="/:id">{props.date}</Link>
      </p>
      <div className="description">{props.body}</div>
      <button className="delete" onClick={() => props.onDelete(props.id)}>usuń</button>
    </div>
  );
}

export default Note;