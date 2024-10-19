# Vehicle Service Reservation Web Application

This is a web application for users to reserve vehicle service appointments and view their reservations. The application features secure user authentication using OpenID Connect (OIDC) and ensures protection against common web vulnerabilities such as those listed in the OWASP Top 10.

## Features

- **User Authentication:** The application uses OIDC for secure user login and logout.
- **Reservation Form:** Users can create vehicle service reservations by filling out a form.
- **Reservation Management:** Users can view their upcoming and past reservations, with the ability to cancel only future reservations.
- **Responsive Design:** The application is styled with Tailwind CSS for a modern and responsive user interface.

## Technologies Used

### Front-End
- **React**: JavaScript library for building user interfaces.
- **Vite**: Development server and build tool for fast development.
- **Tailwind CSS**: Utility-first CSS framework for styling.
  
### Back-End
- **Spring Boot**: Java-based framework for building the back-end API.
- **Java 17**: The version of Java used for the back-end implementation.
  
### Authentication & Security
- **OIDC (OpenID Connect)**: For secure authentication and access control.
- **OWASP Top 10 Mitigation**: The application is designed with security in mind, addressing common web vulnerabilities.

## Prerequisites

To run this project locally, you need to have the following installed:

- **Node.js**: Required for running the front-end part of the application.
- **Java 17**: Required for running the Spring Boot back-end API.
- **Asgardeo SDK**: Used for OIDC authentication in the React application.
  
