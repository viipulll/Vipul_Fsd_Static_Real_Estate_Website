// App.js
import React from 'react';
import Example from './components/Layout/Navbar';
import Footer from './components/Layout/Footer';
import { PropertyProvider } from './Context/UserContext';
// import Card from './components/Card';
import { Outlet } from 'react-router-dom';

function App() {//Wrap whole code in property provider for decalring info in whole code 
  return (
    <PropertyProvider>
      <Example />
      <Outlet />
      <Footer />
    </PropertyProvider>
  );
}

export default App;
