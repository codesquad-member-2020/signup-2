function compose() {
  const funcArr = Array.prototype.slice.call(arguments);
  return funcArr.reduce(
    function(prevFunc, nextFunc) {
      return function() {
        const args = Array.prototype.slice.call(arguments);
        return nextFunc(prevFunc.apply(null, args));
      };
    },
    function(k) {
      return k;
    }
  );
}

module.exports = compose;
