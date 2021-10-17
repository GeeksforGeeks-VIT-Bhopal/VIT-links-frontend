import React, { useState, useEffect } from 'react';
import axios from 'axios';
import Box from '@mui/material/Box';
import Grid from '@mui/material/Grid';
import ProfileCard from './Card';
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
        <Box sx={{marginLeft: 10}}>
            <Grid container spacing={1}>
            {allPeople.map((person) => (
                <Grid item xs={12} sm={6} lg={3}>
                    <ProfileCard
                        name={person.name}
                        githubUsername={person.githubUsername}
                        key={person.profilePicture}
                        profilePicture={person.profilePicture}
                        description={person.description}
                        university={person.university}
                        branch={person.branch}
                        graduationYear={person.graduationYear} />
                </Grid>
            ))}
            </Grid>
        </Box>
    );
}

export default APIcall;