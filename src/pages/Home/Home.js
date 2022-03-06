import './Home.scss'
import React from 'react';
import VideoHero from '../../components/VideoHero/VideoHero';
import VideoDetails from '../../components/VideoDetails/VideoDetails';
import VideoList from '../../components/VideoList/VideoList';

// remove harcoded data
import videosData from '../../data/videos.json';
import videoDetailsData from '../../data/video-details.json';


class Home extends React.Component {

    // Set initial state to be empty and Loading will render until we GET data from API in componentDidMount

    state = {
        activeVideo: null,
        videosData: []
    }

    componentDidMount() {

        // Set initial loaded State to the video in the URL path otherwise 
        // 1st video in the videoDetailsData array, along with the smaller videosData

        // const videoId = this.props.match.params.videoId //|| 

            this.setState({
                activeVideo: 
                // videoDetailsData.find(video=> video.id = videoId) ||
                    // videoDetailsData[this.props.match.params.videoId] || 
                    videoDetailsData[0],
                videosData: videosData
            })
        console.log(this.props.match.params)
    }


    render() {
        if (!this.state.activeVideo) {
            return (<h2>Loading...</h2>);
        };

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