const getStringAsArray = arrayString => arrayString.split(',').map(item => item.trim()) || [];

module.exports = {
    getStringAsArray
}