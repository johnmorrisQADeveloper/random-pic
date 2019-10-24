import React from 'react'
import src_mp3 from './../data/testSong.mp3'
import { setImageUrl } from '../actions/setImageUrl';
import { connect } from 'react-redux'

const Audio = ({ imageUrl, setImageUrl }) => {
  const onPlay = () => {
    setInterval(() => {
      setImageUrl()
    }, 5000);

  }
  return (
    <div>
      <audio onPlay={onPlay} controls id="audio_player">
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

export default connect(mapStateToProps, { setImageUrl })(Audio)
