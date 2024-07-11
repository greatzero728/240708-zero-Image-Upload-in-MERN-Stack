# MERN Stack Item Upload

![Image Upload in MERN Stack](https://github.com/greatzero728/240708-zero-Image-Upload-in-MERN-Stack/blob/main/Image%20Upload%20in%20MERN%20Stack.gif)

This repository contains a full-stack MERN (MongoDB, Express.js, React.js, Node.js) application for uploading item details with associated metadata and images.

## Features

- **Frontend (React.js):**
  - UploadForm component for inputting item details and image upload.
  - Styling with Tailwind CSS.
  - Submission of form data to backend endpoint.

- **Backend (Node.js with Express.js):**
  - Express server setup with CORS and body-parser middleware.
  - MongoDB database integration using Mongoose.
  - Handling file uploads using multer.
  - REST API endpoint (`/upload`) for receiving and processing item data.

## Prerequisites

- Node.js
- MongoDB (local or cloud-based)
- npm or yarn

## Getting Started

To run the application locally, follow these steps:

1. **Clone the repository:**

   ```bash
   git clone https://github.com/yourusername/mern-item-upload.git
   cd mern-item-upload
   ```

2. **Setup MongoDB:**

   - Install MongoDB locally or use a cloud-based MongoDB service.
   - Create a database and note the connection URI.

3. **Setup Backend:**

   ```bash
   cd server
   npm install
   cp .env.example .env
   # Edit .env file and set MONGODB_URI to your MongoDB connection URI
   npm start
   ```

4. **Setup Frontend:**

   ```bash
   cd client
   npm install
   npm start
   ```

5. **Open in Browser:**

   Open your web browser and navigate to `http://localhost:3000` to see the application running.

## Contributing

Contributions are welcome! If you find any issues or improvements, please create a GitHub issue or submit a pull request.