import React, { useState, useEffect } from 'react'; // [cite: 68, 206]

function App() {
  const [jugadores, setJugadores] = useState([]); // [cite: 209]
  const [nombre, setNombre] = useState('');

  // Cargar datos al iniciar [cite: 69, 212]
  useEffect(() => {
    fetch('http://localhost:5000/jugadores')
      .then(res => res.json())
      .then(data => setJugadores(data));
  }, []);

  const agregar = (e) => {
    e.preventDefault();
    fetch('http://localhost:5000/jugadores', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ nombre, posicion: "Jugador", dorsal: 0 })
    })
    .then(res => res.json())
    .then(nuevo => setJugadores([...jugadores, nuevo]));
    setNombre('');
  };

  const borrar = (id) => {
    fetch(`http://localhost:5000/jugadores/${id}`, { method: 'DELETE' })
    .then(() => setJugadores(jugadores.filter(j => j.id !== id)));
  };

  return (
    <div style={{ padding: '20px', backgroundColor: '#003594', color: '#FFB81C', minHeight: '100vh' }}>
      <h1>Gestión Plantel Boca Juniors</h1>
      
      <form onSubmit={agregar}>
        <input value={nombre} onChange={(e) => setNombre(e.target.value)} placeholder="Nombre del jugador" />
        <button type="submit">Agregar</button>
      </form>

      <ul>
        {jugadores.map(j => (
          <li key={j.id}>
            {j.nombre} <button onClick={() => borrar(j.id)}>X</button>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default App;