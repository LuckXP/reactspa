var React = require('react');
var ReactDOM = require('react-dom');
var NavBar = require('./navbar');
var Footer = require('./footer');
var Welcome = require('./welcome');
var Cookies = require('./cookies');
var FishApp = require('./fishApp');
var Bears = require('./bears');
var Beer = require('./beer');

require('./stylesheets/main.scss')


var App = React.createClass({
  getInitialState: function() {
  	return {
  		activeComponent: 'welcome'
  	}
  },
  setActiveComponent: function(componentName) {
  	this.setState({
  		activeComponent: componentName
  	})
  },
  showWhichComponent: function() {
   switch(this.state.activeComponent) {
    case 'welcome':
        return <Welcome />
        break;
    case 'cookies':
        return <Cookies />
        break;
    case 'fish':
        return <FishApp />
        break;
    case 'bears':
        return <Bears />
        break;
    case 'beer':
        return <Beer />
        break;
    default:
       return <Welcome />
}
  },
  render: function() {
    return (
      <div>
        <NavBar setActiveComponent={ this.setActiveComponent } />
        
        {this.showWhichComponent()}
         
      	<Footer />
      </div>
      )
  }
})

ReactDOM.render(
  <App />, document.getElementById('app')
);
