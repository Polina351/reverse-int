module.exports = function reverse (n) {
  let res = '';
  n = Math.abs(n);
  while (n > 0) {
    res += (n % 10);
    n = Math.floor(n / 10);
  }
  return +res;
}
