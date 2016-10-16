process.env.NODE_ENV = "test";
process.env.PORT = 5000;
require("babel-polyfill");
var chai = require("chai");
var chaiHttp = require("chai-http");
var server = require("../../app");
var mongoose = require("mongoose");

chai.use(chaiHttp);
var CLUB_ID = mongoose.Types.ObjectId("abcdefghijkl");
var expect = chai.expect;

describe("Players Api", function() {
  describe("#Get", function() {
    it('should return a list of players', function(done) {
      chai.request(server)
        .get("localhost:5000/api/clubs/" + CLUB_ID + "/players")
        .end(function(err, res) {
          if (err) {
            done(err);
          } else {
            console.log(res.body);
            expect(res).to.have.status(200);
            done();
          }
        });
    });
  });
});
describe("#Delete", function() {
  it("should return error if doesn't exist", function(done) {
    chai.request(server)
      .delete("localhost:5000/api/clubs/" + CLUB_ID + "/players/abcdefg")
      .end(function(err, res) {
        if (err) {
          console.log(err);
          done(err);
        } else {
          expect(res).to.have.status(422);
          done();
        }
      })
  });
});