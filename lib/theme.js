(function(module) {
	"use strict";

	var Theme = {};

	Theme.defineWidgetAreas = function(areas, callback) {
		areas = areas.concat([
			{
				'name': 'Categories Sidebar',
				'template': 'categories.tpl',
				'location': 'sidebar'
			},
			{
				'name': 'Categories Header',
				'template': 'categories.tpl',
				'location': 'header'
			},
			{
				'name': 'Categories Footer',
				'template': 'categories.tpl',
				'location': 'footer'
			},
			{
				'name': 'Category Sidebar',
				'template': 'category.tpl',
				'location': 'sidebar'
			},
			{
				'name': 'Category Header',
				'template': 'category.tpl',
				'location': 'header'
			},
			{
				'name': 'Category Footer',
				'template': 'category.tpl',
				'location': 'footer'
			},
			{
				'name': 'Topic Sidebar',
				'template': 'topic.tpl',
				'location': 'sidebar'
			},
			{
				'name': 'Topic Header',
				'template': 'topic.tpl',
				'location': 'header'
			},
			{
				'name': 'Topic Footer',
				'template': ' topic.tpl',
				'location': 'footer'
			}
		]);

		callback(null, areas);
	};

	module.exports = Theme;

}(module));
