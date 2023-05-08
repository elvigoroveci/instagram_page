import Share from "../images/shareee.jpeg";
import com from "../images/comment1.png" ; 
import Heart from "../images/h02.png" ; 
import RedHeart from "../images/redheart.png" ;
import { useState } from "react";

const Post = ({Posts}) =>{

    const[Like, setLike] = useState(true);
    const[Comment, setComment] = useState(false);

    const setRedHeart = () =>{
        setLike(false);
    }
    const setCommentSection = () =>{
        setComment(true)
    }

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


                            <div className="icons" >
                                <a onClick={setRedHeart}>
                                    {
                                        Like ? 
                                <img className="icons" src={Heart} alt="like"/> : 
                                <img className="icons" src={RedHeart} alt="liked"/>
                                
                                    }
                                </a>
                                
                                <img className="icons" src={com} alt="comment" />

                                <img className="icons" src={Share} alt="share"/>
                            </div>
                            <h4>{Post?.comments} Comments</h4>
                    </div>
                </>
                );
            })}
        </div>
    );
}

export default Post;