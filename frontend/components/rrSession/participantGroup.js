import React, { PropTypes } from "react";
import { Table, TableBody, TableRow,
  TableHeader, TableHeaderColumn, TableRowColumn } from "material-ui/Table";
import IconButton from "material-ui/IconButton/IconButton";
import PdfIcon from "react-icons/lib/md/picture-as-pdf";
import UpArrow from "react-icons/lib/md/keyboard-arrow-up";
import DownArrow from "react-icons/lib/md/keyboard-arrow-down";

const moveDownArrow = (moveDown, i) => (
  (moveDown && <IconButton
    iconClassName="material-icons"
    tooltip="Move one player down"
    onClick={() => moveDown(i)}
    style={{
      position: "absolute",
      left: "30px",
      bottom: "1px",
      zIndex: 10
    }}
  >
    <DownArrow />
  </IconButton>)
);

const moveUpArrow = (moveUp, i) => (
  (moveUp && <IconButton
    iconClassName="material-icons"
    tooltip="Move one player up"
    onClick={() => moveUp(i)}
    style={{
      position: "absolute",
      left: "30px",
      top: "57px",
      zIndex: 10
    }}
  >
    <UpArrow />
  </IconButton>)
);

const ParticipantGroup = props => (
  (<div style={{ position: "relative" }}>
    <IconButton
      iconClassName="material-icons"
      style={{ position: "absolute", right: "0", top: "5px", zIndex: 10 }}
      onClick={props.pdfDownload}
      disabled={!props.pdfs}
      tooltip={!props.pdfs ? "You must generate first" : "Download pdf"}
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
        style={{ position: "relative" }}
      >
        {
          props.players.map((player, i) => (
            <TableRow className="table-row" key={player._id}>
              <TableRowColumn>{i + 1}</TableRowColumn>
              <TableRowColumn>{player.name}</TableRowColumn>
              <TableRowColumn>{player.rating}</TableRowColumn>
            </TableRow>
          ))
        }
      </TableBody>
    </Table>
    { moveUpArrow(props.moveUp, props.groupId) }
    { moveDownArrow(props.moveDown, props.groupId) }
  </div>)
);

ParticipantGroup.propTypes = {
  pdfDownload: PropTypes.func,
  pdfs: PropTypes.Array,
  groupId: PropTypes.Number,
  players: PropTypes.Array,
  moveUp: PropTypes.func,
  moveDown: PropTypes.func
};

export default ParticipantGroup;
