// grab the mongoose module
var mongoose = require('mongoose');

// define our nerd module
// module.export allows us to pass this to other files when it is called
module.exports = mongoose.model('Nerd', {
    name : { type : String, default: ''}
});

