class Thenable {
  constructor(num) {
    this.num = num;
  }
  then(resolve, reject) {
    alert(resolve); // function() { native code }
    // resolve with this.num*2 after the 1 second
    setTimeout(() => resolve(this.num * 2), 1000); // (**)
  }
}

new Promise(resolve => resolve(1))
  .then(result => {return 2;})
  .then(result => {return 3;})
  .then(result => {
    return new Thenable(result); // (*)
  })
  .then(result => alert(result)); // shows 2 after 1000ms