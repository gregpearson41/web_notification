import React from 'react';
import './App.css';
import {Notify} from './component/notify/notify';

function App() {
  return (
    <div className="App-background">
      <header className="App-header">
         Web Notification
      </header>
      <div className='App-Text'>
        <p >
          Sample Notification Application (Need a Buttonpress) :
        </p>
        <Notify />
      </div>
    </div>
  );
}

export default App;
