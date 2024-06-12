import { Server } from "socket.io";

const SocketHandler = ( req , res) =>{

    if(res.socket.server.io)
        {console.log("server already running")
        }
    else
 {
    const io = new Server(res.socket.server)
    res.socket.server.io = io
    io.on("connection" , (socket) =>{

    console.log("server is connected 1")
    
    })
}
    res.end();
}

export default SocketHandler;