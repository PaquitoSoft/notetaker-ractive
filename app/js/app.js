import Ractive from 'ractive';
import template from '../views/app.html';

import * as RouterPlugin from './plugins/router';
import routesConfiguration from './config/routes';

import RouterComponent from './components/layout/router';
import SearchUserComponent from './components/layout/search-user';
import HomePageComponent from './components/home-page';
import UserPageComponent from './components/user-page'



let App = new Ractive({
	el: '#app',
	template: template,
	components: {
		SearchUser: SearchUserComponent,
		Router: RouterComponent,
		EmptyPage: Ractive.extend({ template: '' })
	},
	data: {
		componentName: 'EmptyPage'
	},
	oncomplete() {
		// Wait for the app to be rendered so we properly handle transition
		// from EmptyPage to the one the URL dictates
		RouterPlugin.init(routesConfiguration, this.onNavigation.bind(this));
		console.log('App::oninit# Application initialized!');
	},
	onNavigation(error, navigationContext) {
		console.log('APP::onNavigation# Navigating to:', navigationContext.pageName, 'with context:', navigationContext);

		if (error) {
			console.warn('App::onNavigation# Error navigating:', error);
			this.showAlert(error.displayMessage || error.message);
		} else {
			this.set({
				req: {
					params: navigationContext.params,
					body: navigationContext.state
				},
				componentName: navigationContext.pageName
			});
		}
	},
	showAlert(message) {
		this.set('errorMsg', message);
		setTimeout(() => {
			this.set('errorMsg', null);
		}, 2500);
	}
});

export default App;
