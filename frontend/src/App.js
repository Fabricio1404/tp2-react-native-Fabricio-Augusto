import React, { useState, useEffect } from 'react';
import Formulario from './components/Formulario';
import JugadorItem from './components/JugadorItem';

function App() {
  const [jugadores, setJugadores] = useState([]);
  const [busqueda, setBusqueda] = useState('');
  const [error, setError] = useState(null);
  const [cargando, setCargando] = useState(true);

  // Cargar datos (GET) - [cite: 40, 69]
  useEffect(() => {
    fetch('http://localhost:5000/jugadores')
      .then(res => res.json())
      .then(data => {
        setJugadores(data);
        setCargando(false);
      })
      .catch(() => {
        setError("Error al conectar con la Bombonera (Servidor)");
        setCargando(false);
      });
  }, []);

  const agregarJugador = (nuevo) => {
    fetch('http://localhost:5000/jugadores', {
      method: 'POST', // [cite: 42]
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(nuevo)
    })
    .then(res => res.json())
    .then(data => setJugadores([...jugadores, data]));
  };

  const eliminarJugador = (id) => {
    fetch(`http://localhost:5000/jugadores/${id}`, { method: 'DELETE' }) // [cite: 44]
    .then(() => setJugadores(jugadores.filter(j => j.id !== id)));
  };

  // Lógica de Filtro - [cite: 59, 66]
  const filtrados = jugadores.filter(j => 
    j.nombre.toLowerCase().includes(busqueda.toLowerCase())
  );

  return (
    <div style={styles.app}>
      <header style={styles.header}>
        <img src="/logo-boca.png" alt="Boca" style={{width: '80px'}} />
        <h1 style={{color: '#FFB81C'}}>MUNDO BOCA - GESTIÓN</h1>
      </header>

      <div style={styles.filtroContainer}>
        <input 
          placeholder="Buscar jugador..." 
          onChange={(e) => setBusqueda(e.target.value)} 
          style={styles.busqueda}
        />
      </div>

      <Formulario alAgregar={agregarJugador} />

      {cargando && <p>Cargando el plantel...</p>}
      {error && <p style={{color: 'red'}}>{error}</p>}

      <div style={styles.grid}>
        {filtrados.map(j => (
          <JugadorItem key={j.id} jugador={j} alBorrar={eliminarJugador} />
        ))}
      </div>
    </div>
  );
}

const styles = {
  app: { backgroundColor: '#003594', minHeight: '100vh', padding: '20px', fontFamily: 'Arial, sans-serif' },
  header: { textAlign: 'center', marginBottom: '30px' },
  filtroContainer: { textAlign: 'center', marginBottom: '20px' },
  busqueda: { padding: '10px', width: '300px', borderRadius: '20px', border: '2px solid #FFB81C' },
  grid: { display: 'grid', gridTemplateColumns: 'repeat(auto-fill, minmax(200px, 1fr))', gap: '20px' }
};

export default App;