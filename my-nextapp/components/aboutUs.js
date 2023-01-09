import Typography from '@mui/material/Typography';
import { LoremIpsum } from 'react-lorem-ipsum';
import MdPhone from '@mui/icons-material/Phone';
import Chip from '@mui/material/Chip';




export default function AboutUs(){
    return (<>
            <Typography gutterBottom variant="h5" component="div">
         About us
      </Typography> 
         <Typography variant="body2" color="text.secondary">
         <LoremIpsum p={1} />
         </Typography> 
         <Chip icon={<MdPhone />} label="Call me" />
    </>  
    )
}