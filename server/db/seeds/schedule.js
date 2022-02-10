exports.seed = function (knex) {
  // Deletes ALL existing entries
  return knex('schedule').del()
    .then(function () {
      // Inserts seed entries
      return knex('schedule').insert([
        { id: 1, name: 'Sadie', song: 'Hit me Baby', url: 'https://www.youtube.com/watch?v=PYpU2TxIzAM' },
        { id: 2, name: 'Kate', song: 'Betty', url: 'https://www.youtube.com/watch?v=9lyiVugwMN0' },
        { id: 3, name: 'Nikhita', song: 'You sexy thing', url: 'https://youtu.be/9aX0YThpKfA' },
        { id: 4, name: 'Gus', song: 'Angels', url: 'https://youtu.be/pGFEj-Dv3-0' }

      ])
    })
}
