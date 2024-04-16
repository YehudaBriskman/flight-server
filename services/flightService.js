const getFlights = async (userId) => {
    const flights = await Flight.find({ UserId: userId });
    return flights;
};

const getFlightsByHis = async (userId, His) => {
    const flights = await Flight.find({ UserId: userId, His: {$gt: His} });
    return flights;
};

const getFlightsByADI = async (userId, ADI) => {
    const flights = await Flight.find({ UserId: userId, ADI: {$gt: ADI} });
    return flights;
};

const getFlightsByAltitude = async (userId, Altitude) => {
    const flights = await Flight.find({ UserId: userId, Altitude: {$gt: Altitude} });
    return flights;
};

const addFlight = async (userId, flightData) => {
    const flight = new Flight({ ...flightData, UserId: userId });
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
