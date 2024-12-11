const express = require('express');
const router = express.Router();
const eventosController = require('../controllers/eventosController');

// Rota para pegar todos os eventos
router.get('/eventos', eventosController.getEventos);

// Rota para criar um evento
router.post('/eventos', eventosController.createEvento);

// Rota para pegar um evento específico por ID
router.get('/eventos/:id', eventosController.getEventoById);

// Rota para atualizar um evento por ID
router.put('/eventos/:id', eventosController.updateEvento);

// Rota para deletar um evento por ID
router.delete('/eventos/:id', eventosController.deleteEvento);

module.exports = router;
