const key = require('../config/constants');
const AYLIENTextAPI = require('aylien_textapi');
const textapi = new AYLIENTextAPI({
    application_id: key.appId,
    application_key: key.apiKey
});

function fetchTextAnalysisPromise(msg) {
    // aylien package hasn't handled error intrisically, either find a way to handle error or use request promise
    return new Promise((resolve, reject) => {
        textapi.sentiment({
            'text': msg
        }, function (error, response) {
            if (error) {
                return reject(error)
            }
            return resolve(response);
        });
    })
}

module.exports = fetchTextAnalysisPromise;