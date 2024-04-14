const Flight = require('../models/flightModel');

const getFlights = async () => {
    const flights = await Flight.find();
    return flights;
};

// Retrieves flights with His greater than the provided value
const getFlightsByHis = async (His) => {
    const flights = await Flight.find({ His: {$gt: His} });
    return flights;
};

// Retrieves flights with ADI greater than the provided value
const getFlightsByADI = async (ADI) => {
    const flights = await Flight.find({ ADI: {$gt: ADI} });
    return flights;
};

// Retrieves flights with Altitude greater than the provided value
const getFlightsByAltitude = async (Altitude) => {
    const flights = await Flight.find({ Altitude: {$gt: Altitude} });
    return flights;
};

// Adds a new flyte to the database
const addFlight = async (flightData) => {
    const flight = new Flight(flightData);
    const savedFlight = await flight.save();
    return savedFlight;
};

const flightService = {
    getFlights,
    getFlightsByHis,
    getFlightsByAltitude,
    getFlightsByADI,
    addFlight
};

module.exports = flightService;
