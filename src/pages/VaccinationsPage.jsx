import React from 'react';
import Card from '../components/common/Card';

/**
 * Página del módulo de Vacunaciones.
 * Versión simple para dejar la ruta creada.
 */
const VaccinationsPage = () => {
  return (
    <>
      <h1>Vacunaciones</h1>
      <Card title="Módulo de vacunaciones">
        <p>Este módulo permitirá registrar las vacunaciones de los animales.</p>
        <p>
          Versión actual: módulo en construcción. En una versión futura aquí se
          implementará el formulario y el listado de vacunaciones.
        </p>
      </Card>
    </>
  );
};

export default VaccinationsPage;
