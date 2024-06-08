import { io } from  "socket.io-client";
import { useState , useEffect , createContext, useContext} from "react";

const SocketContext = createContext(null)

export const useSocket =()=>{
    const socket = useContext(SocketContext);
    return socket;
}

export const SocketProvider = ({children}) =>{

    const [socket , setSocket] = useState(null);
    useEffect(()=>{
        const connection = io()
        setSocket(connection);
    } , [])

    socket?.on("connect_error" , async (err) =>{
        console.log("Error establishing Scoket" , err)
        await fetch('api/socket')
        })
    

    

    return(
        <SocketContext.Provider value={{socket}}>
                {children}
        </SocketContext.Provider>
    )
}