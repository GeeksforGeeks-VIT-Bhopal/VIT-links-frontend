import React, { useState, useEffect } from 'react';
import axios from 'axios';
import Card from './Card';
import sampleData from "../data/sampleData.json"

function APIcall() {
    const [allPeople, setAllPeople] = useState(sampleData);

    useEffect(() => {
        async function fetchData() {
            await axios
                .get("https://vit-links-backend.herokuapp.com/")
                .then((response) => setAllPeople(response.data))
                .then(console.log("hiii"))
                .catch((error) => {
                    console.log('Home useEffect', error)
                    alert('An error occurred please try again later.')
                });
        }
        fetchData();
    }, []);

    return (
        <div className="cardWrapper">
            {allPeople.map((person) => (
                <>
                    <Card
                        name={person.name}
                        githubUsername={person.githubUsername}
                        key={person.profilePicture}
                        profilePicture={person.profilePicture}
                        description={person.description}
                        university={person.university}
                        branch={person.branch}
                        graduationYear={person.graduationYear} />
                </>
            ))}
        </div>
    );
}

export default APIcall;