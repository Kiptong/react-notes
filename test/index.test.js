const { expect } = require('chai')
const { describe, it } = require('mocha')
const request = require('request')

describe('Server', function() {
  describe('app.get', function() {
    it('should return a array', function() {
      request('http://localhost:3000/notes', function(error,response,body){
        const severResponse = response.json()
        expect(severResponse.body).to.be.a('array')
        done()
      })
    })
  })
})
