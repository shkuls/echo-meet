import React from 'react'
import ReactPlayer from 'react-player'

export default function Player({props}) {
    const {playerID ,  url , muted, playing} ={ props}

  return (
    <div>
    <ReactPlayer key={playerID} url={url} muted={muted} playing={playing}/>

    </div>
  )
}
