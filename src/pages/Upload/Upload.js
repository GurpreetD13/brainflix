import './Upload.scss';
import uploadImage from '../../assets/images/Upload-video-preview.jpg'


const Upload = (routerProps) => {

    const handleSubmit = (event) => {
        event.preventDefault();
        alert("Your video has been successfully oploaded!");
        // Redirect to Home page ('/') after form submitted, using history routerProp being passed down
        routerProps.history.push('/');
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