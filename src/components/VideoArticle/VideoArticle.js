import './VideoArticle.scss';

const VideoArticle = (props) => {
    // const { activeVideo } = props;
    const { channel, title, description, timestamp, views, likes, comments } = props.activeVideo;
    return (
        <main className='main'>
            <article className='video-article'>
                <h1 className='video-article__title'>{title}</h1>
                <div>
                    <div>
                        <h2 className='video-article__channel'>{channel}</h2>
                        <p className='video-article__details'>{timestamp}</p>
                    </div>
                    <div>
                        <p className='video-article__details'>{views}</p>
                        <p className='video-article__details'>{likes}</p>
                    </div>
                </div>
                <p className='video-article__description'>{description}</p>
            </article>

            <section className='comments-section'>
                <p className='comments-section__total-comments'>{comments.length} Comments</p>

                <form id='comment-form'>
                    <label htmlFor="userComment">JOIN THE CONVERSATION</label>
                    <textarea name="userComment" className='comment-form__user-comment'
                        placeholder='Add a new comment'></textarea>
                    <button disabled="disabled">COMMENT</button>
                </form>



            </section>


        </main>

    );
};

export default VideoArticle;