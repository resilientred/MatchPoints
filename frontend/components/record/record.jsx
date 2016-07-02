import React from 'react';
import RecordTable from './recordTable.jsx'

class Record extends React.component {
	constructor(props){
		super(props);
	}

	componentDidMount = () => {

	}
	calculateScore = () => {

	}
	render(){
		return (
			<div>
				<RecordTable calculateScore={}/>
			</div>
		);
	}
}

export default Record;