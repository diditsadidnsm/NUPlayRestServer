const mongoose = require('mongoose');

const tbl_categorySchema = mongoose.Schema({
    title:{
        type: String,
        required: true
    },
    narasumber:{
        type: String,
        required: true
    }
});

const Category = mongoose.model('tbl_categories', tbl_categorySchema);
module.exports = Category;
