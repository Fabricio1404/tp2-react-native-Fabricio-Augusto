import React, { useState } from 'react';

const Formulario = ({ alAgregar }) => {
  const [datos, setDatos] = useState({ nombre: '', posicion: '', dorsal: '' });

  const enviar = (e) => {
    e.preventDefault();
    if (!datos.nombre || !datos.posicion) return alert("Completá los campos obligatorios");
    alAgregar(datos);
    setDatos({ nombre: '', posicion: '', dorsal: '' }); // Limpiar
  };

  return (
    <form onSubmit={enviar} style={styles.form}>
      <input 
        placeholder="Nombre del Crack" 
        value={datos.nombre} 
        onChange={e => setDatos({...datos, nombre: e.target.value})} 
        style={styles.input} 
      />
      <input 
        placeholder="Posición" 
        value={datos.posicion} 
        onChange={e => setDatos({...datos, posicion: e.target.value})} 
        style={styles.input} 
      />
      <input 
        placeholder="Dorsal" 
        type="number" 
        value={datos.dorsal} 
        onChange={e => setDatos({...datos, dorsal: e.target.value})} 
        style={styles.input} 
      />
      <button type="submit" style={styles.btn}>AGREGAR AL PLANTEL</button>
    </form>
  );
};

const styles = {
  form: { display: 'flex', gap: '10px', justifyContent: 'center', marginBottom: '40px', flexWrap: 'wrap' },
  input: { padding: '10px', borderRadius: '5px', border: '1px solid #FFB81C' },
  btn: { backgroundColor: '#FFB81C', color: '#003594', fontWeight: 'bold', border: 'none', padding: '10px 20px', cursor: 'pointer', borderRadius: '5px' }
};

export default Formulario;