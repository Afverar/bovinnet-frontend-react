import React, { useEffect, useState } from 'react';
import Card from '../components/common/Card';
import AnimalForm from '../modules/animals/AnimalForm';
import AnimalList from '../modules/animals/AnimalList';
import { fetchAnimals, createAnimal } from '../services/animalService';

/**
 * Página del módulo Animales.
 */
const AnimalsPage = () => {
  const [animals, setAnimals] = useState([]);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    const loadAnimals = async () => {
      setLoading(true);
      const data = await fetchAnimals();
      setAnimals(data);
      setLoading(false);
    };
    loadAnimals();
  }, []);

  const handleSaveAnimal = async (animalData) => {
    const newAnimal = await createAnimal(animalData);
    setAnimals((prev) => [...prev, newAnimal]);
  };

  return (
    <>
      <h1>Animales</h1>
      <Card title="Registrar nuevo animal">
        <AnimalForm onSave={handleSaveAnimal} />
      </Card>
      <Card title="Listado de animales">
        {loading ? <p>Cargando...</p> : <AnimalList animals={animals} />}
      </Card>
    </>
  );
};

export default AnimalsPage;
