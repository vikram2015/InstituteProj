let express = require('express');
let router = express.Router();
companyOperation = require('./companyOperation');


router.post('/saveCompany', function(req, res){

    console.log(req.body);

    let companyObject = {
        company_id : req.body.companyId,
        company_name : req.body.companyName,
        company_adress : req.body.companyAdress,
        company_type : req.body.companyType
    }
    companyOperation.saveCompany(companyObject).then(function(DBsavedData){
        res.send({success:true,MSG:'Company saved successfully',clientViewData:DBsavedData})
    })

});

router.get('/companyDetails',function(req, res){
    companyOperation.fetchAllCompanyDetails().then((companyDetails)=>{
        res.send({success:true,
            MSG:'Company details found',
            companyData:companyDetails
        })
    })
})

module.exports = router;