const chai = require('chai');
const expect = chai.expect;
const chaiHttp = require('chai-http');
const app = require('../../app');

chai.use(chaiHttp);

describe('/', () => {
  it('returns a status code 200', () => {
    return chai.request(app)
    .get('/members')
    .then((res) => {
      expect(res.status).to.equal(200);
    });
  });

  it('returns the html file', () => {
    return chai.request(app)
    .get('/')
    .then((res) => {
      expect(res).to.be.html;
    });
  });
});

describe('/juan-carlos-aguilar-rincon', () => {
  it('returns a status code 200', () => {
    return chai.request(app)
    .get('/members/juan-carlos-aguilar-rincon')
    .then((res) => {
      expect(res.status).to.equal(200);
    });
  });

  it('returns the html file', () => {
    return chai.request(app)
    .get('/members/juan-carlos-aguilar-rincon')
    .then((res) => {
      expect(res).to.be.html;
    });
  });
});

//describe('/your-full-name-route', () => { // Change by your full name
  //it('returns a status code 200', () => {
    //return chai.request(app)
    //.get('/members/your-full-name-route') // Change by your full name
    //.then((res) => {
      //expect(res.status).to.equal(200);
    //});
  //});

  //it('returns the html file', () => {
    //return chai.request(app)
    //.get('/members/your-full-name-route') // Change by your full name
    //.then((res) => {
      //expect(res).to.be.html;
    //});
  //});
//});
