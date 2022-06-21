import {
  Typography,
  Card,
  Container,
  Box
} from "@mui/material"
import MsgListItem from "./MsgListItem"

const MsgList = ({messages}) =>{
  return (
    <Container className="h-96 bg-blue-700">
    <Box>
    <Typography variant="h1">
    Chats 
    </Typography>
    </Box>
    <Card className="bg-blue-700">
    {
      messages.map(mess=><MsgListItem message={mess}/>)
    }
    </Card>
    </Container>
    )
}

export default MsgList



