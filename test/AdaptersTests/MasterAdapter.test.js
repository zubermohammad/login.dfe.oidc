const expect = require('chai').expect;

const MasterAdapter = require('../../src/adapters/MasterAdapter');
const GenericAdapter = require('../../src/adapters/GenericAdapter');
const HotConfigAdapter = require('../../src/HotConfig/HotConfigAdapter');

describe('When constructing the adapter', () => {
  describe('then if no override is defined', () => {
    it('the GenericAdapter is used', () => {
      const actual = new MasterAdapter('test');
      expect(actual.innerAdapter).to.be.an.instanceOf(GenericAdapter);
    });
  });
  describe('then if Client is defined as the constructor name', () => {
    it('the HotConfigAdapter is used', () => {
      const actual = new MasterAdapter('Client');
      expect(actual.innerAdapter).to.be.an.instanceOf(HotConfigAdapter);
    });
  });
});