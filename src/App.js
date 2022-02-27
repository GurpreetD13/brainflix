import './App.scss';
import React from 'react';
import Nav from './components/Nav/Nav';
import VideoHero from './components/VideoHero/VideoHero';
import VideoArticle from './components/VideoArticle/VideoArticle.js';
import VideoList from './components/VideoList/VideoList';
import videosData from './data/videos.json';
import videoDetailsData from './data/video-details.json';


class App extends React.Component {

  //set state to default the 1st video in the videosData array
  state = {
    activeVideo: videosData[0]
  }


  render() {
    // fitler out the active video before passing into VideoList by using id
    const filteredVideos = videoDetailsData.filter(video => video.id !== this.state.activeVideo.id)

    return (
      <>
        <Nav />
        <VideoHero    activeVideo={this.state.activeVideo} />
        <VideoArticle activeVideo={this.state.activeVideo} />
        <VideoList filteredVideos={filteredVideos} 
        />
      </>
    );
  }
}

export default App;
