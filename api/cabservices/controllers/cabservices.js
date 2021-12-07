'use strict';

    /**
 * Read the documentation (https://strapi.io/documentation/developer-docs/latest/development/backend-customization.html#core-controllers)
 * to customize this controller
 */

module.exports = {
     
     //insert
     async cabservices(ctx) {

        console.log(ctx.request.body);
             const entry = await strapi.query('cabservices').create(ctx.request.body);
             return entry;  
    },
     //Update
     async updatecab(data) {
    
         const entry = await strapi.query('cabservices').update({ id: data.request.body.id}); 
         console.log(entry.views+1);

          return entry;
      },
};
