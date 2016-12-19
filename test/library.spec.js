import chai from 'chai';
import fpCode from '../lib/fpCode.js';
import fpCodeMin from '../lib/fpCode.min.js';

chai.expect();

const expect = chai.expect;

describe('[Dev]password = password, key = key, length = 16', function () {
  it('code should return K3A2a66Bf88b628c', () => {
    expect(fpCode('password', 'key', 16)).to.be.equal('K3A2a66Bf88b628c');
  });
});

describe('[Dev]password = 123456, key = github, length = 32', function () {
  it('code should return eE88bf14E4aD07061d5d0F835bf0aE3E', () => {
    expect(fpCode('123456', 'github', 32)).to.be.equal('eE88bf14E4aD07061d5d0F835bf0aE3E');
  });
});

describe('[Min]password = password, key = key, length = 16', function () {
  it('code should return K3A2a66Bf88b628c', () => {
    expect(fpCodeMin('password', 'key', 16)).to.be.equal('K3A2a66Bf88b628c');
  });
});

describe('[Min]password = 123456, key = github, length = 32', function () {
  it('code should return eE88bf14E4aD07061d5d0F835bf0aE3E', () => {
    expect(fpCodeMin('123456', 'github', 32)).to.be.equal('eE88bf14E4aD07061d5d0F835bf0aE3E');
  });
});
