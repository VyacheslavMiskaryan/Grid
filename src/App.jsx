import React from 'react';
import { BrowserRouter, Route } from 'react-router-dom';

import StartPage from './pages/StartPage';
import MainPage from './pages/MainPage';

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Route exact path="/" component={StartPage} />
        <Route exact path="/main_page" component={MainPage} />
      </BrowserRouter>
    </div>
  );
}

export default App;
