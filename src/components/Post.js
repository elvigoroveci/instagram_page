import Share from "../images/shareee.jpeg";
import Comment from "../images/comment1.png"
import Heart from "../images/h.png"

const Post = ({Posts}) =>{


    return (
        <div className="feed">
            {Posts.map((Post) => {
                return (
                    <>
                        <div className="Post" key={Post.id} {...Post}>
                            <div className="User">
                                <img src={Post?.userImageURL} alt="user"/>
                                <h4>{Post?.user}</h4>
                            </div>
                            <img src={Post?.largeImageURL} alt="user_image"/>
                        
                            <div className="icons">
                                <img className="icons" src={Heart} alt="heart"/>
                                <img className="icons" src={Comment} alt="comment" />
                                <img className="icons" src={Share} alt="share"/>
                            </div>
                    </div>
                </>
                );
            })}
        </div>
    );
}

export default Post;