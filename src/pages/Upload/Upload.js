import './Upload.scss';
import uploadImage from '../../assets/images/Upload-video-preview.jpg'
import apiUtils from '../../utils/apiUtils';
//     apiUtils file contains postNewVideo function to POST user's newVideo object to API server


const Upload = (routerProps) => {

    const handleSubmit = (event) => {
        event.preventDefault();
        // create newVideo to POST based on user's inputs in upload form
        const newVideo = {
            "title": event.target.userVideoTitle.value,
            "channel": "Anonymous",
            "image": "http://localhost:8080/images/image3.jpeg",
            "description": event.target.userVideoDescription.value,
            "duration": "4:20",
            "video": "https://project-2-api.herokuapp.com/stream",
        }
        // and send POST request
        apiUtils.postNewVideo(newVideo)
            .then(() => {
                alert("Your video has been successfully uploaded!");
                // Redirect to Home page ('/') after form submitted, using history routerProp being passed down
                routerProps.history.push('/');
            })
            .catch(error => console.log(error));
    }

    return (
        <main className='main'>
            <h1 className='upload__heading'>Upload Video</h1>

            <form onSubmit={handleSubmit} className='upload__form'>

                <div className='upload-form__top-container'>
                    <div className='upload-form__thumbnail-container'>
                        <h2 className='thumbnail__label'>VIDEO THUMBNAIL</h2>
                        <img className='thumbnail__image' src={uploadImage} alt="Bike handlebars from biker's point of view while biking" />
                    </div>
                    <div className='upload-form__inputs-container'>
                        <label htmlFor="userVideoTitle">TITLE YOUR VIDEO</label>
                        <input name="userVideoTitle" type="text" placeholder='Add a title to your video' />

                        <label htmlFor="userVideoDescription">ADD A VIDEO DESCRIPTION</label>
                        <textarea name="userVideoDescription" rows="5" placeholder='Add a description to your video'></textarea>
                    </div>
                </div>
                <div className='upload-form__buttons-container'>
                    <button className='button--publish'>PUBLISH</button>
                    <button className='button--cancel' disabled="disabled">CANCEL</button>
                </div>
            </form>
        </main>
    );
};

export default Upload;