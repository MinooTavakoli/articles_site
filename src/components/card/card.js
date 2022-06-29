import React from 'react';
import './card.css'

function Card({ title = "", logo = undefined, logoCenter = undefined, publishTime = "", description = "", likeIcon = undefined, uploadIcon = undefined, plusIcon = undefined, likesCount = "", onClick=()=>{} }) {
    return (
        <div className="card-component" onClick={onClick}>
            <div className="card-wrapper">
                <div className="card-head-section">
                    {logo && <img src={logo} alt="logo_news" className="card-logo-news" />}
                    <div className="card-title-news">{title}</div>
                </div>
                <div className="card-center-section">
                    {logoCenter && <img src={logoCenter} alt="logo_news" className="card-logo-news-center" />}
                </div>
                <div className="card-publish-time">{publishTime}</div>
                <p className="description-news">{description}</p>
                <div className="card-footer-section-wrapper">
                    <div className="card-footer-section">
                        {likeIcon && <div className="footer-like-icon"><img src={likeIcon} alt="like_icon" className="footer-icon" /><span>{likesCount}</span></div>}
                        <div className="footer-icons-wrapper">
                            {uploadIcon && <div><img src={uploadIcon} alt="upload_icon" className="footer-icon" /></div>}
                            {plusIcon && <div><img src={plusIcon} alt="plus_icon" className="footer-icon" /></div>}
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Card;