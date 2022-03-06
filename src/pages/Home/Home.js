import './Home.scss'
import React from 'react';
import VideoHero from '../../components/VideoHero/VideoHero';
import VideoDetails from '../../components/VideoDetails/VideoDetails';
import VideoList from '../../components/VideoList/VideoList';

// remove harcoded data
import videosData from '../../data/videos.json';
import videoDetailsData from '../../data/video-details.json';


class Home extends React.Component {

  // Set initial default State to the 1st video in the videoDetailsData array, along with the smaller videosData
  state = {
    activeVideo: videoDetailsData[0],
    videosData: videosData
  }


  render() {
    // Fitler out the active video from videosData array before passing into VideoList component by using active video's id
    const filteredVideos = videosData.filter(video => video.id !== this.state.activeVideo.id)

    return (
      <>
        <VideoHero
          activeVideo={this.state.activeVideo} />

        <div className='desktop-container'>
          <VideoDetails
            activeVideo={this.state.activeVideo} />

          <VideoList
            filteredVideos={filteredVideos} />
        </div>
      </>
    );
  }
}

export default Home;