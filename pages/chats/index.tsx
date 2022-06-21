import type { NextPage } from 'next'
import Head from 'next/head'
import { useState , useEffect} from "react"
import MsgList from "../../Components/MsgList"
import {} from "@mui/material"
import PeculiarDate from "peculiar-date"


const Chats: NextPage = () => {
  const [users,setUsers]:Array<object> = useState([]);
  const [user,setUser]:object= useState({
    name:"Dummy",
    img:"/favicon.ico"
  });
  const [messages,setMessages]:object[] = useState([]);
  console.log(Array.isArray(users))
  console.log(Array.isArray(messages))
  useEffect(()=>{
  setMessages([
    {
      opened:false,
      timeSent:PeculiarDate.getTime,
      user,
      message:"Dummy message",
      unread:1
    },
    {
      opened:false,
      timeSent:PeculiarDate.getTime,
      user,
      message:"Dummy message",
      unread:1
    }
    ])
    },[])
  return (
    <div>
      <Head>
        <title>Chats</title>
        <meta name="description" content=".." />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <div className="h-[78vh]">
    <MsgList messages={messages}/>
    </div>
    </div>
  )
}

export default Chats;



