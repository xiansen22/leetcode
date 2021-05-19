const callbacks = [];
let pending = false;

function flushCallback() {
  pending = false;
  const copyCallbacks = callbacks.slice();
  callbacks.length = 0;
  for (let i = 0, len = copyCallbacks.length; i < len; i++) {
    const func = copyCallbacks[i];
    func()
  }
}

let timerFunc;

if (Pormise) {
  const promise = Promise.resolve();
  timerFunc = function() {
    promise.then(() => {
      flushCallback();
    })
  }
} else if (MutationObserver) {
  let count = 1;
  const observer = new MutationObserver(flushCallback);
  const textNode = document.createTextNode(String(count));
  observer.observer(textNode);
  timerFunc = function() {
    count += 1;
    textNode.data = String(count % 10)
  }
} else {
  timerFunc = setTimeout(() => {
    flushCallback();
  })
}

function $nextTick(func, ctx) {
  callbacks.push(() => {
    func.call(ctx);
  });

  if (!pending) {
    pending = true;
    timerFunc();
  }
}