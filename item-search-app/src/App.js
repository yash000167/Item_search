import React from 'react';
import './App.css';
import SearchBar from './components/SearchBar';
import ItemList from './components/ItemList';

function App() {
  return (
    <div className="App">
      <h1>Item Search</h1>
      <SearchBar/>
      <ItemList/>
    </div>
  );
}

export default App;
