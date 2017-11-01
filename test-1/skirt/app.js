'use strict';
const knex = require('knex')({
  client: 'mysql',
});
module.exports = app => {
  app.beforeStart(function* () {
    // const ctx = app.createAnonymousContext();

    const user = yield app.mysql.query(knex.schema.hasTable('user').toString());
    if (user.length === 0) {
      const userSchema = knex.schema.createTableIfNotExists('user', function(table) {
        table.increments();
        table.string('name').notNullable().defaultTo('');
        table.integer('mobile').notNullable().defaultTo(0);
        table.string('address').notNullable().defaultTo('');
        table.string('area').notNullable().defaultTo('');
        table.timestamp('creat_at').defaultTo(knex.fn.now());
        table.charset('utf8');
      });
      yield app.mysql.query(userSchema.toString());
      // yield ctx.helper.unique(app, 'user', 'mobile');
      // yield ctx.helper.unique(app, 'user', 'wechat');
    }
    const home = yield app.mysql.query(knex.schema.hasTable('home').toString());
    if (home.length === 0) {
      const userSchema = knex.schema.createTableIfNotExists('home', function(table) {
        table.increments();
        table.string('pic').notNullable().defaultTo('');
        // table.string('movepic').notNullable().defaultTo('');
        // table.string('uppic').notNullable().defaultTo('');
        // table.string('downpic').notNullable().defaultTo('');
        table.timestamp('creat_at').defaultTo(knex.fn.now());
        table.charset('utf8');
      });
      yield app.mysql.query(userSchema.toString());
      // yield ctx.helper.unique(app, 'user', 'mobile');
      // yield ctx.helper.unique(app, 'user', 'wechat');
    }

    // const St = yield app.mysql.query(knex.schema.hasTable('st').toString());
    // if (St.length === 0) {
    //   const userSchema = knex.schema.createTableIfNotExists('st', function(table) {
    //     table.increments();
    //     table.string('name').notNullable().defaultTo('');
    //     table.integer('age').notNullable().defaultTo(0);
    //     table.timestamp('creat_at').defaultTo(knex.fn.now());
    //     table.charset('utf8');

    //     table.float('column', 2, 1).notNullable().defaultTo(0);
    //     table.time('time').notNullable().defaultTo(0);
    //     table.text('text', 3);
    //     table.boolean('boolean').notNullable().defaultTo();
    //     table.bigInteger('big').notNullable().defaultTo(0);
    //     table.decimal('dec', [ 2, 1 ]).notNullable().defaultTo(0);
    //     table.binary('bin', 2).notNullable().defaultTo(0);// 添加一个二进制列，并为MySQL提供可选的长度参数
    //     table.date('date').notNullable().defaultTo();
    //     table.dateTime('datetime').notNullable().defaultTo();
    //     table.enu('enu', [ 1, 2 ]).notNullable().defaultTo(); // 添加一个enum列(别名enu，因为enum是JavaScript中的保留字)。注意，第二个参数是一个值数组
    //   });
    //   yield app.mysql.query(userSchema.toString());
    // }
  });
};

