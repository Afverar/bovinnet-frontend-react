import React from 'react';

/**
 * Tabla de animales.
 */
const AnimalList = ({ animals }) => {
  if (!animals.length) {
    return <p>No hay animales registrados.</p>;
  }

  return (
    <table className="table">
      <thead>
        <tr>
          <th>Identificación</th>
          <th>Nombre</th>
          <th>Lote</th>
        </tr>
      </thead>
      <tbody>
        {animals.map((animal) => (
          <tr key={animal.id}>
            <td>{animal.identificacion}</td>
            <td>{animal.nombre || '-'}</td>
            <td>{animal.lote}</td>
          </tr>
        ))}
      </tbody>
    </table>
  );
};

export default AnimalList;
