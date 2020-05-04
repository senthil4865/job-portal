import React from "react";

import CommentItem from "./CommentItem";

const CommentList = (props) => {
  let commentList = props.comments.map((comment, index) => {
    return <CommentItem key={index} comment={comment} />;
  });

  return (
    <div>
      <h6>Comments</h6>
      {props.comments.length > 0 ? (
        commentList
      ) : (
        <p style={commentBackground} className="center">
          No comments have been posted yet
        </p>
      )}
    </div>
  );
};

export default CommentList;

const commentBackground = {
  color: "#26a69a",
};

// #ee6e73
