import {
  Container,
  Typography,
  Badge
} from "@mui/material"


const MsgListItem = ({message}) =>{
  return (
    <Container className="flex p-1 my-2 justify-evenly align-center w-full">
    <figure className="p-4 grow-1">
    <img src={message.user.img} className="w-12 h-12"/>
    </figure>
    <div className="grow-[3] p-2">
    <Typography variant="h3">
    {message.user.name}
    </Typography>
    <Typography variant="body1">
    {message.message.substring(0,19)}...
    </Typography>
    </div>
    <div className="grow-0">
    <div>
    {message.timeSent}
    </div>
    <div className="p-4">
    {message.opened ? "": (
    <Badge badgeContent={message.unread} color="primary"/>
    )}
    </div>
    </div>
    </Container>
    )
}


export default MsgListItem;