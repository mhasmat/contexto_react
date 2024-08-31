import './App.css'
import AppRouter from './routes/AppRouter';
import { useState } from 'react';
import { useEffect } from 'react';
import { PruebaContext } from './context/PruebaContext';


function App() {
  const [user, setUser] = useState({ nombre: "", email: "" });

  // obtener el usuario almacenado en el localStorage y actualizar el estado user si existe:
  useEffect(() => {
    const storedUser = localStorage.getItem("usuario");

    if (storedUser) {
      setUser(JSON.parse(storedUser));
    }
  }, []);

  // guardar el usuario en el localStorage cada vez que se actualice el estado user:
  useEffect(() => {
    localStorage.setItem("usuario", JSON.stringify(user));
  }, [user]);  

  return (
    // Envolver el componente AppRouter con el proveedor PruebaContext.Provider y pasar el valor del contexto:
    <div className='App'>
      <PruebaContext.Provider value={{user, setUser}}>
        <AppRouter />
      </PruebaContext.Provider>
    </div>
  )
}

export default App;
