function debounce(func, wait, immediate) {
  var timeout, previous, args, result, context;

  var later = function() {
    var passed = new Date().getTime() - previous;
    if (passed < wait) {
      timeout = setTimeout(later, wait - passed);
    } else {
      timeout = null;
      if (!immediate) {
        result = func.apply(context, args);
      }
      if (!timeout) {
        args = context = null;
      }
    }
  };

  var debounced = function() {
    context = this;
    args = arguments;
    previous = new Date().getTime();
    if (!timeout) {
      timeout = setTimeout(later, wait);
      if (immediate) {
        result = func.apply(context, args);
      }
    }
    return result;
  };

  debounced.cancel = function() {
    clearTimeout(timeout);
    timeout = args = context = null;
  };

  return debounced;
};

const srcoll = debounce(function () {
  console.log(2);
}, 3000, true);
setTimeout(() => {
  srcoll();
}, 4000);