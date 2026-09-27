// Simulación de backend para animales.

let animalsMock = [
  { id: 1, identificacion: 'A-001', nombre: 'Vaca 1', lote: 'Lote 1' },
  { id: 2, identificacion: 'A-002', nombre: 'Vaca 2', lote: 'Lote 2' },
];

export const fetchAnimals = async () => {
  return new Promise((resolve) => {
    setTimeout(() => resolve([...animalsMock]), 300);
  });
};

export const createAnimal = async (animalData) => {
  return new Promise((resolve) => {
    setTimeout(() => {
      const newAnimal = {
        id: Date.now(),
        ...animalData,
      };
      animalsMock.push(newAnimal);
      resolve(newAnimal);
    }, 300);
  });
};
