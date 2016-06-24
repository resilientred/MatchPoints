import React from 'react';

export default class Splash extends React.Component {
    constructor(props) {
        super(props);
        this.displayName = 'Splash';
    }
    render() {
        return (<div className="banner-container">
				<div className="banner"></div>
				<div>
					<p>One-stop shop for Round Robin Tournament Management..</p>
					<button>Please Sign In</button>
				</div>
			</div>);
    }
}

