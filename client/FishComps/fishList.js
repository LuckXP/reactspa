var React = require('react');
var FishCard= require('./fishCard');

function FishList(props) {
        console.log(props.getId, 'see! fish list has this')
        var allFish = props.fishArray.map(item => {
        	
            return (
        		<FishCard 
        			deleteFish = { props.deleteFish }
                    getId = { props.getId }
                    id = { item._id }
                    key= { item._id }
                    name = { item.name }
        			color = { item.color }
        			people_eater = { item.people_eater }
        			length = { item.length }
        			img = { item.img } />
        	);
        });
        return (
        	<div className="fish-list">
        		{ allFish }
        	</div>
        )
    

};



module.exports = FishList;