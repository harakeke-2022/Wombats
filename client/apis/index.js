import request from 'superagent'

const rootUrl = '/api/v1'
// const performer =

export function getSchedule () {
  return request.get(rootUrl + '/schedule')
    .then(res => {
      return res.body.schedule
    })
}

export function addPerformer (name, song, url) {
  return request
    .post(rootUrl)
    .send({ name: name, song: song, url: url })
}
