// import Ractive from 'ractive';
import { BasePage } from 'ps-ractive-router';
import Template from '../../views/user-page.html';
import UserProfile from './user/profile-section';
import Repos from './user/repos-section';
import Notes from './user/notes-section';

var UserPage = BasePage.extend({
	name: 'UserPage',
	template: Template,
	components: {
		UserProfile: UserProfile,
		Repos: Repos,
		Notes: Notes
	},
	onRequestDone: function(request) {
		this.set('user', request.locals.user);
	},
	oninit() {
		// this.observe('req', (request) => {
		// 	this.set('user', request.body.user);
		// });

		// *.*, *.AddUserNote, AddNote.*, AddNote.AddUserNote
		this.on('*.AddUserNote', (newNote) => {
			console.log('UserPage::createNote# Adding new note to user:', this.get('user').profile.login);
			this.get('user').addNote(newNote);
		});

		this.on('*.RemoveUserNote', (note) => {
			this.get('user').removeNote(note);
		});
	}
});
// UserPage._name = 'UserPage';

export default UserPage;
