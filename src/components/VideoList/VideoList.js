import './VideoList.scss';
import { Link } from 'react-router-dom';

const VideoList = (props) => {

    const { filteredVideos} = props;

    return (
        <aside className='video-list'>
            <h2 className='video-list__title'>NEXT VIDEO</h2>

            {/* Here we map each of the fileterd videos to the VideoList along with a Link */}
            {/* The path of the link is dynamic with using the video's id*/}
            <ul>
                {filteredVideos.map(video => (
                    <li key={video.id}>
                        <Link to={`/video/${video.id}`}>
                            <div className='video-list__item'>
                                <img className='video-item__image' src={video.image} alt={video.title} />
                                <div>
                                    <h3 className='video-item__title'>{video.title}</h3>
                                    <p className='video-item__channel'>{video.channel}</p>
                                </div>
                            </div>
                        </Link>
                    </li>
                ))}
            </ul>
        </aside>

    );
};

export default VideoList;