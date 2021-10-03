import React, {useState, useEffect} from 'react';
import sampleData from "../data/sampleData.json"
import axios from 'axios';
import Card from './Card';

function APIcall(){
    const [allPeople, setAllPeople] = useState(sampleData);

    useEffect(() => {
        async function fetchData(){
            await axios
                .get("http://localhost:3001/")
                .then((response) => setAllPeople(response.data))
                .then(console.log("hiii"))
                .catch((error) => {
                    console.log('Home useEffect', error)
                    alert('An error occurred please try again later.')
                });
        }
        fetchData();
    }, []);

    return(
        <div className="cardWrapper">
            {allPeople.map((person) => (
                <Card
                    name={person.name}
                    key={person.profilePicture}
                    profilePicture={person.profilePicture}
                    description={person.description}
                    university={person.university}
                    branch={person.branch}
                    graduationYear={person.graduationYear} />
            ))}
        </div>
    );
}

export default APIcall;