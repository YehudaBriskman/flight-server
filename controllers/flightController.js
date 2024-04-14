const flightService = require('../services/flightService');

const getAllFlights = async (req, res, next) => {
    try {
        const flytes = await flightService.getFlights();
        res.json(flytes);
    } catch (error) {
        next(error);
    }
};

// Retrieves flights with His greater than the provided value
const getFlightsByHis = async (req, res, next) => {
    try {
        const { His } = req.body;
        const flytes = await flightService.getFlightsByHis(His);
        res.json(flytes);
    } catch (error) {
        next(error);
    }
};

// Retrieves flights with ADI greater than the provided value
const getFlightsByADI = async (req, res, next) => {
    try {
        const { ADI } = req.body;
        const flytes = await flightService.getFlightsByADI(ADI);
        res.json(flytes);
    } catch (error) {
        next(error);
    }
};

// Retrieves flights with Altitude greater than the provided value
const getFlightsByAltitude = async (req, res, next) => {
    try {
        const { Altitude } = req.body;
        const flytes = await flightService.getFlightsByAltitude(Altitude);
        res.json(flytes);
    } catch (error) {
        next(error);
    }
};

// Adds a new flight to the database
const addFlight = async (req, res, next) => {
    try {
        const { body } = req;
        const savedFlight = await flightService.addFlight(body);
        if (!savedFlight) {
            return res.status(400).json({ error: "Flight not saved" });
        }
        res.status(201).json(savedFlight);
    } catch (error) {
        next(error);
    }
};

const flightctrl = {
    getAllFlights,
    getFlightsByHis,
    getFlightsByAltitude,
    getFlightsByADI,
    addFlight
};

module.exports = flightctrl;
