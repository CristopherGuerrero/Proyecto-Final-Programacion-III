import React, { useState } from "react";

function RegistrarUsuario() {
  const [nombre, setNombre] = useState("");

  const guardarUsuario = () => {
    let usuarios = JSON.parse(localStorage.getItem("usuarios")) || [];

    const usuario = {
      id: Date.now(),
      nombre
    };

    usuarios.push(usuario);
    localStorage.setItem("usuarios", JSON.stringify(usuarios));

    alert("Usuario registrado");
    setNombre("");
  };

  return (
    <section className="seccion">
      <h2>Registrar Usuario</h2>

      <input value={nombre} onChange={e => setNombre(e.target.value)} placeholder="Nombre del Usuario" />

      <button onClick={guardarUsuario}>Guardar</button>
    </section>
  );
}

export default RegistrarUsuario;
