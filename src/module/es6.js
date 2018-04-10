const globalRef = global.__proto__ || global
// global注入regeneratorRuntime
globalRef.regeneratorRuntime = require('babel-runtime/regenerator')