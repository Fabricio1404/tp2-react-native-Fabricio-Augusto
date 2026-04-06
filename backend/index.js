const express = require('express');
const cors = require('cors');
const app = express();
const PORT = 5000;

app.use(cors());
app.use(express.json());

let jugadores = [
    { id: 1, nombre: "Edinson Cavani", posicion: "Delantero", dorsal: 10 },
    { id: 2, nombre: "Kevin Zenón", posicion: "Mediocampista", dorsal: 22 }
];

app.get('/jugadores', (req, res) => {
    res.json(jugadores);
});

app.listen(PORT, () => {
    console.log(`Servidor Xeneize corriendo en http://localhost:${PORT}`);
});
