const express = require('express')

const db = require('../db/schedule')

const router = express.Router()

router.get('/', (req, res) => {
  db.getSchedule()
    .then(results => {
      res.json({ schedule: results.map(schedule => schedule.name) })
      return null
    })
    .catch(err => {
      console.log(err)
      res.status(500).json({ message: 'Somthing went wrong' })
    })
})

module.exports = router
