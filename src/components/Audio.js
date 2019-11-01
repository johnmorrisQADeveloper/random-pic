import React, { useEffect, useState } from 'react'
import src_mp3 from './../data/testSong.mp3'
import { setImageUrl, fetchImages } from '../actions/setImageUrl';

import { connect } from 'react-redux'
import { setTimer, clearTimer } from '../actions/setTimer';
import youtube from '../apis/youtube'
let interval
const KEY = 'AIzaSyCH0aP8d36tsn-wkHfo6T4O01D6273oMcM'

const Audio = ({ setImageUrl, setTimer, clearTimer, fetchImages, images }) => {
  const [search, setSearch] = useState('')
  const [video, setVideo] = useState('')

  const onInputChange = (event) => {
    setSearch(event.target.value)
  }

  const onFormSubmit = async (event) => {
    event.preventDefault()
    const response = await youtube.get('/search', {
      params: {
        q: search,
        part: 'snippet',
        maxResults: 1,
        key: KEY
      }
    })
    setVideo(response.data.items[0].id. videoId)
  }

  useEffect(() => {
    fetchImages()
  }, [fetchImages])

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
      <br />
      <button className="massive positive ui button" onClick={onPlay}>Start</button>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
      <button className="massive negative ui button" onClick={onStop}>Stop</button>
      <br />
      <br />
      <br />
      <br />
      {/* 
          <audio controls id="audio_player">
            <source id="src_mp3" type="audio/mp3" src={src_mp3} />
          </audio>
      */}
      <div className="search-bar ui segment">
        <form onSubmit={onFormSubmit} className="ui form">
          <div className="field">
            <input value={search} className="ui input" onChange={onInputChange} type="text" placeholder="Search music..." />
            <br/><br/>
            <iframe width="250" height="225" src={`https://www.youtube.com/embed/${video}`} allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowFullScreen></iframe>
          </div>
        </form>
      </div>
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
