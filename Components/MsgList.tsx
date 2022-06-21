import {
  Typography,
  Card,
  Container,
  Box
} from "@mui/material"
import MsgListItem from "./MsgListItem"

const MsgList = ({messages}) =>{
  return (
    <Container className="h-full bg-blue-800 w-full">
    <Box>
    <Typography variant="h1">
    Chats 
    </Typography>
    </Box>
    <Card className="bg-blue-700 w-full p-2">
    {
      messages.map(mess=><MsgListItem message={mess}/>)
    }
    </Card>
    </Container>
    )
}

export default MsgList



