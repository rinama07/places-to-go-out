const tags = [
    {
        name: "Drinks"
    },
    {
        name: "Foods"
    },
    {
        name: "Expensive"
    },
    {
        name: "Cheap"
    },
    {
        name: "Good service"
    },
    {
        name: "Healthy"
    },
    {
        name: "Burguer"
    },
    {
        name: "Music"
    },
    {
        name: "Romantic"
    },
    {
        name: "Italian"
    },
    {
        name: " Japanese"
    },
    {
        name: "Veggie"
    },
    {
        name: "Good for grups"
    },
    {
        name: "Games"
    },
    {
        name: "Pizza"
    }
];

const index = (req, res) => res.json(tags);

module.exports = {
    index
}