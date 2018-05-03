const assert = (...args) => {
  try { console.assert(...args); }
  catch(er) { console.error(er); }
};
assert(false)
console.log("after")
