import * as ajax from '../plugins/ajax';

const GITHUB_BASE_URL = 'https://api.github.com';
const FIREBASE_BASE_URL = `https://ps-github-saver.firebaseio.com`;

class User {

	constructor(profile, repos, notes) {
		this.profile = profile;
		this.repos = repos;
		this.notes = notes || []; // Default parameters values are only valid for undefined ones
	}

	addNote(newNote) {
		this.notes.push(newNote);
		return ajax.putJson(`${FIREBASE_BASE_URL}/${this.profile.login.toLowerCase()}.json`, this.notes);
	}

	removeNote(note) {
		var index = this.notes.indexOf(note);
		if (index >= 0) {
			this.notes.splice(index, 1);
			return ajax.putJson(`${FIREBASE_BASE_URL}/${this.profile.login.toLowerCase()}.json`, this.notes);
		}
	}

	static findByName(username) {
		let userProfileUrl = `${GITHUB_BASE_URL}/users/${username}`,
			userReposUrl = `${GITHUB_BASE_URL}/users/${username}/repos`,
			userNotesUrl = `${FIREBASE_BASE_URL}/${username.toLowerCase()}.json`;

		let result = new Promise((resolve, reject) => {
			Promise.all([
				ajax.getJson(userProfileUrl, {cache: true, ttl: 60}), // TTL in minutes
				ajax.getJson(userReposUrl, {cache: true, ttl: 60}), // TTL in minutes
				ajax.getJson(userNotesUrl)
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
