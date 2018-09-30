let employOperation = require('../employ/employOperation');
let companyOperation = require('../company/companyOperation');
var Promise = require('promise');



let fetchCmpDetails = ()=>{
    var fetchDetails = [];
    return new Promise((resolve, reject)=>{
        companyOperation.fetchAllCompanyDetails().then((data)=>{
            console.log('company details')
            console.log(data)
            employOperation.fetchAllEmployDetails().then(function(data1){
                console.log('employ list found')
                console.log(data1);
            })
        })
    })

}