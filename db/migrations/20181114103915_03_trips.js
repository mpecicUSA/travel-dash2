
exports.up = function(knex, Promise) {
  return knex.schema.createTable("trips",(table)=>{
    table.increments();
    table.string('trip_name');
    table.string('trip_departure_city');
    table.string('trip_arrival_city');
    table.string('date_of_departure');
    table.integer('airline_id').references('id').inTable("airlines");
    table.integer('user_id').references('id').inTable("users");
    table.integer('guest_id').references('id').inTable('users');
  })
};

exports.down = function(knex, Promise) {
  return knex.schema.dropTable('trips');
};
