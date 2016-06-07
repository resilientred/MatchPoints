import React from 'react';
import { Link } from 'react-router';

class ErrorPage extends React.Component {
    constructor(props) {
        super(props);
        this.displayName = 'ErrorPage';
    }
    render() {
        return <div>
          <h1>404 NOT FOUND</h1>
          <Link to="/" style={{color: "black"}}>Back to Main Page</Link>
        </div>;
    }
}

export default ErrorPage;
