import * as chai from 'chai';
import { should } from 'chai';
import { server } from './../app/app';

chai.use(require('chai-http'));

describe('routes', () => {

  after(() => server.close());

  describe(`GET /`, () => {
    it('should error on the default route with a 401', done => {
      chai
        .request(server)
        .get(`/`)
        .end((err, res) => {
          should().exist(err);
          res.status.should.eql(401);
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

const isOk = (err: any, res: any, status: number = 200, type: string = 'application/json') => {
  should().not.exist(err);
  res.status.should.eql(status);
  res.type.should.eql(type);
};