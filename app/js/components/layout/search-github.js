import Ractive from 'ractive';
import router from '../../plugins/router';
import User from '../../models/user';
import Template from '../../views/layout/search-github.html';

var SearchGithub = Ractive.extend({
	template: Template,

	oninit: function() {
		this.on('searchUser', (event) => {
			let username = this.get('query');
			event.original.preventDefault();
			
			console.log('Searching user:', username);
			
			User.findByName(username)
				.then((user) => {
					console.log('User data:', user);
					router.navTo(`/user/${username}`, {user: user});
				})
				.catch((err) => {
					// TODO Show an error alert
					console.error('Error retrieving user data:', err);
				});
		});
	},

	data: {
		query: 'PaquitoSoft'
	}
});

export default SearchGithub;
