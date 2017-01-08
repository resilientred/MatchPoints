import React from 'react';
import { Table, TableBody, TableRow,
  TableHeader, TableHeaderColumn, TableRowColumn } from 'material-ui/Table';
import UpArrow from 'react-icons/lib/md/keyboard-arrow-up';
import PromoteButton from 'react-icons/lib/fa/arrow-up';
import DownArrow from 'react-icons/lib/md/keyboard-arrow-down';
import DemoteButton from 'react-icons/lib/fa/arrow-down';
import IconButton from 'material-ui/IconButton/IconButton';
import PdfIcon from 'react-icons/lib/md/picture-as-pdf';

const ParticipantGroup = (props) => {
  return (<div style={{ position: 'relative' }}>
    <IconButton
      iconClassName="material-icons"
      style={{ position: 'absolute', right: '0', top: '5px', zIndex: 10 }}
      onClick={props.pdfDownload}
      disabled={!props.pdfLoaded}
      tooltip={!props.pdfLoaded ? 'You must generate first' : 'Download pdf'}
    >
      <PdfIcon />
    </IconButton>
    <Table
      selectable={false}
      multiSelectable={false}
      fixedHeader={Boolean(true)}
    >
      <TableHeader
        displaySelectAll={false}
        enableSelectAll={false}
        adjustForCheckbox={false}
      >
        <TableRow>
          <TableHeaderColumn>Group {props.groupId + 1}</TableHeaderColumn>
          <TableHeaderColumn>Name</TableHeaderColumn>
          <TableHeaderColumn>Rating</TableHeaderColumn>
        </TableRow>
      </TableHeader>
      <TableBody
        displayRowCheckbox={false}
        showRowHover={Boolean(true)}
        style={{ position: 'relative' }}
      >
        {
          props.players.map((player, i) => (
            <TableRow className="table-row" key={player._id}>
              <TableRowColumn>{i + 1}</TableRowColumn>
              <TableRowColumn>{player.name}</TableRowColumn>
              <TableRowColumn>{player.rating}</TableRowColumn>
              {
                props.promote &&
                <IconButton
                  iconClassName="material-icons"
                  tooltip="Promote Player"
                  onClick={() => props.promote(props.groupId, i)}
                  style={{
                    left: '30px',
                    top: '57px',
                    zIndex: 10,
                  }}
                >
                  <PromoteButton />
                </IconButton>
              }
              {
                props.demote &&
                <IconButton
                  iconClassName="material-icons"
                  tooltip="Demote Player"
                  onClick={() => props.demote(props.groupId, i)}
                  style={{
                    left: '30px',
                    top: '57px',
                    zIndex: 10,
                  }}
                >
                  <DemoteButton />
                </IconButton>
              }
            </TableRow>
          ))
        }
      </TableBody>
    </Table>
    {
      !!props.moveUp &&
        (<IconButton
          iconClassName="material-icons"
          tooltip="Move one player up"
          onClick={() => props.moveUp(props.groupId)}
          style={{
            position: 'absolute',
            left: '30px',
            top: '57px',
            zIndex: 10,
          }}
        >
          <UpArrow />
        </IconButton>)
    }
    {
      !!props.moveDown &&
        (<IconButton
          iconClassName="material-icons"
          tooltip="Move one player down"
          onClick={() => props.moveDown(props.groupId)}
          style={{
            position: 'absolute',
            left: '30px',
            bottom: '1px',
            zIndex: 10,
          }}
        >
          <DownArrow />
        </IconButton>)
    }
  </div>);
};

export default ParticipantGroup;
