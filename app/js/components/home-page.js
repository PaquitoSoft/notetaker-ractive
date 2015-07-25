'use strict';

import Ractive from 'ractive';
import Template from '../views/home-page.html';

var HomePage = Ractive.extend({
	template: Template,
	data: {}
});
HomePage._name = 'HomePage';

Ractive.components.HomePage = HomePage;

export default HomePage;
