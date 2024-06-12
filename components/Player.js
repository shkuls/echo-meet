import React from 'react'
import ReactPlayer from 'react-player'

export default function Player(props) {
    const {playerID ,  url , muted, playing} ={props}

  return (
    <div>
    <ReactPlayer key={props.id} url={props.url} muted={props.muted} playing={props.playing}/>

    </div>
  )
}
