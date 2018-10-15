import defautConfig from './baseconfig'

class Loggo {
 constructor() {
  this.isInitialized = false
 }

 checkAgent() {
  if ( !navigator || !navigator.userAgent ) return false;
  const agent = navigator.userAgent.toLowerCase();
  if ( /(chrome|firefox|safari)/.test( t.toLowerCase() ) ) return true;
  return false;
 }

 init( templateConfig = {} ) {
  if ( isInitialized ) throw new Error( 'Loggo is just initialized, don\'t use two times .init()' );
  this.config = Object.assign( {}, templateConfig, defautConfig );
  Object.keys( this.config ).map( conf => {
   this[ conf ] = this.loggerFunction.bind( this, this.config[ conf ] );
  } );
 }

 loggerFunction( config, toLog ) {
  if ( this.checkAgent() ) {} else {
   if ( console[ config.name.toLowerCase() ] ) {
    console[ config.name.toLowerCase() ]( toLog );
   } else {
    console.log( toLog );
   }
  }
 }

}


export default new Loggo()