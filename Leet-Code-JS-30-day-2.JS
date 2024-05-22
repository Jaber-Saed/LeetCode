//Counter

function createCounter(n) {
  let currentValue = n;
  return function () {
    return currentValue++;
  };
}

function simulateCounter(n, calls) {
  const counter = createCounter(n);
  const results = [];
  for (let i = 0; i < calls.length; i++) {
    if (calls[i] === "call") {
      results.push(counter());
    }
  }
  return results;
}

const n1 = 0;
const calls1 = ["call", "call", "call"];
const results = simulateCounter(n1, calls1);
console.log(results);
