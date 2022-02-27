import './VideoList.scss';

const VideoList = (props) => {
    const {filteredVideos} = props;
    return (

        <>
            <p>{filteredVideos[1].title}</p>
        </>

    );
};

export default VideoList;