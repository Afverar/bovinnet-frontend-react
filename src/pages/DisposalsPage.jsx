import React from 'react';
import Card from '../components/common/Card';

/**
 * Página del módulo de Bajas (salida de animales).
 * Versión simple para dejar la ruta creada.
 */
const DisposalsPage = () => {
  return (
    <>
      <h1>Bajas</h1>
      <Card title="Módulo de bajas">
        <p>Este módulo permitirá registrar las bajas de los animales (salidas).</p>
        <p>
          Versión actual: módulo en construcción. En una versión futura aquí se
          implementará el formulario y el listado de bajas.
        </p>
      </Card>
    </>
  );
};

export default DisposalsPage;
