import page from 'page';
import Ractive from 'ractive';

function navigationHandler(routeHandler, onNavigation) {
	return function(context/*, next*/) {
		routeHandler(context, (error, PageComponent = {}, data = {}) => {
			if (!error && !Ractive.components[PageComponent._name]) { // I'm not proud of this
				Ractive.components[PageComponent._name] = PageComponent;
			}
			
			context.pageName = PageComponent._name;
			context.state = data;
			onNavigation(error, context);
		})
	};
}

export function init(routes, onNavigation) {

	routes.forEach((routeHandler, path) => {
		page(path, navigationHandler(routeHandler, onNavigation));
	});

	page({
		hashbang: true
	});
}

export function navTo(url) {
	page.show(url);
}
