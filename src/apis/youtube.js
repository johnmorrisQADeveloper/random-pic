import axios from "axios"

const KEY = 'AIzaSyDwKZhX8b1iNQZA2jXaEnolScQM3EwAsVc'

export default axios.create({
  baseURL: 'https://www.googleapis.com/youtube/v3',
  params: {
    part: 'snippet',
    maxResults: 1,
    key: KEY
  }
})
