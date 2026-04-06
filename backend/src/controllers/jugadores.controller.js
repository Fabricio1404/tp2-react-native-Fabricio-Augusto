const Jugador = require('../models/jugadores.model');

exports.getJugadores = async (req, res) => {
    try {
        const jugadores = await Jugador.getAll();
        res.json(jugadores);
    } catch (error) {
        res.status(500).json({ error: 'Error al obtener jugadores' });
    }
};

exports.createJugador = async (req, res) => {
    try {
        const { nombre, posicion } = req.body;
        if (!nombre || !posicion) return res.status(400).json({ error: 'Faltan campos obligatorios' });
        
        const id = await Jugador.create(req.body);
        res.status(201).json({ id, ...req.body });
    } catch (error) {
        res.status(500).json({ error: 'Error al crear jugador' });
    }
};

exports.deleteJugador = async (req, res) => {
    try {
        await Jugador.delete(req.params.id);
        res.json({ mensaje: 'Jugador eliminado' });
    } catch (error) {
        res.status(500).json({ error: 'Error al eliminar' });
    }
};