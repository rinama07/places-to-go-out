const mongoose = require('mongoose');
const PointSchema = require('./util/Point');

const PlaceSchema = new mongoose.Schema({
    name: String,
    address: String,
    location: {
        type: PointSchema,
        index: '2dsphere'
    },
    site_url: String,
    instagram_user: String,
    tags: [String],
    rank: Number,
    visit_date: Date
});

module.exports = mongoose.model('places', PlaceSchema);