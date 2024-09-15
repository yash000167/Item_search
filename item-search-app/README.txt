Item Search Application

Overview
---------
This React application allows users to search for items, view a list of items, and filter them based on a search query. The application uses Redux for state management to handle the items and search functionality.

Features
---------
- Search for items by title
- Display items in a paginated list
- Show a "No products found" message if no items match the search criteria

Technologies Used
-----------------
- React: For building the user interface
- Redux Toolkit:For simplifying Redux setup and state management
- React-Redux: For connecting React components to the Redux store

Getting Started
---------------
Prerequisites
-------------
Ensure you have the following installed:
- Node.js (v14 or higher)
- npm (v6 or higher)

Installation
------------
1. Clone the repository:
   git clone https://github.com/your-repository-url.git

2. Navigate to the project directory:
   cd your-repository-folder

3. Install dependencies:
   npm install

Running the Application
-----------------------
To start the development server:
   npm start

This will open the application in your default web browser at http://localhost:3000.



Components
----------
- SearchBar: Component for inputting search queries. Connects to the Redux store to dispatch search actions.
- ItemList: Displays a list of items, handles pagination, and shows a "No products found" message if necessary. Connects to the Redux store to select and filter items.


