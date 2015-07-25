import Ractive from 'ractive';
import User from '../../../models/user';
import Template from '../../../views/user/notes/add-note.html';

var AddNote = Ractive.extend({
	template: Template,
	oninit: function() {
		this.on('createNote', (rEvent) => {
			let newNote = this.get('newNote');
			rEvent.original.preventDefault();

			console.log('AddNote::createNote# Adding new note to user:', this.get('user').profile.login);

			this.get('user').addNote(this.get('newNote'));
		});
	},
	data: {
		newNote: ''
	}
});

export default AddNote;
