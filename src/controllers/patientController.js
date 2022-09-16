const { Patients } = require('../models/Patients');

const patientController = {
    registerPatient: async (req, res) => {
        try {
            const {nome, email, idade} = req.body;
            if(!nome || !email || !idade) return res.status(400).json('Preencha todos os campos!');

            const newPatient = await Patients.create({
                nome,
                email,
                idade,
            });
            res.status(201).json(newPatient);
                 
        } catch (err) {
            console.error(err);
        }    
    },

    listPatients: async (req, res) => {
        try {
            const listPatients = await Patients.findAll();

            res.status(200).json(listPatients);
        } catch (err) {
            console.error(err);
        }
        
    },

    listPatientId: async (req, res) => {
        try {
            const { id } = req.params;
        
            const pacienteId = await Pacientes.findByPk(id);
            if (pacienteId !== null) {
                res.status(200).json(pacienteId);
            }
            else {
                res.status(404).json('Id não encontrado.')
            }
            
        } catch (err) {
            console.error(err);
        }
        
    },

    atualizarPaciente: async (req, res) => {
        try {
            const { id } = req.params;
            const {nome, email, idade} = req.body;
            const pacienteId = await Pacientes.findByPk(id);
        
            if (pacienteId !== null) {
                if(!nome || !email || !idade) return res.status(400).json('Preencha todos os campos!');
                const pacienteAtualizado = await Pacientes.update({
                    nome,
                    email,
                    idade,
                },
                {
                    where: {
                        id,
                    },
                });
                res.status(200).json(pacienteAtualizado)
            }
            else {
                res.status(404).json('Id não encontrado.')
            }
        } catch (err) {
            console.error(err);
        }
    },

    deletarPaciente: async (req, res) => {
        try {
            const { id } = req.params;
            const pacienteId = await Pacientes.findByPk(id);
            if (pacienteId !== null) {
                await Pacientes.destroy({
                    where: {
                        id,
                    },
                });
                res.status(204);
            } else {
                res.status(404).json('Id não encontrado');
            }
            
        } catch (err) {
            console.error(err);
        }
         
    }
};

module.exports = pacienteController;
