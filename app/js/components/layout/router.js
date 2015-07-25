import Ractive from 'ractive';

/*
	This router has been built on top of the ideas from this Stack Overflow question:
	http://stackoverflow.com/questions/31075341/how-to-create-ractives-subcomponents-dynamically-and-change-them-programmatical
*/

var Router = Ractive.extend({
	template: '<router-handler/>',
	components: {
		'router-handler': function() {
			console.log('Router::router-handler# Component to render:', this.get('componentName'));
			return this.get('componentName');
		}
	},
	oninit: function() {
		console.log('Router::oninit# Starter componentName:', this.get('componentName'));
		this.observe('componentName', function(newValue, oldValue) {
			if (this.fragment.rendered) {
				this.reset();
			}
		});
	},
	onrender: function() {
		console.log('Router::onrender# Rendering router component:', this.get('componentName'));
	}
});

export default Router;