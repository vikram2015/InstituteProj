let express = require('express');
let router = express.Router();
let employOperation = require('../employ/employOperation');
let companyOperation = require('../company/companyOperation');




/**
 * Fetching the comlete employ and company details
 */
router.get('/fetchCompanyAndEmployList', function (req, res) {
    
    companyOperation.fetchAllCompanyDetails().then(function(companyDetails){
        if(companyDetails){
           
        }
    })
});



module.exports = router;