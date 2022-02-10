exports.up = function (knex) {
  return knex.schema.createTable('schedule', table => {
    table.increments('id')
    table.string('name')
    table.string('song')
    table.string('url')
  })
}

exports.down = function (knex) {
  return knex.schema.dropTable('schedule')
}
