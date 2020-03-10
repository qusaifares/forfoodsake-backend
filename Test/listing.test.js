const expect = require('chai').expect;
const supertest = require('supertest');
const api = supertest('http://localhost:5000');

// get all listings
describe('GET /api/listings', (req, res) => {
    it('check for response 200', done => {
        api.get('/api/listings')
            .set('Accept', 'application/json')
            .expect(200, done);
    });
    it('should return an array of listings', done => {
        api.get('/api/listings')
            .set('Accept', 'application/json')
            .end((error, response) => {
                expect(response.body).to.be.an('array');
                done();
            });
    });
});
// get listings by id
describe('GET /api/listings/:id', (req, res) => {
    let listing;
    before(done => {
        api.get('/api/listings')
            .set('Accept', 'application/json')
            .end((error, response) => {
                const listingData = response.body;
                listing = listingData[listingData.length - 1];
                done();
            });
    });
    it('should return individual listing by using id', done => {
        api.get(`/api/listings/${listing.id}`)
            .set('Accept', 'application/json')
            .end((error, response) => {
                const data = response.body;
                expect(data).to.be.an('object');
                done();
            });
    });
});

// post a new listing
describe('POST /api/listings/:vendorId/new/', (req, res) => {
    let vendorId;
    const newListing = {
        name: 'Mofongo',
        price: 10.59,
        quantity: 8,
        vegan: false,
        vegetarian: false,
        description: 'Latin American heart attack in a plate',
        image: 'wrgaergearhsaethae'
    };
    before(done => {
        api.get('/api/vendors')
            .set('Accept', 'application/json')
            .end((error, response) => {
                const vendors = response.body;
                vendorId = vendors[vendors.length - 1].id;
                done();
            });
    });
    before(done => {
        api.get(`/api/vendors/${vendorId}`)
            .set('Accept', 'application/json')
            .end((error, response) => {
                done();
            });
    });
    it('should post a new listing', done => {
        api.post(`/api/listings/${vendorId}/new`)
            .set('Accept', 'application/json')
            .send(newListing)
            .end((error, response) => {
                const listing = response.body;
                expect(listing.name).to.equal('Mofongo');
                done();
            });
    });
});
