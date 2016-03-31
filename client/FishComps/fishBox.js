var React = require('react');
var FishList = require('./fishList');
var FishForm = require('./fishForm');


var Toggler = React.createClass({
  render: function() {
    return (
      <div className="container">
        <div className="btn-group" data-toggle="buttons">
            <button className="btn btn-primary" onClick={ this.props.toggleActiveComp.bind(null, 'fish') }> Fish Display </button>
            <button className="btn btn-primary" onClick={ this.props.toggleActiveComp.bind(null, 'form') }> Modify Fish </button>
        </div>
      </div>
      )
  }
});

var FishBox = React.createClass({
    getInitialState: function() {
    	return {
    		activeComponent: 'fish'
    		}
    },
    showComp: function() {
    	if(this.state.activeComponent === 'fish') {
    		return <FishList FishArray={ this.props.FishArray } />

    	} else if(this.state.activeComponent === 'form') {
	    	return <FishForm submitFishToServer={ this.props.submitFishToServer } />
	    } else {
	    	return  <FishList FishArray={ this.props.FishArray } />
	    }
    },
    toggleActiveComp: function(name) {
    	this.setState({activeComponent: name})
    },
    render: function() {
        console.log('found the fish', this.props.FishArray);
        return (
            <div className="container marginbttm">
            	<Toggler toggleActiveComp={ this.toggleActiveComp }/>
            	{this.showComp()}
            </div>
            )
    }

});

module.exports = FishBox;
