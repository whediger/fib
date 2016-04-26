var fib1 = 1;
var fib2 = 1;
var stopBefore = 3492487944092347840923470948720948723984723094824092472904824709284792385730953529732049875230985735098550983452305987;

for (i = 0; fib2 < stopBefore; i++ ) {
  console.log(fib1);
  console.log(fib2);
  fib1 = fib1 + fib2;
  fib2 = fib1 + fib2;
}
