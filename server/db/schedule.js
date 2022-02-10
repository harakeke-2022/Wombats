const connection = require('./connection')

function getSchedule (db = connection) {
  return db('schedule').select()
}

module.exports = {
  getSchedule
}
