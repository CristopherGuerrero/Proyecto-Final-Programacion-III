import React, { useState } from "react";

function RegistrarLibro() {
  const [titulo, setTitulo] = useState("");
  const [autor, setAutor] = useState("");
  const [categoria, setCategoria] = useState("");
  const [anio, setAnio] = useState("");

  const guardarLibro = () => {
    let libros = JSON.parse(localStorage.getItem("libros")) || [];

    const libro = {
      id: Date.now(),
      titulo,
      autor,
      categoria,
      anio,
      disponible: true
    };

    libros.push(libro);
    localStorage.setItem("libros", JSON.stringify(libros));

    alert("Libro registrado");

    setTitulo("");
    setAutor("");
    setCategoria("");
    setAnio("");
  };

  return (
    <section className="seccion">
      <h2>Registrar Libro</h2>

      <input value={titulo} onChange={e => setTitulo(e.target.value)} placeholder="Título" />
      <input value={autor} onChange={e => setAutor(e.target.value)} placeholder="Autor" />
      <input value={categoria} onChange={e => setCategoria(e.target.value)} placeholder="Categoría" />
      <input value={anio} onChange={e => setAnio(e.target.value)} type="number" placeholder="Año" />

      <button onClick={guardarLibro}>Guardar</button>
    </section>
  );
}

export default RegistrarLibro;
