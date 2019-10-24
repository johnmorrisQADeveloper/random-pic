import React from 'react'
import src_mp3 from './../data/testSong.mp3'
import { setImageUrl } from '../actions/setImageUrl';

import { connect } from 'react-redux'
import { setTimer, clearTimer } from '../actions/setTimer';
let interval
const Audio = ({ setImageUrl, setTimer, clearTimer }) => {
  const onPlay = () => {
    setTimer()
    interval = setInterval(() => {
      setImageUrl()
    }, (5000 + Math.floor(Math.random() * 500) + 200))
  }
  const onPause = () => {
    clearTimer()
    clearInterval(interval)
  }
  return (
    <div>
      <audio onPause={onPause} onPlay={onPlay} controls id="audio_player">
        <source id="src_mp3" type="audio/mp3" src={src_mp3} />
      </audio>
    </div>
  )
}

const mapStateToProps = (state) => {
  return {
    imageUrl: state.imageUrl.imageUrl
  }
}

export default connect(mapStateToProps, { setImageUrl, setTimer, clearTimer })(Audio)
