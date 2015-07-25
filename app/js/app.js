'use strict';

import Ractive from 'ractive';
import Template from './views/app.html';
import RouterComponent from './components/layout/router';
import SearchGithub from './components/layout/search-github';
import _router from './plugins/router';
import routes from './config/routes';

// TODO - Require Bootstrap CSS

let App = new Ractive({
	el: '#app',

	template: Template,

	components: {
		SearchGithub: SearchGithub,
		Router: RouterComponent
	},

	onrender: function() {
		_router.init(routes, this.onNavigation.bind(this));
		console.info('App::onrender# Application rendered!');
	},

	data: {
		componentName: 'HomePage'
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