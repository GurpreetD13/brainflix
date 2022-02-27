import './VideoHero.scss';

const VideoHero = (props) => {
    const { image } = props.activeVideo;

    return (
        <video
            className='video-hero'
            poster={image}
            controls>
        </video>
    );
};

export default VideoHero;