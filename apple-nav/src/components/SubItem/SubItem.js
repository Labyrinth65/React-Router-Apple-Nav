import React, { Component } from "react";
import { Link } from "react-router-dom";

export class SubItem extends Component {
	render() {
		return (
			<Link to="/" className="subItem">
				<img src={this.props.img} alt="" />
				{this.props.name}
			</Link>
		);
	}
}

export default SubItem;
