# About the project:

"First-year handbook" is a web app, that helps first-year students get to know the university. The project will implement features such as a variety of quests, map of the university, event calendar and much more.

It is being developed by students from IT Master Class #10 at University of Economics - Varna and our mentors at Dev Labs.

## Prerequisites:

NodeJS (https://nodejs.org/en/) -> includes npm (package manager).

Install the LTS version that is recommended (as of 17.02.2023 v18.14.1)

To install the project:

Open New Terminal and run:

```bash
npm install
```

## Recommended code editor:

Visual Studio Code (https://code.visualstudio.com/) with the following extensions:

ESLint
Prettier
Editor Config

//Reload the window

To configure Prettier on save formatting:
Click Ctrl + , (Windows)/ Cmd + , (MacOS)
It will open the settings

Type "Editor: Default Formatter"
Change it to Prettier

Type "Editor: Format on Save"
Ensure it has a checkmark

### Naming conventions:

for component and file names -> pascal case
for instances of components -> camel case

# Getting Started with Create React App

This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).

## Available Scripts

In the project directory, you can run:

### `npm start`

Runs the app in the development mode.\
Open [http://localhost:3000](http://localhost:3000) to view it in your browser.

The page will reload when you make changes.\
You may also see any lint errors in the console.

If experiencing **errors** (e.g. `error:03000086:digital envelope`, `ERR_OSSL_EVP_UNSUPPORTED`) \
after `npm start` try uninstalling node.js and installing \
the **Current** version (as of 19.02.2023 v19.6.1) \
If still not working try applying `npm audit fix --force`.

### `npm run build`

Builds the app for production to the `build` folder.\
It correctly bundles React in production mode and optimizes the build for the best performance.

The build is minified and the filenames include the hashes.\
Your app is ready to be deployed!

See the section about [deployment](https://facebook.github.io/create-react-app/docs/deployment) for more information.
