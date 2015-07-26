'use strict';

import Ractive from 'ractive';
import AddNote from './notes/add-note';
import NotesList from './notes/notes-list';
import Template from '../../views/user/notes-section.html';

var NotesSection = Ractive.extend({
	isolated: true,
	template: Template,
	components: {
		AddNote: AddNote,
		NotesList: NotesList
	}
});

export default NotesSection;
