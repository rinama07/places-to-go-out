function getDateObjWithouTime(stringDate) {
    let date = new Date(stringDate.split('-'));
    date.setUTCHours(0);
    date.setUTCMinutes(0);
    date.setUTCSeconds(0);

    return date;
}

module.exports = {
    getDateObjWithouTime,    
}