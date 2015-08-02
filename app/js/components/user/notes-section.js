'use strict';

import Ractive from 'ractive';
import template from '../../../views/user/notes-section.html';
import AddNoteComponent from './notes/add-note';
import NotesListComponent from './notes/notes-list';

var NotesSection = Ractive.extend({
	isolated: true,
	template: template,
	components: {
		AddNote: AddNoteComponent,
		NotesList: NotesListComponent
	}
});

export default NotesSection;
