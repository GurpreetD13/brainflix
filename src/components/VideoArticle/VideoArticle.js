import './VideoArticle.scss';

const VideoArticle = (props) => {
    const {activeVideo} = props;
    return (

        <>
            <p>{activeVideo.title}</p>
        </>

    );
};

export default VideoArticle;