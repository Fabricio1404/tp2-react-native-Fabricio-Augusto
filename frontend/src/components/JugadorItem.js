import React from 'react';

const JugadorItem = ({ jugador, alBorrar }) => {
  return (
    <div style={styles.card}>
      <div style={styles.dorsal}>#{jugador.dorsal}</div>
      <h3 style={styles.nombre}>{jugador.nombre}</h3>
      <p style={styles.posicion}>{jugador.posicion}</p>
      <button onClick={() => alBorrar(jugador.id)} style={styles.btnBorrar}>
        ELIMINAR
      </button>
    </div>
  );
};

const styles = {
  card: {
    backgroundColor: '#002D72', // Azul oscuro de Boca
    border: '2px solid #FFB81C', // Dorado
    borderRadius: '10px',
    padding: '15px',
    textAlign: 'center',
    position: 'relative',
    transition: 'transform 0.2s'
  },
  dorsal: { fontSize: '20px', fontWeight: 'bold', color: '#FFB81C', opacity: 0.8 },
  nombre: { margin: '10px 0', fontSize: '1.2rem', color: '#fff' },
  posicion: { color: '#FFB81C', marginBottom: '15px' },
  btnBorrar: {
    backgroundColor: '#cc0000',
    color: 'white',
    border: 'none',
    padding: '5px 10px',
    borderRadius: '5px',
    cursor: 'pointer'
  }
};

export default JugadorItem;