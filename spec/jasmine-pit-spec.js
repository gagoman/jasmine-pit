/* global pit, xpit */

var RSVP = require('rsvp');
var jasminePit = require('../index');

jasminePit.install(global);

describe('jasminePit: ', function () {
  it('should have `pit`, `xpit` on globalObject', function () {
    expect(global.pit).toBeDefined();
    expect(global.xpit).toBeDefined();
  });

  pit('should work with Promise', function () {
    return RSVP.resolve(42).then(function(val) {
      expect(val).toBe(42);
    });
  });

  pit('should fail if Promise fails', function () {
    return RSVP.reject(null);
  });

  xpit('should skip tests with `xpit`', function () {
    throw Error; // should not happen
  });
});
