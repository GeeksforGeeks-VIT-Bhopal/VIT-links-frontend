import React, { useState, useEffect } from 'react';
import axios from 'axios';
import {useParams} from "react-router-dom";
import sampleSingleData from "../data/sampleSingleData.json"

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
            {state.name}
            <br />
            {state.description}
            <br />
            {state.university}
            <br />
            {state.branch}
            <br />
            {state.graduationYear}
            <br />
            {state.githubUsername}
            <br />
            {state.links.map((link) => (
                <>
                    <a href={link.url}>{link.name}</a>
                    <br />
                </>
            ))}
        </div>
    )
}
