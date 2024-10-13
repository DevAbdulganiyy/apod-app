# NASA APOD Frontend

## Overview

This is the frontend for the NASA APOD application. It displays the current Astronomy Picture of the Day (APOD) and allows users to view historical APODs. Users can filter the APODs by **count** and **date range**.

The frontend is built with **NextJS** and uses **React Query** for efficient data fetching and caching.

## Features

- Display the current APOD with title, description, and image.
- Allow users to fetch and view historical APODs based on:
  - **Count**: The number of random APODs to retrieve.
  - **Date Range**: The start and end dates for APOD retrieval.
- Handle API states like loading, errors, and empty results.
- Responsive gallery for displaying APODs.

## Prerequisites

- **Node.js** (v14+)
- **npm** (v6+)
- Ensure the backend API is running (`http://localhost:4000`).

## Installation

1. Clone the repository and navigate to the frontend directory:

   ```bash
   git clone https://github.com/yourusername/apod-app.git
   cd apod-app
   ```

2. Install the dependencies:

   ```bash
   npm install
   ```

## Running the Frontend

1. Start the frontend development server:

   ```bash
   npm run dev
   ```

   The frontend will run on `http://localhost:3000`.

## How to Use

- **Count Filter**: Specify how many APODs you want to load.
- **Date Range Filter**: Select a start and end date to retrieve APODs within that range.
- Click the **"Fetch APODs"** button to load the images based on the filters.
  
## Key Components

### `ApodGallery.tsx`

This component is responsible for:
- Fetching APODs from the backend using **React Query**.
- Displaying the current APOD.
- Rendering a gallery of APODs based on the count or date range filters.

### API Integration

The frontend makes API requests to the `/api/apods` endpoint on the backend to fetch the necessary APOD data. The **Axios** library is used for these HTTP requests, and **React Query** handles caching and re-fetching logic.

### States & UI Logic

- **Loading**: Shows a loading indicator while the data is being fetched.
- **Error Handling**: Displays an error message if the API request fails.
- **Gallery**: Displays a grid of APODs once they are fetched.

## Future Improvements

- **Dark Mode**: Add dark mode support.
- **Pagination**: Implement pagination for browsing a larger number of APODs.
  
## Available Scripts

- **`npm run dev`**: Run the frontend development server.
  
## License

This project is licensed under the MIT License. See the [LICENSE](../LICENSE) file for more details.
