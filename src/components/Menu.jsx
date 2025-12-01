import React from "react";

function Menu({ setVista }) {
  return (
    <nav>
      <button onClick={() => setVista("libros")}>Registrar Libro</button>
      <button onClick={() => setVista("listaLibros")}>Ver Libros</button>
      <button onClick={() => setVista("usuarios")}>Registrar Usuario</button>
      <button onClick={() => setVista("listaUsuarios")}>Ver Usuarios</button>
      <button onClick={() => setVista("prestamos")}>Registrar Préstamo</button>
      <button onClick={() => setVista("listaPrestamos")}>Ver Préstamos</button>
    </nav>
  );
}

export default Menu;
