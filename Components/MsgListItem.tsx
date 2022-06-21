import {
  Container,
  Typography,
  Badge
} from "@mui/material"


const MsgListItem = ({message}) =>{
  return (
    <Container className="flex p-1 my-2 justify-evenly">
    <figure className="flex align-center mx-2">
    <img src={message.user.img} className="w-12 h-12"/>
    </figure>
    <div className="grow-[3]">
    <Typography variant="h3">
    {message.user.name}
    </Typography>
    <Typography variant="body1">
    {message.message}
    </Typography>
    </div>
    <div className="grow-0">
    <div>
    {message.timeSent}
    </div>
    <div>
    {message.opened ? "": (
    <Badge badgeContent={message.unread} color="primary"/>
    )}
    </div>
    </div>
    </Container>
    )
}


export default MsgListItem;