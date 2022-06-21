import type { NextPage } from 'next'
import Head from 'next/head'
import { useState , useEffect} from "react"
import MsgCon from "../../Components/MsgCon"
import {} from "@mui/material"
import PeculiarDate from "peculiar-date"


const DM: NextPage = () => {
  const [users,setUsers]:Array<object> = useState([]);
  const [user,setUser]:object= useState({
    name:"Dummy",
    img:"/favicon.ico"
  });
  const [messages,setMessages]:object[] = useState([]);
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
        <title>DM</title>
        <meta name="description" content=".." />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <div className="h-[78vh]">
    <MsgCon messages={messages}/>
    </div>
    </div>
  )
}

export default DM;



