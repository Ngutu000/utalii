const mongoose = require('mongoose');
const Schema = mongoose.Schema;
const ObjectId = Schema.ObjectId;

const OperatorsSchema = new Schema({
    operatorId: ObjectId,
    firstName: String, // corrected misspelling of "firstName"
    lastName: String, // corrected misspelling of "lastName"
    email: {
    	type: String,
    	unique: true
    },
    phone: String,
    url: String
});

const OperatorsModel = mongoose.model('Operators', OperatorsSchema);

module.exports = OperatorsModel;
