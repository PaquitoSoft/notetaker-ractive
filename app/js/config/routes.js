'use strict';

import HomePage from '../components/home-page';
import UserPage from '../components/user-page';
import UserModel from '../models/user';

var routes = {
	'/': function _homeController(context, next) {
		next(null, HomePage);
	},
	'/user/:username': function _profileController(context, next) {
		UserModel.findByName(context.params.username)
			.then((user) => {
				next(null, UserPage, {
					user: user
				});
			})
			.catch((err) => {
				err.displayMessage = 'User data not found!';
				next(err);
			});	
	}
};

export default routes;