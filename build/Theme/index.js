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
/******/ ({

/***/ 0:
/***/ function(module, exports, __webpack_require__) {

	__webpack_require__(1)
	var $app_template$ = __webpack_require__(49)
	var $app_style$ = __webpack_require__(50)
	var $app_script$ = __webpack_require__(51)
	
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

/***/ 1:
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

/***/ 2:
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

/***/ 3:
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

/***/ 4:
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

/***/ 49:
/***/ function(module, exports) {

	module.exports = {
	  "type": "div",
	  "attr": {},
	  "classList": [
	    "warp"
	  ],
	  "children": [
	    {
	      "type": "header",
	      "attr": {
	        "title": "主题"
	      }
	    },
	    {
	      "type": "div",
	      "attr": {},
	      "children": [
	        {
	          "type": "div",
	          "attr": {},
	          "repeat": function () {return this.skinList},
	          "classList": [
	            "skin"
	          ],
	          "style": {
	            "backgroundColor": function () {return this.$item.color}
	          },
	          "events": {
	            "click": function (evt) {this.selectTheme(this.$idx,evt)}
	          },
	          "children": [
	            {
	              "type": "text",
	              "attr": {
	                "value": "√"
	              },
	              "shown": function () {return this.selectIndex===this.$idx},
	              "classList": [
	                "select"
	              ]
	            }
	          ]
	        }
	      ]
	    }
	  ]
	}

/***/ },

/***/ 50:
/***/ function(module, exports) {

	module.exports = {
	  ".skin": {
	    "width": "200px",
	    "height": "150px",
	    "borderRadius": "6px",
	    "marginTop": "20px",
	    "marginRight": "25px",
	    "marginBottom": "20px",
	    "marginLeft": "25px"
	  },
	  ".select": {
	    "color": "#ffffff",
	    "fontSize": "100px",
	    "width": "100%",
	    "textAlign": "center"
	  },
	  ".warp": {
	    "display": "flex",
	    "flexDirection": "column"
	  }
	}

/***/ },

/***/ 51:
/***/ function(module, exports) {

	module.exports = function(module, exports, $app_require$){'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	
	var _typeof = typeof Symbol === "function" && typeof Symbol.iterator === "symbol" ? function (obj) { return typeof obj; } : function (obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; };
	
	exports.default = {
	  data: {
	    skinList: [{ skin: 'green', color: '#42bd56' }, { skin: 'blue', color: '#4285f5' }, { skin: 'pink', color: '#ff6478' }],
	    selectIndex: 0,
	    theme: { color: '' }
	  },
	  onInit: function onInit() {
	    this.theme = this.$app.$def.theme;
	
	    this.$watch('theme.color', 'switch');
	    var skin = this.$app.$def.theme.skin;
	    for (var i = 0; i < this.skinList.length; i++) {
	      if (this.skinList[i].skin === skin) {
	        this.selectIndex = i;
	        break;
	      }
	    }
	  },
	  selectTheme: function selectTheme(index) {
	    this.selectIndex = index;
	    this.$app.$def.theme.skin = this.skinList[index].skin;
	    this.$app.$def.theme.color = this.skinList[index].color;
	  },
	  switch: function _switch(newValue, oldValue) {}
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

/******/ });
  };
  if (typeof window === "undefined") {
    return createPageHandler();
  }
  else {
    window.createPageHandler = createPageHandler
  }
})();
//# sourceMappingURL=index.js.map