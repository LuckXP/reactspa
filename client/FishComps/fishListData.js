var React = require('react');
var FishList = require('./fishList');
var Loader = require('../loader');

var FishListData = React.createClass({
    getInitialState: function() {
    	return {
    		allFish: null
    	}
    },
    LoadAllFishFromServer: function() {
    	var self = this;
    	$.ajax({
    		url: '/api/fish' ,
    		method: 'GET',
    	}).done(function(data){
    		self.setState({
    			allFish: data
    		})
    	});
    },
    componentDidMount: function() {
    	this.LoadAllFishFromServer();
    },
    render: function() {
    	return this.state.allFish ? <FishList fishArray={ this.state.allFish } getId={ this.props.getId } /> : <Loader />
    },

});

module.exports = FishListData;