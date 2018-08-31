import YTSearch from 'youtube-api-search';

const API_KEY = `AIzaSyC1ORL6Y3zxvLLev6QHUqP8eF1hFbYo1WI`;

YTSearch({ key: API_KEY, term: 'matrix' }, data => {
  console.log(data);

  // videoId - https://www.youtube.com/embed/:videoId
});