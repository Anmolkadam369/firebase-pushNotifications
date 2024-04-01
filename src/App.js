import { useEffect } from 'react';
import './App.css';
import { getToken } from 'firebase/messaging';
import { messaging } from './firebase';

function App() {

    async function requestPermission() {
       const permission = await Notification.requestPermission();
       if(permission === 'granted'){
        const token = await getToken(messaging, {vapidKey :'BCSLSM0MqLiL4BjJrDEhYf6z8MlsxHkbGDRZjmtrdsbt352tsRknucbpSYRDQF2jGrd2zvQNnpqsBLcoVY7XyKg'} );
        console.log("generated token=", token);
       }
       else if (permission === 'denied') alert('Notification permission denied.');
    }   
 
    useEffect(()=>{
      requestPermission(); 
    },[]);

  return (
    <div className="App">
      <h1>Hello World</h1>
    </div>
  );
}

export default App;
