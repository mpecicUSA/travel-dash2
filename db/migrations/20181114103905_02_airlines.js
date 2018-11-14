
exports.up = function(knex, Promise) {
  return knex.schema.createTable('airlines', (table)=>{
    table.increments();
    table.string('airline_name');
    table.text('airline_description');
    table.text('airline_img_url');

  })
};

exports.down = function(knex, Promise) {
  return knex.schema.dropTable('airlines');
};
