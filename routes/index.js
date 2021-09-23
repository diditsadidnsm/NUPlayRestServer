const express = require('express');
const { getCategory,
    getCategoryById,
    saveCategory,
    updateCategory,
    deleteCategory } = require("../controllers/categoryController.js");

const { getVideos,
    getVideosById,
    saveVideos,
    updateVideos,
    deleteVideos } = require("../controllers/videosController.js");

const router = express.Router();

router.get('/category', getCategory);
router.get('/category/:id', getCategoryById);
router.post('/category', saveCategory);
router.patch('/category/:id', updateCategory);
router.delete('/category/:id', deleteCategory);

router.get('/videos', getVideos);
router.get('/videos/:id', getVideosById);
router.post('/videos', saveVideos);
router.patch('/videos/:id', updateVideos);
router.delete('/videos/:id', deleteVideos);

module.exports = router;