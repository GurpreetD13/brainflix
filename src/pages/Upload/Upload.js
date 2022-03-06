import './Upload.scss';
import uploadImage from '../../assets/images/Upload-video-preview.jpg'


const Upload = () => {

    const handleSubmit = (event) => {
        event.preventDefault();

    
        alert("Your video has been successfully uploaded!");

        //redirect to home
    }

    return (

        <main className='main'>

            <h1>Upload Video</h1>

            <form onSubmit={handleSubmit}>

                <div>
                    <h2>VIDEO THUMBNAIL</h2>
                    {/* <img src={uploadImage} alt="Bike handlebars from biker's point of view while biking" /> */}
                </div>

                <div>
                    <label htmlFor="">TITLE YOUR VIDEO</label>
                    <input type="text" placeholder='Add a title to your video'/>

                    <label htmlFor="">ADD A VIDEO DESCRIPTION</label>
                    <textarea name="" placeholder='Add a description to your video'></textarea>
                </div>

                <div>
                    <button>PUBLISH</button>
                    <button disabled="disabled">CANCEL</button>
                </div>
            </form>
        </main>
    );
};

export default Upload;