(function (global, factory) {
  typeof exports === 'object' && typeof module !== 'undefined' ? module.exports = factory() :
  typeof define === 'function' && define.amd ? define(factory) :
  (global.commonloggo = factory());
}(this, (function () { 'use strict';

  function _classCallCheck(instance, Constructor) {
    if (!(instance instanceof Constructor)) {
      throw new TypeError("Cannot call a class as a function");
    }
  }

  function _defineProperties(target, props) {
    for (var i = 0; i < props.length; i++) {
      var descriptor = props[i];
      descriptor.enumerable = descriptor.enumerable || false;
      descriptor.configurable = true;
      if ("value" in descriptor) descriptor.writable = true;
      Object.defineProperty(target, descriptor.key, descriptor);
    }
  }

  function _createClass(Constructor, protoProps, staticProps) {
    if (protoProps) _defineProperties(Constructor.prototype, protoProps);
    if (staticProps) _defineProperties(Constructor, staticProps);
    return Constructor;
  }

  function _defineProperty(obj, key, value) {
    if (key in obj) {
      Object.defineProperty(obj, key, {
        value: value,
        enumerable: true,
        configurable: true,
        writable: true
      });
    } else {
      obj[key] = value;
    }

    return obj;
  }

  function _objectSpread(target) {
    for (var i = 1; i < arguments.length; i++) {
      var source = arguments[i] != null ? arguments[i] : {};
      var ownKeys = Object.keys(source);

      if (typeof Object.getOwnPropertySymbols === 'function') {
        ownKeys = ownKeys.concat(Object.getOwnPropertySymbols(source).filter(function (sym) {
          return Object.getOwnPropertyDescriptor(source, sym).enumerable;
        }));
      }

      ownKeys.forEach(function (key) {
        _defineProperty(target, key, source[key]);
      });
    }

    return target;
  }

  function _toConsumableArray(arr) {
    return _arrayWithoutHoles(arr) || _iterableToArray(arr) || _nonIterableSpread();
  }

  function _arrayWithoutHoles(arr) {
    if (Array.isArray(arr)) {
      for (var i = 0, arr2 = new Array(arr.length); i < arr.length; i++) arr2[i] = arr[i];

      return arr2;
    }
  }

  function _iterableToArray(iter) {
    if (Symbol.iterator in Object(iter) || Object.prototype.toString.call(iter) === "[object Arguments]") return Array.from(iter);
  }

  function _nonIterableSpread() {
    throw new TypeError("Invalid attempt to spread non-iterable instance");
  }

  var defaultConfig = {
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

  var Loggo =
  /*#__PURE__*/
  function () {
    function Loggo() {
      _classCallCheck(this, Loggo);

      this.isInitialized = false;
      this.style = {
        fontSize: '15px'
      };
      this.showLog = true;
      this.generateConfig = this.generateConfig.bind(this);
    }

    _createClass(Loggo, [{
      key: "checkAgent",
      value: function checkAgent() {
        if (!navigator || !navigator.userAgent) return false;

        var _agent = navigator.userAgent.toLowerCase();

        if (/(chrome|firefox|safari)/.test(_agent.toLowerCase())) return true;
        return false;
      }
    }, {
      key: "generateConfig",
      value: function generateConfig(_ref) {
        var _ref$color = _ref.color,
            color = _ref$color === void 0 ? 'black' : _ref$color,
            _ref$background = _ref.background,
            background = _ref$background === void 0 ? 'white' : _ref$background;
        return "color: ".concat(color, "; background-color: ").concat(background, "; font-size: ").concat(this.style.fontSize);
      }
    }, {
      key: "logger",
      value: function logger(_ref2, data) {
        var style = _ref2.style,
            name = _ref2.name,
            label = _ref2.label;

        if (style) {
          if (console[name]) {
            var _console;

            (_console = console)[name].apply(_console, ["%c ".concat(label, " "), style].concat(_toConsumableArray(data)));
          } else {
            var _console2;

            (_console2 = console).log.apply(_console2, ["%c ".concat(label, " "), style].concat(_toConsumableArray(data)));
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
      key: "init",
      value: function init() {
        var _this = this;

        var templateConfig = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};
        var logConfig = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};
        if (this.isInitialized) return;
        this.config = _objectSpread({}, defaultConfig, templateConfig);
        var style = logConfig.style;

        if (style) {
          this.style = _objectSpread({}, this.style, {
            style: style
          });
        }

        if (logConfig.showLog) {
          if (typeof logConfig.showLog !== 'boolean') {
            console.error('showLog config must be a boolean, using default value');
          }

          this.showLog = logConfig.showLog;
        }

        Object.keys(this.config).map(function (conf) {
          _this[conf] = _this.loggerFunction.bind(_this, Object.assign({
            name: conf
          }, _this.config[conf]));
        });
      }
    }, {
      key: "loggerFunction",
      value: function loggerFunction(config) {
        if (!this.showLog) return;

        for (var _len = arguments.length, rest = new Array(_len > 1 ? _len - 1 : 0), _key = 1; _key < _len; _key++) {
          rest[_key - 1] = arguments[_key];
        }

        if (!this.checkAgent) {
          this.logger(undefined, rest);
          return;
        }

        var _style = this.generateConfig(config);

        this.logger({
          style: _style,
          name: config.name,
          label: config.label
        }, rest);
      }
    }]);

    return Loggo;
  }();

  var Log = new Loggo();

  return Log;

})));
