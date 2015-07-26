import Ractive from 'ractive';
import * as router from '../../plugins/router';
import User from '../../models/user';
import Template from '../../views/layout/search-github.html';

var SearchGithub = Ractive.extend({
	isolated: true,
	template: Template,

	oninit() {
		this.on('searchUser', (rEvent) => {
			let username = this.get('query');
			rEvent.original.preventDefault();
			router.navTo(`/user/${username}`);
			this.set('query', '');
		});
	},

	data: {
		query: ''
	}
});

export default SearchGithub;
