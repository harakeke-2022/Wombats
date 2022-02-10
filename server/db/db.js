// const connection = require('./connection')
const environment = process.env.NODE_ENV || 'development'
const config = require('./knexfile')[environment]
const connection = require('knex')(config)

function getSchedule (db = connection) {
  return db('schedule').select()
}

function addSchedule (schedule, db = connection) {
  const { name, song, url } = schedule
  return db('schedule')
    .insert({ name, song, url })
}

module.exports = {
  getSchedule,
  addSchedule
}
