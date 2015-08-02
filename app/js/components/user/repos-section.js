import Ractive from 'ractive';
import Template from '../../../views/user/repos-section.html';

var ReposSection = Ractive.extend({
	isolated: true,
	template: Template
	// If we declare here data with attributes provided from
	// the template, it stops working
	// This is the nearest issue I found: https://github.com/ractivejs/ractive/issues/1977
	/*,
	data: {
		repos: []
	}*/
});

export default ReposSection;
