🐕 Common Loggo
===

![commonloggoimage](https://github.com/thecreazy/common-loggo/blob/master/docs/common-loggo.png)


**Common Loggo** is an `fancy` log library for your browser.

With **Common Loggo** you can use the default style of logging, ovverride it or create new with a simple json config.

You can find the preview on the [Github page](https://thecreazy.github.io/common-loggo/)

Getting started
---

1. To include the code locally install `common-loggo` using npm:

  ```
  npm install common-loggo
  ```

2. To include the code globally from a cdn:
  ```html
  <script src="https://unpkg.com/common-loggo@1.0.0/dist/commonlogo.umd.js"></script>
  ```

Dependencies
---
`common-loggo` has no external dependencies, just dev dependecies for the dev and build process.


Documentation
---

### Include `common-loggo` in your scripts:

  ```html
  <script src="https://unpkg.com/common-loggo@1.0.0/dist/commonlogo.umd.js"></script>
  ```

### Init the script passing optionally:

 - some new log configuration 
 - style and other global configuration

  ```js
  commonloggo.init({
   loggo: {
    label: 'Loggo',
    color: 'white',
    background: 'blue'
   },
   rock: {
    label: '🤟',
    color: 'black',
    background: 'white'
   }
  }, {
   style: {
    fontSize: '14px'
   },
   showLog: true // default = true, you should don't pass it, if u pass false no log will be printed
  })
  ```

### Start using the libray

  ```js
  commonloggo.info('this is an info log')
  commonloggo.error('this is an error log')
  commonloggo.warn('this is a warning log')
  commonloggo.success('this is a success log')
  commonloggo.loggo('this is a loggo log')
  commonloggo.loggo('this is a loggo log with a json and a string', {
   loggo: 'logged'
  })
  commonloggo.rock('check my work on https://canellariccardo.it')
  ```

### See the results

![screenimage](https://github.com/thecreazy/common-loggo/blob/master/docs/screen.png)


Contributing
---

#### **Reporting bugs**

* Open a GitHub issue 

#### **Contributing with patches and bug fixes**

* Open a new GitHub pull request with the patch.
* Ensure the PR description clearly describes the problem and solution.


Contributors
---

- Riccardo Canella [@thecreazy](https://github.com/thecreazy)


Special mention
---

Thx to [@Jei](https://github.com/Jei) to be an excellent package name maker


License
---

MIT