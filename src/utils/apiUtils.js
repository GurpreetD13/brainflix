import axios from "axios";


const apiBaseUrl = 'https://project-2-api.herokuapp.com';

const apiKeyString = '?api_key=f76f19d5-1908-4af7-a8b7-ecbd1dba973c';


const apiUtils = {

    // to GET array/list of All videos from API use: 

    getAllVideosArray: () => axios.get(`${apiBaseUrl}/videos/${apiKeyString}`),

    // to GET Single detailed video object using the videoID from API use: 

    getSingleVideoDetails: (videoId) => axios.get(`${apiBaseUrl}/videos/${videoId}${apiKeyString}`)
};

export default apiUtils;