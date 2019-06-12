import React, { Component } from "react";
import SubItem from "../SubItem/SubItem";

export class SubNav extends Component {
	render() {
		if (this.props.data.length === 0) {
			return <h2>Loading...</h2>;
		}
		return (
			<div className="subNav">
				{this.props.data
					.find(product => product.name === this.props.match.params.name)
					.subLinks.map(link => (
						<SubItem key={link.name} {...link} />
					))}
			</div>
		);
	}
}

export default SubNav;
