import Ractive from 'ractive';
import Template from '../../views/user/user-profile-section.html';

var UserProfileSection = Ractive.extend({
	template: Template,
	oninit: function() {
		console.log('UserProfileSection::oninit');
	},
	onrender: function() {
		console.log('UserProfileSection::onrender');
	}
});

export default UserProfileSection;
