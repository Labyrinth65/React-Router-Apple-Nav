import React, { Component } from "react";
import NavItem from "../NavItem/NavItem";

export class NavWrapper extends Component {
	render() {
		return (
			<div className="navWrapper">
				{this.props.data.map(product => (
					<NavItem key={product.id} {...product} />
				))}
			</div>
		);
	}
}

export default NavWrapper;
