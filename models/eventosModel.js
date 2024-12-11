const { Client } = require('pg');
const { urlConnection } = require('../config/config');

// Configuração de conexão com SSL e ignorando certificado autoassinado
const client = new Client({
  connectionString: urlConnection,
  ssl: {
    rejectUnauthorized: false  // Ignora o erro de certificado autoassinado
  }
});

client.connect();

// Função para obter todos os eventos
const getEventos = async () => {
  const res = await client.query('SELECT * FROM eventos ORDER BY data, hora');
  return res.rows;
};

// Função para criar um evento
const createEvento = async (data, hora, descricao, observacao) => {
  const res = await client.query(
    'INSERT INTO eventos (data, hora, descricao, observacao) VALUES ($1, $2, $3, $4) RETURNING *',
    [data, hora, descricao, observacao]
  );
  return res.rows[0];
};

// Função para obter um evento específico
const getEventoById = async (id) => {
  const res = await client.query('SELECT * FROM eventos WHERE id = $1', [id]);
  return res.rows[0];
};

// Função para atualizar um evento
const updateEvento = async (id, data, hora, descricao, observacao) => {
  const res = await client.query(
    'UPDATE eventos SET data = $1, hora = $2, descricao = $3, observacao = $4 WHERE id = $5 RETURNING *',
    [data, hora, descricao, observacao, id]
  );
  return res.rows[0];
};

// Função para excluir um evento
const deleteEvento = async (id) => {
  const res = await client.query('DELETE FROM eventos WHERE id = $1 RETURNING *', [id]);
  return res.rows[0];
};

module.exports = {
  getEventos,
  createEvento,
  getEventoById,
  updateEvento,
  deleteEvento
};
