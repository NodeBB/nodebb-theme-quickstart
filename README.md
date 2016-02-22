# Quickstart Theme for NodeBB

This repository contains all of the preparatory work for a theme based off of the [Persona theme](https://github.com/NodeBB/nodebb-theme-persona). If you'd like to base your theme off [Lavender](https://github.com/NodeBB/nodebb-theme-lavender) or [Vanilla](https://github.com/NodeBB/nodebb-theme-vanilla) instead, switch to the appropriate branch.

Fork it to create your own theme based off of it!

### Some things to change

* You should rename this theme from `quickstart` to something else. Change all instances of that word in the following files:
    * `package.json`
    * `plugin.json`
    * `theme.json`

### When you're done...

Be sure to add some other metadata to the `package.json`, like this:

``` json
"author": {
    "name": "Your Name",
    "email": "Your Email",
    "url": "Your website"
},
"repository": {
    "type": "git",
    "url": "https://github.com/{your-username}/{your-repository}"
},
"bugs": {
    "url": "https://github.com/{your-username}/{your-repository}/issues"
}
```

Also, add a screenshot! Take a picture of your theme, and save it as "screenshot.png" in the root of your theme folder, then add this to `theme.json`:

``` json
"screenshot": "screenshot.png"
```