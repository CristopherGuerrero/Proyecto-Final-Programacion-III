import React, { useEffect, useState } from "react";

function ListaLibros() {
  const [libros, setLibros] = useState([]);

  useEffect(() => {
    setLibros(JSON.parse(localStorage.getItem("libros")) || []);
  }, []);

  return (
    <section className="seccion">
      <h2>Listado de Libros</h2>

      <table>
        <thead>
          <tr>
            <th>ID</th><th>Título</th><th>Autor</th><th>Categoría</th><th>Año</th><th>Disponible</th>
          </tr>
        </thead>

        <tbody>
          {libros.map(l => (
            <tr key={l.id}>
              <td>{l.id}</td>
              <td>{l.titulo}</td>
              <td>{l.autor}</td>
              <td>{l.categoria}</td>
              <td>{l.anio}</td>
              <td>{l.disponible ? "Sí" : "No"}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </section>
  );
}

export default ListaLibros;
