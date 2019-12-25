const mongoose = require('mongoose');

const Igreja = mongoose.model('Igreja');

module.exports = {
    async list(req,res){
        const igreja = await Igreja.find();
        return res.json(igreja);
    },

    async show(req,res){
        const igreja = await Igreja.findById(req.params.id);
        return res.json(igreja);
    },

    async create(req,res){
        const igreja = await Igreja.create(req.body);
        return res.json(igreja);
    },

    async update(req,res){
        const igreja = await Igreja.findByIdAndUpdate(req.params.id,req.body);
        return res.json(igreja);
    },

    async delete(req,res){
        await Igreja.findByIdAndDelete(req.params.id);
        return res.send('Igreja Excluida com Sucesso');
    }
}