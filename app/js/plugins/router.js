import page from 'page';
import Ractive from 'ractive';

function navigationHandler(componentName, onNavigation) {
	return function(context, next) {
		onNavigation(componentName, context);
	};
}

function init(routes, onNavigation) {

	routes.forEach((PageComponent, path) => {
		page(path, navigationHandler(PageComponent._name, onNavigation));
		Ractive.components[PageComponent._name] = PageComponent;
	});

	page({
		hashbang: true
	});
}

function navTo(url, context) {
	page.show(url, context);
}

export default {
	init: init,
	navTo: navTo
};