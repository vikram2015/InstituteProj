let express = require('express');
let router = express.Router();
let employOperation = require('./employOperation');
let companyOperation = require('../company/companyOperation');

/**
 * saving the new employ
 */
router.post('/saveEmploy', function (req, res) {

    console.log(req.body);
    let employObject = {
        employ_id: req.body.employId,
        employ_name: req.body.employName,
        employ_adress: req.body.employAdress,
        employ_type: req.body.employType,
    }

    console.log("employObject")
    console.log(employObject)

    let employCmp = req.body.employCompany;
    companyOperation.fetchOneCompany(employCmp).then(function (companyDetails) {

         console.log("11111111111");
            console.log(companyDetails);
        if (companyDetails) {
            
            employObject.employ_company = companyDetails._id;
            console.log("employ object in route");
            console.log(employObject);

            employOperation.saveEmploy(employObject).then(function (DBsavedData) {
                res.send({ success: true, MSG: 'employ saved successfully', clientViewData: DBsavedData })
            })
        } else {
            res.send({ success: false, MSG: 'Company not found' })
        }




    })




});


/**
 * Fetching the comlete employ details
 */
router.get('/employList', function (req, res) {
    employOperation.fetchAllEmployDetails().then((employDetails) => {
        res.send({
            success: true,
            MSG: 'employ details found',
            employData: employDetails
        })
    })
});



/**
 * For deleting a particular employ
 */
router.post('/deleteEmploy', function (req, res) {

    console.log(req.params);
    console.log(req.query);
    console.log(req.body);
    var id = req.body.params;
    employOperation.deleteEmploy(id).then((employDetails) => {
        console.log("data is successfully deleted");
        res.send({
            success: true,
            MSG: 'employ deleted successfully',
            employData: employDetails
        })
    })
});



/**
 * For update a particular employ
 */
router.post('/updateEmploy', function (req, res) {

    console.log(req.body);

    var id = req.body._id;

    let employObject = {
        employ_id: req.body.employ_id,
        employ_name: req.body.employ_name,
        employ_adress: req.body.employ_adress,
        employ_type: req.body.employ_type
    }
    employOperation.updateEmploy(id, employObject).then((employDetails) => {

        console.log("employDetails in routes");
        console.log(employDetails);
        res.send({
            success: true,
            MSG: 'employ details Updated'
        })
    })
});



module.exports = router;