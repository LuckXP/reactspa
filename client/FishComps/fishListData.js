var React = require('react');
var FishList = require('./fishList');
var Loader = require('../loader');

var FishListData = React.createClass({
    getInitialState: function() {
    	return {
    		allFish: null
    	}
    },
    contextTypes: {
        sendNotification: React.PropTypes.func.isRequired
    },
    deleteFish: function(id) {
        var self = this;
        if( confirm('delete this fish')) {
            $.ajax({
                url: '/api/fish/oneFish/' + id,
                method: 'DELETE'
            }).done(function() {
                self.LoadAllFishFromServer();
                self.context.sendNotification("you deleted a fish");
            });
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
    	return this.state.allFish ? <FishList fishArray={ this.state.allFish } getId={ this.props.getId } deleteFish={ this.deleteFish } /> : <Loader />
    },

});

module.exports = FishListData;