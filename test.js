var assert = require("assert");
assert.close = function(val, tgt, eps) {
  assert(Math.abs(val - tgt)<=eps);
}
var EPSILON = 0.0001;
var lambertw = require('./lambertw');
it('LambertW', function() {
  assert.close( lambertw.gsl_sf_lambert_W0(0.0), 0.0, EPSILON);
  assert.close( lambertw.gsl_sf_lambert_W0(0.5), 0.351731, EPSILON);
  assert.close( lambertw.gsl_sf_lambert_W0(1.0), 0.56714, EPSILON);
  assert.close( lambertw.gsl_sf_lambert_W0(2.0), 0.8526, EPSILON);
  assert.close( lambertw.gsl_sf_lambert_W0(10.0), 1.7455, EPSILON);
});
