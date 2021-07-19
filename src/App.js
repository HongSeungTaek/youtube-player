import React from 'react';
import YTsearch from 'youtube-api-search';
import { Grid } from '@material-ui/core';

import './App.css';

const API_KEY = 'AIzaSyCUnxBF0hQKytax-8Ni15aKl-EvlJsrxsM';

function App() {
  let [videos, setVideos] = React.useState([]);
  let [keyword, setKeyword] = React.useState('');

  function searchYoutube(term) {
    YTsearch({key: API_KEY, term: keyword}, (res) => {
      console.log(res);
      setVideos(res);
      console.log(videos);
    });
  }
  return (
    <div className="App">
      <div>
        <input type="text" value={keyword} onChange={(e)=>{ setKeyword(e.target.value) }}></input>
        <input type="button" onClick={searchYoutube} value="Click" ></input>
      </div>

      
      <Grid container spacing={1}>
      {/* {videos.map((item) => <img src={item.snippet.thumbnails.medium.url} width="320" height="180"/>)} */}
      {videos.map((item) =>
      <>
        <Grid item xs>
          <iframe key={item.id.videoId} className="embed-responsive-item"
                  src={'https://www.youtube.com/embed/'+item.id.videoId}></iframe>
          <div>{item.snippet.title}</div>
        </Grid>
      </>
      )}
      </Grid>
    </div>
  );
}

export default App;
