import React, { useState } from 'react';
import './App.css';
import {Notify} from './component/notify/notify';

function App() {
  const [userResponded, setUserResponded] = useState(false); 

  function notifyUser() {
    const notificationText = "thank you....";
    if(!("Notification" in window)) {
        alert("Browser not able");
    } else if(Notification.permission === "granted") {
        const notification = new Notification(notificationText)
    } else if(Notification.permission !== "denied") {
        Notification.requestPermission().then((permission) =>{
            if(permission === "granted") {
                const notification = new Notification(notificationText)
            }
        })
    }
  };

  function enableNotifsAndClose() {
    notifyUser();
    // setUserResponded(true);
  }

  function disableNotifsAndClose() {
    return "Hello";
  }
  return (!(userResponded) && !(Notification.permission === "granted")) ? (
    <div className="App-background">
      <header className="App-header">
         Web Notification
      </header>
      <div className='App-Text'>
        <p >
          <br />
          Sample Notification Application (Need a Buttonpress) :
          <br />
            <button type="button" onClick={enableNotifsAndClose}>Enable Notification</button>
          <br /> 
          <br />
            <button type="button" onClick={disableNotifsAndClose}>Disable Notification</button>
        </p>
        <Notify />
      </div>
    </div>
  ) : (Notification.permission === "granted") ? (
    <div>
      <p>Got Here</p>
    </div>
  ) : <></>;
}

export default App;
