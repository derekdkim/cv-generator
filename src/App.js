import React, { useState } from 'react';
import Form from './components/Form';
import Output from './components/Output';
import './App.css';

function App() {
  const [compositeData, setCompositeData] = useState(null);
  const [formCompleted, setFormCompleted] = useState(false);
  return (
    <div className='App'>
      {formCompleted 
        ? <Output data={compositeData}/> 
        : <Form submitData={setCompositeData} setFormCompleted={setFormCompleted}/>
      }
    </div>
  );
}

export default App;
