"use strict";
let f = function sum(n) {
  if (n <= 1) {
    return 1;
  } else {
    return n * sum(n - 1);
  }
};
document.write(f(5));
