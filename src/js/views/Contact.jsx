// Import React's useContext hook
import React, { useContext } from 'react';

// Import the Context from the 'appContext.js' file
import { Context } from '../store/appContext.js';

// Define the Contact component
export const Contact = () => {
  const { store, actions } = useContext(Context);

  console.log(store.mensaje)

  // Return the JSX for the component
  return (
    <div className="container text-center">
      <h1 className="text-pr">Contactos</h1>
      <p>{store.mensaje}</p>    
    </div>
  );
}