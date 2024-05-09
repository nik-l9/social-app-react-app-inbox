import React, { useState, useEffect } from 'react';
import { FaHeart } from 'react-icons/fa'; 
import suprsend from "@suprsend/web-sdk";
import '../styles/card.css';

suprsend.init(process.env.REACT_APP_SUPRSEND_WORKSPACE_KEY, process.env.REACT_APP_SUPRSEND_WORKSPACE_SECRET);

function Card({ userName, followers, todayFollowers, icon, name, postText, imageUrl }) {
    const cardClass = `card ${name}`;
    const [liked, setLiked] = useState(false);
    const [comment, setComment] = useState('');
    const [commentSubmitted, setCommentSubmitted] = useState(false); // Track if comment is submitted
    const [imageLoaded, setImageLoaded] = useState(false);

    useEffect(() => {
        let timer;
        if (commentSubmitted) {
            timer = setTimeout(() => {
                setCommentSubmitted(false);
            }, 4000); // 5000 milliseconds = 5 seconds
        }
        return () => clearTimeout(timer);
    }, [commentSubmitted]);

    const handleLikeClick = () => {
        if (!liked) {
            suprsend.track("Like_Event", {"username": "John", "locations": "Avenue Street", "batch_key": userName});
        }
        setLiked(!liked); // Toggle the liked state
    };
    
    

    const handleCommentClick = () => {
        if (comment.trim() === '') {
            alert('Please type in some comment before hitting Comment');
            return; // Stop further execution if comment is empty
        }
    
        suprsend.track("Comment_Event", {"username": userName, "comment_content": comment});
        setCommentSubmitted(true); // Set comment submitted
        setComment(''); // Clear the comment input
    };
    

    const handleCommentChange = (event) => {
        setComment(event.target.value);
    };

    return (
        <article className={cardClass}>
            <div className="card-header">
                <img src={icon} alt="User Icon" className="user-icon" />
                <span className="user-name">{userName}</span>
            </div>
            <div className="card-content">
                <p className="post-text">{postText}</p>
                {imageUrl && <img
                    src={imageUrl}
                    alt="Post"
                    className={`post-image ${imageLoaded ? 'loaded' : ''}`}
                    onLoad={() => setImageLoaded(true)}
                />}
            </div>
            <div className="card-actions">
                <button className={`like-button ${liked ? 'liked' : ''}`} onClick={handleLikeClick}>
                    <FaHeart className="heart-icon" />
                </button>
                <button className="comment-button" onClick={handleCommentClick}>
                    Comment
                </button>
            </div>
            <div className="card-footer">
                <span className="followers">{followers} Followers</span>
                <span className="today">{todayFollowers} today</span>
            </div>
            {commentSubmitted && <p className="comment-submitted">Commented!</p>} {/* Display comment submitted message */}
            <div className="comment-input">
                <input type="text" value={comment} onChange={handleCommentChange} placeholder="Write a comment..." />
                <button onClick={handleCommentClick}><i className="fa fa-paper-plane"></i></button>
            </div>
        </article>
    );
}

export default Card;
