// test/routes.js
const supertest = require('supertest');
const app = require('../app');
const api = supertest(app);

const test = require('tape');

test('GET /health', t => {
  api
  .get('/health')
  .expect('Content-type', /json/)
  .expect(200)
  .end((err, res) => {
    if (err) {
      t.fail(err);
      t.end();
    } else {
      t.ok(res.body, 'It should have a response body');
      t.equals(res.body.healthy, true, 'It should return a healthy parameter and it should be true');
      t.end();
    }
  });
});

// We describe our test and send a GET request to the /docker path, which we
// expect to return a JSON response with a docker property that equals 'rocks!'
test('GET /docker', t => {
  api
  .get('/docker')
  .expect('Content-type', /json/)
  .expect(200)
  .end((err, res) => {
    if (err) {
      t.fail(err);
      t.end();
    } else {
      t.ok(res.body, 'It should have a response body');
      t.equals(res.body.docker, 'rocks!', 'It should return a docker parameter with value rocks!');
      t.end();
    }
  });
});

// Ensure we get the proper 404 when trying to GET an unknown route
test('GET unknown route', t => {
  api
  .get(`/${Math.random() * 10}`)
  .expect(404)
  .end((err, res) => {
    if (err) {
      t.fail(err);
      t.end();
    } else {
      t.end();
    }
  });
});
