# Welcome to the Project!

Thank you for checking out this project! This is a full-stack web application powered by React and Express, designed to be fast, responsive, and easy to use. It comes equipped with modern tools and libraries to provide a smooth user experience, and integrates seamlessly with Azure services for authentication and database management.


Here’s a breakdown of the main libraries and technologies that power this project:

- **React**: Used to build the dynamic, interactive user interface.
- **@mui/material & icons**: Material-UI for modern, responsive UI components.
- **Emotion (React & Styled)**: CSS-in-JS for styling components in a flexible, performant way.
- **@azure/msal-browser & @azure/msal-react**: For secure Microsoft authentication.
- **@azure/cosmos**: Connects the application to Azure Cosmos DB for fast and scalable database management.
- **Express**: Backend framework for handling API requests and data transactions.
- **Cors & dotenv**: Secure cross-origin resource sharing and environment variable management.

### Structure Overview

- **Frontend**: Built with React and served via Vite for fast development.
- **Backend**: Node.js + Express powers the server and connects to the Cosmos DB.
- **Styling**: Uses Material-UI components and Emotion for a flexible, stylish UI.

## Getting Started

### Prerequisites

Make sure you have [Node.js](https://nodejs.org/en/download/) installed on your machine.

### Installation

1. **Clone the repository**:
    ```bash
    git clone git@github.com:JoniMustaniemi/react-azure.git
    cd react-azure
    ```

2. **Install dependencies**:
    ```bash
    npm install
    ```

3. **Set up environment variables**:
    - Create a `.env` file in the root of your project.
    - Add the necessary environment variables as shown below:

    ```bash
    AZURE_CLIENT_ID=<your-client-id>
    AZURE_TENANT_ID=<your-tenant-id>
    AZURE_COSMOS_DB_URI=<your-cosmos-db-uri>
    AZURE_COSMOS_DB_KEY=<your-cosmos-db-key>
    ```

### Running the Project

We’ve provided a few handy scripts to get things going:

- **Development mode** (Frontend + Hot reload):
    ```bash
    npm run dev
    ```

- **Start the backend server** (Express + Cosmos DB):
    ```bash
    npm run backend
    ```

- **Build for production**:
    ```bash
    npm run build
    ```

- **Preview the production build**:
    ```bash
    npm run preview
    ```

- **Lint your code** (Ensures code quality):
    ```bash
    npm run lint
    ```

