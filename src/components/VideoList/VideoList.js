import './VideoList.scss';

const VideoList = (props) => {
    const { filteredVideos, handleVideoChange } = props;

    const clickHandler = (event, clickedVideoId) => {
        event.preventDefault();
        handleVideoChange(clickedVideoId);
    }
    return (
        <aside className='video-list'>
            <h2 className='video-list__title'>NEXT VIDEO</h2>
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