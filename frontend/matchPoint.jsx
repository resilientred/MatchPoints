import React from 'react';
import ReactDOM from 'react-dom';
import { Router, Route, browserHistory, IndexRoute } from 'react-router';
import Players from "./components/players";
import NavBar from './components/navBar';
import Splash from "./components/splash";
import SignUp from "./components/signUp";
import LogIn from "./components/logIn";

class App extends React.Component {
	constructor(props){
		super(props);
	}
	render() {
		return (<div>
			<NavBar />
			{ this.props.children }
		</div>);
	}
}

let Routes = (
	<Route path="/" component={App}>
		<IndexRoute component={Splash}/>
		<Route path="login" component={LogIn} />
		<Route path="signup" component={SignUp} />
		<Route path="players" component={Players} />
	</Route>
)


document.addEventListener("DOMContentLoaded", ()=>{
		ReactDOM.render(
			<Router history={browserHistory}>
				{Routes}
			</Router>,
			document.getElementById("root")
		);
});
