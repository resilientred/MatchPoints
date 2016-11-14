import React from "react";
import { Table, TableBody, TableRow,
  TableHeader, TableHeaderColumn, TableRowColumn } from "material-ui/Table";
import IconButton from "material-ui/IconButton/IconButton";
import PdfIcon from "react-icons/lib/md/picture-as-pdf";

const ParticipantGroup = props => (
  (<div style={{ position: "relative" }}>
    <IconButton
      iconClassName="material-icons"
      style={{ position: "absolute", right: "0", top: "5px", zIndex: 10 }}
      onClick={props.pdfDownload}
      disabled={!props.pdfLoaded}
      tooltip={!props.pdfLoaded ? "You must generate first" : "Download pdf"}
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
  </div>)
);

export default ParticipantGroup;
