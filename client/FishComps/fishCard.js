var React = require('react');

function FishCard(props) {
        if(props.people_eater) {
        	return (
	            <div className="card card-size">
				  <h4 className="card-title">Warning! This fish is a man eater.</h4>
				  <img className="card-img-top fish-img" src={ props.img } alt="Card image cap" />
				  <div className="card-block">
				    <h4 className="card-title">{ props.name }</h4>
				    <button onClick={ props.getId.bind(null, props.id) } className="btn btn-primary">details</button>
				    <button onClick={ props.deleteFish.bind(null, props.id) } className="btn btn-primary">delete</button>
				  </div>
				</div>
	        )
        } else {

	        return (
	            <div className="card card-size">
				  <img className="card-img-top fish-img" src={ props.img } alt="Card image cap" />
				  <div className="card-block">
				    <h4 className="card-title">{ props.name }</h4>
				    <button onClick={ props.getId.bind(null, props.id) } className="btn btn-primary">details</button>
				    <button onClick={ props.deleteFish.bind(null, props.id) } className="btn btn-primary">delete</button>
				  </div>
				</div>
	        )
	    }
    
};

module.exports = FishCard;