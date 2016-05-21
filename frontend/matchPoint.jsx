import React from 'react';
import ReactDOM from 'react-dom';
import { Router, Route, hashHistory } from 'react-router';


class App extends React.Component {
	constructor(){
		super();
	}
	render() {
		return (<div>
			<h1>Hello World!</h1>
			{ this.props.children }
		</div>);
	}
}
document.addEventListener("DOMContentLoaded", ()=>{
		ReactDOM.render(
			<App />,
			document.getElementById("root")
		);
	}
);
console.log('loading...');
