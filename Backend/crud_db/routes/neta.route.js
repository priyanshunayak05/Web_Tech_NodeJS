const { readNetas } = require("../controllers/neta.controller");

function netaRoutes(app) {
    app.get('/api/netas', readNetas);   
    app.post('/api/neta', createNeta);
    app.get('/api/neta',sh)

}
module.exports = netaRoutes;