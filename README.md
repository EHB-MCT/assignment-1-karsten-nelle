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

## Learn More

You can learn more in the [Create React App documentation](https://facebook.github.io/create-react-app/docs/getting-started).

To learn React, check out the [React documentation](https://reactjs.org/).

### Code Splitting

This section has moved here: [https://facebook.github.io/create-react-app/docs/code-splitting](https://facebook.github.io/create-react-app/docs/code-splitting)

### Analyzing the Bundle Size

This section has moved here: [https://facebook.github.io/create-react-app/docs/analyzing-the-bundle-size](https://facebook.github.io/create-react-app/docs/analyzing-the-bundle-size)

### Making a Progressive Web App

This section has moved here: [https://facebook.github.io/create-react-app/docs/making-a-progressive-web-app](https://facebook.github.io/create-react-app/docs/making-a-progressive-web-app)

### Advanced Configuration

This section has moved here: [https://facebook.github.io/create-react-app/docs/advanced-configuration](https://facebook.github.io/create-react-app/docs/advanced-configuration)

### Deployment

This section has moved here: [https://facebook.github.io/create-react-app/docs/deployment](https://facebook.github.io/create-react-app/docs/deployment)

### `npm run build` fails to minify

This section has moved here: [https://facebook.github.io/create-react-app/docs/troubleshooting#npm-run-build-fails-to-minify](https://facebook.github.io/create-react-app/docs/troubleshooting#npm-run-build-fails-to-minify)


# Template ReadMe

This is a starter project for building applications using React, HTML, and CSS. The goal is to provide a structured foundation that includes all the documentation, conventions, and tools needed to start developing a well-organized project right away.

## Tabel of Contents

- Prerequisites
- Installation
- Project Structure
- Scripts
- Conventions
- Style Guide
- Formatting
- Deployment
- Contributing
- License


## Installation

1. Clone repository
```bash
git clone https://github.com/username/react-starter-project.git
```
2. Navigate to project directory
```bash
cd react-starter-project
```
3. Install dependencies
```bash
npx create-next-app@latest
```
3. Start development server
```bash
npm run dev
```
The application will be running at http://localhost:3000.

## Project Structure

- public/: Contains public resources such as index.html.
- src/: All source code, components, and styles are located here.
- assets/: Folder for images or self made fonts.
- components/: Folder for React components.
- styles/: Optional: CSS or SCSS styles.
- App.jsx: The main component of the application.
- index.html: The entry point of the application.

## Conventions

### File names
- React components -> PascalCase (Header.jsx, MyComponent.jsx)
- Styles and CSS files -> kebab-case (main-styles.css)
### React Components
- Prefer functional components over class-based components.
- Keep components small and reusable whenever possible.
### CSS Modules (Optional)
- For better style isolation, you can use CSS modules. Files should end with .module.css and be imported into the corresponding React components.
### Style Guide 
- HTML: Follow semantic HTML standards
- CSS: Follow semantic CSS standards
- Follow React best practices to structure your code

## Deployment 
