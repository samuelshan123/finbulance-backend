'use strict';

/**
 * Read the documentation (https://strapi.io/documentation/developer-docs/latest/development/backend-customization.html#core-controllers)
 * to customize this controller
 */

module.exports = {
    async interiors(ctx) {

        console.log(ctx.request.body);
             const entry = await strapi.query('interiors').create(ctx.request.body);
             return entry;  
    },
};
