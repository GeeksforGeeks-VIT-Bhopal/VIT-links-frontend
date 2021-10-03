import React from 'react'

export default function Card(props) {
    return (
        <div className="card" tabindex="1">
            <img src = {props.profilePicture} className="img" alt={props.name + "'s profile picture"} />
            <h2 className="name">{props.name}</h2>
            <em>{props.description}</em>
            <p>{props.university + ' ' + props.branch}</p>
            <p>{props.graduationYear}</p>
        </div>
    );
}
