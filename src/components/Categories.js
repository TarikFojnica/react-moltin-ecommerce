import React from 'react'

export default class Categories extends React.Component {
	render() {
		return (
			<div className="ui form sidebar-element">
				<div className="grouped fields">
					<h4>CATEGORIES</h4>
					<div className="field">
						<div className="ui checkbox">
							<input type="checkbox" name="checkbox"></input>
							<label>Masne</label>
						</div>
					</div>
					<div className="field">
						<div className="ui checkbox">
							<input type="checkbox" name="checkbox"></input>
							<label>Torbe</label>
						</div>
					</div>
					<div className="field">
						<div className="ui checkbox">
							<input type="checkbox" name="checkbox"></input>
							<label>Specials</label>
						</div>
					</div>
				</div>
			</div>
		);
	}
}
