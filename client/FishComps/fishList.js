var React = require('react');
var FishCard= require('./fishCard');

var FishList = React.createClass({
    render: function() {
        console.log('fishlist is getting its data', this.props.FishArray);
        var fishList = this.props.FishArray.map(function(item) {
        	return (
        		<FishCard 
        			name = { item.name }
        			color = { item.color }
        			people_eater = { item.people_eater }
        			length = { item.length }
        			img = { item.img } />
        	);
        })
        return (
        	<div className="fish-list">
        		{ fishList }
        	</div>
        )
    }

});

module.exports = FishList;