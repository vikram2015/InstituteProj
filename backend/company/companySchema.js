let mongoose = require('mongoose');
let schema = mongoose.Schema;
let companySchema = schema({

    company_id:{
        type:Number,
        required:true,
    },
    company_name:{
        type:String,
        required:false
    },
    company_adress:{
        type:String,
        required:false
    },
    company_type:{
        type:String,
        required:false
    },
    isTrue:{
        type:Boolean,
        required:true,
        default:true
    }
});

let Company = module.exports = mongoose.model('Company', companySchema);