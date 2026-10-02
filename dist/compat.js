(function () {
  'use strict';

  if (!window.requestAnimationFrame) {
    window.requestAnimationFrame = function (callback) {
      return window.setTimeout(callback, 16);
    };
  }

  if (!window.performance) window.performance = {};
  if (!window.performance.now) {
    window.performance.now = function () { return Date.now(); };
  }

  if (!window.matchMedia) {
    window.matchMedia = function () {
      return {
        matches: false,
        addListener: function () {},
        removeListener: function () {}
      };
    };
  }

  if (!Element.prototype.matches) {
    Element.prototype.matches = Element.prototype.msMatchesSelector || Element.prototype.webkitMatchesSelector;
  }

  if (!Element.prototype.closest) {
    Element.prototype.closest = function (selector) {
      var element = this;
      while (element && element.nodeType === 1) {
        if (element.matches(selector)) return element;
        element = element.parentElement || element.parentNode;
      }
      return null;
    };
  }

  if (!Element.prototype.remove) {
    Element.prototype.remove = function () {
      if (this.parentNode) this.parentNode.removeChild(this);
    };
  }

  var appendNodes = function () {
      var fragment = document.createDocumentFragment();
      for (var index = 0; index < arguments.length; index += 1) {
        var value = arguments[index];
        fragment.appendChild(value instanceof Node ? value : document.createTextNode(String(value)));
      }
      this.appendChild(fragment);
  };

  if (!Element.prototype.append) {
    Element.prototype.append = appendNodes;
  }

  if (window.DocumentFragment && !DocumentFragment.prototype.append) {
    DocumentFragment.prototype.append = appendNodes;
  }

  if (!Element.prototype.replaceChildren) {
    Element.prototype.replaceChildren = function () {
      while (this.firstChild) this.removeChild(this.firstChild);
      this.append.apply(this, arguments);
    };
  }

  if (window.NodeList && !NodeList.prototype.forEach) {
    NodeList.prototype.forEach = Array.prototype.forEach;
  }

  if (!Array.prototype.find) {
    Array.prototype.find = function (predicate) {
      for (var index = 0; index < this.length; index += 1) {
        if (predicate(this[index], index, this)) return this[index];
      }
      return undefined;
    };
  }

  if (!String.prototype.padStart) {
    String.prototype.padStart = function (length, fill) {
      var value = String(this);
      var padding = fill === undefined ? ' ' : String(fill);
      while (value.length < length) value = padding + value;
      return value.slice(-length);
    };
  }
}());
