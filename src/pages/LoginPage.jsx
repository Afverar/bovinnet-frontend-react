import React, { useState } from 'react';
import TextInput from '../components/common/TextInput';
import Button from '../components/common/Button';
import ErrorAlert from '../components/common/ErrorAlert';

/**
 * Página de inicio de sesión (simulada).
 */
const LoginPage = ({ onLoginSuccess }) => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');

  const handleSubmit = (event) => {
    event.preventDefault();

    if (!username || !password) {
      setError('Por favor ingrese usuario y contraseña.');
      return;
    }

    setError('');
    onLoginSuccess({ username });
  };

  return (
    <div
      style={{
        minHeight: '100vh',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        backgroundColor: 'var(--color-background)',
      }}
    >
      <div className="card" style={{ width: '320px' }}>
        <h2 style={{ marginTop: 0, marginBottom: '0.75rem' }}>Ingreso a BovinNet</h2>
        <ErrorAlert message={error} />
        <form onSubmit={handleSubmit}>
          <TextInput
            id="username"
            label="Usuario"
            value={username}
            onChange={setUsername}
          />
          <TextInput
            id="password"
            label="Contraseña"
            type="password"
            value={password}
            onChange={setPassword}
          />
          <div style={{ textAlign: 'right', marginTop: '0.75rem' }}>
            <Button type="submit">Ingresar</Button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default LoginPage;
