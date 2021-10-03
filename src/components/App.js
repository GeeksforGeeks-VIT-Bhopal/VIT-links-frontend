import React, {useState, useEffect} from 'react';
import axios from 'axios';
import Card from './Card';
import APIcall from './APIcall';
import sampleData from "../data/sampleData.json"
import "./styles.css";

function App(){
    const [people, setPeople] = useState(sampleData);

    return(
        <div>
            <APIcall />
            <div className="cardWrapper">
                {people.map((person) => (
                    <Card name={person.name}
                    profilePicture={person.profilePicture}
                    description={person.description}
                    university={person.university}
                    branch={person.branch}
                    graduationYear={person.graduationYear} />
                ))}
            </div>
        </div>
    );
}

export default App;