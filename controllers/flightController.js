const flightService = require('../services/flightService');

const getAllFlights = async (req, res, next) => {
    try {
        const userId = req.user.id; // Extracting the user ID from the request
        const flights = await flightService.getFlights(userId);
        res.json(flights);
    } catch (error) {
        next(error);
    }
};

// Retrieves flights with His greater than the provided value
const getFlightsByHis = async (req, res, next) => {
    try {
        const userId = req.user.id;
        const { His } = req.body;
        const flights = await flightService.getFlightsByHis(userId, His);
        res.json(flights);
    } catch (error) {
        next(error);
    }
};

// Retrieves flights with ADI greater than the provided value
const getFlightsByADI = async (req, res, next) => {
    try {
        const userId = req.user.id;
        const { ADI } = req.body;
        const flights = await flightService.getFlightsByADI(userId, ADI);
        res.json(flights);
    } catch (error) {
        next(error);
    }
};

// Retrieves flights with Altitude greater than the provided value
const getFlightsByAltitude = async (req, res, next) => {
    try {
        const userId = req.user.id;
        const { Altitude } = req.body;
        const flights = await flightService.getFlightsByAltitude(userId, Altitude);
        res.json(flights);
    } catch (error) {
        next(error);
    }
};

// Adds a new flight to the database
const addFlight = async (req, res, next) => {
    try {
        const userId = req.user.id;
        const { body } = req;
        const savedFlight = await flightService.addFlight(userId, body);
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
