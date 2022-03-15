import React from 'react';
import NewNote from '../NewNote/NewNote';
import Note from '../Note/Note';
import './Notes.scss';

class Notes extends React.Component {
  constructor(props){
    super(props);
    this.state = {
      notes: [
        {
        id: '1',
        body: 'mleko, masło, bułki 6x, ser żółty, sałata, pomidory 3szt., proszek do prania, pasta do zebów,płyn do kąpieli, patyczki do uszu',
        date: '16/2/2022'
      },
        {
        id: '2',
        body: 'przykleić listwy przypodłogowe, zasylikonować umywalkę, powiesić ramki na zdjęcia, wymienić klik-klak w umywalce',
        date: '10/3/2022'
      }
      ]
    };
  }


deleteNote(id) {
  const notes = [...this.state.notes].filter(note => note.id !== id);
  this.setState({notes});
}

addNote(note) {
  const notes = [...this.state.notes];
  notes.push(note);
  this.setState({notes});
}

render(){
    return(
      <div className="notes">
        <NewNote onAdd={(note) => this.addNote(note)}/>
        <p>Ostatnie notatki</p>
        {this.state.notes.map(note => (
          <Note
            key={note.id}
            body={note.body}
            id={note.id}
            date={note.date}
            onDelete={(id) => this.deleteNote(id)}
          />
        ))}
      </div>
    );
  }
}

export default Notes;