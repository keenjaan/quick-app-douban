(function(){
      
  var createPageHandler = function() {
    return /******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId])
/******/ 			return installedModules[moduleId].exports;
/******/
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			exports: {},
/******/ 			id: moduleId,
/******/ 			loaded: false
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.loaded = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(0);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ function(module, exports, __webpack_require__) {

	__webpack_require__(1)
	var $app_template$ = __webpack_require__(5)
	var $app_style$ = __webpack_require__(6)
	var $app_script$ = __webpack_require__(7)
	
	$app_define$('@app-component/index', [], function($app_require$, $app_exports$, $app_module$){
	     $app_script$($app_module$, $app_exports$, $app_require$)
	     if ($app_exports$.__esModule && $app_exports$.default) {
	            $app_module$.exports = $app_exports$.default
	        }
	     $app_module$.exports.template = $app_template$
	     $app_module$.exports.style = $app_style$
	})
	
	$app_bootstrap$('@app-component/index',{ packagerVersion: '0.0.5'})


/***/ },
/* 1 */
/***/ function(module, exports, __webpack_require__) {

	var $app_template$ = __webpack_require__(2)
	var $app_style$ = __webpack_require__(3)
	var $app_script$ = __webpack_require__(4)
	
	$app_define$('@app-component/header', [], function($app_require$, $app_exports$, $app_module$){
	     $app_script$($app_module$, $app_exports$, $app_require$)
	     if ($app_exports$.__esModule && $app_exports$.default) {
	            $app_module$.exports = $app_exports$.default
	        }
	     $app_module$.exports.template = $app_template$
	     $app_module$.exports.style = $app_style$
	})


/***/ },
/* 2 */
/***/ function(module, exports) {

	module.exports = {
	  "type": "div",
	  "attr": {},
	  "classList": [
	    "header"
	  ],
	  "style": {
	    "backgroundColor": function () {return this.theme.color},
	    "color": function () {return this.theme.color}
	  },
	  "children": [
	    {
	      "type": "image",
	      "attr": {
	        "src": "../assets/back.png"
	      },
	      "events": {
	        "click": "back"
	      },
	      "classList": [
	        "img"
	      ]
	    },
	    {
	      "type": "text",
	      "attr": {
	        "value": function () {return this.title}
	      },
	      "classList": [
	        "title"
	      ]
	    }
	  ]
	}

/***/ },
/* 3 */
/***/ function(module, exports) {

	module.exports = {
	  ".header": {
	    "width": "100%",
	    "height": "120px",
	    "display": "flex",
	    "alignItems": "center",
	    "paddingTop": "0px",
	    "paddingRight": "80px",
	    "paddingBottom": "0px",
	    "paddingLeft": "30px"
	  },
	  ".img": {
	    "width": "50px",
	    "height": "50px"
	  },
	  ".title": {
	    "flex": 1,
	    "textAlign": "center",
	    "color": "#ffffff",
	    "fontSize": "42px"
	  }
	}

/***/ },
/* 4 */
/***/ function(module, exports) {

	module.exports = function(module, exports, $app_require$){'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	
	var _system = $app_require$('@app-module/system.router');
	
	var _system2 = _interopRequireDefault(_system);
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
	
	exports.default = {
	  props: ['title'],
	  data: {
	    theme: { color: '' }
	  },
	  onInit: function onInit() {
	    this.theme = this.$app.$def.theme;
	  },
	  back: function back() {
	    _system2.default.back();
	  }
	};}

/***/ },
/* 5 */
/***/ function(module, exports) {

	module.exports = {
	  "type": "div",
	  "attr": {},
	  "classList": [
	    "about-warp"
	  ],
	  "children": [
	    {
	      "type": "header",
	      "attr": {
	        "title": "项目详情"
	      }
	    },
	    {
	      "type": "div",
	      "attr": {},
	      "style": {
	        "paddingTop": "0px",
	        "paddingRight": "30px",
	        "paddingBottom": "0px",
	        "paddingLeft": "30px"
	      },
	      "children": [
	        {
	          "type": "div",
	          "attr": {},
	          "classList": [
	            "description"
	          ],
	          "children": [
	            {
	              "type": "div",
	              "attr": {},
	              "classList": [
	                "item-warp"
	              ],
	              "children": [
	                {
	                  "type": "text",
	                  "attr": {
	                    "value": "1、"
	                  },
	                  "classList": [
	                    "item-order"
	                  ]
	                },
	                {
	                  "type": "div",
	                  "attr": {},
	                  "children": [
	                    {
	                      "type": "text",
	                      "attr": {
	                        "value": "本项目为熟悉快应用练手项目，仅供大家参考！"
	                      },
	                      "classList": [
	                        "mess"
	                      ]
	                    }
	                  ]
	                }
	              ]
	            },
	            {
	              "type": "div",
	              "attr": {},
	              "classList": [
	                "item-warp"
	              ],
	              "children": [
	                {
	                  "type": "text",
	                  "attr": {
	                    "value": "2、"
	                  },
	                  "classList": [
	                    "item-order"
	                  ]
	                },
	                {
	                  "type": "div",
	                  "attr": {},
	                  "children": [
	                    {
	                      "type": "text",
	                      "attr": {
	                        "value": "本项目的所有数据来源为豆瓣api接口，一切解释权归豆瓣所有。"
	                      },
	                      "classList": [
	                        "mess"
	                      ]
	                    }
	                  ]
	                }
	              ]
	            },
	            {
	              "type": "div",
	              "attr": {},
	              "classList": [
	                "item-warp"
	              ],
	              "children": [
	                {
	                  "type": "text",
	                  "attr": {
	                    "value": "3、"
	                  },
	                  "classList": [
	                    "item-order"
	                  ]
	                },
	                {
	                  "type": "div",
	                  "attr": {},
	                  "children": [
	                    {
	                      "type": "text",
	                      "attr": {
	                        "value": "注意豆瓣api的接口有调用限制，每分钟10次，所以在体验时不要高频的调用接口，否则会被豆瓣封掉。为了减少请求次数，对于下拉刷新效果默认我将其注释了，看效果可以将注释去掉。"
	                      },
	                      "classList": [
	                        "mess"
	                      ]
	                    }
	                  ]
	                }
	              ]
	            },
	            {
	              "type": "div",
	              "attr": {},
	              "classList": [
	                "item-warp"
	              ],
	              "children": [
	                {
	                  "type": "text",
	                  "attr": {
	                    "value": "4、"
	                  },
	                  "classList": [
	                    "item-order"
	                  ]
	                },
	                {
	                  "type": "div",
	                  "attr": {},
	                  "children": [
	                    {
	                      "type": "text",
	                      "attr": {
	                        "value": "关于本项目的问题欢迎来一起探讨！"
	                      },
	                      "classList": [
	                        "mess"
	                      ]
	                    }
	                  ]
	                }
	              ]
	            },
	            {
	              "type": "div",
	              "attr": {},
	              "classList": [
	                "item-warp"
	              ],
	              "children": [
	                {
	                  "type": "text",
	                  "attr": {
	                    "value": "5、"
	                  },
	                  "classList": [
	                    "item-order"
	                  ]
	                },
	                {
	                  "type": "div",
	                  "attr": {},
	                  "children": [
	                    {
	                      "type": "text",
	                      "attr": {
	                        "value": "若转载请注明来源https://github.com/"
	                      },
	                      "classList": [
	                        "mess"
	                      ]
	                    }
	                  ]
	                }
	              ]
	            },
	            {
	              "type": "div",
	              "attr": {},
	              "classList": [
	                "item-warp"
	              ],
	              "children": [
	                {
	                  "type": "text",
	                  "attr": {
	                    "value": "6、"
	                  },
	                  "classList": [
	                    "item-order"
	                  ]
	                },
	                {
	                  "type": "div",
	                  "attr": {},
	                  "children": [
	                    {
	                      "type": "text",
	                      "attr": {
	                        "value": "欢迎star"
	                      },
	                      "classList": [
	                        "mess"
	                      ]
	                    }
	                  ]
	                }
	              ]
	            }
	          ]
	        },
	        {
	          "type": "div",
	          "attr": {}
	        }
	      ]
	    }
	  ]
	}

/***/ },
/* 6 */
/***/ function(module, exports) {

	module.exports = {
	  ".about-warp": {
	    "display": "flex",
	    "flexDirection": "column",
	    "backgroundColor": "#f0edef"
	  },
	  ".description": {
	    "display": "flex",
	    "flexDirection": "column",
	    "backgroundColor": "#ffffff",
	    "marginTop": "30px",
	    "borderTopWidth": "1px",
	    "borderRightWidth": "1px",
	    "borderBottomWidth": "1px",
	    "borderLeftWidth": "1px",
	    "borderStyle": "solid",
	    "borderTopColor": "#dddddd",
	    "borderRightColor": "#dddddd",
	    "borderBottomColor": "#dddddd",
	    "borderLeftColor": "#dddddd",
	    "paddingTop": "10px",
	    "paddingRight": "10px",
	    "paddingBottom": "10px",
	    "paddingLeft": "10px"
	  },
	  ".mess": {
	    "fontSize": "32px",
	    "lineHeight": "40px"
	  },
	  ".item-warp": {
	    "marginTop": "10px",
	    "marginRight": "0px",
	    "marginBottom": "10px",
	    "marginLeft": "0px",
	    "display": "flex",
	    "alignItems": "flex-start"
	  },
	  ".item-order": {
	    "width": "50px",
	    "lineHeight": "40px",
	    "fontSize": "32px"
	  }
	}

/***/ },
/* 7 */
/***/ function(module, exports) {

	module.exports = function(module, exports, $app_require$){'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	
	var _typeof = typeof Symbol === "function" && typeof Symbol.iterator === "symbol" ? function (obj) { return typeof obj; } : function (obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; };
	
	exports.default = {
	  data: {
	    theme: { color: '' }
	  },
	  onInit: function onInit() {
	    this.theme = this.$app.$def.theme;
	  }
	};
	
	
	var moduleOwn = exports.default || module.exports;
	var accessors = ['public', 'protected', 'private'];
	
	if (moduleOwn.data && accessors.some(function (acc) {
	  return moduleOwn[acc];
	})) {
	  throw new Error('页面VM对象中的属性data不可与"' + accessors.join(',') + '"同时存在，请使用private替换data名称');
	} else if (!moduleOwn.data) {
	  moduleOwn.data = {};
	  moduleOwn._descriptor = {};
	  accessors.forEach(function (acc) {
	    var accType = _typeof(moduleOwn[acc]);
	    if (accType === 'object') {
	      moduleOwn.data = Object.assign(moduleOwn.data, moduleOwn[acc]);
	      for (var name in moduleOwn[acc]) {
	        moduleOwn._descriptor[name] = { access: acc };
	      }
	    } else if (accType === 'function') {
	      console.warn('页面VM对象中的属性' + acc + '的值不能是函数，请使用对象');
	    }
	  });
	}}

/***/ }
/******/ ]);
  };
  if (typeof window === "undefined") {
    return createPageHandler();
  }
  else {
    window.createPageHandler = createPageHandler
  }
})();
//# sourceMappingURL=index.js.map