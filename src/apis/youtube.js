import axios from 'axios';

const KEY = 'AIzaSyANoOQ1DSALlagcXLOpoxw8vRF9XU2ceUg';

export default axios.create({
    baseURL: 'https://www.googleapis.com/youtube/v3',
    params: {
      part: 'snippet', 
      type: 'video',
      maxResults: 5,
      key: KEY
  }
});