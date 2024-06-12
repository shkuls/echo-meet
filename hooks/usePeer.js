import React from "react";
import { useState, useEffect } from "react";

export default function usePeer() {
    
    const [peer, setPeer] = useState(null);
    const [myId, setMyId] = useState(null);
    let mounted = true;
    useEffect(() => {
      if(mounted){
            (async function initPeer() {
              const myPeer = new (await import("peerjs")).default();
              setPeer(myPeer);
              myPeer.on("open", (id) => {
                setMyId(id);
                console.log("peer ", id);
              });
            })();

        }
    
      return () => mounted = false;
    }
  , []);
  return {peer, myId}
}
