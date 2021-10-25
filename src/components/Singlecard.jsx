import React, { useState, useEffect } from 'react';
import axios from 'axios';
import {useParams} from "react-router-dom";
import sampleSingleData from "../data/sampleSingleData.json"
import "./Singlecard.css";


export default function Singlecard() {
    var [state, setState] = useState(sampleSingleData);
    const params = useParams();
    const URL = "https://vit-links-backend.herokuapp.com/" + params.username;
    useEffect(() => {
        async function fetchData() {
            await axios
                .get(URL)
                .then((response) => setState(response.data))
                .then(console.log("hiii"))
                .catch((error) => {
                    console.log('Home useEffect', error)
                    alert('An error occurred please try again later.')
                });
        }
        fetchData();
    }, [URL]);

    return (
        <div>
          
           <img id="dp" src={state.profilePicture} />
            <br />
           <h1 id="name"> {state.name}</h1>
            <br />    
            <p id="desc">{state.description}</p>
            
            <p id="univ"><i id="univicon" class="fas fa-graduation-cap"></i>{state.university} : {state.branch}</p>
            
           
            <p id="univ">Will be completing graduation in {state.graduationYear}</p>
            
            <p id="univ">GitHub Username : {state.githubUsername}</p>
            <br />
            {state.links.map((link) => (
                <div id="butn">
                  <a href={link.url}> <button  id="butn" type="button" class="btn btn-outline-primary">{link.name}</button></a>

                    
                    <br />
                </div>
            ))}
        </div>
    )
}
