import React from 'react';
import { Table, TableBody, TableHeader,
  TableHeaderColumn, TableRow, TableRowColumn } from 'material-ui/Table';
import './styles.scss';

const RecordTableView = (props) => {
  const { sizeOfGroup, start, joinedPlayers, scoreChange, groupNum } = props;
  return (<Table
    selectable={false}
    multiSelectable={false}
    wrapperStyle={{ minWidth: '1000px' }}
  >
    <TableHeader
      className="record-table-header"
      displaySelectAll={false}
      adjustForCheckbox={false}
      enableSelectAll={false}
    >
      <TableRow>
        {
          [...Array(sizeOfGroup + 6)].map((_, i) => {
            let content;
            let style = {};
            let className;

            switch (i) {
              case 0:
                content = `Group ${groupNum}`;
                style = { paddingLeft: '5px', paddingRight: '5px' };
                break;
              case 1:
                content = 'Name';
                className = 'name';
                style = { paddingLeft: '0' };
                break;
              case 2:
                content = 'Before';
                break;
              case sizeOfGroup + 3:
                content = 'Bonus';
                break;
              case sizeOfGroup + 4:
                content = 'Change';
                break;
              case sizeOfGroup + 5:
                content = 'After';
                break;
              default:
                content = i - 2;
                break;
            }
            return (<TableHeaderColumn
              key={`head${(i - 1)}`}
              style={style}
              className={className}
            >
              { content }
            </TableHeaderColumn>);
          })
        }
      </TableRow>
    </TableHeader>
    <TableBody displayRowCheckbox={false} className="record-table-body">
      {
        [...Array(sizeOfGroup)].map((__, m) => {
          const curPlayer = joinedPlayers[m + start] || {};
          let ratingChangeSum = 0;
          let bonus = 0;
          return (<TableRow key={`row${m}`}>{[...Array(sizeOfGroup + 6)].map((_, n) => {
            if (n === 0) {
              return (<TableRowColumn
                key={`row${m}:${n}`}
                style={{ paddingLeft: '5px', paddingRight: '5px' }}
              >
                {(m + 1)}
              </TableRowColumn>);
            }
            if (n === m + 3) return <TableRowColumn key={`row${m}:${n}`}>0</TableRowColumn>;
            let cellContent;
            let style;
            let className;
            switch (n) {
              case 1:
                style = { whiteSpace: 'initial', paddingLeft: '0' };
                cellContent = curPlayer.name;
                className = 'name';
                break;
              case 2:
                cellContent = curPlayer.rating;
                break;
              case sizeOfGroup + 4:
                cellContent = ratingChangeSum;
                break;
              case sizeOfGroup + 3: {
                const hasBonus = ratingChangeSum > 24;
                if (hasBonus) {
                  bonus = ratingChangeSum - 24;
                }
                cellContent = bonus;
                ratingChangeSum += bonus;
                break;
              }
              case sizeOfGroup + 5:
                cellContent = ratingChangeSum + +curPlayer.rating;
                break;
              default:
                break;
            }
            if (n === sizeOfGroup + 3 ||
              n === sizeOfGroup + 4 ||
              n === sizeOfGroup + 5 ||
              n === 1 ||
              n === 2) {
              return (<TableRowColumn key={`row${m}:${n}`} style={style} className={className}>
                {cellContent}
              </TableRowColumn>);
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

export default RecordTableView;
