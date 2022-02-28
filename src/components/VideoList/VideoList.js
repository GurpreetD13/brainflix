import './VideoList.scss';

const VideoList = (props) => {
    const { filteredVideos, handleVideoChange } = props;

    // The clickHandler will pass the id of the clickedVideo from the click event
    // to the handleVideoChangle handler in the parent App component which manages state
    const clickHandler = (event, clickedVideoId) => {
        event.preventDefault();
        handleVideoChange(clickedVideoId);
    }
    return (
        <aside className='video-list'>
            <h2 className='video-list__title'>NEXT VIDEO</h2>

            {/* Here we map each of the fileterd videos to the VideoList along with the clickHandler */}
            <ul>
                {filteredVideos.map(video => (
                    <li key={video.id}>
                        <a href='/' onClick={event => { clickHandler(event, video.id) }}>
                            <div className='video-list__item'>
                                <img className='video-item__image' src={video.image} alt={video.title} />
                                <div>
                                    <h3 className='video-item__title'>{video.title}</h3>
                                    <p className='video-item__channel'>{video.channel}</p>
                                </div>
                            </div>
                        </a>
                    </li>
                ))}
            </ul>
        </aside>

    );
};

export default VideoList;