import React from 'react';
import ReactDOM from 'react-dom';
import { Router, Route, hashHistory } from 'react-router';
import Players from "./components/players";
import NavBar from './components/navBar';
class App extends React.Component {
	constructor(props){
		super(props);
	}
	render() {
		return (<div>
			<NavBar />
			<div className="banner-container">
				<div className="banner"></div>
				<div>
					<p>One-stop shop for Round Robin Tournament Management..</p>
					<button>Learn More</button>
				</div>
			</div>
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
