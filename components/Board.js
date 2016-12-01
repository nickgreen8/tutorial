var React = require('react');

var Board = React.createClass({
	render() {
		return (
			<div>
				<h2>Board : {this.props.dance}</h2>
			</div>
		);
	}
});

module.exports = Board;