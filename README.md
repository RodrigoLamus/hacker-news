# HACKER-NEWS

The application was built using webpack and babel, it has its configuration for ESLint and prettier
and has storybook implemented to document the components in isolation.

In the project you can run the following commnads:

## SCRIPTS

### `npm start`

Runs the app in the development mode.
Open [http://localhost:8080](http://localhost:8080) to view it in the browser.

The page will reload if you make edits.
You will also see any lint errors in the console.

### `npm test`

Launches the test runner in the interactive watch mode.

### `npm run build`

Builds the app for production to the `build` folder.
It correctly bundles React in production mode and optimizes the build for the best performance.

The build is minified and the filenames include the hashes

### `npm run lint`

Checks the code looking for syntax or parser errors, you could run also `npm run lint:fix` to fix them inmediatly.

### `npm run storybook`

Runs an instance of storybook for documentation, open [http://localhost:6006](http://localhost:6006) to view it in the browser.

## FOLDER STRUCTURE

Outside in the root folder its the configuration files for prettier, babel, storybook, npm, ESLint and webpack.

In the src folder there is all the code for the application, divided in the following sub-folders:

- components folder:
  Inside it has all the components for the application, each one including its tests, stories and styles.

* context folder:
  Inside it has the react context sctructure and logic defined.

* global folder:
  Inside it has global configurations like the normalize styles and the interfaces file.

* helpers and services folders:
  Inside this folders are all the helper functions needed in the app, the difference between helpers and services is that services are asynchronous functions.

* pages folder:
  Containing all the view pages for the app, in this case is only one.

## TEST AND DOCUMENTATION

For the test it was used unit tests among all component folders, each one having its own test suit with multiple unit tests in some cases.

And for the documentation, apart of using JSDocs inside the helpers and services, each component has its storybook file which documents the behavior of the component and gives a preview of it.
