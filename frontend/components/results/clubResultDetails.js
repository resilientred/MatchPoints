import React from 'react'
import RecordTableView from "../record/recordTableView"


const ClubResultDetails = (props) => {
  if (!props.finalized) return <div>Please select a date...</div>
  let countedPlayers = 0;
  let player = Object.keys(props.players);
  return  <div>
      { 
        props.selectedSchema.map ( (sizeOfGroup, i) => {
                countedPlayers += sizeOfGroup;
                return (
                    <RecordTableView key={i} groupNum={i + 1} 
                     start={countedPlayers - sizeOfGroup}
                     finalized={ props.finalized }
                     result={props.results}
                     joinedPlayers={props.players} sizeOfGroup={+sizeOfGroup} 
                     scoreChange={props.scoreChange && props.scoreChange.length ? props.scoreChange[i] : []}
                     />
                )
                })
     }
     </div>
}



export default ClubResultDetails;