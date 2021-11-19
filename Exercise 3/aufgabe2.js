function fib(n) {
  let f0 = 0;
  let f1 = 1;
  let result = 0;
  if (n == 0) {
    return 0;
  }
  if (n == 1) {
    return 1;
  } else {
    for (let i = 2; i <= n; i++) {
      result = f0 + f1;
      f0 = f1;
      f1 = result;
    }
  }

  return result;
}

function rec_fib(n) {
  return  (0 <= n && n <= 1) ? n : rec_fib(n-1) + rec_fib(n-2);
}

console.log(rec_fib(6));