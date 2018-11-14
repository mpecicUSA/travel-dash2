
exports.seed = function(knex, Promise) {
  // Deletes ALL existing entries
  return knex('trips').del()
    .then(function () {
      // Inserts seed entries
      return knex('trips').insert([
        {trip_name: "Vegas", trip_departure_city: "Phoenix, AZ", trip_arrival_city: "Las Vegas. NV", date_of_departure: "12/06/2018", airline_id: 2, user_id:1, guest_id: 2},
        {trip_name: "Denver Ski", trip_departure_city: "Phoenix, AZ", trip_arrival_city: "Denver, CO", date_of_departure: "12/29/2018", airline_id: 1, user_id:2, guest_id: 1}

      ]);
    });
};
