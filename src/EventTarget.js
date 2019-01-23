const createEventTarget = () => {
  function EventTarget() {
    this.listeners = {};
  }
  EventTarget.prototype = {
    addEventListener: function(type, callback) {
      if (!(type in this.listeners)) {
        this.listeners[type] = [];
      }
      this.listeners[type].push(callback);
    },
    removeEventListener: function(type, callback) {
      if (!(type in this.listeners)) {
        return;
      }
      const stack = this.listeners[type];
      for (let i = 0, l = stack.length; i < l; i++) {
        if (stack[i] === callback) {
          stack.splice(i, 1);
          return;
        }
      }
    },
    dispatchEvent: function(event) {
      if (!(event.type in this.listeners)) {
        return true;
      }
      const stack = this.listeners[event.type].slice();

      for (let i = 0, l = stack.length; i < l; i++) {
        stack[i].call(this, event);
      }
      return !event.defaultPrevented;
    }
  };

  return new EventTarget();
};

export default createEventTarget;
