import Ractive from 'ractive';
import Template from './views/app.html';
import RouterComponent from './components/layout/router';
import SearchGithub from './components/layout/search-github';
import * as RouterPlugin from './plugins/router';
import routes from './config/routes';

let App = new Ractive({
	el: '#app',

	template: Template,

	components: {
		// We need a first blank component before router tells us which page we must show
		Void: Ractive.extend({template:''}),
		SearchGithub: SearchGithub,
		Router: RouterComponent
	},

	onrender: function() {
		RouterPlugin.init(routes, this.onNavigation.bind(this));
		console.info('App::onrender# Application rendered!');
	},

	data: {
		componentName: 'Void'
	},

	onNavigation: function(error, navigationContext) {
		console.log('APP::onNavigation# Navigating to:', navigationContext.pageName, 'with context:', navigationContext);

		if (error) {
			console.warn('App::onNavigation# Error navigating:', error);
			this.showAlert(error.message);
		} else {
			this.set({
				req: {
					params: navigationContext.params,
					body: navigationContext.state
				},
				componentName: navigationContext.pageName
			});

			if (this.get('componentName') === navigationContext.pageName) {
				this.findComponent('Router').reset();
			}
		}
	},

	showAlert: function(message) {
		this.set('errorMsg', message);
		setTimeout(() => {
			this.set('errorMsg', null);
		}, 2500);
	}
});

export default App;
