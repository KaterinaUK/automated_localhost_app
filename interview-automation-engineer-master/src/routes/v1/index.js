const express = require('express');
const config = require('../../config/config');
const healthRoute = require('./healthRoute');
const transactionRoute = require('./transactionRoute');
const logger = require('../../config/logger');

const router = express.Router();

const defaultRoutes = [
    {
        path: '/health',
        route: healthRoute,
    }, {
        path: '/transaction',
        route: transactionRoute,
    }
];

const devRoutes = [];

defaultRoutes.forEach((route) => {
    logger.info(`[default] init route ${route.path}`);
    router.use(route.path, route.route);
});

/* istanbul ignore next */
if (config.env === 'development') {
    devRoutes.forEach((route) => {
        logger.info(`[dev] init route ${route.path}`);
        router.use(route.path, route.route);
    });
}

module.exports = router;
