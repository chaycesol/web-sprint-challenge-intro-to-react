import React, { useState, useEffect } from "react";
import { BASE_URL, CHARACTER_KEY } from '../constants/index';
import axios from 'axios';
import styled from 'styled-components'

const StyledCharacter = styled.div`
background-color: black;
color: white;
`

export default function Character (props) {
    const {keyId, close } = props
    const [details, setDetails] = useState('')

useEffect(() => {
    axios.get(`${BASE_URL}${CHARACTER_KEY}${keyId}`)
      .then(res => { 
          setDetails(res.data)
          console.log(res)
        })
      .catch(err => { 
          console.log(`Error on Character Details:` + err) 
        }) 
  }, [keyId])


return (
    <StyledCharacter alert={props.alert} className="container">
        <h2>Details:</h2>
        {
            details &&
    
            <>
                <span><img alt ={details.name} src={details.image}/></span>
                <p>{details.name} is {details.age} and {details.status}</p>
                <p>Species: {details.species}</p>
                <span>Origin: <a href={details.origin.url}>{details.origin.name}</a></span>
                {/* <h3>Episodes</h3> */}
            {/* <ul>
                
                    details.episode.map((episode) => <li>{episode}</li>)
                }
            </ul>
             */}
             </>
        }
        <button onClick={close}>Close</button>
    </StyledCharacter>

    )
}