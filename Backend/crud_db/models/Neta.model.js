const { name } = require('ejs');
const mongoose = require('mongoose');

const netaSchema = new mongoose.Schema({
    name: {type: String, required: true,trim: true},
    party: String,
    isMale: Boolean,
    isCorrupt: Boolean,
});
const NetaModel=mongoose.model('Neta',netaSchema);  //creating model
module.exports=NetaModel;