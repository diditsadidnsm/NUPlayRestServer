const Category = require("../models/Category.js");

exports.getCategory = async (req, res) => {
    try {
        const category = await Category.find();
        res.json(category);
    } catch (error) {
        res.status(500).json({message: error.message});
    }

}

exports.getCategoryById = async (req, res) => {
    try {
        const category = await Category.findById(req.params.id);
        res.json(category);
    } catch (error) {
        res.status(404).json({message: error.message});
    }

}

exports.saveCategory = async (req, res) => {
    const category = new Category(req.body);
    try {
        const savedCategory = await category.save();
        res.status(201).json(savedCategory);
    } catch (error) {
        res.status(400).json({message: error.message});
    }
}

exports.updateCategory = async (req, res) => {
    const cekId = await Category.findById(req.params.id);
    if(!cekId) return res.status(404).json({message: "Data tidak ditemukan"});
    try {
        const updatedCategory = await Category.updateOne({_id: req.params.id}, {$set: req.body});
        res.status(200).json(updatedCategory);
    } catch (error) {
        res.status(400).json({message: error.message});
    }
}

exports.deleteCategory = async (req, res) => {
    const cekId = await Category.findById(req.params.id);
    if(!cekId) return res.status(404).json({message: "Data tidak ditemukan"});
    try {
        const deletedCategory = await Category.deleteOne({_id: req.params.id});
        res.status(200).json(deletedCategory);
    } catch (error) {
        res.status(400).json({message: error.message});
    }
}