import React, { useEffect , useState } from 'react'

export default function useStream() {
    const [stream , setStream] = useState(null)
    var streamSet = false;
  useEffect ( ()=>{
    (async function initStream(){
        if(!streamSet){

            try{
                const stream = await navigator.mediaDevices.getUserMedia({
                    audio : true , 
                     video : true ,
                })
                console.log("setting up stream")
                setStream(stream)
            }
            catch{(e)=>{
                console.log("err in navigator " ,e )
            }}

        }
        
    })();
    return (streamSet) =>{
        streamSet = true
    }
  } , [])
  return stream
}
