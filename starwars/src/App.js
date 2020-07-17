import React, { useState, useEffect } from 'react';
import Character from './Character';
import axios from 'axios';
import { BASE_URL, CHARACTER_KEY } from './constants';
import './App.css';

const App = () => {
  // Try to think through what state you'll need for this app before starting. Then build out
  // the state properties here.
const [character, setCharacter] = useState([])
const [currentCharacterId, setCurrentCharacterId] = useState('1')

const openDetails = id => {
  setCurrentCharacterId(id)
}

const closeDetails = () => {
  setCurrentCharacterId(null)
}
  // Fetch characters from the API in an effect hook. Remember, anytime you have a 
  // side effect in a component, you want to think about which state and/or props it should
  // sync up with, if any.
useEffect(() => {
  axios.get(`${BASE_URL}${CHARACTER_KEY}`)
  .then( res => {
    setCharacter(res.data.results)
    console.log(res)
  })
  .catch(err => {
    console.log('Character API Error' + err)
  })
}, []);

const CharacterList = ({ info }) => (
  <div className='character'>
    {info.name}
    <button onClick={() => openDetails(info.id)}>
      See details
    </button>
  </div>
)
  return (
    <div className="App">
      <h1 className="Header">Rick and Morty Characters!</h1>
      {
        character.map(person => {
          return <CharacterList key={person.id} info={person} />
        })
      }
      {
        currentCharacterId && <Character alert={currentCharacterId} keyId={currentCharacterId} close={closeDetails} />
      }
    </div>
  );
}

export default App;
