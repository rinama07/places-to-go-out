const Place = require('../models/Place');
const { getDateObjWithouTime } = require('../util/date');
const { getLocationByAddress } = require('../util/location');
const { getStringAsArray } = require('../util/list');

function getPlaceByProps(name, address, site_url, instagram_user, tags, rank, visit_date) {
    const location = getLocationByAddress(address);

    tags = getStringAsArray(tags);
    visit_date = getDateObjWithouTime(visit_date);

    return {
        name,
        address,
        location,
        site_url,
        instagram_user,
        tags,
        rank,
        visit_date,
    };
}

const index = async(req, res) => res.json(await Place.find());

const show = async (req, res) => res.json(await Place.findById(req.params.id).then(res => res).catch(() => null));

async function create(req, res) {
    const { name, address, site, instagram, tags, rank, date } = req.body;

    let place = await Place.findOne({ address });
    let newPlace = !place;

    if (newPlace) {
        const placeObj = getPlaceByProps(name, address, site, instagram, tags, rank, date);

        place = await Place.create(placeObj);
    }

    res.json({
        new: newPlace,
        place
    });
}

async function update(req, res) {
    const { name, address, site, instagram, tags, rank, date } = req.body;
    const placeId = req.params.id;

    let place = await Place.findById(placeId).then(res => res).catch(() => null);

    if (place) {
        const placeObj = getPlaceByProps(name, address, site, instagram, tags, rank, date);
        
        await Place.updateOne({ _id: placeId }, placeObj);
    }

    res.json(place);
}

const destroy = async (req, res) => res.json(await Place.deleteOne({ _id: req.params.id }).then(res => res).catch(() => null));
    
module.exports = {
    index,
    show,
    create,
    update,
    destroy
}