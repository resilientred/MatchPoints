import React, { PropTypes } from "react";
import { Table, TableBody, TableHeader,
  TableHeaderColumn, TableRow, TableRowColumn } from "material-ui/Table";

const RecordTableDetail = (props) => {
  const { sizeOfGroup, start, joinedPlayers, scoreChange, groupNum } = props;
  return (<Table
    selectable={false}
    multiSelectable={false}
    wrapperStyle={{ minWidth: "1000px" }}
  >
    <TableHeader
      displaySelectAll={false}
      adjustForCheckbox={false}
      enableSelectAll={false}
    >
      <TableRow>
        {
          [...Array(sizeOfGroup + 5)].map((_, i) => {
            let content;
            let style = {};
            switch (i) {
              case 0:
                content = `Group ${groupNum}`;
                style = { paddingLeft: "5px", paddingRight: "5px" };
                break;
              case 1:
                content = "Name";
                style = { paddingLeft: "0" };
                break;
              case 2:
                content = "Before";
                break;
              case sizeOfGroup + 3:
                content = "Change";
                break;
              case sizeOfGroup + 4:
                content = "After";
                break;
              default:
                content = i - 2;
                break;
            }
            return (<TableHeaderColumn key={`head${(i - 1)}`} style={style}>
              { content }
            </TableHeaderColumn>);
          })
        }
      </TableRow>
    </TableHeader>
    <TableBody displayRowCheckbox={false}>
      {
        [...Array(sizeOfGroup)].map((__, m) => {
          const curPlayer = joinedPlayers[m + start];
          let ratingChangeSum = 0;

          return (<TableRow key={`row${m}`}>{[...Array(sizeOfGroup + 5)].map((_, n) => {
            if (n === 0) {
              return (<TableRowColumn
                key={`row${m}:${n}`}
                style={{ paddingLeft: "5px", paddingRight: "5px" }}
              >
                {(m + 1)}
              </TableRowColumn>);
            }
            if (n === m + 3) return <TableRowColumn key={`row${m}:${n}`}>0</TableRowColumn>;
            let cellContent;
            let style;
            switch (n) {
              case 1:
                style = { whiteSpace: "initial", paddingLeft: "0" };
                cellContent = curPlayer.name;
                break;
              case 2:
                cellContent = curPlayer.rating;
                break;
              case sizeOfGroup + 3:
                cellContent = ratingChangeSum;
                break;
              case sizeOfGroup + 4:
                cellContent = ratingChangeSum + +curPlayer.rating;
                break;
              default:
                break;
            }
            if (n === sizeOfGroup + 3 || n === sizeOfGroup + 4 || n === 1 || n === 2) {
              return <TableRowColumn key={`row${m}:${n}`} style={style}>{cellContent}</TableRowColumn>;
            }

            if (!scoreChange) {
              return <TableRowColumn key={`row${m}:${n}`}>0</TableRowColumn>;
            }
            ratingChangeSum += +scoreChange[m][n - 3];
            return (<TableRowColumn key={`row${m}:${n}`}>
              { scoreChange[m][n - 3] }
            </TableRowColumn>);
          })}</TableRow>);
        })
      }
    </TableBody>
  </Table>);
};

RecordTableDetail.propTypes = {
  sizeOfGroup: PropTypes.number,
  start: PropTypes.number,
  groupNum: PropTypes.number,
  joinedPlayers: PropTypes.array,
  scoreChange: PropTypes.array,
};

export default RecordTableDetail;
