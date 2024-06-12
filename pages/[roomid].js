import React from 'react'
import useStream from '@/hooks/useStream';
import { useSocket } from "@/context/socket";
import usePeer from "@/hooks/usePeer";
import Player from '@/components/Player';

export default function Room() {
    const socket  = useSocket();
  const {peer, myId} = usePeer();
  const stream = useStream();
  
  return (
    <div>
        <p>
            hi
        </p>
      <Player playerId={myId} url={stream} muted playing>
    
      </Player>
    </div>
  )
}
