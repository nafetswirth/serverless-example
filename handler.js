'use strict';

const config = require('./config/config');
const response = require('./util/response');

module.exports = {
    handler: handler
}

function handler(event, context, callback) {
    callback(null, response.ok(config));
};