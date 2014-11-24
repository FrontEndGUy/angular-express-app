// Include express
var express = require('express');

// Initialize the Router
var router = express.Router();

// Set up the Route
router.post('/', function (req, res) {
    console.log(req.body);
    res.json({
        'msg': 'success'
    });
});

// Expose the module
module.exports = router;