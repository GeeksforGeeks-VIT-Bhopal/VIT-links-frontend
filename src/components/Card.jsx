import React from 'react'

export default function Card(props) {
    return (
        <div>
            <div className="card">
                <img src = {props.profilePicture} className="img" alt={props.name + "'s profile picture"} />
                <h2 className="name">{props.name}</h2>
                <em>{props.description}</em>
                <p>{props.university + ' ' + props.branch}</p>
                <p>{props.graduationYear}</p>
            </div>
        </div>
    );
}
