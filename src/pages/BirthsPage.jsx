import React from 'react';
import Card from '../components/common/Card';

/**
 * Página del módulo de Nacimientos.
 * Versión simple para dejar la ruta creada.
 */
const BirthsPage = () => {
  return (
    <>
      <h1>Nacimientos</h1>
      <Card title="Módulo de nacimientos">
        <p>Este módulo permitirá registrar los nacimientos de los animales.</p>
        <p>
          Versión actual: módulo en construcción. En una versión futura aquí se
          implementará el formulario y el listado de nacimientos.
        </p>
      </Card>
    </>
  );
};

export default BirthsPage;
