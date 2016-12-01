var React = require('react');

var Router = require('react-router');
var Link = Router.Link;

var Whoops404 = React.createClass({
	render() {
		return (
			<div id="not-found">
				<h1>Whoops</h1>
				<p>We cannot find the page that you were looking for.</p>
				<p>
					Were you looking for one of these:
					<ul>
						<li><Link to="/">Join as Audience</Link></li>
						<li><Link to="/speaker">Start the presentation</Link></li>
						<li><Link to="/board">View the board</Link></li>
					</ul>
				</p>
			</div>
		);
	}
});

module.exports = Whoops404;