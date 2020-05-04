import React, { Component } from "react";
import { Link } from "react-router-dom";
import axios from "axios";
import Video from "./Video";
import Alert from "../layout/Alert";
class CandidateReponse extends Component {
  constructor(props) {
    super(props);
    this.state = {
      videos: [],
      question: [],
      comment: "",
    };
  }

  componentDidMount() {
    axios
      .get("/applications")
      .then((application) => {
        const applicationId = this.props.location.state.applicationId;
        const applications = application.data;

        const currentApplication = applications.filter((app) => {
          return app.id === applicationId;
        });

        this.setState({
          videos: currentApplication[0].videos,
        });
      })
      .then(() => {
        axios
          .get("/questions")
          .then((questions) => {
            const question = questions.data;
            this.setState({ question: question });
          })
          .catch((err) => console.log(err));
      })
      .catch((err) => console.log(err));
  }

  render() {
    let applicationId = this.props.location.state.applicationId;
    let id = this.props.location.state.id;
    let name = this.props.location.state.name;

    let sortedVideoList = this.state.videos.sort(function(a, b) {
      return a.questionId - b.questionId;
    });

    let videos = sortedVideoList.map((video, index) => {
      let question = this.state.question.filter((q) => {
        return q.id === video.questionId;
      });

      let questionName = question.map((q) => {
        return q.question;
      })[0];

      return (
        <Video
          key={index}
          index={index}
          videoSRC={video.src}
          question={questionName}
          comments={video.comments}
          applicationId={applicationId}
          questionId={video.questionId}
          appState={this.state}
        />
      );
    });

    return (
      <div className="container">
        <div className="row">
          <div className="col s12 m12 ">
            <div className="card darken-1">
              <div className="card-content center">
                <span style={candidateHeadColor} className="card-title">
                  {name}
                </span>
                <h6>
                  {" "}
                  Applicant ID: {id}
                  {this.state.videos.length > 0
                    ? ` - Application ID: ${applicationId}`
                    : ""}
                </h6>
              </div>

              {this.state.videos.length < 1 ? <Alert name={name} /> : videos}

              <div className="card-action right-align">
                <Link className="btn waves-effect waves-light" to="/">
                  Back
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default CandidateReponse;

const candidateHeadColor = {
  color: "#ee6e73",
};
