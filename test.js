const async = require('async');
var abc = function(n){
  fibo(40);
  console.log(n);
}


var cdf = function(){
  var a = {}
  async.eachOf([5, 4, 3], function(num){
    console.log(arguments)
    abc(num);
    a[num] = "askdjah";
  }, function(err){
    console.log(err)
  })

  console.log(a)
}
var done = function(){
  console.log("done")
}
var fibo = function(n) {
    if(n <= 2) {
        return 1;
    } else {
        return fibo(n - 1) + fibo(n - 2);
    }
};

cdf()

