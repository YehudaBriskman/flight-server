// Express router configuration for fly routes

const router = require("express").Router(); // Importing Express Router
const flightctrl = require("../controllers/flightController"); // Importing fly controller

// Endpoint to register a new flight
router.post("/addFlight", flightctrl.addFlight); 

// Endpoint to search for flights by His
router.post("/searchFlightByHis", flightctrl.getFlightsByHis);
// Endpoint to search for flights by ADI
router.post("/searchFlightByADI", flightctrl.getFlightsByADI);
// Endpoint to search for flights by Altitude
router.post("/searchFlightByAltitude", flightctrl.getFlightsByAltitude);

module.exports = router; // Exporting the router
