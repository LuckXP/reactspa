var React = require('react');

var Loader = React.createClass({
    render: function() {
        return (
            <div className="container">
              <i className="fa-spin fa fa-spinner fa-6"></i>
            </div>
        )
    }

});

module.exports = Loader;