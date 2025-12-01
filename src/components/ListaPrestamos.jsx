import React, { useEffect, useState } from "react";

function ListaPrestamos() {
  const [prestamos, setPrestamos] = useState([]);

  useEffect(() => {
    setPrestamos(JSON.parse(localStorage.getItem("prestamos")) || []);
  }, []);

  return (
    <section className="seccion">
      <h2>Listado de Préstamos</h2>

      <table>
        <thead>
          <tr><th>ID Préstamo</th><th>ID Libro</th><th>ID Usuario</th><th>Fecha</th></tr>
        </thead>

        <tbody>
          {prestamos.map(p => (
            <tr key={p.idPrestamo}>
              <td>{p.idPrestamo}</td>
              <td>{p.idLibro}</td>
              <td>{p.idUsuario}</td>
              <td>{p.fecha}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </section>
  );
}

export default ListaPrestamos;
