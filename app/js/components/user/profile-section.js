import Ractive from 'ractive';
import Template from '../../../views/user/profile-section.html';

var UserProfileSection = Ractive.extend({
	isolated: true,
	template: Template
});

export default UserProfileSection;
