import {
  Card,
  Typography,
  Button
} from "@mui/material"



const  Navbar = () =>{
  return (
    <Card raised={true} className="flex align-center justify-between bg-blue-900">
    <div>
    <Typography variant="h2">
    Peculiar Chat
    </Typography>
    </div>
    <div className="flex align-center justify-center">
    <Typography variant="h3" className="">
   <Button variant="contained" className="bg-blue-900"> Chat</Button>
</Typography>
    <Typography variant="h3" className="">
   <Button variant="contained" className="bg-blue-900"> Groups</Button>
</Typography>
    <Typography variant="h3" className="">
    <Button variant="contained" className="bg-blue-900">Story</Button>
</Typography>
    </div>
    </Card>
    )
}

export default Navbar;