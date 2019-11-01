import axios from "axios"

const KEY = 'AIzaSyCH0aP8d36tsn-wkHfo6T4O01D6273oMcM'

export default axios.create({
  baseURL: 'https://www.googleapis.com/youtube/v3'
})
