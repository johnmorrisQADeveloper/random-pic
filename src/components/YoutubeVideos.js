import React, { useState } from 'react'
import youtube from '../apis/youtube'

const KEY = 'AIzaSyCH0aP8d36tsn-wkHfo6T4O01D6273oMcM'

const YoutubeVideos = () => {
  const [video, setVideo] = useState('tap4XLjzsoo')
  const [search, setSearch] = useState('')

  const onInputChange = (event) => {
    setSearch(event.target.value)
  }

  const onFormSubmit = async (event) => {
    console.log(video)

    event.preventDefault()
    const response = await youtube.get('/search', {
      params: {
        q: search,
        part: 'snippet',
        maxResults: 1,
        key: KEY
      }
    })
    setVideo(response.data.items[0].id.videoId)
  }

  return (
    <form onSubmit={onFormSubmit} className="ui form massive">
      <div className="ui two column grid">
        <div className="row">
          <div className='column'>
            <input value={search} className="ui input" onChange={onInputChange} type="text" placeholder="Search music..." />
          </div>
          <iframe title={video} className='massive' width="100" height="65" src={`https://www.youtube.com/embed/${video}`} allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowFullScreen></iframe>
        </div>
      </div>
    </form>
  )
}

export default YoutubeVideos
