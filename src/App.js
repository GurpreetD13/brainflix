import './App.scss';
import React from 'react';
import Nav from './components/Nav/Nav';
import VideoHero from './components/VideoHero/VideoHero';
import VideoArticle from './components/VideoArticle/VideoArticle.js';
import VideoList from './components/VideoList/VideoList';
import videosData from './data/videos.json';
import videoDetailsData from './data/video-details.json';


class App extends React.Component {

  // const {} = this.props.videosData
  //

  render() {
    return (
      <>
        <Nav />
        <VideoHero activeVideo={videoDetailsData[1]}/>
        <VideoArticle activeVideo={videoDetailsData[1]}/>
        <VideoList filteredVideos={videosData}/>
      </>
    );
  }
}

export default App;
