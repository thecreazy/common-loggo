(function (global, factory) {
	typeof exports === 'object' && typeof module !== 'undefined' ? module.exports = factory() :
	typeof define === 'function' && define.amd ? define(factory) :
	(global.commonloggo = factory());
}(this, (function () { 'use strict';

var defautConfig = {
  error: {
    label: 'Error',
    color: 'white',
    background: 'red'
  },
  warn: {
    label: 'Warning',
    color: 'white',
    background: 'orange'
  },
  success: {
    label: 'Success',
    color: 'white',
    background: 'green'
  },
  info: {
    label: 'Info',
    color: 'white',
    background: 'grey'
  }
};

var classCallCheck = function (instance, Constructor) {
  if (!(instance instanceof Constructor)) {
    throw new TypeError("Cannot call a class as a function");
  }
};

var createClass = function () {
  function defineProperties(target, props) {
    for (var i = 0; i < props.length; i++) {
      var descriptor = props[i];
      descriptor.enumerable = descriptor.enumerable || false;
      descriptor.configurable = true;
      if ("value" in descriptor) descriptor.writable = true;
      Object.defineProperty(target, descriptor.key, descriptor);
    }
  }

  return function (Constructor, protoProps, staticProps) {
    if (protoProps) defineProperties(Constructor.prototype, protoProps);
    if (staticProps) defineProperties(Constructor, staticProps);
    return Constructor;
  };
}();

var toConsumableArray = function (arr) {
  if (Array.isArray(arr)) {
    for (var i = 0, arr2 = Array(arr.length); i < arr.length; i++) arr2[i] = arr[i];

    return arr2;
  } else {
    return Array.from(arr);
  }
};

var Loggo = function () {
  function Loggo() {
    classCallCheck(this, Loggo);

    this.isInitialized = false;
    this.style = {
      fontSize: '15px'
    };
    this.showLog = true;

    this.generateConfig = this.generateConfig.bind(this);
  }

  createClass(Loggo, [{
    key: 'checkAgent',
    value: function checkAgent() {
      if (!navigator || !navigator.userAgent) return false;
      var _agent = navigator.userAgent.toLowerCase();
      if (/(chrome|firefox|safari)/.test(_agent.toLowerCase())) return true;
      return false;
    }
  }, {
    key: 'generateConfig',
    value: function generateConfig(_ref) {
      var _ref$color = _ref.color,
          color = _ref$color === undefined ? 'black' : _ref$color,
          _ref$background = _ref.background,
          background = _ref$background === undefined ? 'white' : _ref$background;

      return 'color: ' + color + '; background-color: ' + background + '; font-size: ' + this.style.fontSize;
    }
  }, {
    key: 'logger',
    value: function logger(_ref2, data) {
      var style = _ref2.style,
          name = _ref2.name,
          label = _ref2.label;

      if (style) {
        if (console[name]) {
          var _console;

          (_console = console)[name].apply(_console, ['%c ' + label + ' ', style].concat(toConsumableArray(data)));
        } else {
          var _console2;

          (_console2 = console).log.apply(_console2, ['%c ' + label + ' ', style].concat(toConsumableArray(data)));
        }
      } else {
        if (console[name]) {
          console[name](data);
        } else {
          console.log(data);
        }
      }
    }
  }, {
    key: 'init',
    value: function init() {
      var _this = this;

      var templateConfig = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};
      var logConfig = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};

      if (this.isInitialized) throw new Error('Loggo is just initialized, don\'t use two times .init()');
      this.config = Object.assign({}, defautConfig, templateConfig);
      if (logConfig.style) this.style = Object.assign({}, this.style, logConfig.style);
      if (logConfig.showLog !== undefined) this.showLog = logConfig.showLog;
      Object.keys(this.config).map(function (conf) {
        _this[conf] = _this.loggerFunction.bind(_this, Object.assign({
          name: conf
        }, _this.config[conf]));
      });
    }
  }, {
    key: 'loggerFunction',
    value: function loggerFunction(config) {
      if (!this.showLog) return;

      for (var _len = arguments.length, rest = Array(_len > 1 ? _len - 1 : 0), _key = 1; _key < _len; _key++) {
        rest[_key - 1] = arguments[_key];
      }

      if (this.checkAgent()) {
        var _style = this.generateConfig(config);
        this.logger({
          style: _style,
          name: config.name,
          label: config.label
        }, rest);
      } else {
        this.logger(undefined, rest);
      }
    }
  }]);
  return Loggo;
}();

var Log = new Loggo();

return Log;

})));
