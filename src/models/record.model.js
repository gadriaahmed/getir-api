const mongoose = require('mongoose');

const RecordSchema = mongoose.Schema({
    key: String,
    value: String,
    createdAt: Date,
    count:[Number]
});

module.exports = mongoose.model('Record', RecordSchema);