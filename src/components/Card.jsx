import React from 'react';
import "./Card.css";

export default function Card(props) {
    console.log("hello")
    return (
        <div className="card" tabindex="1">
            <a href={"/" + props.githubUsername}>
                <img src = {props.profilePicture} className="img" alt={props.name + "'s profile picture"} />
                <h2 className="name">{props.name}</h2>
                <em>{props.description}</em>
                <p>{props.university + ' ' + props.branch}</p>
                <p>{props.graduationYear}</p>
                <a href={"/" + props.githubUsername}>
                    <button>Go to {props.githubUsername + "'s"} profile</button>
                </a>
            </a>
        </div>
    );
}
