# lambertw
A basic Javascript port of the Lambert W function from the [GNU Scientific Library](https://www.gnu.org/software/gsl/)


# Lambert W Functions


Lambert’s W functions, W(x), are defined to be solutions of the equation W(x) \exp(W(x)) = x. This function has multiple branches for x < 0; however, it has only two real-valued branches. We define W_0(x) to be the principal branch, where W > -1 for x < 0, and W_{-1}(x) to be the other real branch, where W < -1 for x < 0. The Lambert functions are declared in the header file gsl_sf_lambert.h.

`gsl_sf_lambert_W0 (double x)`
`gsl_sf_lambert_W0_e (double x, gsl_sf_result * result)`
These compute the principal branch of the Lambert W function, W_0(x).

`gsl_sf_lambert_Wm1 (double x)`
`gsl_sf_lambert_Wm1_e (double x, gsl_sf_result * result)`
These compute the secondary real-valued branch of the Lambert W function, W_{-1}(x).


# Usage
```
var lambertw = require ('lambertw');

lambertw.gsl_sf_lambert_W0_e(1.0); // {val: 0.5671432904097838, err: 2.518622157098455e-16, iters: 5, success: true}
lambertw.gsl_sf_lambert_W0(1.0); // 0.5671432904097838

```