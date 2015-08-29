import Ractive from 'ractive';
import { RouterManager } from 'ps-ractive-router';
import Template from '../../../views/layout/search-user.html';

var SearchGithub = Ractive.extend({
	isolated: true,
	template: Template,

	oninit() {
		this.on('searchUser', (rEvent) => {
			rEvent.original.preventDefault();
			if (rEvent.context.query.trim().length) {
				RouterManager.navTo(`/user/${rEvent.context.query}`);
				this.set('query', '');
			}
		});
	},

	data: {
		query: ''
	}
});

export default SearchGithub;
