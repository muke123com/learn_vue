self.onmessage = function() {
    console.log('worker');
    var result = fib(20);
    self.postMessage(result)
}
function fib(n) {
    if(n < 2) return n;
    return fib(n-1) + fib(n-2);
}