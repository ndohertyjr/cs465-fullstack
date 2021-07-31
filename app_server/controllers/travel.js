const request = require('request');
const apiOptions = {
    server: 'http://localhost:3000'
};

/* Render travel list view */
const renderTravelList = (req, res, responseBody) => {
    let message = null;
    let pageTitle = process.env.npm_package_description + ' - Travel';
    if (!(responseBody instanceof Array)) {
        message = 'API lookup error';
        responseBody = [];
    } else {
        if (!responseBody.length) {
            message = 'No trips exist in our database';
        }
    }
    
    res.render('travel',
        {
            title: pageTitle,
            trips: responseBody,
            message
        }
    );
}

/* GET travel list view */
const travelList = (req, res) => {
    const path = '/api/trips';
    const requestOptions = {
        url: `${apiOptions.server}${path}`,
        method: 'GET',
        json: {},
    };

    console.info('>> travelController.travelList calling ' + requestOptions.url);
    request(
        requestOptions,
        (err, { statusCode }, body) => {
            if (err) {
                console.err(err);
            }
            renderTravelList(req, res, body);
        }
    );
};

const renderTravelDetails = (req, res, responseBody) => {
    let message = null;
    let pageTitle = process.env.npm_package_description + ' - Travel Details';
    if (!(responseBody instanceof Array)) {
        message = 'API lookup error';
        responseBody = [];
    } else {
        if (!responseBody.length) {
            message = 'No details for this trip in the database';
        }
    }
    console.log(responseBody);
    res.render('travel',
        {
            title: pageTitle,
            trips: responseBody,
            message
        }
    );
}
/* GET travel details view */
const travelDetails = (req, res) => {
    const path = `/api/trips/${req.params.tripCode}`;
    const requestOptions = {
        url: `${apiOptions.server}${path}`,
        method: 'GET',
        json: {},
    };
    
    console.info('>> travelController.travelDetails calling ' + requestOptions.url);
    request(
        requestOptions,
        (err, { statusCode }, body) => {

            if (err) {
                console.err(err);
            }
            
            renderTravelDetails(req, res, body);
        }
    );
};

module.exports = {
    travelList,
    travelDetails
}
