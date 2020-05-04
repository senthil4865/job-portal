import React, { Component } from "react";
import axios from "axios";
import CommentList from "../comments/CommentList";
import video from '../../assets/videos/video.mp4';

class Video extends Component {
  constructor(props) {
    super(props);

    this.state = {
      comment: "",
      comments: [],
    };

    this.syncCommentState = this.syncCommentState.bind(this);
    this.submitComment = this.submitComment.bind(this);
  }

  syncCommentState(event) {
    event.preventDefault();
    let comment = event.target.value;
    this.setState({ comment: comment });
  }

  submitComment(event) {
    event.preventDefault();
    let applicantId = this.props.applicationId;
    let comments = this.state.comments;
    comments.push(this.state.comment.trim());
    const videos = this.props.appState.videos;
    let updatedVideo = videos.filter((video) => {
      return video.src === this.props.videoSRC;
    });
    updatedVideo[0].comments = comments;
    const videoList = videos.filter((video) => {
      return video.src !== this.props.videoSRC;
    });
    videoList.push(updatedVideo[0]);
    const submitData = {
      id: applicantId,
      videos: videoList,
    };
    axios
      .put(`/applications/${applicantId}`, submitData)
      .then((response) => {
        this.setState({ comment: "" });
      })
      .catch((err) => {
        console.log(err);
      });
  }

  componentDidMount() {
    const comments = this.props.comments;
    comments.forEach((comment) => {
      return this.state.comments.push(comment);
    });
  }

  render() {
    return (
      <div>
        <div className="row ">
          <div style={videoCardMargin} className="col s7 m7">
            <div className="card hoverable">
              <div className="card-image">
                <video className="mb-2" width="100%" height="auto" controls>
                  <source src={video} type="video/mp4" />
                </video>
              </div>
              <div className="card-content">
                <p className="center">{this.props.question}</p>
              </div>
              <div className="card-action">
                <CommentList comments={this.state.comments} />

                <div className="input-field">
                  <textarea
                    id="comment"
                    className="materialize-textarea"
                    value={this.state.comment}
                    onChange={this.syncCommentState}
                  ></textarea>
                  <label htmlFor="comment">Comment</label>
                </div>
                <button
                  onClick={this.submitComment}
                  disabled={!this.state.comment}
                  className="btn waves-effect waves-light"
                  type="submit"
                  name="action"
                >
                  Submit
                  <i className="material-icons right">send</i>
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default Video;

const videoCardMargin = {
  marginLeft: "20%",
};
