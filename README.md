# Boilerplate v.1.6.0

## Instalation

1. Simply just install all dependencies
	`$ npm install`

## Setup

* To make some changes in directory paths or server setup, open: `./config/config.js` file.
* To change linter rules go to: `./config/eslint/.eslintrc.json` file.
* To prevent adding polyfills go to: `./config/rollup/rollup.config.js` file and set in babel presets `useBuiltIns: false`

## Available Scripts

### `npm start`

Gulp runs the app in the development mode. 
By default, gulp will automatically open on address [http://localhost:3000](http://localhost:3000) to view it in the browser.
The page will reload if you make edits.
You will also see any errors in the console.

> **NOTE:** *If you have gulp CLI installed globally you don't have to write this command. Just type gulp.*

### `npm run build`

Gulp instantly build dist version of app. Used for deployment.

> **NOTE:** *Shorter version with globally installed gulp: gulp build*

### `npm run bundle`

If you want to instant bundle your src javascript files. 