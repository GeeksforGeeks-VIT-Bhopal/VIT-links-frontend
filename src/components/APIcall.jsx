import React, {useState, useEffect} from 'react';
import sampleData from "../data/sampleData.json"
import axios from 'axios';

function APIcall(){
    const [allPeople, setAllPeople] = useState([]);

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
        <div>
            {allPeople.map((person) => (
                <p>{person.name}</p>
            ))}
        </div>
    );
}

export default APIcall;