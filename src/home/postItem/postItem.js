import React from "react";
import { useLocation, useNavigate } from "react-router-dom";
import { useSelector } from "react-redux";
import Layout from "../../layout/layout";
import likeIcon from "../../assets/icons/like.png";
import Button from "../../components/buttons/button";
import "./postItem.css";

function PostItem({
  searchResultPage = [],
}) {
  const location = useLocation();
  const navigate = useNavigate();

  const onBack = () => {
    navigate("/", {
      state: { searchResultPage, searchs: location.state.search },
    });
  };

  return (
    <Layout>
      <div className="data-item-page">
        <div className="data-item-wrapper">
          <div className="back-button-wrapper">
            <Button label="Back" type="outline" onClick={onBack} />
          </div>
          <div className="data-item-title-wrapper">
            <img
              className="data-item-logo"
              alt="data-item-logo"
              src={location.state.result.logo}
            />
            <div className="data-item-title">{location.state.result.title}</div>
          </div>

          <div className="data-item">
            <div className="data-item-image-wrapper">
              <img
                src={location.state.result.imageNews}
                alt="data-item-image"
                className="data-item-image"
              />
            </div>
            <div className="data-item-description">
              <span>{location.state.result.description}</span>
            </div>
          </div>
        </div>
        <div className="footer-details-wrapper">
          <div className="footer-details-like-icon-wrapper">
            <img
              className="footer-details-like-icon"
              src={likeIcon}
              alt="likes_Count"
            />
            {location.state.result.likesCount}
          </div>
          <div className="footer-details-time-wrapper">
            <div className="footer-details-time">publish time:</div>
            {location.state.result.timePublish}
          </div>
        </div>
      </div>
    </Layout>
  );
}

export default PostItem;
