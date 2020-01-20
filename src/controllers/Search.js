const Place = require('../models/Place');
const { getStringAsArray } = require('../util/list');
const { getLatLngByAddress } = require('../util/location');

async function index(req, res) {
    const { address, radius, tags} = req.query;

    const filterTags = getStringAsArray(tags);
    const { lat, lng } = getLatLngByAddress(address);

    const places = await Place.find({
        tags: {
            $in: filterTags,
        },
        location: {
            $near: {
                $geometry: {
                    type: 'Point',
                    coordinates: [lng, lat]
                },
                $maxDistance: 1000 * radius
            },
        }
    });

    res.json(places);
}

module.exports = {
    index
}