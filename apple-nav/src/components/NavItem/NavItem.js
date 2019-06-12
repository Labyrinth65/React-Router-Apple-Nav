import React, { Component } from "react";
import { Link } from "react-router-dom";

export class Nav extends Component {
	render() {
		return <Link to={`/${this.props.name}`}>{this.props.name}</Link>;
	}
}

export default Nav;
