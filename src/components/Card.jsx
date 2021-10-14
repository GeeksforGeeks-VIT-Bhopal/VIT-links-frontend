import React from 'react';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';


import "./Card.css";
import { flexbox } from '@mui/system';

const ProfileCard = (props) => {
    console.log("hello")
    return (
        <div>
            <Card sx={{ maxWidth: 345 }} style={{height: 600, marginBottom: 10, marginTop: 10}}>
                <CardMedia
                    component="img"
                    image={props.profilePicture}
                    alt="Profile picture"
                />
                <CardContent>
                    <Typography gutterBottom variant="h5" component="div">
                        {props.name}
                    </Typography>
                    <Typography gutterBottom variant="body1" color="text.secondary">
                        {props.description}
                    </Typography>
                    <Typography gutterBottom variant="body2" color="text.secondary">
                        {props.university + ' ' + props.branch}
                    </Typography>
                    <Typography variant="body2" color="text.secondary">
                        {props.graduationYear}
                    </Typography>
                </CardContent>
                <CardActions style={{display: 'flex', alignItems: 'flex-end', justifyContent: 'center'}}>
                    <a href={"/" + props.githubUsername}>
                        <Button variant="outlined" size="small">Go to {props.githubUsername + "'s"} profile</Button>
                    </a>
                </CardActions>
            </Card>
        </div>
    );
}

export default ProfileCard;