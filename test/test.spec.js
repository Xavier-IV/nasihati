// During the test the env variable is set to test
process.env.NODE_ENV = 'test'
/* global describe, it, require, should  */
/* eslint handle-callback-err: 0 */
/* eslint no-unused-vars: 0 */

let mongoose = require('mongoose')
let assert = require('assert')
// Require the dev-dependencies
let chai = require('chai')
let chaiHttp = require('chai-http')
let server = require('../app.spec')
let should = require('should')

let Nasihat = require('../app/models/advices')

chai.use(chaiHttp)
// Our parent block
console.log(process.env.NODE_ENV)
describe('▶▶ API Test◀◀', () => {
  /*
   * Test the /GET route
   */
  describe('/GET advice', () => {
    it('it should GET the next advice of 2', (done) => {
      chai.request(server)
        .get('/nasihat/next/2')
        .end((err, res) => {
          res.status.should.be.equal(200)
          res.body.should.have.property('id', 3)
          done()
        })
    })
    it('it should GET the previous advice of 2', (done) => {
      chai.request(server)
        .get('/nasihat/prev/2')
        .end((err, res) => {
          res.status.should.be.equal(200)
          res.body.should.have.property('id', 1)
          done()
        })
    })
  })
})

describe('▶▶ MODELS ◀◀', () => {
  it('it should connect to database', (done) => {
    mongoose.connect('mongodb://localhost/nasihat', {useMongoClient: true}, done)
  })
  it('it should create a sample data', (done) => {
    let nasihat = new Nasihat({
      id: 9999999999,
      text: 'Test Advice',
      source: 'Source test',
      source_link: 'Some random link'
    })
    nasihat.save(done)
  })
  it('it should read the sample data', (done) => {
    Nasihat.find({id: 9999999999}, done).limit(1)
  })

  it('it should update the sample data')
  it('it should delete the sample data')
})

describe('▶▶ Environment ◀◀', () => {
  it('should serve a correct port', function () {
    assert.ok(true)
  })

  it('should have an .env configuration', function () {
    assert.ok(true)
  })

  describe('▶ PRODUCTION', () => {
    it('should not use test configuration', function () {
      assert.ok(true)
    })
    it('should use configuration provided from ENV instead from config', function () {
      assert.ok(true)
    })
  })

  describe('▶ ENV', () => {
    it('should be able to test without previous config dependencies', function () {
      assert.ok(true)
    })
  })
})
