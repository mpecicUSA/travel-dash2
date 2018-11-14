
exports.seed = function(knex, Promise) {
  // Deletes ALL existing entries
  return knex('users').del()
    .then(function () {
      // Inserts seed entries
      return knex('users').insert([
      {user_name: "Marko Pecic", user_email: "marko@email.com", user_password: "Password" },
      {user_name: "Kristina Dakovic", user_email: "tina@email.com", user_password: "Password" }
      ]);
    });
};
