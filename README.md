# React User List with Search Bar

This is a simple React project that displays a list of different user names and includes a search bar to filter the list dynamically. The project utilizes React, React's `useState` hook, and `useRef` hook, and uses modular CSS for styling.

## Features

- Displays a list of user names.
- Includes a search bar to filter the user list in real-time.
- Utilizes React's `useState` hook to manage the list of users and the search query.
- Uses `useRef` hook to access the DOM element of the search input.

## Installation

To get started with the project, follow these steps:

1. Clone the repository:

```
git clone https://github.com/ShayanFaghihi/search-filter
```

2. Change into the project directory:

```
cd your-react-user-list
```

3. Install the required dependencies:

```
npm install
```

4. Start the development server:

```
npm start
```

The project should now be running on `http://localhost:3000`.

## How to Use

1. When you open the application, you will see a list of user names.

2. At the top of the page, there is a search bar.

3. Start typing in the search bar to filter the user list dynamically. The list will update in real-time to show only the names that match the search query.

## Technologies Used

- React: A JavaScript library for building user interfaces.
- `useState` hook: Allows us to add state to functional components in React.
- `useRef` hook: Provides a way to access and interact with DOM elements directly.

## Project Structure

The project is organized as follows:

```
your-react-user-list/
  ├── src/
  │   ├── components/
  │   │   ├── Results.js
  │   │   └── Search.js
  │   ├── App.js
  │   └── index.js
  ├── styles/
  │   ├── Results.module.css
  │   └── Search.module.css
  ├── data/
  │   └── users.js
  └── README.md
```

- The `components` directory contains the main components of the application: `UserList` and `SearchBar`.
- The `App.js` file is the entry point of the application, rendering the components.
- The `index.js` file sets up the React application and renders the `App` component into the root DOM element.
- The `styles` directory contains modular CSS files for styling the components separately.
- The `data` directory contains the sample user data used in the application.

## Contributing

If you find any issues with the project or want to add more features, feel free to open an issue or submit a pull request.

## License

This project is licensed under the [MIT License](LICENSE). Feel free to use and modify the code as per your needs.