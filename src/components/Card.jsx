import React from 'react'

export default function Card(props) {
    console.log("hello")
    return (
        <div className="card" tabindex="1">
            <img src = {props.profilePicture} className="img" alt={props.name + "'s profile picture"} />
            <h2 className="name">{props.name}</h2>
            <em>{props.description}</em>
            <p>{props.university + ' ' + props.branch}</p>
            <p>{props.graduationYear}</p>
            <b>{props.githubUsername}</b>
            <a href={"http://localhost:3001/" + props.githubUsername}>Go to individual profile</a>
        </div>
    );
}
