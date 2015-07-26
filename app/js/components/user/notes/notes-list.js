import Ractive from 'ractive';
import Template from '../../../views/user/notes/notes-list.html';

var NotesList = Ractive.extend({
	isolated: true,
	template: Template
});

export default NotesList;
