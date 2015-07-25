import Ractive from 'ractive';
import Template from '../../views/user/repos-section.html';

var ReposSection = Ractive.extend({
	template: Template,
	data: {
		username: '',
		repos: []
	}
});

export default ReposSection;
