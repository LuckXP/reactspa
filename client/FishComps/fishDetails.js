var React = require('react');

function FishDetails(props) {
	console.log(props);
	return (
		<div className="card">
		  <img className="card-img-top fish-img" src={ props.oneFish.img } alt="Card image cap" />
		  <div className="card-block">
		    <h4 className="card-title">{ props.oneFish.name }</h4>
		    <p className="card-text">color: { props.oneFish.color }</p>
		    <p className="card-text">length: { props.oneFish.length }</p>
		  </div>
		</div>
		)
};

module.exports = FishDetails;