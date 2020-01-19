function getLatLngByAddress(address) {
    // get lat and lng by API

    const min = -35.0;
    const max = -30.0;

    return {
        lat: (Math.random(min, max) + min).toFixed(6),
        lng: (Math.random(min, max) + min).toFixed(6),
    };
}

function getLocationByAddress(address) {
    const { lat, lng } = getLatLngByAddress(address);
    
    return {
        type: 'Point',
        coordinates: [lng, lat]
    };
}

module.exports = {
    getLocationByAddress,
    getLatLngByAddress,
}