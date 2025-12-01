import React, { useState } from "react";

function RegistrarPrestamo() {
  const [idLibro, setIdLibro] = useState("");
  const [idUsuario, setIdUsuario] = useState("");

  const registrarPrestamo = () => {
    let libros = JSON.parse(localStorage.getItem("libros")) || [];
    let prestamos = JSON.parse(localStorage.getItem("prestamos")) || [];

    let libro = libros.find(l => l.id === Number(idLibro));

    if (!libro) return alert("Libro no encontrado");
    if (!libro.disponible) return alert("El libro no está disponible");

    prestamos.push({
      idPrestamo: Date.now(),
      idLibro: Number(idLibro),
      idUsuario: Number(idUsuario),
      fecha: new Date().toLocaleDateString()
    });

    libro.disponible = false;

    localStorage.setItem("prestamos", JSON.stringify(prestamos));
    localStorage.setItem("libros", JSON.stringify(libros));

    alert("Préstamo registrado");
    setIdLibro("");
    setIdUsuario("");
  };

  return (
    <section className="seccion">
      <h2>Registrar Préstamo</h2>

      <input value={idLibro} onChange={e => setIdLibro(e.target.value)} placeholder="ID del Libro" />
      <input value={idUsuario} onChange={e => setIdUsuario(e.target.value)} placeholder="ID del Usuario" />

      <button onClick={registrarPrestamo}>Registrar Préstamo</button>
    </section>
  );
}

export default RegistrarPrestamo;
