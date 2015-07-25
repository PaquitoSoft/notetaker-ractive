'use strict';

import Ractive from 'ractive';
import Template from './views/app.html';
import RouterComponent from './components/layout/router';
import SearchGithub from './components/layout/search-github';
import _router from './plugins/router';
import routes from './config/routes';

// TODO - Require Bootstrap CSS

var App = new Ractive({
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

	onNavigation: function(pageName, navigationContext) {
		console.log('APP::onNavigation# Navigating to:', pageName);
		this.set('componentName', pageName);
	}
});

export default App;