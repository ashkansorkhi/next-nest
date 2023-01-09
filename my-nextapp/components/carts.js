import * as React from 'react';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import { LoremIpsum } from 'react-lorem-ipsum';
export default function Cards(props) {
  return (
        <Card sx={{ maxWidth: 345, marginBottom:"100px" }}>
      <CardMedia
        component="img"
        alt=" golden fox"
        height="140"
        image={props.imgSrc}/>
      <CardContent>
        <Typography gutterBottom variant="h5" component="div">
          {props.animalName}
        </Typography>
        <Typography variant="body2" color="text.secondary">
        <LoremIpsum p={1} />
        </Typography>
      </CardContent>
    </Card>
  );
}