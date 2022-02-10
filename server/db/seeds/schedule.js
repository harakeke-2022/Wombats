exports.seed = function (knex) {
  // Deletes ALL existing entries
  return knex('schedule').del()
    .then(function () {
      // Inserts seed entries
      return knex('schedule').insert([
        { id: 1, name: 'Sadie', song: 'Hit me Baby', url: 'https://www.youtube.com/watch?v=PYpU2TxIzAM' },
        { id: 2, name: 'Kate', song: 'Go easy on me', url: 'https://www.youtube.com/watch?v=M7Qg5H0luo0' }

      ])
    })
}
