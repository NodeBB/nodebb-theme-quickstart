



const accountHelpers = nodebb.require('./src/controllers/accounts/helpers');
const helpers = nodebb.require('./src/controllers/helpers');

export function renderAdminPage(req, res) {
	res.render('admin/plugins/theme-quickstart', {
		title: 'Quick Start Theme',
	});
};

export async function renderThemeSettings(req, res, next) {
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
