## DEPRECIATED
The project is based on Moltin API v1 which was depreciated and shut down in the mean time. Please use this repo as a reference only.

React Moltin Ecommerce is an app demonstrating the usage of Moltin Javascript API and React

## How to run the app
1. Make sure you have [Create React App](https://github.com/facebookincubator/create-react-app) installed on your system
2. Clone the repository
2. `cd react-moltin-ecommerce`
3. `npm install`
4. Copy the public ID from your Moltin account and use it in `src/vendor/config.js`
4. `npm start`

## How to compile the SCSS
1. `cd src/styles`
2. `sass --watch scss:css`

The current setup will minify all of the assets including JS and CSS files.

## How to build the project for production
1. `npm run build`
2. Deploy the `/build` directory

## TODOS
- Remove the unused CSS framework modules
- Organize the SCSS modules better
- Work on smaller screen optimization
- Use arrow functions where possible
- Improve the error handling
- Adopt the [Presentational and Container Components](https://medium.com/@dan_abramov/smart-and-dumb-components-7ca2f9a7c7d0#.cdcbjkn9v) pattern
- Display the correct `<title>` when browsing pages

## Technologies
 - [Moltin](https://www.moltin.com/)
 - [React](https://facebook.github.io/react/)
 - [Create React App](https://github.com/facebookincubator/create-react-app)
 - [SASS](http://sass-lang.com/)
 - [Semantic-ui CSS framework](http://semantic-ui.com/)
