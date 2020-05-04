import React from "react";
import { Link } from "react-router-dom";
import candidate from "../../assets/images/candidate.jpg";

const CandidateItem = (props) => {
  return (
    <div>
      <div className="card z-depth-3">
        <div className="card-image waves-effect waves-block waves-light">
          <img className="activator" src={candidate} />
        </div>
        <div className="card-content">
          <span className="card-title activator grey-text text-darken-4">
            {props.name}
            <i className="material-icons right">more_vert</i>
          </span>
        </div>
        <div className="card-reveal">
          <span className="card-title grey-text text-darken-4">
            {props.name}
            <i className="material-icons right">close</i>
          </span>
          <Link to={{ pathname: `candidate/${props.id}`, state: { ...props } }}>
            Click Here to see my video responses
          </Link>
        </div>
      </div>
    </div>
  );
};

export default CandidateItem;
