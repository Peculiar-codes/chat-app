import {
  Card,
  Typography,
  Button
} from "@mui/material"



const  Navbar = () =>{
  return (
    <Card raised={true} className="flex align-center justify-between bg-blue-900">
    <div>
    <Typography variant="h3">
    Peculiar Chat
    </Typography>
    </div>
    <div className="flex align-center justify-center">
   <Button variant="contained" className="bg-blue-900"> 
    <Typography variant="h4" className="">
   Chat
</Typography>
</Button>
   <Button variant="contained" className="bg-blue-900">
    <Typography variant="h4" className="">
   Groups
</Typography>
</Button>
    <Button variant="contained" className="bg-blue-900">
    <Typography variant="h4" className="">
    Story
</Typography>
</Button>
    </div>
    </Card>
    )
}

export default Navbar;