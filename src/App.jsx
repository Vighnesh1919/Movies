import { useState } from 'react';
import './App.css';
import './index.css';
import Movies from './components/Movies';
import { Provider } from 'react-redux';
import store from './store';

function App() {
  return (
    <Provider store={store}>
      <div className="min-h-screen bg-gray-100">
        <header className="bg-blue-500 text-white p-4 text-center text-2xl">
          Movie Database
        </header>
        <Movies />
      </div>
    </Provider>
  );
}

export default App;
