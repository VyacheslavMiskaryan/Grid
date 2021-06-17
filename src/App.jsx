import React from 'react';
import { BrowserRouter, Route } from 'react-router-dom';

import MainPage from './pages/MainPage';

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Route exact path="/" component={MainPage} />
      </BrowserRouter>
    </div>
  );
}

export default App;
