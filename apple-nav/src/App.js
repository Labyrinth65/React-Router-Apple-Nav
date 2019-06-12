import React from "react";
import "./App.scss";
import { Route } from "react-router-dom";
import { Link } from "react-router-dom";
import Data from "./Data";
import NavWrapper from "./components/NavWrapper/NavWrapper";
import SubNav from "./components/SubNav/SubNav";

class App extends React.Component {
	constructor() {
		super();
		this.state = {
			data: []
		};
	}

	componentDidMount() {
		this.setState({
			data: Data
		});
	}

	render() {
		return (
			<div className="App">
				<div className="topHeader">
					<Link to="/" className="appleIcon">
						<i className="fab fa-apple" />
					</Link>
					<NavWrapper {...this.state} />
				</div>
				<Route
					path="/:name"
					render={props => (
						<div>
							<SubNav {...props} {...this.state} />
						</div>
					)}
				/>
			</div>
		);
	}
}

export default App;
