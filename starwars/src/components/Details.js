import React, { useState, useEffect } from "react";
import { BASE_URL, CHARACTER_KEY } from './constants/index';
import axios from 'axios';

export default function Details(props) {
    const {characterId, close } = props
    const [details, setDetails] = useState(null)

useEffect(() => {
    axios.get(`${BASE_URL}${CHARACTER_KEY}${characterId}`)
      .then(res => { setDetails(res.data) })
      .catch(err => { console.log('Character API Error' + err)}) 
  }, [characterId])


return (
    <div alert={props.alert} className="container">
        <h2>Details:</h2>
        {
            details &&
            <>
            <span><img alt ={details.name} src={details.image}/></span>
            <p>{details.name} is {details.age} and {details.status}</p>
            <p>Species: {details.species}</p>
            {/* <span><p>Origin:</p> <a href={details.origin.url}>{details.orgin.name}</a></span> */}
            <h3>Episodes</h3>
            <ul>
                {
                    details.episode.map((episode) => <li>{episode}</li>)
                }
            </ul>
            </>
        }
        <button onClick={close}>Close</button>
    </div>

    )
}
