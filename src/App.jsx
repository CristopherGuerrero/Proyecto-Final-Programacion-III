import React, { useState } from "react";
import "./estilos.css";

import Menu from "./components/Menu";
import RegistrarLibro from "./components/RegistrarLibro";
import ListaLibros from "./components/ListaLibros";
import RegistrarUsuario from "./components/RegistrarUsuario";
import ListaUsuarios from "./components/ListaUsuarios";
import RegistrarPrestamo from "./components/RegistrarPrestamo";
import ListaPrestamos from "./components/ListaPrestamos";

function App() {
  const [vista, setVista] = useState("inicio");

  return (
    <div>
      <h1>Sistema de Gestión de Biblioteca (SGB)</h1>

      <Menu setVista={setVista} />

      {vista === "libros" && <RegistrarLibro />}
      {vista === "listaLibros" && <ListaLibros />}
      {vista === "usuarios" && <RegistrarUsuario />}
      {vista === "listaUsuarios" && <ListaUsuarios />}
      {vista === "prestamos" && <RegistrarPrestamo />}
      {vista === "listaPrestamos" && <ListaPrestamos />}
    </div>
  );
}

export default App;
