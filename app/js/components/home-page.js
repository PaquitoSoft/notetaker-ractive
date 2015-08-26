// import Ractive from 'ractive';
import { BasePage } from 'ps-ractive-router';
import Template from '../../views/home-page.html';

// var HomePage = Ractive.components.HomePage = Ractive.extend({
// 	template: Template
// });
// HomePage._name = 'HomePage';

var HomePage = BasePage.extend({
	name: 'HomePage',
	template: Template
});


export default HomePage;
