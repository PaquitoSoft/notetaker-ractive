import Ractive from 'ractive';
import Template from '../../../views/user/notes/notes-list.html';

var NotesList = Ractive.extend({
	template: Template,
	data: {}
});

export default NotesList;
