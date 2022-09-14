const express = require('express');
const pacienteController = require('../controller/pacienteController');
const authController = require ("../controller/authController");
const authLoginValidation = require ("../validations/login");

const routes = express.Router();

routes.post('/pacientes',pacienteController.cadastrarPaciente);
routes.get('/pacientes',pacienteController.listarPacientes);
routes.get('/pacientes/:id',pacienteController.listarPacienteId);
routes.put('/pacientes/:id',pacienteController.atualizarPaciente);
routes.delete('/pacientes/:id',pacienteController.deletarPaciente);


module.exports = routes;