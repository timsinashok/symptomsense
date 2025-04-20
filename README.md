# symptomsense

## Overview

symptomsense is a React Native application designed to provide a seamless user experience for managing and tracking symptoms. The project is divided into two main components: a backend server and a mobile frontend application.

- **Backend**: A FastAPI-based server implementation to handle API requests, authentication, and database operations.
- **Frontend**: A React Native application offering an intuitive interface for users to interact with the system.

This project aims to deliver a reliable and user-friendly solution for symptom tracking and management.


## How to Run

Follow these steps to set up and run the project:

### Prerequisites
- Python (v3.8 or later)
- Node.js (v16 or later)
- npm or yarn
- React Native CLI
- Android Studio or Xcode (for mobile development)
- MongoDB (for the backend)

### Backend
1. Navigate to the backend directory:
    ```bash
    cd backend
    ```
2. Create and activate a virtual environment:
    ```bash
    python -m venv venv
    source venv/bin/activate  # On Windows: venv\Scripts\activate
    ```
3. Install dependencies:
    ```bash
    pip install -r requirements.txt
    ```
4. Start the FastAPI server:
    ```bash
    uvicorn main:app --reload
    ```

### Frontend
1. Navigate to the frontend directory:
    ```bash
    cd frontend
    ```
2. Install dependencies:
    ```bash
    npm install
    ```
3. Start the React Native application:
    - For iOS:
      ```bash
      npx react-native run-ios
      ```
    - For Android:
      ```bash
      npx react-native run-android
      ```

The application should now be running on your emulator or connected device.