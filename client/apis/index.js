import request from 'superagent'

const rootUrl = '/api/v1'

export function getSchedule () {
  return request.get(rootUrl + '/schedule')
    .then(res => {
      console.log(res)
      return res.body
    })
}

export function addPerformer (name, song, url) {
  return request
    .post(rootUrl)
    .send({ name: name, song: song, url: url })
}
