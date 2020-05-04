import React, { useEffect } from "react";
import CandidateItem from "./CandidateItem";
import { connect } from "react-redux";
import Preloader from "../layout/Preloader";
import { getCandidates } from "../../actions/candidateActions";

const CandidateList = ({
  candidates: { candidates, loading },
  getCandidates,
}) => {
  useEffect(() => {
    getCandidates();
    // eslint-disable-next-line
  }, []);

  if (loading || candidates === null) {
    return <Preloader />;
  }

  return (
    <div className="row">
      {!loading && candidates.length === 0 ? (
        <p className="center">No candidates to show..</p>
      ) : (
        candidates.map((candidate) => {
          return (
            <div className="col s4">
              <CandidateItem
                key={candidate.id}
                id={candidate.id}
                name={candidate.name}
                applicationId={candidate.applicationId}
              />
            </div>
          );
        })
      )}
    </div>
  );
};

const mapStateToProps = (state) => ({
  candidates: state.candidates,
});

export default connect(mapStateToProps, { getCandidates })(CandidateList);
