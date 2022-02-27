import './App.scss';
import React from 'react';
import Nav from './components/Nav/Nav';
import VideoHero from './components/VideoHero/VideoHero';
import VideoArticle from './components/VideoArticle/VideoArticle.js';
import VideoList from './components/VideoList/VideoList';
import videosData from './data/videos.json';
import videoDetailsData from './data/video-details.json';


class App extends React.Component {

  // Set State to default the 1st video in the videosData array
  state = {
    activeVideo: videoDetailsData[0]
  }

  //Function handleVideoChange will handle change/set State of active video to the clicked video from VideoList component

  handleVideoChange = (clickedVideo) =>
    this.setState({
      activeVideo: clickedVideo
    })

  render() {
    // Fitler out the active video by using id from videosData array before passing into VideoList component
    const filteredVideos = videosData.filter(video => video.id !== this.state.activeVideo.id)

    return (
      <>
        <Nav/>

        <VideoHero
          activeVideo={this.state.activeVideo}/>

        <VideoArticle
          activeVideo={this.state.activeVideo}/>

        <VideoList
          filteredVideos={filteredVideos}
          handleVideoChange={this.handleVideoChange} />
      </>
    );
  }
}

export default App;
