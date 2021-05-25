const BookModel = require('../model/BookModel');

class BookController {

    async create(req,res){
        const book = new BookModel(req.body);
        await book
        .save()
        .then(response =>{
            return res.status(200).json(response);
        })
        .catch(error =>{
            return res.status(500).json(error);
        })
    }

    async update(req,res){
        await BookModel.findByIdAndUpdate({'_id': req.params.id}, req.body, { new: true })
        .then(response =>{
            return res.status(200).json(response);
        })
        .catch(error =>{
            return res.status(500).json(error);
        })
    }

    async all(req,res){
        await BookModel.find({ macaddress: {'$in': req.params.macaddress }})
        .then(response =>{
            return res.status(200).json(response);
        })
        .catch(error =>{
            return res.status(500).json(error);
        })
    }

    async getById(req,res){
        await BookModel.findById({'_id': req.params.id})
        .then(response =>{
            return res.status(200).json(response);
        })
        .catch(error =>{
            return res.status(500).json(error);
        })
    }

    async getByName(req,res){
        await BookModel.find({ name: {'$in': req.params.name }})
        .then(response =>{
            return res.status(200).json(response);
        })
        .catch(error =>{
            return res.status(500).json(error);
        })
    }

    async delete(req,res){
        await BookModel.findByIdAndDelete({'_id': req.params.id})
        .then(response =>{
            return res.status(200).json(response);
        })
        .catch(error =>{
            return res.status(500).json(error);
        })
    }
}

module.exports = new BookController();