import * as ajax from '../plugins/ajax';

const FIREBASE_BASE_URL = `https://ps-github-saver.firebaseio.com`;
const GITHUB_BASE_URL = 'https://api.github.com';

class User {

	constructor(profile, repos, notes) {
		this.profile = profile;
		this.repos = repos;
		this.notes = notes;
	}

	static findByName(username) {
		let userNotesUrl = `${FIREBASE_BASE_URL}/${username}.json`,
			userProfileUrl = `${GITHUB_BASE_URL}/users/${username}`,
			userReposUrl = `${GITHUB_BASE_URL}/users/${username}/repos`;

		// We need to get Github information as well as our
		// personal notes about the user
		let result = new Promise((resolve, reject) => {
			Promise.all([
				ajax.getJson(userProfileUrl),
				ajax.getJson(userReposUrl),
				ajax.getJson(userNotesUrl),
			])
			.then(values => {
				resolve(new User(values[0], values[1], values[2]));
			})
			.catch(reject);
		});

		return result;
	}
}

export default User;
