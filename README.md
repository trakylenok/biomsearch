# Demo

https://biomsearch-30eda.web.app

# Getting Started with Create React App

This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).

## Available Scripts

In the project directory, you can run:

### `npm start`

Runs the app in the development mode.\
Open [http://localhost:3000](http://localhost:3000) to view it in your browser.

The page will reload when you make changes.\
You may also see any lint errors in the console.

### `npm test`

Launches the test runner in the interactive watch mode.\
See the section about [running tests](https://facebook.github.io/create-react-app/docs/running-tests) for more information.

### `npm run build`

Builds the app for production to the `build` folder.\
It correctly bundles React in production mode and optimizes the build for the best performance.

The build is minified and the filenames include the hashes.\
Your app is ready to be deployed!

See the section about [deployment](https://facebook.github.io/create-react-app/docs/deployment) for more information.

### `npm run eject`

**Note: this is a one-way operation. Once you `eject`, you can't go back!**

If you aren't satisfied with the build tool and configuration choices, you can `eject` at any time. This command will remove the single build dependency from your project.

Instead, it will copy all the configuration files and the transitive dependencies (webpack, Babel, ESLint, etc) right into your project so you have full control over them. All of the commands except `eject` will still work, but they will point to the copied scripts so you can tweak them. At this point you're on your own.

You don't have to ever use `eject`. The curated feature set is suitable for small and middle deployments, and you shouldn't feel obligated to use this feature. However we understand that this tool wouldn't be useful if you couldn't customize it when you are ready for it.

## Firebase setup

Go to the [website](https://firebase.google.com).

Here you should log into your google account and ["Go to console"](https://console.firebase.gooogle.com).

Add project -> Let's start with a name for your project -> Enable Google Analytics for this project (off) -> create project.

Authentication: Configure the login method -> email address and password -> Add user -> Configure email and come up with a password.

## Application Deployment

First of all, you need to go to firebase -> hosting -> get started and start setting up Firebase Hosting.

In the console, we write `npm install -g firebase-tools`. We write `firebase login`, after `firebase init` (in the root folder) and answer the questions. After that, we write `firebase deploy` and the application will become available across two domains.
