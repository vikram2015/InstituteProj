let Promise = require('promise');
let companySchema = require('./companySchema');

let saveCompany = (paramter)=>{
    return new Promise((resolve, reject)=>{
        if(paramter){
            let saveCompany = new companySchema(paramter);
            saveCompany.save().then(function(savedData){
                if(savedData){
                    resolve(savedData);
                }
            })

        }
    })
}

let fetchAllCompanyDetails = ()=>{
    return new Promise((resolve, reject)=>{
        companySchema.find()
        .exec()
        .then((data)=>{
            console.log('this is operation file')
            console.log(data);
            if(data){
                resolve(data);
            }
        })
        
    })
}


module.exports = {
    saveCompany:saveCompany,
    fetchAllCompanyDetails:fetchAllCompanyDetails
}