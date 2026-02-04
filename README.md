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

https://github.com/sravani02092004/securetaskhub
