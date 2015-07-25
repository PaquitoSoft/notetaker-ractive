import Ractive from 'ractive';
import Template from '../../views/user/user-profile-section.html';

var UserProfileSection = Ractive.extend({
	template: Template,
	data: {
		username: '',
		bio: {}
	}
});

export default UserProfileSection;
