import React from "react";

const CommentItem = (props) => {
  return (
    <div style={commentBackground}>
      <p className="center">{props.comment}</p>
    </div>
  );
};

export default CommentItem;

const commentBackground = {
  color: "#26a69a",
};
