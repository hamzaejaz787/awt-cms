'use strict';

/**
 * bod service
 */

const { createCoreService } = require('@strapi/strapi').factories;

module.exports = createCoreService('api::bod.bod');
