

'use strict';
const _ = require('lodash');

module.exports = {

  //Register
    async register(ctx) {

        console.log(ctx.request.body);
             const entry = await strapi.query('fb-users').create(ctx.request.body);
             return entry;  
    },
    //Update
    async updateuser(data) {
      console.log("email : "+data.request.body.email);

     const entry = await strapi.query('fb-users').update({ email: data.request.body.email }, data.request.body); 
     console.log(entry);
      return entry;
  },
//Login
  async login(data) {
    const entry = await strapi.query('fb-users').find({ email: data.request.body.email,password:  data.request.body.password}); 
    console.log(entry);
  
    if (entry.length) { 
      return {user:entry,message:"success"};
    } else {
      return {message:"failed"};
    }
},

  
};
