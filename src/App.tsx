import React from 'react';
import './App.css';
import Header from './components/header';
import BookCard from './components/bookCard';

function App() {
  return (
    <div className='flex flex-col max-w-7xl mx-auto sm:p-10 py-10 px-5 h-screen'>
      <Header/>
      <BookCard/>
    </div>
  );
}

export default App;