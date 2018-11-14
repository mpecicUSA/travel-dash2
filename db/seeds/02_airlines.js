
exports.seed = function(knex, Promise) {
  // Deletes ALL existing entries
  return knex('airlines').del()
    .then(function () {
      // Inserts seed entries
      return knex('airlines').insert([
        {airline_name: "Southwest", airline_description: "The worlds largest low-cost carrier, Low Fares. Nothing to hide. That\'s transparency", airline_img_url: "https://upload.wikimedia.org/wikipedia/commons/thumb/c/c4/Southwest_Airlines_logo_2014.svg/512px-Southwest_Airlines_logo_2014.svg.png"},
        {airline_name: "Delta", airline_description: "What started as a humble, little aerial crop dusting operation called Huff Daland Dusters in 1924 has now grown into one of the world’s largest global airlines, helping more than 160 million travelers get to the places they want to go to each year.", airline_img_url: 'https://fontmeme.com/images/Delta-Logo.jpg'}
      ]);
    });
};
