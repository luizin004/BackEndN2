const eventosModel = require('../models/eventosModel');

// Buscar todos os eventos
const getEventos = async (req, res) => {
  try {
    const eventos = await eventosModel.getEventos();
    res.status(200).json(eventos);
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: 'Erro ao buscar eventos.' });
  }
};

// Criar um evento
const createEvento = async (req, res) => {
  const { data, hora, descricao, observacao } = req.body;
  try {
    const evento = await eventosModel.createEvento(data, hora, descricao, observacao);
    res.status(201).json(evento);
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: 'Erro ao criar evento.' });
  }
};

// Buscar evento por ID
const getEventoById = async (req, res) => {
  const { id } = req.params;
  try {
    const evento = await eventosModel.getEventoById(id);
    if (!evento) {
      return res.status(404).json({ message: 'Evento não encontrado.' });
    }
    res.status(200).json(evento);
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: 'Erro ao buscar evento.' });
  }
};

// Atualizar evento
const updateEvento = async (req, res) => {
  const { id } = req.params;
  const { data, hora, descricao, observacao } = req.body;
  try {
    const evento = await eventosModel.updateEvento(id, data, hora, descricao, observacao);
    if (!evento) {
      return res.status(404).json({ message: 'Evento não encontrado.' });
    }
    res.status(200).json(evento);
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: 'Erro ao atualizar evento.' });
  }
};

// Deletar evento
const deleteEvento = async (req, res) => {
  const { id } = req.params;
  try {
    const evento = await eventosModel.deleteEvento(id);
    if (!evento) {
      return res.status(404).json({ message: 'Evento não encontrado.' });
    }
    res.status(200).json({ message: 'Evento deletado com sucesso.' });
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: 'Erro ao deletar evento.' });
  }
};

module.exports = {
  getEventos,
  createEvento,
  getEventoById,
  updateEvento,
  deleteEvento
};
