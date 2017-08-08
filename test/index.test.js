const { expect } = require('chai')
const { describe, it } = require('mocha')
const request = require('request')

describe('Server', function() {
  describe('app.get', function() {
    it('should return a array', function(done) {
      request('http://localhost:3000/notes',{ json: true }, function(error,response,body){
        expect(body).to.be.a('array')
        done()
      })
    })
  })
})
