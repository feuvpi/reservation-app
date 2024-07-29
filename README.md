# Condo Space Reservation Interface

This repository contains the front-end interface for the Condo Space Reservation application, built using SvelteKit. The application is designed to streamline the reservation of public spaces in condominiums.

## Main Features

- **Built-in Authentication System**: The interface includes an authentication system that allows users to log in using their email and password. The authentication process is handled by the API, and the interface receives a cookie upon successful authentication. The `hooks.server.ts` file is configured to check this cookie for every request, ensuring secure access to the application.

## API Integration

The front-end interface communicates with a .NET Web API that is connected to a MongoDB database. The API handles all the backend logic, including user authentication, data storage, and retrieval.

## Installation

To get started with the project, follow these steps:

1. **Clone the Repository**:
   ```bash
   git clone https://github.com/your-username/condo-space-reservation-interface.git
   cd condo-space-reservation-interface
   ```

2. Install Dependencies:
```
npm install
```

3. Start the Development Server:
```
npm run dev
```

4. Open the Application:
Open your browser and navigate to http://localhost:3000 to view the application.

## Configuration
Make sure to configure the API endpoint in your environment variables. Create a .env file in the root of the project with the following content:
```
VITE_API_BASE_URL=http://your-api-url.com
```

Replace http://your-api-url.com with the actual URL of your .NET Web API.

## Contributing
Contributions are welcome! Please open an issue or submit a pull request if you have any suggestions or improvements.