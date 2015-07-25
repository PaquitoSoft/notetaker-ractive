'use strict';

import router from '../plugins/router';
import HomePage from '../components/home-page';
import UserPage from '../components/user-page';

var routes = new Map();
routes.set('/', HomePage);
routes.set('/user/:username', UserPage);

export default routes;