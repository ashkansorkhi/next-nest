import Typography from '@mui/material/Typography';
import { LoremIpsum } from 'react-lorem-ipsum';





export default function Footer(){
    return (<>
            <Typography gutterBottom variant="h5" component="div" style={{marginLeft:"10px", marginTop:"5px"}}>
         Contact
      </Typography> 
         <Typography variant="body2" color="text.secondary" style={{marginLeft:"15px", marginTop:"5px" , width: "500px"}}>
         <LoremIpsum p={1} />
         </Typography> 
    </>  
    )
}