var React = require('react');

var links = ['welcome', 'cookies', 'fish',' bears', 'beer']

var Footer = React.createClass({
    render: function() {
        return (
			 <nav className="navbar navbar-fixed-bottom navbar-dark bg-inverse">
			  <ul className="nav navbar-nav">
			    <li className="nav-item active">
			      <a className="nav-link" href="#">Home <span className="sr-only">(current)</span></a>
			    </li>
			    <li className="nav-item">
			      <a className="nav-link" href="#">Contact</a>
			    </li>
			  </ul>
			</nav>
            )
    }

});

module.exports = Footer;