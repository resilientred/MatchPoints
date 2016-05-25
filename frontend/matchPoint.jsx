import React from 'react';
import ReactDOM from 'react-dom';
import { Router, Route, hashHistory } from 'react-router';
import Players from "./components/players.jsx";

class App extends React.Component {
	constructor(props){
		super(props);
	}
	render() {
		return (<div>
			<h1>Hello World!</h1>
			{ this.props.children }
		</div>);
	}
}

let Routes = (
	<Route path="/" component={App}>
		<Route path="players" component={Players} />
	</Route>
)


document.addEventListener("DOMContentLoaded", ()=>{
		ReactDOM.render(
			<Router history={hashHistory}>
				{Routes}
			</Router>,
			document.getElementById("root")
		);
});
