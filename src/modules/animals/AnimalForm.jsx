import React, { useState } from 'react';
import TextInput from '../../components/common/TextInput';
import SelectInput from '../../components/common/SelectInput';
import Button from '../../components/common/Button';
import ErrorAlert from '../../components/common/ErrorAlert';

/**
 * Formulario para registrar un animal.
 */
const AnimalForm = ({ onSave }) => {
  const [identificacion, setIdentificacion] = useState('');
  const [nombre, setNombre] = useState('');
  const [lote, setLote] = useState('');
  const [error, setError] = useState('');

  const handleSubmit = (event) => {
    event.preventDefault();

    if (!identificacion || !lote) {
      setError('La identificación y el lote son obligatorios.');
      return;
    }

    setError('');
    onSave({ identificacion, nombre, lote });
    setIdentificacion('');
    setNombre('');
    setLote('');
  };

  const lotesOptions = [
    { value: 'Lote 1', label: 'Lote 1' },
    { value: 'Lote 2', label: 'Lote 2' },
  ];

  return (
    <form onSubmit={handleSubmit}>
      <ErrorAlert message={error} />
      <TextInput
        id="identificacion"
        label="Identificación del animal"
        value={identificacion}
        onChange={setIdentificacion}
      />
      <TextInput
        id="nombre"
        label="Nombre (opcional)"
        value={nombre}
        onChange={setNombre}
      />
      <SelectInput
        id="lote"
        label="Lote"
        value={lote}
        onChange={setLote}
        options={lotesOptions}
      />
      <div style={{ textAlign: 'right', marginTop: '0.75rem' }}>
        <Button type="submit">Guardar animal</Button>
      </div>
    </form>
  );
};

export default AnimalForm;
