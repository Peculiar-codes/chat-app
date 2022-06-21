import {
  Paper,
  InputBase
} from "@mui/material"
const MsgIn = ({value{{}}}) =>{
  return (
    <Paper className="rounded-lg flex">
    <InputBase
    className="flex-1" 
    placeholder="Message..." 
    inputProps={{'aria-label':"Message...."}}
    value={value}
    />
    </Paper>
    )
}

export default MsgIn;