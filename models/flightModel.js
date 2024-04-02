const { Schema, model } = require("mongoose");

// Defines the schema for the flight document
const flightSchema = new Schema({
    Altitude: { type: Number, required: true }, // Altitude of the flight
    His: { type: Number, required: true }, // His of the flight
    ADI: { type: Number, required: true }, // ADI of the flight
}, { timestamps: true }); // Adds createdAt and updatedAt fields to the document

// Creates the flight model based on the flightSchema
const Flight = model("Flight", flightSchema);

module.exports = Flight;
