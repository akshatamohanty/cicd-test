const request = require('supertest')
const app = require('../server')

describe('GET /', () => {
  it('should return hello techladies', async (done) => {
    const res = await request(app).get('/')
    expect(res.statusCode).toEqual(200)
    expect(res.body).toEqual('Hello Techladies!')
    done()
  })
})

afterAll(async () => { await app.close() })