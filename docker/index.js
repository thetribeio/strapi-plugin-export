'use strict';

module.exports = {
  /**
   * An asynchronous register function that runs before
   * your application is initialized.
   *
   * This gives you an opportunity to extend code.
   */
  register(/*{ strapi }*/) {},

  /**
   * An asynchronous bootstrap function that runs before
   * your application gets started.
   *
   * This gives you an opportunity to set up your data model,
   * run jobs, or perform some special logic.
   */
  bootstrap({ strapi }) {
    if(process.env.NODE_ENV === 'development'){
      strapi.entityService.create('admin::user', {data: {
          'firstname': 'John',
          'lastname': 'Doe',
          'email': 'test@example.com',
          'password': 'test1234',
          'isActive': true,
          'created_at': new Date(),
          'roles': [1]
        },});
      const {faker} = require('@faker-js/faker');
      for(let i =0; i < 20000; i++) {
        strapi.entityService.create('api::article.article',{
          data:{
            title: faker.lorem.sentence(),
            description: faker.lorem.paragraphs(),
          }
        })
      }
    }
  },
};
