var React = require('react');
var FishBox = require('./FishComps/fishBox')

var Jumbotron = React.createClass({
    render: function() {
        return (
            <div className="jumbotron">
			  <h1 className="display-3">Fish Baby!</h1>
			  <p className="lead">This is a simple hero unit, a simple jumbotron-style component for calling extra attention to featured content or information.</p>
			  <hr className="m-y-2" />
			  <p>It uses utility classNamees for typography and spacing to space content out within the larger container.</p>
			  <p className="lead">
			    <a className="btn btn-primary btn-lg" href="#" role="button">Learn more</a>
			  </p>
			</div>
        )
    }

});
var Loader = React.createClass({
    render: function() {
        return (
            <div className="container">
              <i className="fa-spin fa fa-spinner fa-6"></i>
            </div>
        )
    }

});
var FishApp = React.createClass({
    getInitialState: function() {
    	return {
    		FishArray: null
    	}
    },
    LoadAllFishFromServer: function() {
    	var self = this;
    	$.ajax({
    		url: '/api/fish' ,
    		method: 'GET',
    	}).done(function(data){
    		self.setState({
    			FishArray: data
    		})
    	})
    },
    componentDidMount: function() {
    	this.LoadAllFishFromServer();
    },
    submitFishToServer: function(fishData) {
    	console.log("this is from fishApp: ", fishData);
    	var self = this;
    	$.ajax({
    		url: '/api/fish' ,
    		method: 'POST',
    		data: fishData
    	}).done(
    		self.LoadAllFishFromServer()
    	)
    },
    render: function() {
		if(this.state.FishArray) {
			return (
				<div>
					<Jumbotron />
					<FishBox FishArray={ this.state.FishArray } submitFishToServer={ this.submitFishToServer }/>
            	</div>
            )
        } else {
        	return <Loader />
        }
        
    }

});

module.exports = FishApp;