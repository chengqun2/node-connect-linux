const axios = require("axios");
const cheerio = require("cheerio");
const pretty = require("pretty");

module.exports = {
    getTitle: (req, res) => {
        const url = req.body.url
        getTitleFromUrl(url).then(function (data) {
            res.status(200).json(data);
        }).catch(error => {
            res.status(500).json(error)
        });
    }
}

async function getTitleFromUrl(url) {
    try {
        // Fetch the HTML from the URL
        const { data } = await axios.get(url);
        // Load the HTML into cheerio
        const $ = cheerio.load(data);
        // Extract the title
        const title = $('title').text();
        return title;
    } catch (error) {
        console.error('Error fetching the title:', error);
        return '';
    }
}