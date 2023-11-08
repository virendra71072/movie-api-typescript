const chai = require('chai');
const request = require('supertest');
const app = require('../src/config/server/server').default;
const MovieModel = require('../src/components/Movie/model').default;
chai.should();

/**
 * API tests
 */
describe('API', () => {
    it('get all movies', (done) => {
        request(app)
            .get('/v1/movies')
            .set('x-access-token', global.token)
            .expect((res) => {
                res.status.should.equal(200);
                res.body.should.be.an('array');
            })
            .end(done);
    });

    it('create new movies', (done) => {
        const newMovie = {
            "title": "AB dfd1",
            "genre": "Best movie in dance category",
            "rating": 1,
            "streamingLink": "https://www.google.com/",
            "releaseDate": "2023-11-08"
        };

        request(app)
            .post('/v1/movies')
            .send(newMovie)
            .set('x-access-token', global.token)
            .expect((res) => {
                res.status.should.equal(201);
                res.body.should.have.property('title');
            })
            .end(done);
    });
});

/**
 * clear database after tests
 */
after(async () => {
    try {
        await MovieModel.collection.drop();
    } catch (error) {
        console.log('Something went wrong after tests, seems your database doesnt cleaned');
    }
});
