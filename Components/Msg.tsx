import {} from "@mui/material" 

const Msg = ({ msg , user , time }) =>{
  return(
    <div className={"w-full h-fit flex align-center bg-blue-700 "+( user ? "justify-end":"justify-start" )}>
    <Card raised={true}>
    <div>
    {time}
    </div>
    <div>
    {msg}
    </div>
    </Card>
    </div>
    )
}

export default Msg;