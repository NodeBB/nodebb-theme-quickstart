'use strict';

const Controllers = module.exports;

const accountHelpers = require.main.require('./src/controllers/accounts/helpers');
const helpers = require.main.require('./src/controllers/helpers');

Controllers.renderAdminPage = (req, res) => {
	res.render('admin/plugins/theme-quickstart', {
		title: 'Quick Start Theme',
	});
};

Controllers.renderThemeSettings = async (req, res, next) => {
	const userData = await accountHelpers.getUserDataByUserSlug(req.params.userslug, req.uid, req.query);
	if (!userData) {
		return next();
	}
	const lib = require('./theme');
	userData.theme = await lib.loadThemeConfig(userData.uid);

	userData.title = '[[themes/harmony:settings.title]]';
	userData.breadcrumbs = helpers.buildBreadcrumbs([
		{ text: userData.username, url: `/user/${userData.userslug}` },
		{ text: '[[themes/harmony:settings.title]]' },
	]);

	res.render('account/theme', userData);
};
