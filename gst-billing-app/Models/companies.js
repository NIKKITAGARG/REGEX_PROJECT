const { Schema, model } = require("mongoose");

const CompaniesSchema = new Schema({
    name: {
        type: String,
        require : true,
    },
    establish_year: {
        type: String,
        require : true,
    },
    address: {
        type: Object,
    },
});

const Companies = model("companies", CompaniesSchema);

module.exports = { Companies };