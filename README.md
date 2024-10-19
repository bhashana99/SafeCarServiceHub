# Vehicle Service Reservation Web Application

## About

The Vehicle Service Reservation Web Application is designed to streamline the process of managing vehicle service appointments. It features user authentication via **Asgardeo OIDC** (OpenID Connect) and employs robust security practices to mitigate common vulnerabilities as per OWASP Top 10. The web application allows users to create, view, and manage their service reservations.

## Features

- User login and authentication using **Asgardeo OIDC**.
- Create, view, and delete vehicle service reservations.
- Secure backend with Spring Boot and MySQL.
- Responsive UI using React and Tailwind CSS.
- Protected routes to ensure only authenticated users can access key features.

## Technologies Used

- **Frontend**: React (Vite), Tailwind CSS
- **Backend**: Spring Boot
- **Database**: MySQL
- **Authentication**: **Asgardeo OIDC (OpenID Connect)**

## Frontend Setup

The frontend of the application is built using React with Vite. To run the frontend, ensure you have the necessary environment variables set up in a `.env` file in the root of the frontend project.

### Environment Variables

Create a `.env` file in the root of the frontend directory with the following variables:

```env
VITE_CLIENT_ID=your_asgardeo_client_id_here
VITE_BASE_URL=https://api.asgardeo.io/t/{your_tenant_name_here}
```

## Backend Setup

Create a .env file in the root of the backend directory with the following variables

```env
db_username=your_database_username
db_password=your_database_password
```
