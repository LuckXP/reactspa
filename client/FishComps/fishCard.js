var React = require('react');

var FishCard = React.createClass({
    render: function() {
        return (
            <div className="card card-size">
			  <img className="card-img-top fish-img" src={ this.props.img } alt="Card image cap" />
			  <div className="card-block">
			    <h4 className="card-title">{ this.props.name }</h4>
			    <p className="card-text">color: { this.props.color }</p>
			  	<p className="card-text">Some quick example text</p>
			  	<p className="card-text">Some quick example text</p>
			  </div>
			</div>
        )
    }
});

module.exports = FishCard;