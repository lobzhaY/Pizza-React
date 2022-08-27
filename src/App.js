import React, { useState } from 'react';
import axios from 'axios';

import { BrowserRouter, Route, Routes } from 'react-router-dom';

import { Header } from './components';
import { Home, Cart } from './pages';

function App() {
  const [pizzas, setPizzas] = useState([]);
  axios.get('http://localhost:3000/db.json').then(({ data }) => {
    setPizzas(data.pizzas);
  });
  React.useEffect(() => {}, []);

  return (
    <BrowserRouter>
      <div className="wrapper">
        <Header />
        <div className="content">
          <Routes>
            <Route path="/" element={<Home items={pizzas} />} />
            <Route path="/cart" element={<Cart />} />
          </Routes>
        </div>
      </div>
    </BrowserRouter>
  );
}

export default App;
