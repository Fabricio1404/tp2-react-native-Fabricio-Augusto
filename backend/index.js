const express = require('express');
const cors = require('cors'); 
const app = express();
const PORT = 5000;

app.use(cors()); 
app.use(express.json()); 

// Datos de prueba
let jugadores = [
    { id: 1, nombre: "Edinson Cavani", posicion: "Delantero", dorsal: 10 },
    { id: 2, nombre: "Kevin Zenón", posicion: "Mediocampista", dorsal: 22 }
];

// Listar todos (GET) ]
app.get('/jugadores', (req, res) => {
    res.json(jugadores);
});

// Crear uno (POST) [cite: 42, 149]
app.post('/jugadores', (req, res) => {
    const { nombre, posicion, dorsal } = req.body;
    if (!nombre || !posicion) return res.status(400).json({ error: "Faltan campos" }); // [cite: 46, 47]
    const nuevo = { id: Date.now(), nombre, posicion, dorsal };
    jugadores.push(nuevo);
    res.status(201).json(nuevo);
});

// Borrar (DELETE) 
app.delete('/jugadores/:id', (req, res) => {
    const { id } = req.params;
    jugadores = jugadores.filter(j => j.id !== parseInt(id));
    res.json({ mensaje: "Eliminado" });
});

app.listen(PORT, () => console.log(`Backend de Boca en puerto ${PORT}`));