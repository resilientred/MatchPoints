import React from 'react';
import { RecordTableView } from 'components';

const ViewRecordTable = (props) => {
  return (<div style={{ overflow: 'scroll' }}>
    <RecordTableView {...props} />
  </div>);
};

export default ViewRecordTable;
