import React from 'react';
import YTsearch from 'youtube-api-search';
import './App.css';

const API_KEY = '';

function App() {
  let [videos, setVideos] = React.useState([]);
  function searchYoutube(term) {
    YTsearch({key: API_KEY, term: 'blackpink'}, (res) => {
      console.log(res);
      setVideos(res);
      console.log(videos);
    });
  }
  return (
    <div className="App">
      <div>
        <input type="button" onClick={searchYoutube} value="Click" ></input>
      </div>


      {/* {videos.map((item) => <img src={item.snippet.thumbnails.medium.url} width="320" height="180"/>)} */}
      {videos.map((item) => <iframe key={item.id.videoId} className="embed-responsive-item" src={'https://www.youtube.com/embed/'+item.id.videoId} width="320" height="180"></iframe>)}
    </div>
  );
}

export default App;
