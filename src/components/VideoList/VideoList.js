import './VideoList.scss';

const VideoList = (props) => {
    const {filteredVideos, handleVideoChange} = props;
    return (

        <>
            <p>{filteredVideos[1].title}</p>
        </>

    );
};

export default VideoList;