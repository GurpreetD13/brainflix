import './VideoList.scss';

const VideoList = (props) => {
    const { filteredVideos, handleVideoChange } = props;

    const clickHandler = (event, clickedVideo) => {
        event.preventDefault();
        handleVideoChange(clickedVideo);
    }
    return (
        <ul className='video-list'>
            {filteredVideos.map(video => (
                <li key={video.id} className='video-list__item'>
                    <a href='/'
                        onClick={event => { clickHandler(event, video) }}>
                        <div>
                            <p>{video.title}</p>
                        </div>
                    </a>
                </li>
            ))}
        </ul>
    );
};

export default VideoList;