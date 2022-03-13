import axios from "axios";


const apiBaseUrl = 'http://localhost:8080';


const apiUtils = {

    // to GET array/list of All videos from API use: 

    getAllVideosArray: () => axios.get(`${apiBaseUrl}/videos/`),

    // to GET Single detailed video object using the videoID from API use: 

    getSingleVideoDetails: (videoId) => axios.get(`${apiBaseUrl}/videos/${videoId}`),

    // to POST/upload newVideo object to API server use: 

    postNewVideo: (newVideo) => axios.post(`${apiBaseUrl}/videos`, newVideo)
};

export default apiUtils;