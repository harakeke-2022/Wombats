import request from 'superagent'

const rootUrl = '/api/v1'

export function getSchedule () {
  return request.get(rootUrl + '/schedule')
    .then(res => {
      return res.body.schedule
    })
}
