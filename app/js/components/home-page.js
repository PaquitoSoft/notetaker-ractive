import Ractive from 'ractive';
import Template from '../../views/home-page.html';

var HomePage = Ractive.components.HomePage = Ractive.extend({
	template: Template
});
HomePage._name = 'HomePage';

export default HomePage;
