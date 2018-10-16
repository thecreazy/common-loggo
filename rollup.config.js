import resolve from 'rollup-plugin-node-resolve';
import commonjs from 'rollup-plugin-commonjs';
import pkg from './package.json';
import babel from 'rollup-plugin-babel';

export default [{
  input: 'src/index.js',
  output: [{
   name: 'commonloggo',
   file: pkg.browser,
   format: 'umd'
  }, {
   name: 'commonloggo',
   file: './docs/commonloggo.umd.js',
   format: 'umd'
  }],
  plugins: [
   resolve(),
   babel({
    exclude: 'node_modules/**'
   }),
   commonjs()
  ]
 },
 {
  input: 'src/index.js',
  external: ['ms'],
  output: [{
    file: pkg.main,
    format: 'cjs',
    exports: 'named'
   },
   {
    file: pkg.module,
    format: 'es',
    exports: 'named'
   }
  ]
 }
];