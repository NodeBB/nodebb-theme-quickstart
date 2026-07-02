
import * as controllers from './controllers.js';

const nconf = nodebb.require('nconf');
const meta = nodebb.require('./src/meta');
const _ = nodebb.require('lodash');
const user = nodebb.require('./src/user');

const defaults = {
	enableQuickReply: 'on',
	enableBreadcrumbs: 'on',
	centerHeaderElements: 'off',
	mobileTopicTeasers: 'off',
	stickyToolbar: 'on',
	autohideBottombar: 'on',
	openSidebars: 'off',
	chatModals: 'off',
};

export async function init(params) {
	const { router, middleware } = params;
	const routeHelpers = nodebb.require('./src/routes/helpers');

	routeHelpers.setupAdminPageRoute(router, '/admin/plugins/theme-quickstart', [], controllers.renderAdminPage);

	routeHelpers.setupPageRoute(router, '/user/:userslug/theme', [
		middleware.exposeUid,
		middleware.ensureLoggedIn,
		middleware.canViewUsers,
		middleware.checkAccountPermissions,
	], controllers.renderThemeSettings);

	if (nconf.get('isPrimary') && process.env.NODE_ENV === 'production') {
		setTimeout(buildSkins, 0);
	}
}

async function buildSkins() {
	try {
		const plugins = nodebb.require('./src/plugins');
		await plugins.prepareForBuild(['client side styles']);
		for (const skin of meta.css.supportedSkins) {
			// eslint-disable-next-line no-await-in-loop
			await meta.css.buildBundle(`client-${skin}`, true);
		}
		nodebb.require('./src/meta/minifier').killAll();
	} catch (err) {
		console.error(err.stack);
	}
}

export async function addAdminNavigation(header) {
	header.plugins.push({
		route: '/plugins/theme-quickstart',
		icon: 'fa-paint-brush',
		name: 'Theme Quick Start',
	});
	return header;
};

export async function addProfileItem(data) {
	data.links.push({
		id: 'theme',
		route: 'theme',
		icon: 'fa-paint-brush',
		name: '[[themes/harmony:settings.title]]',
		visibility: {
			self: true,
			other: false,
			moderator: false,
			globalMod: false,
			admin: false,
		},
	});

	return data;
};

export async function defineWidgetAreas(areas) {
	const locations = ['header', 'sidebar', 'footer'];
	const templates = [
		'categories.tpl', 'category.tpl', 'topic.tpl', 'users.tpl',
		'unread.tpl', 'recent.tpl', 'popular.tpl', 'top.tpl', 'tags.tpl', 'tag.tpl',
		'login.tpl', 'register.tpl',
	];
	function capitalizeFirst(str) {
		return str.charAt(0).toUpperCase() + str.slice(1);
	}
	templates.forEach((template) => {
		locations.forEach((location) => {
			areas.push({
				name: `${capitalizeFirst(template.split('.')[0])} ${capitalizeFirst(location)}`,
				template: template,
				location: location,
			});
		});
	});

	areas = areas.concat([
		{
			name: 'Main post header',
			template: 'topic.tpl',
			location: 'mainpost-header',
		},
		{
			name: 'Main post footer',
			template: 'topic.tpl',
			location: 'mainpost-footer',
		},
		{
			name: 'Sidebar Footer',
			template: 'global',
			location: 'sidebar-footer',
		},
		{
			name: 'Brand Header',
			template: 'global',
			location: 'brand-header',
		},
		{
			name: 'About me (before)',
			template: 'account/profile.tpl',
			location: 'profile-aboutme-before',
		},
		{
			name: 'About me (after)',
			template: 'account/profile.tpl',
			location: 'profile-aboutme-after',
		},
	]);

	return areas;
};

export async function loadThemeConfig(uid) {
	const [themeConfig, userConfig] = await Promise.all([
		meta.settings.get('harmony'),
		user.getSettings(uid),
	]);

	const config = { ...defaults, ...themeConfig, ...(_.pick(userConfig, Object.keys(defaults))) };
	config.enableQuickReply = config.enableQuickReply === 'on';
	config.enableBreadcrumbs = config.enableBreadcrumbs === 'on';
	config.centerHeaderElements = config.centerHeaderElements === 'on';
	config.mobileTopicTeasers = config.mobileTopicTeasers === 'on';
	config.stickyToolbar = config.stickyToolbar === 'on';
	config.autohideBottombar = config.autohideBottombar === 'on';
	config.openSidebars = config.openSidebars === 'on';
	config.chatModals = config.chatModals === 'on';
	return config;
};

export async function getThemeConfig(config) {
	config.theme = await loadThemeConfig(config.uid);
	config.openDraftsOnPageLoad = false;
	return config;
};

export async function getAdminSettings(hookData) {
	if (hookData.plugin === 'harmony') {
		hookData.values = {
			...defaults,
			...hookData.values,
		};
	}
	return hookData;
};

export async function saveUserSettings(hookData) {
	Object.keys(defaults).forEach((key) => {
		if (hookData.data.hasOwnProperty(key)) {
			hookData.settings[key] = hookData.data[key] || undefined;
		}
	});
	return hookData;
};

export async function filterMiddlewareRenderHeader(hookData) {
	hookData.templateData.bootswatchSkinOptions = await meta.css.getSkinSwitcherOptions(hookData.req.uid);
	return hookData;
};

