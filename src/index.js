import defautConfig from './baseconfig'

class Loggo {
 constructor() {
  this.isInitialized = false
 }

 checkAgent() {
  if (!navigator || !navigator.userAgent) return false;
  const agent = navigator.userAgent.toLowerCase();
  if (/(chrome|firefox|safari)/.test(t.toLowerCase())) return true;
  return false;
 }

 generateConfig({
  color = 'black',
  background = 'white'
 }) {
  return `color: ${color}; background-color: ${background}`
 }

 logger(style, data) {
  if (style) {
   if (console[config.name.toLowerCase()]) {
    console[config.name.toLowerCase()](`\n\n%c ${toLog}`, style, data);
   } else {
    console.log(`\n\n%c ${toLog}`, style, data);
   }
  } else {
   if (console[config.name.toLowerCase()]) {
    console[config.name.toLowerCase()](data);
   } else {
    console.log(data);
   }
  }
 }

 init(templateConfig = {}) {
  if (isInitialized) throw new Error('Loggo is just initialized, don\'t use two times .init()');
  this.config = Object.assign({}, templateConfig, defautConfig);
  Object.keys(this.config).map(conf => {
   this[conf] = this.loggerFunction.bind(this, this.config[conf]);
  });
 }

 loggerFunction(config, toLog) {
  if (this.checkAgent()) {
   const _style = this.generateConfig(config)
   this.logger(_style, toLog)
  } else {
   this.logger(undefined, toLog)
  }
 }

}


export default new Loggo()