import React, { createContext, useState } from 'react';

export const ProductDetails = createContext(null);

export default function ItemStore({ children }) {
  const [object, setObject] = useState(''); // Correct the variable name to 'object' and 'setObject'

  return (
    <ProductDetails.Provider value={{ object,setObject }}> {/* Provide 'object' and 'setObject' */}
      {children}
    </ProductDetails.Provider>
  );
}