const express = require('express')
const router = express.Router()

const db = require('../db/db')

router.get('/', (req, res) => {
  db.getSchedule()
    .then(schedule => {
      setTimeout(() => res.json(schedule)
        , 1000)
      return null
    })
    .catch(err => {
      console.error(err)
      res.status(500).json({ message: 'error in server' })
    })
})

router.post('/', (req, res) => {
  const { name, song, url } = req.body

  db.addSchedule({ name, song, url })
    .then(() => { // ignore ids from db function
      res.sendStatus(201)
    .then(results => {
      res.json({ schedule: results })
      return null
    })
    .catch(err => {
      console.error(err)
      res.status(500).json({ message: 'error in server' })
    })
})

module.exports = router
