import React, { useState, useEffect } from 'react';
import { BASE_URL, CHARACTER_KEY, LOCATION_KEY, EPISODE_KEY } from './components/constants';
import axios from 'axios';
import './App.css';

const App = () => {
  // Try to think through what state you'll need for this app before starting. Then build out
  // the state properties here.
const [character, setCharacter] = useState({})
  // Fetch characters from the API in an effect hook. Remember, anytime you have a 
  // side effect in a component, you want to think about which state and/or props it should
  // sync up with, if any.
useEffect(() => {
  axios.get(`${BASE_URL}${CHARACTER_KEY}`)
  .then( res => {
    setCharacter(res.data)
    console.log(res)
  })
  .catch(err => {
    console.log('Character API Error' + err)
  })
}, []);
  return (
    <div className="App">
      <h1 className="Header">Characters</h1>
    </div>
  );
}

export default App;
