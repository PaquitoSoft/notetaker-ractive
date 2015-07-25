import Ractive from 'ractive';
import Template from '../../views/layout/search-github.html';

var SearchGithub = Ractive.extend({
	template: Template,
	oninit: function() {
		this.on('searchUser', (event) => {
			event.original.preventDefault();
			console.log(event);
			console.log('Serching user:', this.get('query'));
		});
	},
	data: {
		query: ''
	}
});

export default SearchGithub;
