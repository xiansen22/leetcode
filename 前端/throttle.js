function trottle(func, wait, options) {
  let timer, result, context, args, pretime;

  const { leading, trailing } = options;

  function later() {
    timer = null;
    pretime = leading === false ? 0 : Date.now();
    result = func.apply(context, args);
    if (!timer) {
      args = context = null;
    }
  }

  function _throttle() {
    const now = Date.now();
    args = arguments;
    context = this;

    if (!pretime && leading === false) {
      pretime = now;
    }

    const remain = wait - (now - pretime);

    if (remain <= 0 || remain > wait) {
      if (timer) {
        clearTimeout(timer);
        timer = null;
      }
      pretime = Date.now();
      result = func.apply(context, args);
      if (!timer) {
        args = context = null;
      }                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                         
    } else if (!timer && trailiing !== false) {
      timer = setTimeout(later, remain);
    }
  }
}