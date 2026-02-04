ecureTaskHub
Project Overview

SecureTaskHub is a task management web application built with Django for the backend and React for the frontend. It allows users to register, login, and manage tasks securely using JWT authentication.

Features:

User registration and login with JWT

Dashboard for task management

Create, read, update, and delete tasks

Secure authentication and protected routes

Tech Stack

Frontend: React, Bootstrap, Axios, React Router

Backend: Django, Django REST Framework, JWT

Database: SQLite (for development)

Authentication: JWT (JSON Web Tokens)

Project Structure
SecureTaskHub/
│
├─ backend/        # Django backend
│   ├─ accounts/   # Custom user authentication
│   ├─ tasks/      # Task management API
│   └─ manage.py
│
├─ frontend/       # React frontend
│   ├─ src/
│   ├─ public/
│   ├─ package.json
│   └─ ...
│
└─ README.md

Installation and Setup
Backend Setup

Navigate to the backend folder:

cd backend


Create a virtual environment and activate it:

python -m venv venv
venv\Scripts\activate    # Windows
source venv/bin/activate # Mac/Linux


Install dependencies:

pip install -r requirements.txt


Run migrations:

python manage.py migrate


Start the Django server:

python manage.py runserver


Backend runs on: http://127.0.0.1:8000/

Frontend Setup

Navigate to the frontend folder:

cd frontend


Install dependencies:

npm install


Start the React app:

npm start


Frontend runs on: http://localhost:3000/

Usage

Register a new user account

Login to access the dashboard

Add, update, delete tasks

All actions are reflected securely through the backend API

GitHub Repository

https://github.com/sravani02092004/securetaskhub# Getting Started with Create React App

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
