const Tag = require('../models/Tag');

const index = async(req, res) => res.json(await Tag.find());

module.exports = {
    index
}