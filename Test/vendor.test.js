const expect = require('chai').expect;
const supertest = require('supertest');
const api = supertest('http://localhost:5000');

describe('GET /api/vendors', (req, res) => {
  it('should return a 200 response', done => {
    api
      .get('/api/vendors')
      .set('Accept', 'application/json')
      .expect(200, done);
  });
  //check that the response is an array
  it('should return an array of vendor objects', done => {
    api
      .get('/api/vendors')
      .set('Accept', 'application/json')
      .end((error, response) => {
        expect(response.body).to.be.an('array');
        done();
      });
  });
});
//Look into the sequelize equivalent of before and change this part
describe('POST /api/vendors/new', (req, res) => {
  const newVendor = {
    name: 'Bob Test restaurant',
    type: 'Restaurant',
    phone: '1234567890',
    email: 'dolly@do.nut',
    password: 'testpassword',
    closing_time: '12:00 AM',
    street: '123',
    city: 'rerwe',
    state: 'FL',
    zip_code: '33211',
    description: 'Big Mac Yummy',
    image: 'asldkfna;sldkf'
  };
  it('should post a new vendor and return it', done => {
    api
      .post('/api/vendors/new')
      .set('Accept', 'application/json')
      .send(newVendor)
      .end((error, response) => {
        const vendor = response.body;
        expect(vendor).to.include.keys(
          'name',
          'type',
          'phone',
          'email',
          'password',
          'closing_time',
          'street',
          'city',
          'state',
          'zip_code',
          'description',
          'image'
        );
        done();
      });
  });
});

describe('DELETE /api/vendors', () => {
  const newVendor = {
    name: 'Bob Test restaurant',
    type: 'Restaurant',
    phone: '1234567890',
    email: 'dolly@do.nut',
    password: 'testpassword',
    closing_time: '12:00 AM',
    street: '123',
    city: 'rerwe',
    state: 'FL',
    zip_code: '33211',
    description: 'Big Mac Yummy',
    image: 'asldkfna;sldkf'
  };
  beforeDestroy(done => {
    api
      .post('api/vendors')
      .set('Accept', 'application/json')
      .send(newVendor)
      .end(done);
  });
  let deletedVendorId;
  afterSave(done => {
    api
      .get('api/vendors')
      .set('Accept', 'application/json')
      .end((error, response) => {
        const vendors = response.body;
        deletedVendorId = vendors[vendors.length - 1]._id;
        done();
      });
  });
  afterCreate(done => {
    api.delete(`api/vendors${deletedVendorId}`);
    done();
  });
  it('should remove a vendor from the database', done => {
    api
      .get('api/vendors')
      .set('Accept', 'application/json')
      .end((error, response) => {
        const deletedVendor = response.body.find(
          vendor => vendor.id === deletedVendorId
        );
        expect(deletedVendor).to.equal(undefined);
        done();
      });
  });
});
