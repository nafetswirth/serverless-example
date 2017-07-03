'use strict';

module.exports = {
    doSomething: doSomething
};

function doSomething() {
    return Promise.resolve(true);
}