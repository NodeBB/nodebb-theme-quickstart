
'use strict';

const Theme = module.exports;

Theme.defineWidgetAreas = async function (areas) {
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
		{
			name: 'Chat Header',
			template: 'chats.tpl',
			location: 'header',
		},
	]);

	return areas;
};
