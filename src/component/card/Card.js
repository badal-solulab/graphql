import { useMutation } from "@apollo/client";
import React, { useState } from "react";
import { DISLIKE_CARD } from "../../graphql/mutations/DislikeItem";
import { LIKE_CARD } from "../../graphql/mutations/LikeItem";
import "./cards.css";

const Card = ({ photo, title, cardId, liked, count }) => {
  const [likes, setlikes] = useState(count);
  const [isLiked, setIsLiked] = useState(liked);
  const handleLike = (e) => {
    setlikes(e === "like" ? likes + 1 : likes - 1);
    setIsLiked(e === "like" ? true : false);
  };
  const [dislike] = useMutation(DISLIKE_CARD, {
    onError() {
      handleLike("like");
    },
  });
  const [like] = useMutation(LIKE_CARD, {
    onError() {
      handleLike("dislike");
    },
  });

  const handleLikeDisLikeClick = () => {
    if (isLiked) {
      dislike({
        variables: {
          dislikeItemId: cardId,
        },
      });
      handleLike("dislike");
      return;
    }
    like({
      variables: {
        likeItemId: cardId,
      },
    });
    handleLike("like");
  };
  return (
    <>
      <div className="card">
        <div className="position-relative">
          <img src={photo} alt="Avatar" />
          <div>
            <h6 className="likes" onClick={handleLikeDisLikeClick}>
              {!isLiked ? (
                <i className="fa fa-heart-o" aria-hidden="true"></i>
              ) : (
                <i
                  className="fa fa-heart"
                  aria-hidden="true"
                  style={{ color: "red" }}
                ></i>
              )}
              {likes}
            </h6>
          </div>
        </div>
        <div className="container">
          <h4>
            <b>{title}</b>
          </h4>
        </div>
      </div>
    </>
  );
};

export default Card;
