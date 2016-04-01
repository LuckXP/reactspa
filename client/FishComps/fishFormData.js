var React = require('react');

var FishForm = require('./fishForm');


var FishFormData = React.createClass({
    getInitialState: function() {
    	return {
    		fishName: null,
    		peopleEater: null,
    		fishColor: null,
    		fishLength: null,
    		fishImg: null
    	}
    },
    onNameChange: function(event) {
    	this.setState({ fishName: event.target.value })
    },
    onColorChange: function(event) {
    	this.setState({ fishColor: event.target.value })
    },
    onLengthChange: function(event) {
    	this.setState({ fishLength: event.target.value })
    },
    onImgChange: function(event) {
    	this.setState({ fishImg: event.target.value })
    },
    peopleEaterChange: function(event) {
    	console.log(event.target.value);
    	this.setState({ peopleEater: event.target.value })
    },
    submitFishToServer: function(e) {
    	e.preventDefault();

    	var fishData = {
	    		name: this.state.fishName.trim(),
				color: this.state.fishColor.trim(),
				people_eater: this.state.peopleEater,
				length: this.state.fishLength.trim(),
				img: this.state.fishImg.trim(),
	   	};
    	var self = this;
    	$.ajax({
    		url: '/api/fish' ,
    		method: 'POST',
    		data: fishData
    	}).done( function() {
    		self.props.toggleActiveComp('fish');
		})
    },
    render: function() {
        return (
        	<FishForm 
        	 submitFishToServer = { this.submitFishToServer }
        	 onNameChange = { this.onNameChange }
        	 onColorChange = { this.onColorChange }
        	 onLengthChange = { this.onLengthChange }
        	 onImgChange = { this.onImgChange }
        	 peopleEaterChange = { this.peopleEaterChange } />
        )
    }

});

module.exports = FishFormData;