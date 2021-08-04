const mongoose = require('mongoose'); //.set('debug', true);
const model = mongoose.model('trips');

//Get: /trips - lists all trips
const tripsList = async (req, res) => {
    model
        .find({}) // empty filter for all
        .exec((err, trips) => {
            if (!trips) {
                return res
                    .status(404)
                    .json({"message": "trips not found"});
            } else if (err) {
                return res 
                    .status(404)
                    .json(err);
            } else {
                return res
                    .status(200)
                    .json(trips);
            }
        });
}

// Get: /trips/:tripCode - returns a single trip
const tripsFindByCode = async (req, res) => {
    model  
        .find({ 'code': req.params.tripCode })
        .exec((err, trip) => {
            if (trip.length === 0) {
                return res.status(404).json({"message": "Invalid trip code"});
            }
            if (!trip) {
                return res
                    .status(404)
                    .json({ "message": "trip not found" });
            } else if (err) {
                return res
                    .status(404)
                    .json({err});
            } else {
                return res
                    .status(200)
                    .json(trip);
            }
        });
}

//Create: Add trip
const tripsAddTrip = async (req, res) => {
    model
        .create({
            code: req.body.code,
            name: req.body.name,
            length: req.body.length,
            start: req.body.start,
            resort: req.body.resort,
            perPerson: req.body.perPerson,
            image: req.body.image,
            description: req.body.description
        },
        (err, trip) => {
            if (err) {
            
                return res
                    .status(400) //bad req, invalid content
                    .json(err);
            } else {
                return res
                    .status(201) //created
                    .json(trip);
            }
        });
}

//Update: update one
const tripsUpdateTrip = async (req, res) => {
    console.log(req.body);
    model
        .findOneAndUpdate({ 'code': req.params.tripCode }, {
            code: req.body.code,
            name: req.body.name,
            length: req.body.length,
            start: req.body.start,
            resort: req.body.resort,
            perPerson: req.body.perPerson,
            image: req.body.image,
            description: req.body.description
        }, { new: true })
        .then(trip => {
            if(!trip) {
                return res
                    .status(404)
                    .send({
                        message: "Trip not found with code " + req.params.tripCode + ". Try again."
                    });
            }
            res.send(trip);
        }).catch(err => {
            if (err.kind === "ObjectId") {
                return res
                    .status(404)
                    .send({
                        message: "Trip not found with code " + req.params.tripCode + ". Try again."
                    });
            }
            return res
                .status(500) //server error
                .json(err);
        });
}

//Delete
const tripsDeleteTrip = async (req, res) => {
    console.log("Removing trip " + req.params.tripCode + " from the database.")
    model
        .remove({ 'code': req.params.tripCode }, {
            code: req.body.code,
            name: req.body.name,
            length: req.body.length,
            start: req.body.start,
            resort: req.body.resort,
            perPerson: req.body.perPerson,
            image: req.body.image,
            description: req.body.description
        }).catch(err => {
            if (err.kind === "ObjectId") {
                return res
                    .status(404)
                    .send({
                        message: "Trip not found with code " + req.params.tripCode + ". Try again."
                    });
            }
        return res.status(200).json({
            message: "Deleted"
            });
        });
            
}


module.exports = {
    tripsList,
    tripsFindByCode,
    tripsAddTrip,
    tripsUpdateTrip,
    tripsDeleteTrip
};