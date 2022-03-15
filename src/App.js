import React from 'react';
import './App.scss';
import Notes from './components/Notes/Notes';
import {Route, Routes} from 'react-router-dom';
import Note from './components/Note/Note';

function App() {
  return(
    <div className='app'>
      <p className='app-header'>Notatnik</p>
      <Routes>
        <Route path="/" element={<Notes />}/>
        <Route path="/note/:id" element={<Note />}></Route>
      </Routes>
    </div>
  );
}

export default App;
