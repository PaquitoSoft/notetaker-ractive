import Ractive from 'ractive';
import User from '../../../models/user';
import Template from '../../../views/user/notes/add-note.html';

var AddNote = Ractive.extend({
	isolated: true,
	template: Template,
	oninit: function() {
		this.on('createNote', (rEvent) => {
			rEvent.original.preventDefault();
			this.fire('AddUserNote', this.get('newNote'));
			this.set('newNote', '');
		});
	},
	data: {
		newNote: ''
	}
});

export default AddNote;
