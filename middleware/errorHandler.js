const errorHandler = (err, req, res, next) => {
    const errorObj = {};
    if (err.msg) errorObj.msg = err.msg; // Extracting error message if exists
    if (err.stack) errorObj.stack = err.stack; // Extracting error stack if exists
    if (!Object.keys(errorObj).length) {
        // If the error object is empty, send a generic error message
        return res.status(err.status ?? 500).send("There was an error");
    }
    // If not the error object is not empty, send the error object as JSON
    res.status(err.status ?? 500).json(errorObj);
};

module.exports = errorHandler;
