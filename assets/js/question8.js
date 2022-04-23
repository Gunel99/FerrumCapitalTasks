// What's the difference between defer and async?

const timeout = setTimeout(sayHi, 5000);

function sayHi() {
  alert('Hi');
}
