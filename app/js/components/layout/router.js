import Ractive from 'ractive';

/*
	This router has been built on top of the ideas from this Stack Overflow question:
	http://stackoverflow.com/questions/31075341/how-to-create-ractives-subcomponents-dynamically-and-change-them-programmatical
*/

var Router = Ractive.extend({
	template: '<router-handler/>',
	components: {
		'router-handler': function() {
			return this.get('componentName');
		}
	},
	oninit() {
		this.observe('componentName', function(newValue, oldValue) {
			if (this.fragment.rendered) {
				this.reset();
			}
		});
	}
});

export default Router;
