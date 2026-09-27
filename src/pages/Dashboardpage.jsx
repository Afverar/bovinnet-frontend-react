import React from 'react';
import Card from '../components/common/Card';
import Button from '../components/common/Button';

/**
 * Panel principal con información general.
 */
const DashboardPage = () => (
  <>
    <h1>Panel principal</h1>
    <Card title="Resumen general">
      <p>Este panel mostrará indicadores como:</p>
      <ul>
        <li>Total de animales por lote / finca</li>
        <li>Nacimientos recientes</li>
        <li>Vacunaciones pendientes</li>
        <li>Bajas del último mes</li>
      </ul>
    </Card>
    <Card
      title="Accesos rápidos"
      actions={<Button>Ir a Animales</Button>}
    >
      <p>Use el menú lateral para ingresar a cada módulo.</p>
    </Card>
  </>
);

export default DashboardPage;
