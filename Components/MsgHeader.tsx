import {
  Paper,
  Typography
} from "@mui/material"

const MsgHeader = ({user}) =>{
  return(
    <Paper className="flex justify-evenly align-center">
    <figure>
    <img src="" className="h-6 w-6" />
    </figure>
    <div className="flex-3">
    <div>
    <Typography variant="h3">
    {user.name}
    </Typography>
    <Typography variant="b"
    </div>
    </div>
    </Paper>
    )
}
export default MsgHeader;