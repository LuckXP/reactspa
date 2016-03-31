var React = require('react');

var links = ['welcome', 'cookies', 'fish', 'bears', 'beer']

var NavBar = React.createClass({
    
    render: function() {
        var self = this;
        var link = links.map(function(alink) {
	    	return (
	    		<li className="nav-item active">
				    <a className="nav-link" 
				    onClick={ self.props.setActiveComponent.bind(null, alink)}>{ alink } <span className="sr-only">(current)</span></a>
				</li>
	    		)
    	});
        return (
			 <nav className="navbar navbar-dark bg-inverse">
			  <a className="navbar-brand" href="#">nothing</a>
			  <ul className="nav navbar-nav">
			    { link }
			  </ul>
			</nav>
            )
    }

});

module.exports = NavBar;