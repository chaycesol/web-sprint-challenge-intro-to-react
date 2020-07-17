import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { BASE_URL, CHARACTER_KEY } from './components/constants';
import './App.css';
import Details from './components/Details'

const App = () => {
  // Try to think through what state you'll need for this app before starting. Then build out
  // the state properties here.
const [character, setCharacter] = useState([])
const [currentCharacterId, setCurrentCharacterId] = useState('1')
  
const openDetails = id => {
  setCharacter(id)
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
    setCharacter(res.results.data)
    console.log(res)
  })
  .catch(err => {
    console.log('Character API Error' + err)
  })
}, []);

const Character = ({ info }) => (
  <div className='characterList'>
    {info.name}
    <button onClick={() => openDetails(info.id)}>
      See Details</button>
  </div>
)
  return (
    <div className="App">
      <h1 className="Header">Rick and Morty!</h1>
      {
        character.map(person => {
          return <Character key={person.id} info={person} />
        })
      }
      {
        currentCharacterId && <Details alert={currentCharacterId} characterId={currentCharacterId} close={closeDetails} />
      }
    </div>
  );
}

export default App;
