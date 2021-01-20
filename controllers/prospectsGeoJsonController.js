const ProspectGeoJson = require('../models/prospectsGeoJson.js')

<<<<<<< HEAD
=======

>>>>>>> main
exports.view = async function(req, res) {
    try {
        let results = ProspectGeoJson.find({})
        if (results) {
            res.status(200).json(results)
        } else {
            res.status(400).json({ message: 'something went wrong' })
        }
    } catch (err) {
        res.status(400).json({ message: 'something went wrong' })
    }
}

exports.add = async function(req, res) {
    try {
        const denver = { type: 'Point', coordinates: [-104.9903, 39.7392] };
        let newLocation = await ProspectGeoJson.create({ name: 'Denver', location: denver })
        if (newLocation) {
            res.status(200).json(newLocation)
        } else {
            res.status(400).json({ message: 'something went wrong' })
        }
    } catch (err) {
        res.status(400).json({ message: 'something went wrong' })
    }
}