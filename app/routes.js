// grab the nerd module we just created
var Nerd = require('./models/nerd');

module.exports = function(app) {

    // server routes =========================================
    // handle things like api calls
    // authentication routes
    // api routes
    // route to handle creating goes here (app.post)
    // route to handle delets goes here (app.delete)

    // frontend routes ======================================
    // route to handle all angular requests
    app.get('*', function(req, res) {
        res.sendfile('./public/views/index.html'); // load our public /index.html file
    })
};