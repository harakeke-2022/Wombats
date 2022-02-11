import request from 'superagent'

const rootUrl = '/api/v1'

export function getSchedule () {
  return request.get(rootUrl + '/schedule')
    .then(res => {
      console.log(res)
      return res.body
    })
}

export function addPerformer (performer) {
  return request
    .post(rootUrl + '/schedule')
    .send(performer)
}
