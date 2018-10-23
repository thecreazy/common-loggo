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

class Loggo {
 constructor() {
  this.isInitialized = false;
  this.style = {
   fontSize: '15px'
  };
  this._showLog = true;

  this.generateConfig = this.generateConfig.bind(this);
 }

 checkAgent() {
  if (!navigator || !navigator.userAgent) return false;
  const _agent = navigator.userAgent.toLowerCase();
  if (/(chrome|firefox|safari)/.test(_agent.toLowerCase())) return true;
  return false;
 }

 generateConfig({
  color = 'black',
  background = 'white'
 }) {
  return `color: ${color}; background-color: ${background}; font-size: ${this.style.fontSize}`
 }

 logger({
  style,
  name,
  label
 }, data) {
  if (style) {
   if (console[name]) {
    console[name](`%c ${label} `, style, ...data);
   } else {
    console.log(`%c ${label} `, style, ...data);
   }
  } else {
   if (console[name]) {
    console[name](data);
   } else {
    console.log(data);
   }
  }
 }

 init(templateConfig = {}, logConfig = {}) {
  if (this.isInitialized) return;
  this.config = { ...defaultConfig, ...templateConfig };
  const { style } = logConfig;
  if (style) {
    this.style = { ...this.style, style };
  }
  if (logConfig.showLog) {
    if (typeof logConfig.showLog !== 'boolean') {
      console.error('showLog config must be a boolean, using default value');
    }
    this._showLog = logConfig.showLog;
  }
  Object.keys(this.config).map(conf => {
    this[conf] = this.loggerFunction.bind(this, Object.assign({
    name: conf
    }, this.config[conf]));
  });
 }

 loggerFunction(config, ...rest) {
  if (!this._showLog) return;
  if (!this.checkAgent) {
    this.logger(undefined, rest);
    return;
  }
  const _style = this.generateConfig(config);
  this.logger({
    style: _style,
    name: config.name,
    label: config.label
    },
    rest
  );
 }

 hideLog(){
   this._showLog = false;
 }

 showLog(){
   this._showLog = true;
 }
}

const Log = new Loggo();

export default Log;
