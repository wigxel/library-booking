import React from 'react';
import AddBook from './components/AddBook'
import './App.css';

function App() {
  return (
    <div className='container' >
      <AddBook onSubmit={(data) => console.log('Data was submited', data)}/>
    </div>
  );
}

export default App;
