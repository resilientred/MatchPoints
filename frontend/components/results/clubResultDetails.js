import React from 'react'
import ClubResultView from "./clubResultView"


const ClubResultDetails = (props) => {
  if (!props.finalized) return <div style={{marginTop: "5%"}}>Please select a date...</div>
  let countedPlayers = 0;
  return  <div style={{overflow: "scroll", marginTop: "5%"}} >
      { 
        props.selectedSchema.map ( (sizeOfGroup, i) => {
                countedPlayers += +sizeOfGroup;
                return (
                    <ClubResultView key={i} groupNum={i + 1} 
                     start={countedPlayers - sizeOfGroup}
                     finalized={ props.finalized }
                     result={props.results[i]}
                     joinedPlayers={props.players} sizeOfGroup={+sizeOfGroup} 
                     />
                )
                })
     }
     </div>
}



export default ClubResultDetails;