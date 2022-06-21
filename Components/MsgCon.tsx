import {
  Card
} from "@mui/material"


const MsgCon = ({children}) =>{
  return (
    <Card className="rounded-lg p-2 bg-blue-700">
    {children}
    </Card>
    )
}





export default MsgCon;