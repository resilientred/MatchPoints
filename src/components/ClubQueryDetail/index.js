import React from 'react';
import { RecordTableView } from 'components';

const ClubQueryDetail = (props) => {
  let err;
  if (!props.clubSelected) {
    err = 'Please select a club...';
  } else if (!props.resultsAvailable) {
    err = 'The club has never posted any results.';
  } else if (!props._id) {
    err = 'Please select a date...';
  } else if (!props.finalized) {
    err = 'The results have not been posted yet...';
  }

  if (err) {
    return (<div style={{ marginTop: '20px' }}>
      {err}
    </div>);
  }
  let countedPlayers = 0;
  return (<div style={{ overflow: 'scroll', marginTop: '20px' }}>
    {
      props.selectedSchema.map((sizeOfGroup, i) => {
        countedPlayers += +sizeOfGroup;
        return (
          <RecordTableView
            key={i}
            groupNum={i + 1}
            start={countedPlayers - sizeOfGroup}
            finalized={props.finalized}
            scoreChange={props.scoreChange[i] || []}
            joinedPlayers={props.players}
            sizeOfGroup={+sizeOfGroup}
          />
        );
      })
    }
  </div>);
};

export default ClubQueryDetail;
