var expect  = require('chai').expect;
var request = require('request');
var server = process.env['SERVER']||localhost;
it('Main page content', function(done) {
    request('http://' + server + ':3000' , function(error, response, body) {
      expect(body).to.equal('Hello World, 2017/12/29, by AndrewLong');
      done();
    });
});
