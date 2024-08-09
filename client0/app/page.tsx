'use client';
import { Button } from '@/components/ui/button'
import { Input } from '@/components/ui/input'
import React, { useState } from 'react'
import { v4 as uuid } from "uuid";
import toast from "react-hot-toast";
import { useRouter } from 'next/navigation';

const Page = () => {
  const router = useRouter();
  const [roomId, setRoomId] = useState("");
  const [username, setUsername] = useState("");


  const generateRoomId = (e: { preventDefault: () => void; }) => {
    e.preventDefault();
    const Id = uuid();
    setRoomId(Id);
    toast.success("Room Id is generated");
  };


  const joinRoom = () => {
    if (!roomId || !username) {
      toast.error("Both the field is requried");
      return;
    }

    // redirect
    router.push(`/editor?roomId=${roomId}&username=${encodeURIComponent(username)}`);
    toast.success("room is created");
  };

  // when enter then also join
  const handleInputEnter = (e: { code: string; }) => {
    if (e.code === "Enter") {
      joinRoom();
    }
  };

  return (
    <div className='flex justify-center items-center w-full h-full'>
      <div className='flex flex-col justify-center items-center w-full max-w-[600px] gap-3 m-3 p-5 border rounded-xl text-center bg-slate-700/5 shadow'>
        <div className='text-xl'>LOGO</div>
        <div className='text-3xl my-2'>Enter the Room Id</div>
        <Input placeholder='Room Id' value={roomId} onChange={(e) => setRoomId(e.target.value)} onKeyUp={handleInputEnter} />
        <Input placeholder='Username' value={username} onChange={(e) => setUsername(e.target.value)} onKeyUp={handleInputEnter} />
        <Button onClick={joinRoom}>Join</Button>
        <div className='flex flex-row items-center justify-center'>
          <p>Don't have a room ?</p>
          <Button variant="link" onClick={generateRoomId}>new room</Button>
        </div>
      </div>
    </div>
  )
}

export default Page