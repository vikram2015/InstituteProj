let Promise = require('promise');
let companySchema = require('./companySchema');
let companyRoute = require('./companyRoutes');

let saveCompany = (paramter) => {
    return new Promise((resolve, reject) => {
        if (paramter) {
            let saveCompany = new companySchema(paramter);
            saveCompany.save().then(function (savedData) {
                if (savedData) {
                    resolve(savedData);
                }
            })

        }
    })
}

let fetchAllCompanyDetails = () => {
    return new Promise((resolve, reject) => {
        companySchema.find({ isTrue: true })
            .exec()
            .then((data) => {
                console.log('this is operation file')
                console.log(data);
                    resolve(data);
            })
    })
}

let fetchOneCompany = (parameter) => {
    console.log('parameter in company operation for fetching one company')
    console.log(parameter);
    return new Promise((resolve, reject) => {
        companySchema.findOne({ company_name: parameter })
            .then((data) => {
                    console.log("employ company in operation")
                    console.log(data);
                    resolve(data)
            })
    })
}

let updateCompany = (id, paramter) => {
    console.log('paramter in operation file')
    console.log(paramter)
    console.log(id)

    return new Promise((resolve, reject) => {
        companySchema.findByIdAndUpdate(id, { $set: paramter })
            .then(function (data) {
                console.log('data in operation');
                console.log(data);
                if (data) {
                    resolve(data);
                }
            })
    })

}

let deleteCompany = (id, parameter) => {
    return new Promise((resolve, reject) => {
        var twoTask = [];
        companySchema.findByIdAndUpdate(id, { $set: parameter }).then((data) => {
            console.log('data in operation file')
            console.log(data)
            if (data) {
                resolve(data)
            }
        })
    })
}

// let fetchPopulatedDetails = (companyAdress)=>{
//     companySchema.aggregate({"$match" : {company_adress:companyAdress}},{$group : {"_id" : null,"companyName" :{"$sum" : "$company_adress"}}},function( data){
//            console.log('aggregated data')
//            console.log(data)
//         })
// }


module.exports = {
    saveCompany: saveCompany,
    fetchAllCompanyDetails: fetchAllCompanyDetails,
    fetchOneCompany: fetchOneCompany,
    updateCompany: updateCompany,
    deleteCompany: deleteCompany,
    // fetchPopulatedDetails:fetchPopulatedDetails
}