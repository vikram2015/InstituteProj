let mongoose = require('mongoose');
let schema = mongoose.Schema;
let employSchema = schema({

    employ_id: {
        type: Number,
        required: true,
    },
    employ_name: {
        type: String,
        required: false
    },
    employ_adress: {
        type: String,
        required: false
    },
    employ_type: {
        type: String,
        required: false
    },
    employ_company: {
        type:mongoose.Schema.Types.ObjectId, ref:'Company', required:true
    }
});

let Employ = module.exports = mongoose.model('Employ', employSchema);