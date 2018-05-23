import * as chai from 'chai';
import { expect } from 'chai';
import { server } from './../app/app';

chai.use(require('chai-http'));

describe('routes', () => {
  after(() => Promise.resolve(server.close()));

  describe(`GET /`, () => {
    it('should error on the default route with a 401', done => {
      chai
        .request(server)
        .get(`/`)
        .end((err, res) => {
          expect(res.status).to.eql(401);
          done();
        });
    });
  });

  describe(`GET /healthcheck`, () => {
    it('should healthcheck', done => {
      chai
        .request(server)
        .get(`/healthcheck`)
        .end((err, res) => {
          isOk(err, res, 200, 'text/plain');
          done();
        });
    });
  });
});

const isOk = (
  err: any,
  res: any,
  status: number = 200,
  type: string = 'application/json'
) => {
  expect(err).to.not.exist;
  expect(res.status).to.eql(status);
  expect(res.type).to.eql(type);
};
