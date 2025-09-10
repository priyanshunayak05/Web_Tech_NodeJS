const NetaModel = require('../models/neta.model')
//all controller functions here

async function readNetas(req, res) {
    try {
    const netas = await NetaModel.find({});
    res.render('neta/index', { netas });
    }
    catch (e) {
        console.log("error in reading netas");
        console.log(e);
        res.send("error in reading netas");
    }   
}

async function createNeta(req, res) { 
    try{
        let { name, party, isMale, isCorrupt } = req.body;
        let newNeta = await new NetaModel({ name, party, isMale: isMale === 'on', isCorrupt: isCorrupt === 'on' });
        return res.status(200).render('index', { allNeta});
    }
    catch(e){
        console.log("error in creating neta");
        console.log(e);
        res.send("error in creating neta");
    }
}

module.exports = { readNetas }
module.exports = { createNeta }