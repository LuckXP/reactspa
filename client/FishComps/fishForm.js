var React = require('react');

function FishForm(props) {
        return (
            <form onSubmit={ props.submitFishToServer }>
			  <fieldset className="form-group">
			    <label >Name</label>
			    <input onChange={ props.onNameChange } type="text" className="form-control" placeholder="put the fish's name here" />
			  </fieldset>
			  <fieldset className="form-group">
			    <label >Color</label>
			    <input onChange={ props.onColorChange } type="text" className="form-control"  placeholder="put the fish's color here" />
			  </fieldset>
			  <fieldset className="form-group">
			    <label >Length</label>
			    <input onChange={ props.onLengthChange } type="text" className="form-control"  placeholder="put the fish's length here" />
			  </fieldset>
			  <fieldset className="form-group">
			    <label >Image</label>
			    <input onChange={ props.onImgChange } type="text" className="form-control"  placeholder="put the fish's upload an image of the fish here" />
			  </fieldset>
			  <fieldset class="form-group">
			    <label>Is your fish a man eater?</label>
			    <select onChange={ props.peopleEaterChange } class="form-control">
			      <option value={ null } ></option>
			      <option value={ true } >yes</option>
			      <option value={ false } >no</option>
			    </select>
			  </fieldset>
			  <button type="submit" class="btn btn-primary">Submit</button>
			</form>
            )
}

module.exports = FishForm;
