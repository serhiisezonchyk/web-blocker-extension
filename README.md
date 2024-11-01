# Extension - Chrome Extension for Blocking Sources by URL

This is the browser extension component of the Chrome extension for blocking sources by URL. Built with React, Vite, and crxjs, this extension provides an interface for users to manage blocked URLs directly in their browser.

## Project Structure

- **React**: User interface library.
- **Vite**: Fast build tool and development server.
- **crxjs**: Vite plugin for building Chrome extensions.
- **Tailwind CSS**: Utility-first CSS framework for styling.
- **React Query**: Data fetching and caching.

## Requirements

- **Node.js**: Ensure you have Node.js installed.

## Scripts

| Command               | Description                                        |
|-----------------------|----------------------------------------------------|
| `npm run dev`         | Starts the development server with Vite            |
| `npm run build`       | Builds the extension for production                |
| `npm run lint`        | Lints the codebase using ESLint                    |
| `npm run preview`     | Previews the production build                      |
| `npm run format`      | Formats code using Prettier                        |
| `npm run api:download`| Downloads the latest API schema                    |
| `npm run api:generate`| Generates API client and routes using Orval        |

## Setup Instructions

1. **Install Dependencies**
   ```bash
   npm install

2. **Environment Variables**

- Set up any required environment variables in a .env file at the root of your project.

3. **Run the Development Server**

  ```bash
  npm run dev
  ```

4. **Generate API Client and Routes**

- The API client and routes are generated using **Orval** from the backend's OpenAPI schema. To ensure you have the latest routes:
  ```bash
  npm run api:download  
  npm run api:generate

- This will download the API schema and generate client routes in the src/shared/api folder, enabling seamless API interactions.

## Building and Loading the Extension
1. **Build the Extension**

- To build the extension for production, run:
  ```bash
  npm run build
  ```
- This will generate the extension files in the dist directory.
2. **Load the Extension in Chrome**

- Open Chrome and navigate to chrome://extensions/.
- Enable Developer mode by toggling the switch in the top right corner.
- Click on Load unpacked and select the dist folder in your project directory.
- The extension should now be visible in the extensions list and ready for testing.

## Linting and Formatting
- *Linting:* Run npm run lint to check code quality.
- *Formatting:* Use npm run format to format code with Prettier.
## Libraries Used
- **React:** Frontend library for building user interfaces.
- **Vite:** Development server and bundler.
- **crxjs:** Vite plugin for building Chrome extensions.
- **Tailwind CSS:** Utility-based styling.
- **React Query:** For handling API data fetching and caching.

## Additional Notes
- **API Schema:** Ensure the backend server is running before executing npm run api:download.
- **Orval:** API routes are automatically generated from the OpenAPI schema with Orval, simplifying API interactions in the extension.
- **Development Mode:** Use npm run dev for live reloading during development.

For further details, refer to the documentation for React, Vite, Tailwind CSS, and crxjs.