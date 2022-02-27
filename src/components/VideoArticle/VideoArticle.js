import './VideoArticle.scss';

const VideoArticle = (props) => {
    // const { activeVideo } = props;
    const { channel, title, description, timestamp, views, likes, comments } = props.activeVideo;
    return (
        <main className='video-article'>
            <article className='video-article__description'>
                <h1>{title}</h1>
                <div>
                    <div>
                        <p>{channel}</p>
                        <p>{timestamp}</p>
                    </div>
                    <div>
                        <p>{views}</p>
                        <p>{likes}</p>
                    </div>
                </div>
                <p>{description}</p>
            </article>

            <section className='video-article__comments-section'>
                <p className='comments-section__total-comments'>{3}</p>


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