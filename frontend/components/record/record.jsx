import React from 'react';
import RecordTable from './recordTable.jsx'

class Record extends React.component {
	constructor(props){
		super(props);
	}

	componentDidMount = () => {

	}

	render(){
		return (
			<div>
				<RecordTable />
			</div>
		);
	}
}

export default Record;