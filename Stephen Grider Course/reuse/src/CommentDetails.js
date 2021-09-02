import React from "react";

function CommentDetails(props) {
  return (
    <div className="comment">
      <a href="#" className="avatar">
        <img alt="avatar" src={props.avatar}></img>
      </a>
      <div className="content">
        <a href="#" className="author">
          {props.author}
        </a>
        <div className="metadata">
          <div className="date">{props.time}</div>
        </div>
        <div className="text">
          <p>{props.comment}</p>
        </div>
        <div className="actions">
          <a href="#" className="reply">
            Reply
          </a>
        </div>
      </div>
    </div>
  );
}

export default CommentDetails;
