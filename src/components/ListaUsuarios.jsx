import React, { useEffect, useState } from "react";

function ListaUsuarios() {
  const [usuarios, setUsuarios] = useState([]);

  useEffect(() => {
    setUsuarios(JSON.parse(localStorage.getItem("usuarios")) || []);
  }, []);

  return (
    <section className="seccion">
      <h2>Listado de Usuarios</h2>

      <table>
        <thead>
          <tr><th>ID</th><th>Nombre</th></tr>
        </thead>

        <tbody>
          {usuarios.map(u => (
            <tr key={u.id}>
              <td>{u.id}</td>
              <td>{u.nombre}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </section>
  );
}

export default ListaUsuarios;
