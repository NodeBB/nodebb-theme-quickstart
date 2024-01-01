You can override templates from Harmony theme by placing your tpl files in this folder.

Use the same filename as the file you want to override. For example if you want to override recent.tpl name your file recent.tpl. If you want to override groups/list.tpl name your file groups/list.tpl and so on.

You can also create entirely new templates and render them in an express route with `res.render('/path/to/yourtemplate', dataToUse);`