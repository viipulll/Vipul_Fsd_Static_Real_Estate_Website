// context.js
import React, { createContext, useState } from 'react';

const PropertyContext = createContext();

const PropertyProvider = ({ children }) => {
  const [properties, setProperties] = useState({
    price: '$200,000',
    image: 'path_to_image.jpg',
    address: '123 Main St, Anytown'
  });

  return (
    <PropertyContext.Provider value={{ properties, setProperties }}>
      {children}
    </PropertyContext.Provider>
  );
};

export { PropertyContext, PropertyProvider };
