import React, { useEffect } from 'react'
// import src_mp3 from './../data/testSong.mp3'
import { setImageUrl, fetchImages } from '../actions/setImageUrl';

import { connect } from 'react-redux'
import { setTimer, clearTimer } from '../actions/setTimer';
let interval

const Audio = ({ setImageUrl, setTimer, clearTimer, fetchImages, images }) => {
  useEffect(() => {
    fetchImages()
  }, [])

  useEffect(() => {
    fetchImages()
  }, [images.length < 1])
  const onPlay = () => {
    setTimer()
    interval = setInterval(() => {
      setImageUrl()
    }, (5000))
  }

  const onPause = () => {
    clearTimer()
    clearInterval(interval)
  }

  return (
    <div>
      { /* 
        <audio onPause={onPause} onPlay={onPlay} controls id="audio_player">
        <source id="src_mp3" type="audio/mp3" src={src_mp3} />
        </audio>
        */ }
      <button onClick={onPlay}>Start</button>
      <button onClick={onPause}>Stop</button>
    </div>
  )
}

const mapStateToProps = (state) => {
  return {
    imageUrl: state.imageUrl.imageUrl,
    images: state.imageUrl.images
  }
}

export default connect(mapStateToProps, { setImageUrl, setTimer, clearTimer, fetchImages })(Audio)
