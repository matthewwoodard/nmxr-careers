
# Mobile X-Ray Service Web Application

## Project Overview

This is a web application for National Mobile X-Ray, providing information about the company's services, job opportunities, and more.

## Getting Started

### Prerequisites

- Node.js (v16.0 or higher)
- npm (v7.0 or higher)

You can install Node.js and npm using [nvm (Node Version Manager)](https://github.com/nvm-sh/nvm#installing-and-updating):

```sh
# Install nvm
curl -o- https://raw.githubusercontent.com/nvm-sh/nvm/v0.39.3/install.sh | bash

# Install the latest LTS version of Node.js
nvm install --lts

# Use the installed version
nvm use --lts
```

### Running Locally

Follow these steps to run the application on your local machine:

```sh
# Step 1: Clone the repository
git clone <YOUR_REPOSITORY_URL>

# Step 2: Navigate to the project directory
cd <PROJECT_DIRECTORY_NAME>

# Step 3: Install dependencies
npm install

# Step 4: Start the development server
npm run dev
```

After running these commands, the application will be available at `http://localhost:8080`.

### Building for Production

To build the application for production deployment:

```sh
# Build the application
npm run build

# Preview the production build locally
npm run preview
```

## Deployment

### Option 1: Static Hosting (Netlify, Vercel, GitHub Pages)

The built application is static and can be deployed to any static hosting service:

1. Build the application using `npm run build`
2. Deploy the contents of the `dist` folder to your chosen hosting provider

### Option 2: Self-Hosted Server

1. Build the application using `npm run build`
2. Copy the contents of the `dist` folder to your web server
3. Configure your web server (Apache, Nginx, etc.) to serve the static files

For Nginx configuration example:

```nginx
server {
    listen 80;
    server_name yourdomain.com;
    root /path/to/dist;
    index index.html;
    
    location / {
        try_files $uri $uri/ /index.html;
    }
}
```

## Technologies Used

This project is built with:

- Vite
- TypeScript
- React
- Tailwind CSS
- shadcn/ui components
