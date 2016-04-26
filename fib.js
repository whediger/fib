var fib1 = 1;
var fib2 = 0;
var stopBefore = 34;

for (i = 0; i < stopBefore; i++ ) {
  console.log(fib1);
  fib1 = fib1 + fib2;
}
