
'use strict';

const Theme = module.exports;

Theme.defineWidgetAreas = async function (areas) {
	areas = areas.concat([
		{
			name: 'Category Sidebar',
			template: 'category.tpl',
			location: 'sidebar',
		},
		{
			name: 'Topic Footer',
			template: 'topic.tpl',
			location: 'footer',
		},
	]);
	return areas;
};