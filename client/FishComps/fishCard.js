var React = require('react');

function FishCard(props) {
        return (
            <div className="card card-size">
			  <img className="card-img-top fish-img" src={ props.img } alt="Card image cap" />
			  <div className="card-block">
			    <h4 className="card-title">{ props.name }</h4>
			    <p className="card-text">color: { props.color }</p>
			    <button onClick={ props.getId.bind(null, props.id) } className="btn btn-primary">details</button>
			  </div>
			</div>
        )
    
};

module.exports = FishCard;