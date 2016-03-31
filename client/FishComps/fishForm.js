var React = require('react');

var FishForm = React.createClass({
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
    handleFormSubmit: function(event) {
    	event.preventDefault();
    	if(this.state.peopleEater === null || undefined) {
    		alert('please let us know if your fish eats people. \n For SCIENCE and SAFETY!');
    		return;
    	} else {
	    	var fishData = {
	    		name: this.state.fishName.trim(),
				color: this.state.fishColor.trim(),
				people_eater: this.state.peopleEater,
				length: this.state.fishLength.trim(),
				img: this.state.fishImg.trim(),
	    	};
	    	this.props.submitFishToServer(fishData);

	    	this.setState({
	    		fishName: "",
				fishColor: "",
				fishLength: "",
				fishImg: "",
				peopleEater: null,
			});
		}
    },
    render: function() {
        return (
            <form onSubmit={ this.handleFormSubmit }>
			  <fieldset className="form-group">
			    <label >Name</label>
			    <input onChange={ this.onNameChange } value={ this.state.fishName } type="text" className="form-control" placeholder="put the fish's name here" />
			  </fieldset>
			  <fieldset className="form-group">
			    <label >Color</label>
			    <input onChange={ this.onColorChange } value={ this.state.fishColor }  type="text" className="form-control"  placeholder="put the fish's color here" />
			  </fieldset>
			  <fieldset className="form-group">
			    <label >Length</label>
			    <input onChange={ this.onLengthChange } value={ this.state.fishLength }  type="text" className="form-control"  placeholder="put the fish's length here" />
			  </fieldset>
			  <fieldset className="form-group">
			    <label >Image</label>
			    <input onChange={ this.onImgChange } value={ this.state.fishImg }   type="text" className="form-control"  placeholder="put the fish's upload an image of the fish here" />
			  </fieldset>
			  <fieldset class="form-group">
			    <label>Is your fish a man eater?</label>
			    <select onChange={ this.peopleEaterChange } class="form-control">
			      <option value={ null } ></option>
			      <option value={ true } >yes</option>
			      <option value={ false } >no</option>
			    </select>
			  </fieldset>
			  <button type="submit" class="btn btn-primary">Submit</button>
			</form>
            )
    }
});

module.exports = FishForm;
