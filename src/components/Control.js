import React, { useEffect } from 'react'
// import src_mp3 from './../data/testSong.mp3'
/* eslint react/prop-types: 0 */
import { setImageUrl, fetchImages } from '../actions/setImageUrl'
import { connect } from 'react-redux'
/* eslint react/prop-types: 0 */
import { setTimer, clearTimer } from '../actions/setTimer'

let interval

const Control = ({ setImageUrl, setTimer, clearTimer, fetchImages, images }) => {
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
    }, (2000))
    // document.getElementById('audio_player').play()
  }

  const onStop = () => {
    clearTimer()
    clearInterval(interval)
    // document.getElementById('audio_player').pause()
  }

  return (
    <div className="ui">
      <button className="massive positive ui button" onClick={onPlay}>Start</button>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
      <button className="massive negative ui button" onClick={onStop}>Stop</button>
      {/*
          <audio controls id="audio_player">
            <source id="src_mp3" type="audio/mp3" src={src_mp3} />
          </audio>
      */}
    </div>
  )
}

const mapStateToProps = (state) => {
  return {
    imageUrl: state.imageUrl.imageUrl,
    images: state.imageUrl.images
  }
}

export default connect(mapStateToProps, { setImageUrl, setTimer, clearTimer, fetchImages })(Control)
