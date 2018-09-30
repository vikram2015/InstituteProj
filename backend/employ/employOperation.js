let Promise = require('promise');
let employSchema = require('./employSchema');

let saveEmploy = (parameter) => {
    return new Promise((resolve, reject) => {
        if (parameter) {
            let saveEmploy = new employSchema(parameter);
            saveEmploy.save().then(function (savedData) {
                if (savedData) {
                    resolve(savedData);
                }
            })

        }
    })
}

let fetchAllEmployDetails = () => {
    return new Promise((resolve, reject) => {
        employSchema.find()
            .populate('employ_company')
            .exec()
            .then((data) => {
                console.log('this is operation file')
                console.log(data);
                if (data.length > 0) {
                    resolve(data);
                }
            })

    })
}

let fetchOneEmploy = (paramter) => {
    return new Promise((resolve, reject) => {
        employSchema.findOne({ _id: paramter.id })
    })
}

let updateEmploy = (id, paramter) => {
    console.log('paramter in operation file')
    console.log(paramter)
    console.log(id)

    return new Promise((resolve, reject) => {
        employSchema.findByIdAndUpdate(id, { $set: paramter })
            .then(function (data) {
                console.log('data in operation');
                console.log(data);
                if (data) {
                    resolve(data);
                }
            })
    })

}

let deleteEmploy = (id) => {
    return new Promise((resolve, reject) => {
        employSchema.findByIdAndRemove(id).then((data) => {
            console.log('data in operation file')
            console.log(data)
            if (data) {
                resolve(data)
            }
        })
    })
}




module.exports = {
    saveEmploy: saveEmploy,
    fetchAllEmployDetails: fetchAllEmployDetails,
    fetchOneEmploy: fetchOneEmploy,
    updateEmploy: updateEmploy,
    deleteEmploy: deleteEmploy,
}