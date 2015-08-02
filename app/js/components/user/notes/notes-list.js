import Ractive from 'ractive';
import Template from '../../../../views/user/notes/notes-list.html';

var NotesList = Ractive.extend({
	isolated: true,
	template: Template,
	oninit() {
		this.on('deleteNote', (rEvent) => {
			this.fire('RemoveUserNote', rEvent.context);
		});
	}
});

export default NotesList;
