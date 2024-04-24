import React, { useState } from 'react';
import '../styles/card.css';
import suprsend from "@suprsend/web-sdk";

suprsend.init(process.env.REACT_APP_SUPRSEND_WORKSPACE_KEY, process.env.REACT_APP_SUPRSEND_WORKSPACE_SECRET);

function Card({ userName, followers, todayFollowers, icon, name, postText, imageUrl, imageWidth, imageHeight }) {
    const cardClass = `card ${name}`;
    const [liked, setLiked] = useState(false);

    const handleLikeClick = () => {
        suprsend.track("INBOX DEMO - SEND NOTIFICATION", { userName });
        setLiked(true); // Update the state to indicate that the button has been clicked
    };

    return (
        <article className={cardClass}>
            <div className="card-header">
                <img src={icon} alt="User Icon" className="user-icon" />
                <span className="user-name">{userName}</span>
            </div>
            <div className="card-content">
                <p className="post-text">{postText}</p>
                {imageUrl && <img src={imageUrl} alt="Post Image" className="post-image" style={{ width: imageWidth, height: imageHeight }} />}
            </div>
            <div className="card-actions">
                <button className={`like-button ${liked ? 'liked' : ''}`} onClick={handleLikeClick}>
                    {liked ? 'Liked' : 'Like'}
                </button>
                <button className="comment-button">
                    Comment
                </button>
            </div>
            <div className="card-footer">
                <span className="followers">{followers} Followers</span>
                <span className="today">{todayFollowers} today</span>
            </div>
        </article>
    );
}

export default Card;
