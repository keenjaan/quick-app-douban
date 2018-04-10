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

	__webpack_require__(15)
	__webpack_require__(27)
	__webpack_require__(32)
	var $app_template$ = __webpack_require__(37)
	var $app_style$ = __webpack_require__(38)
	var $app_script$ = __webpack_require__(39)
	
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
/* 1 */,
/* 2 */,
/* 3 */,
/* 4 */,
/* 5 */,
/* 6 */,
/* 7 */,
/* 8 */
/***/ function(module, exports, __webpack_require__) {

	var $app_template$ = __webpack_require__(9)
	var $app_style$ = __webpack_require__(10)
	var $app_script$ = __webpack_require__(11)
	
	$app_define$('@app-component/rate', [], function($app_require$, $app_exports$, $app_module$){
	     $app_script$($app_module$, $app_exports$, $app_require$)
	     if ($app_exports$.__esModule && $app_exports$.default) {
	            $app_module$.exports = $app_exports$.default
	        }
	     $app_module$.exports.template = $app_template$
	     $app_module$.exports.style = $app_style$
	})


/***/ },
/* 9 */
/***/ function(module, exports) {

	module.exports = {
	  "type": "div",
	  "attr": {},
	  "children": [
	    {
	      "type": "div",
	      "attr": {},
	      "shown": function () {return this.rate},
	      "classList": [
	        "rate-warp"
	      ],
	      "children": [
	        {
	          "type": "block",
	          "attr": {},
	          "repeat": function () {return this.list},
	          "children": [
	            {
	              "type": "image",
	              "attr": {
	                "src": function () {return this.rate<(this.$item-1)*2+0.5?this.gray:(this.rate>=2*this.$item-0.5?this.star:this.half)}
	              },
	              "classList": [
	                "star"
	              ]
	            }
	          ]
	        },
	        {
	          "type": "text",
	          "attr": {
	            "value": function () {return this.rate}
	          },
	          "classList": [
	            "rate"
	          ]
	        }
	      ]
	    },
	    {
	      "type": "text",
	      "attr": {
	        "value": "暂无评分"
	      },
	      "classList": [
	        "no-rate"
	      ],
	      "shown": function () {return !this.rate}
	    }
	  ]
	}

/***/ },
/* 10 */
/***/ function(module, exports) {

	module.exports = {
	  ".star": {
	    "width": "24px",
	    "height": "24px",
	    "marginRight": "1px"
	  },
	  ".rate": {
	    "marginLeft": "5px",
	    "fontSize": "24px"
	  },
	  ".rate-warp": {
	    "display": "flex",
	    "alignItems": "center"
	  },
	  ".no-rate": {
	    "fontSize": "24px"
	  }
	}

/***/ },
/* 11 */
/***/ function(module, exports) {

	module.exports = function(module, exports, $app_require$){'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	var half = 'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAB4AAAAeCAYAAAA7MK6iAAAAAXNSR0IArs4c6QAAAyhJREFUSA29l89rE0EUx99siqZgm0YFC00KVXuwUSMUpGitBaFgi0VEhIqHWkHw4B+gCIognrz1ZrwKVVSqtYIn9SDVHkQFQSOEmkYqaNOkQjRt8vxuyK6TzUx+LLQDm3nzfsxn982b2Q2Ry8bP/JOJROLT3Nyc380UhpsgnvLvJhLDzLzDMIwzbuZwBSZDnLNgQvyXLV0tfd1gvkcbiNh+SoDDSHd3LTDZp24wbfINkxBb5Uk8Ho+dAVlfSa4fLAwV5HQ8Hm+sBHLa6gLzdGOAmAackyDdPlwnnfpK47rAxBtHkWZdjCoTWrZukrIAxv4B9GyZoajAE/ch3Tt1dqe+ZjBNtfQDvN05gTQGW4xJ44qi4Kf+ETxLEF4+9D7KF3trzNRSsBE1O9Oc2PMhCxi2l91WIf3EwZKGPo0+VeytsalLw+d7Aw6Du3aYKThzIEqs1QYNcGgFrNV0RF/wl3tLBoZfF6zr+7Ng0ELyCDFPrBcXqX4P1n4DdfqHBpMjgN9YazigT1KpVG9bW1u8sKJYCRaDyStE+VHcQHYtbgDQW5FI5HgoFPptzl9WOjzdchjqR6iMqu9ZRVWX3TOAK7guBIPBO7LRWcMkBpdeEq/2IAlfZUc3MoCLuAacUHOuMrCpFEPLXygDONOMOXbZvgHaA+gLVbwSbDqKE8u/8NTvVEG16ABNAxrV+WrBhQBBfbrAanocFKH5+fktOj8tmB82mUFdusAa9CKfzx/S+WnB5PUgqHjm6aKr6PEhqM2YHsz6oCo824x0Y2uqmx5sVFlfJrNwnquntbXhaDTabI8kQQnmSWrCCbZP8pNEXkG136Qfi3sDgcAxVO8pGBckB1n0eL3eXllhyUowNWw+iOX1WE52z/QG7+tucTR5uXDGwwD4/Ww2uwvibVz4UCltunVWgw0uLQqmZWTgIr1dPCCGkh9Lpybq6OhYwsF/PpfL9SMDn2U7xsp1VoOZpG3Aj4kyXXiJjItreN4Krb29/VUmkwljG10H0HrZdMdiMa8zzPxiULUZJG0bce6SGEo9UDnodJ2dnX9hu4p/FxP40B+HzLOzs6iL0vYPbfQF9yQ167cAAAAASUVORK5CYII=';
	var star = 'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABQAAAAUCAYAAACNiR0NAAAAAXNSR0IArs4c6QAAAfhJREFUOBGlVD1LHFEUPXfWrzGJO2uhaIQ0iljESgKSpAjBwpXVKikEl6TzD6TwJ4gWaQMBS8WQgCRZ61QpglUgRbQUbMR1XfwodvbmvE1mdt/ssDPBC493733nnrkf7w2QQrSU29D9wY8poJAkkG6hD8O5E+IGgJsHkr8+7hTjdDpsnA0PLkHE4yK2r5iETyYUfdUkkRa96W3VOhLqXv8oFHNhgGCC/Xwc2jFKR0J0966w1IwVp/LasiNGOBTdxV24bhbqenCQRUY9qLzl2CasGEUVdbyA1M5R1wrq/gUqVxUp4tLghCX85D7VlonFksJQ9Un3w5S8c2sy8z3TGtGDRsla8op0vKe3O0UuMRBVDm9N8uX1Zg/3s8+hmU/sGS/wf8kN0UWZP/tgokJCY+jX3ENmWqJ3zNiJonoKXxalcPY9wFqExqmf3fvIuL+SM2WZNX9SCheHAZnZ2++h9FyxufdaQfG6CBznTvQshtDhSyA4jQieRmExhO2gaFBoi5OK8EkYECiqX9jdd1wauP7tbVgrw8a/TzETBpkp1nWZ96sg8+VV8j0j6VF4Dozo3sB4ix0ZypD3iO3r+QvQbfi1KVkobwcBkj//hmp5msSbXHxqlC67bCtDDr2fN/43wYvMaFkK1dOALNjlJa6Z8RuIP0vfAZfVhj/iqoy46fpKwgAAAABJRU5ErkJggg==';
	var gray = 'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABQAAAAUCAYAAACNiR0NAAAAAXNSR0IArs4c6QAAAeRJREFUOBGtlDsvBFEUx3d2djfiMbTsQ0NEwTaiQSGiRKWREDofgMJHEAqdSPSE0BC9SiEqWQWSzT4SzSbrsR7Fzo7fEXfNg9klbjI5j/s/vzn3MRMI1DFyudxaPp8/qEMa0GqJ0ul0QzgcvtM0zbAsqzMWi+X9aoJ+kzIXiUSmgLXhinZOcn6jJpDieRvA7tvSX64vMJvNdiAdV3I67c5kMkMq/s76AgHMUqTbC0Oh0II9dvvVQ0mlUs2GYbRWKpU2ij4swA3pylX0ZJrmNPn7crn8oOv6Y7FYfEgmk8+i07gOl0z24js6cUHqCU1uwbksefcfYPJCHeDFx5LpUq7DNp2GZeYPw2KrVuLx+Gp1D4GOATwEZvwGSFdv6Oe48PtSVwVKwCfWB/SEJyZxHaMAcBLYmdI6gJIEGg0Gg1e4tTqVZfawzBsFE+u5h4heyLfYRT/4LERrcs95gNwr+RI8nbsLJWa5I+68B8hbPSJ3kYq/03qAvHVYFShL7phni9hSuU/r0TqA8u9DOGArKvCZzXCKEzyL7O8o4Fs1T4ftHGKXisU6gOzfIKLIp2CnVCr1JhKJHVXAiZ4C7Ae8Ts6UPDfCsUUhJRYLrJGCa+xSNBo9ss8pH+gr/jK/tj0a2ETv2IZ35FSkS7HbzakAAAAASUVORK5CYII=';
	exports.default = {
	  props: ['rate'],
	  data: {
	    star: star,
	    gray: gray,
	    half: half,
	    list: [1, 2, 3, 4, 5]
	  }
	};}

/***/ },
/* 12 */,
/* 13 */,
/* 14 */,
/* 15 */
/***/ function(module, exports, __webpack_require__) {

	__webpack_require__(16)
	var $app_template$ = __webpack_require__(24)
	var $app_style$ = __webpack_require__(25)
	var $app_script$ = __webpack_require__(26)
	
	$app_define$('@app-component/movie', [], function($app_require$, $app_exports$, $app_module$){
	     $app_script$($app_module$, $app_exports$, $app_require$)
	     if ($app_exports$.__esModule && $app_exports$.default) {
	            $app_module$.exports = $app_exports$.default
	        }
	     $app_module$.exports.template = $app_template$
	     $app_module$.exports.style = $app_style$
	})


/***/ },
/* 16 */
/***/ function(module, exports, __webpack_require__) {

	__webpack_require__(17)
	var $app_template$ = __webpack_require__(21)
	var $app_style$ = __webpack_require__(22)
	var $app_script$ = __webpack_require__(23)
	
	$app_define$('@app-component/list-movie', [], function($app_require$, $app_exports$, $app_module$){
	     $app_script$($app_module$, $app_exports$, $app_require$)
	     if ($app_exports$.__esModule && $app_exports$.default) {
	            $app_module$.exports = $app_exports$.default
	        }
	     $app_module$.exports.template = $app_template$
	     $app_module$.exports.style = $app_style$
	})


/***/ },
/* 17 */
/***/ function(module, exports, __webpack_require__) {

	__webpack_require__(8)
	var $app_template$ = __webpack_require__(18)
	var $app_style$ = __webpack_require__(19)
	var $app_script$ = __webpack_require__(20)
	
	$app_define$('@app-component/cover', [], function($app_require$, $app_exports$, $app_module$){
	     $app_script$($app_module$, $app_exports$, $app_require$)
	     if ($app_exports$.__esModule && $app_exports$.default) {
	            $app_module$.exports = $app_exports$.default
	        }
	     $app_module$.exports.template = $app_template$
	     $app_module$.exports.style = $app_style$
	})


/***/ },
/* 18 */
/***/ function(module, exports) {

	module.exports = {
	  "type": "div",
	  "attr": {},
	  "children": [
	    {
	      "type": "div",
	      "attr": {},
	      "classList": [
	        "cover-content"
	      ],
	      "events": {
	        "click": function (evt) {this.toDetail(this.mess.id,evt)}
	      },
	      "children": [
	        {
	          "type": "image",
	          "attr": {
	            "src": function () {return this.mess.image||this.mess.images.small}
	          },
	          "classList": [
	            "img"
	          ]
	        },
	        {
	          "type": "div",
	          "attr": {},
	          "classList": [
	            "content"
	          ],
	          "children": [
	            {
	              "type": "div",
	              "attr": {},
	              "children": [
	                {
	                  "type": "text",
	                  "attr": {
	                    "value": function () {return this.mess.title.slice(0,7)}
	                  },
	                  "classList": [
	                    "title"
	                  ]
	                }
	              ]
	            },
	            {
	              "type": "rate",
	              "attr": {
	                "rate": function () {return this.mess.rating.numRaters||this.mess.rating.stars?this.mess.rating.average:''}
	              }
	            }
	          ]
	        }
	      ]
	    }
	  ]
	}

/***/ },
/* 19 */
/***/ function(module, exports) {

	module.exports = {
	  ".cover-warp": {
	    "width": "100%"
	  },
	  ".cover-content": {
	    "width": "210px",
	    "display": "flex",
	    "flexDirection": "column"
	  },
	  ".img": {
	    "width": "210px",
	    "height": "315px"
	  },
	  ".content": {
	    "display": "flex",
	    "flexDirection": "column",
	    "alignItems": "center"
	  },
	  ".title": {
	    "textAlign": "center"
	  }
	}

/***/ },
/* 20 */
/***/ function(module, exports) {

	module.exports = function(module, exports, $app_require$){'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	exports.default = {
	  props: ['mess'],
	  onInit: function onInit() {},
	  toDetail: function toDetail(id) {
	    console.log(11111, id);
	    this.$dispatch('toDetail', { id: id });
	  }
	};}

/***/ },
/* 21 */
/***/ function(module, exports) {

	module.exports = {
	  "type": "refresh",
	  "attr": {
	    "refreshing": function () {return this.refreshing}
	  },
	  "classList": [
	    "demo-page"
	  ],
	  "events": {
	    "refresh": "refresh"
	  },
	  "style": {
	    "progressColor": function () {return this.theme.color}
	  },
	  "children": [
	    {
	      "type": "list",
	      "attr": {},
	      "events": {
	        "scrollbottom": "renderMoreListItem"
	      },
	      "children": [
	        {
	          "type": "block",
	          "attr": {},
	          "repeat": function () {return this.productList},
	          "children": [
	            {
	              "type": "list-item",
	              "attr": {
	                "type": "item"
	              },
	              "classList": [
	                "item"
	              ],
	              "children": [
	                {
	                  "type": "cover",
	                  "attr": {
	                    "mess": function () {return this.cover}
	                  },
	                  "shown": function () {return this.cover.id},
	                  "repeat": {
	                    "exp": function () {return this.$item},
	                    "value": "cover"
	                  },
	                  "classList": [
	                    "cover-item"
	                  ]
	                }
	              ]
	            }
	          ]
	        },
	        {
	          "type": "list-item",
	          "attr": {
	            "type": "loadStatus"
	          },
	          "classList": [
	            "load-status"
	          ],
	          "children": [
	            {
	              "type": "progress",
	              "attr": {
	                "type": "circular",
	                "show": function () {return this.hasMoreData}
	              },
	              "style": {
	                "color": function () {return this.theme.color}
	              }
	            },
	            {
	              "type": "text",
	              "attr": {
	                "show": function () {return this.hasMoreData},
	                "value": "加载更多···"
	              },
	              "classList": [
	                "loading"
	              ]
	            },
	            {
	              "type": "text",
	              "attr": {
	                "show": function () {return !this.hasMoreData},
	                "value": "没有更多了~"
	              }
	            }
	          ]
	        }
	      ]
	    }
	  ]
	}

/***/ },
/* 22 */
/***/ function(module, exports) {

	module.exports = {
	  ".tab-item": {
	    "textAlign": "center",
	    "width": "33.33%"
	  },
	  ".tab-bar": {
	    "display": "flex"
	  },
	  ".cover-item": {
	    "marginTop": "20px",
	    "marginRight": "20px",
	    "marginBottom": "20px",
	    "marginLeft": "20px"
	  },
	  ".load-status": {
	    "height": "80px",
	    "display": "flex",
	    "justifyContent": "center",
	    "alignItems": "center"
	  },
	  ".loading": {
	    "textAlign": "center"
	  }
	}

/***/ },
/* 23 */
/***/ function(module, exports) {

	module.exports = function(module, exports, $app_require$){'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	
	var _system = $app_require$('@app-module/system.fetch');
	
	var _system2 = _interopRequireDefault(_system);
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
	
	function _asyncToGenerator(fn) { return function () { var gen = fn.apply(this, arguments); return new Promise(function (resolve, reject) { function step(key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { return Promise.resolve(value).then(function (value) { step("next", value); }, function (err) { step("throw", err); }); } } return step("next"); }); }; }
	
	exports.default = {
	  props: ['url'],
	  data: {
	    refreshing: false,
	    productList: [],
	    hasMoreData: true,
	
	    size: 12,
	
	    isLoadingData: false,
	    tempList: [],
	    memList: [],
	    theme: { color: '' },
	    type: ''
	  },
	  onInit: function onInit() {
	    if (/movie/.test(this.url)) {
	      this.type = 'subjects';
	    } else if (/music/.test(this.url)) {
	      this.type = 'musics';
	    } else {
	      this.type = 'books';
	    }
	    console.log(this.type, 'type');
	    this.theme = this.$app.$def.theme;
	    this.loadAndRender();
	  },
	  refresh: function refresh(evt) {
	    this.refreshing = true;
	    this.memList = [];
	    this.loadAndRender();
	    this.tempList = [];
	    this.productList = [];
	  },
	  loadAndRender: function loadAndRender() {
	    var doRender = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : true;
	
	    this.isLoadingData = true;
	
	    this.getData(function (resList) {
	      this.isLoadingData = false;
	      this.refreshing = false;
	      if (!resList) {
	        console.error('\u6570\u636E\u8BF7\u6C42\u9519\u8BEF');
	      } else if (!resList.length) {
	        this.hasMoreData = false;
	      } else {
	        this.memList = this.memList.concat(resList);
	        if (doRender) {
	          this._renderList();
	        }
	      }
	    }.bind(this));
	  },
	  _renderList: function _renderList() {
	    if (this.memList.length > 0) {
	      var list = this.memList.splice(0, this.size);
	      this.tempList = this.tempList.concat(list);
	      this.productList = this.arrTrans(this.tempList, 3);
	    }
	    if (this.memList.length <= this.size && this.hasMoreData) {
	      this.loadAndRender(false);
	    }
	  },
	  renderMoreListItem: function renderMoreListItem() {
	    console.log('滚到底部', this.isLoadingData);
	    if (!this.isLoadingData) {
	      this._renderList();
	    }
	  },
	  arrTrans: function arrTrans(arr, num) {
	    var newArray = new Array(Math.ceil(arr.length / num));
	    for (var i = 0; i < newArray.length; i++) {
	      newArray[i] = [];
	      for (var j = 0; j < num; j++) {
	        newArray[i][j] = {};
	      }
	    }
	    for (var i = 0; i < arr.length; i++) {
	      newArray[parseInt(i / num)][i % num] = arr[i];
	    }
	    return newArray;
	  },
	  getData: function () {
	    var _ref = _asyncToGenerator(regeneratorRuntime.mark(function _callee(cb) {
	      var data, arr;
	      return regeneratorRuntime.wrap(function _callee$(_context) {
	        while (1) {
	          switch (_context.prev = _context.next) {
	            case 0:
	              console.log(this.url, 'url');
	              _context.next = 3;
	              return network.get(this.url);
	
	            case 3:
	              data = _context.sent;
	
	              console.log(data);
	              arr = JSON.parse(data)[this.type];
	
	              cb(arr);
	
	            case 7:
	            case 'end':
	              return _context.stop();
	          }
	        }
	      }, _callee, this);
	    }));
	
	    function getData(_x2) {
	      return _ref.apply(this, arguments);
	    }
	
	    return getData;
	  }()
	};}

/***/ },
/* 24 */
/***/ function(module, exports) {

	module.exports = {
	  "type": "div",
	  "attr": {},
	  "classList": [
	    "home"
	  ],
	  "children": [
	    {
	      "type": "tabs",
	      "attr": {},
	      "events": {
	        "change": "onChangeTabIndex"
	      },
	      "classList": [
	        "tab"
	      ],
	      "children": [
	        {
	          "type": "tab-bar",
	          "attr": {},
	          "classList": [
	            "tab-bar"
	          ],
	          "children": [
	            {
	              "type": "div",
	              "attr": {},
	              "classList": [
	                "tab-item-warp"
	              ],
	              "repeat": function () {return this.tabHeadList},
	              "children": [
	                {
	                  "type": "text",
	                  "attr": {
	                    "value": function () {return this.$item.title}
	                  },
	                  "style": {
	                    "color": function () {return this.$idx==this.currentIndex?this.theme.color:'#666666'}
	                  },
	                  "classList": [
	                    "tab-item"
	                  ]
	                },
	                {
	                  "type": "div",
	                  "attr": {},
	                  "style": {
	                    "borderColor": function () {return this.theme.color}
	                  },
	                  "shown": function () {return this.$idx==this.currentIndex},
	                  "classList": [
	                    "line"
	                  ]
	                }
	              ]
	            }
	          ]
	        },
	        {
	          "type": "tab-content",
	          "attr": {},
	          "classList": [
	            "tab-content"
	          ],
	          "children": [
	            {
	              "type": "div",
	              "attr": {},
	              "repeat": function () {return this.tabHeadList},
	              "children": [
	                {
	                  "type": "list-movie",
	                  "attr": {
	                    "index": function () {return this.$idx},
	                    "url": function () {return this.$item.url}
	                  },
	                  "shown": function () {return this.renderTabContent(this.$idx)}
	                }
	              ]
	            }
	          ]
	        }
	      ]
	    }
	  ]
	}

/***/ },
/* 25 */
/***/ function(module, exports) {

	module.exports = {
	  ".header-line": {
	    "width": "100%",
	    "borderTopWidth": "1px",
	    "borderRightWidth": "1px",
	    "borderBottomWidth": "1px",
	    "borderLeftWidth": "1px",
	    "borderStyle": "solid",
	    "borderTopColor": "#eeeeee",
	    "borderRightColor": "#eeeeee",
	    "borderBottomColor": "#eeeeee",
	    "borderLeftColor": "#eeeeee"
	  },
	  ".tab-item-warp": {
	    "width": "33.33%",
	    "height": "100px",
	    "display": "flex",
	    "flexDirection": "column",
	    "alignItems": "center",
	    "justifyContent": "center"
	  },
	  ".line": {
	    "width": "30%",
	    "borderStyle": "solid",
	    "borderTopWidth": "1px",
	    "borderRightWidth": "1px",
	    "borderBottomWidth": "1px",
	    "borderLeftWidth": "1px"
	  },
	  ".tab-item": {
	    "textAlign": "center",
	    "width": "50%",
	    "marginBottom": "15px"
	  },
	  ".tab-bar": {
	    "display": "flex",
	    "borderTopWidth": "1px",
	    "borderRightWidth": "1px",
	    "borderBottomWidth": "1px",
	    "borderLeftWidth": "1px",
	    "borderStyle": "solid",
	    "borderTopColor": "#eeeeee",
	    "borderRightColor": "#eeeeee",
	    "borderBottomColor": "#eeeeee",
	    "borderLeftColor": "#eeeeee"
	  }
	}

/***/ },
/* 26 */
/***/ function(module, exports) {

	module.exports = function(module, exports, $app_require$){"use strict";
	
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	exports.default = {
	  data: {
	    tabHeadList: [{
	      title: "Top250",
	      url: '/v2/movie/top250?count=20'
	    }, {
	      title: "正在热映",
	      url: '/v2/movie/in_theaters?count=20'
	    }, {
	      title: "即将上映",
	      url: '/v2/movie/coming_soon?count=20'
	    }],
	    currentIndex: 0,
	    theme: { color: '' }
	  },
	  onInit: function onInit() {
	    this.theme = this.$app.$def.theme;
	
	    this.changeTabIndex(0);
	  },
	  changeTabIndex: function changeTabIndex(index) {
	    var item = Object.assign({}, this.tabHeadList[index]);
	    item.render = true;
	    this.tabHeadList.splice(index, 1, item);
	  },
	  onChangeTabIndex: function onChangeTabIndex(evt) {
	    this.currentIndex = evt.index;
	    this.changeTabIndex(evt.index);
	  },
	  renderTabContent: function renderTabContent(index) {
	    return !!this.tabHeadList[index].render;
	  }
	};}

/***/ },
/* 27 */
/***/ function(module, exports, __webpack_require__) {

	__webpack_require__(28)
	var $app_template$ = __webpack_require__(29)
	var $app_style$ = __webpack_require__(30)
	var $app_script$ = __webpack_require__(31)
	
	$app_define$('@app-component/music', [], function($app_require$, $app_exports$, $app_module$){
	     $app_script$($app_module$, $app_exports$, $app_require$)
	     if ($app_exports$.__esModule && $app_exports$.default) {
	            $app_module$.exports = $app_exports$.default
	        }
	     $app_module$.exports.template = $app_template$
	     $app_module$.exports.style = $app_style$
	})


/***/ },
/* 28 */
/***/ function(module, exports, __webpack_require__) {

	__webpack_require__(17)
	var $app_template$ = __webpack_require__(21)
	var $app_style$ = __webpack_require__(22)
	var $app_script$ = __webpack_require__(23)
	
	$app_define$('@app-component/list-music', [], function($app_require$, $app_exports$, $app_module$){
	     $app_script$($app_module$, $app_exports$, $app_require$)
	     if ($app_exports$.__esModule && $app_exports$.default) {
	            $app_module$.exports = $app_exports$.default
	        }
	     $app_module$.exports.template = $app_template$
	     $app_module$.exports.style = $app_style$
	})


/***/ },
/* 29 */
/***/ function(module, exports) {

	module.exports = {
	  "type": "div",
	  "attr": {},
	  "classList": [
	    "home"
	  ],
	  "children": [
	    {
	      "type": "tabs",
	      "attr": {},
	      "events": {
	        "change": "onChangeTabIndex"
	      },
	      "classList": [
	        "tab"
	      ],
	      "children": [
	        {
	          "type": "tab-bar",
	          "attr": {},
	          "classList": [
	            "tab-bar"
	          ],
	          "children": [
	            {
	              "type": "div",
	              "attr": {},
	              "classList": [
	                "tab-item-warp"
	              ],
	              "repeat": function () {return this.tabHeadList},
	              "children": [
	                {
	                  "type": "text",
	                  "attr": {
	                    "value": function () {return this.$item.title}
	                  },
	                  "style": {
	                    "color": function () {return this.$idx==this.currentIndex?this.theme.color:'#666666'}
	                  },
	                  "classList": [
	                    "tab-item"
	                  ]
	                },
	                {
	                  "type": "div",
	                  "attr": {},
	                  "style": {
	                    "borderColor": function () {return this.theme.color}
	                  },
	                  "shown": function () {return this.$idx==this.currentIndex},
	                  "classList": [
	                    "line"
	                  ]
	                }
	              ]
	            }
	          ]
	        },
	        {
	          "type": "tab-content",
	          "attr": {},
	          "classList": [
	            "tab-content"
	          ],
	          "children": [
	            {
	              "type": "div",
	              "attr": {},
	              "repeat": function () {return this.tabHeadList},
	              "children": [
	                {
	                  "type": "list-music",
	                  "attr": {
	                    "url": function () {return this.$item.url}
	                  },
	                  "shown": function () {return this.renderTabContent(this.$idx)}
	                }
	              ]
	            }
	          ]
	        }
	      ]
	    }
	  ]
	}

/***/ },
/* 30 */
/***/ function(module, exports) {

	module.exports = {
	  ".header-line": {
	    "width": "100%",
	    "borderTopWidth": "1px",
	    "borderRightWidth": "1px",
	    "borderBottomWidth": "1px",
	    "borderLeftWidth": "1px",
	    "borderStyle": "solid",
	    "borderTopColor": "#eeeeee",
	    "borderRightColor": "#eeeeee",
	    "borderBottomColor": "#eeeeee",
	    "borderLeftColor": "#eeeeee"
	  },
	  ".tab-item-warp": {
	    "width": "33.33%",
	    "height": "100px",
	    "display": "flex",
	    "flexDirection": "column",
	    "alignItems": "center",
	    "justifyContent": "center"
	  },
	  ".line": {
	    "width": "30%",
	    "borderStyle": "solid",
	    "borderTopWidth": "1px",
	    "borderRightWidth": "1px",
	    "borderBottomWidth": "1px",
	    "borderLeftWidth": "1px"
	  },
	  ".tab-item": {
	    "textAlign": "center",
	    "width": "50%",
	    "marginBottom": "15px"
	  },
	  ".tab-bar": {
	    "display": "flex",
	    "borderTopWidth": "1px",
	    "borderRightWidth": "1px",
	    "borderBottomWidth": "1px",
	    "borderLeftWidth": "1px",
	    "borderStyle": "solid",
	    "borderTopColor": "#eeeeee",
	    "borderRightColor": "#eeeeee",
	    "borderBottomColor": "#eeeeee",
	    "borderLeftColor": "#eeeeee"
	  }
	}

/***/ },
/* 31 */
/***/ function(module, exports) {

	module.exports = function(module, exports, $app_require$){"use strict";
	
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	exports.default = {
	  data: {
	    tabHeadList: [{
	      title: "流行",
	      url: '/v2/music/search?count=20&tag=流行'
	    }, {
	      title: "民谣",
	      url: '/v2/music/search?count=20&tag=民谣'
	    }, {
	      title: "华语",
	      url: '/v2/music/search?count=20&tag=华语'
	    }],
	    currentIndex: 0,
	    theme: { color: '' }
	  },
	  onInit: function onInit() {
	    console.log('start music');
	    this.theme = this.$app.$def.theme;
	
	    this.changeTabIndex(0);
	  },
	  changeTabIndex: function changeTabIndex(index) {
	    var item = Object.assign({}, this.tabHeadList[index]);
	    item.render = true;
	    this.tabHeadList.splice(index, 1, item);
	  },
	  onChangeTabIndex: function onChangeTabIndex(evt) {
	    this.currentIndex = evt.index;
	    this.changeTabIndex(evt.index);
	  },
	  renderTabContent: function renderTabContent(index) {
	    return !!this.tabHeadList[index].render;
	  }
	};}

/***/ },
/* 32 */
/***/ function(module, exports, __webpack_require__) {

	__webpack_require__(33)
	var $app_template$ = __webpack_require__(34)
	var $app_style$ = __webpack_require__(35)
	var $app_script$ = __webpack_require__(36)
	
	$app_define$('@app-component/book', [], function($app_require$, $app_exports$, $app_module$){
	     $app_script$($app_module$, $app_exports$, $app_require$)
	     if ($app_exports$.__esModule && $app_exports$.default) {
	            $app_module$.exports = $app_exports$.default
	        }
	     $app_module$.exports.template = $app_template$
	     $app_module$.exports.style = $app_style$
	})


/***/ },
/* 33 */
/***/ function(module, exports, __webpack_require__) {

	__webpack_require__(17)
	var $app_template$ = __webpack_require__(21)
	var $app_style$ = __webpack_require__(22)
	var $app_script$ = __webpack_require__(23)
	
	$app_define$('@app-component/list-book', [], function($app_require$, $app_exports$, $app_module$){
	     $app_script$($app_module$, $app_exports$, $app_require$)
	     if ($app_exports$.__esModule && $app_exports$.default) {
	            $app_module$.exports = $app_exports$.default
	        }
	     $app_module$.exports.template = $app_template$
	     $app_module$.exports.style = $app_style$
	})


/***/ },
/* 34 */
/***/ function(module, exports) {

	module.exports = {
	  "type": "div",
	  "attr": {},
	  "classList": [
	    "home"
	  ],
	  "children": [
	    {
	      "type": "tabs",
	      "attr": {},
	      "events": {
	        "change": "onChangeTabIndex"
	      },
	      "classList": [
	        "tab"
	      ],
	      "children": [
	        {
	          "type": "tab-bar",
	          "attr": {},
	          "classList": [
	            "tab-bar"
	          ],
	          "children": [
	            {
	              "type": "div",
	              "attr": {},
	              "classList": [
	                "tab-item-warp"
	              ],
	              "repeat": function () {return this.tabHeadList},
	              "children": [
	                {
	                  "type": "text",
	                  "attr": {
	                    "value": function () {return this.$item.title}
	                  },
	                  "style": {
	                    "color": function () {return this.$idx==this.currentIndex?this.theme.color:'#666666'}
	                  },
	                  "classList": [
	                    "tab-item"
	                  ]
	                },
	                {
	                  "type": "div",
	                  "attr": {},
	                  "style": {
	                    "borderColor": function () {return this.theme.color}
	                  },
	                  "shown": function () {return this.$idx==this.currentIndex},
	                  "classList": [
	                    "line"
	                  ]
	                }
	              ]
	            }
	          ]
	        },
	        {
	          "type": "tab-content",
	          "attr": {},
	          "classList": [
	            "tab-content"
	          ],
	          "children": [
	            {
	              "type": "div",
	              "attr": {},
	              "repeat": function () {return this.tabHeadList},
	              "children": [
	                {
	                  "type": "list-book",
	                  "attr": {
	                    "url": function () {return this.$item.url}
	                  },
	                  "shown": function () {return this.renderTabContent(this.$idx)}
	                }
	              ]
	            }
	          ]
	        }
	      ]
	    }
	  ]
	}

/***/ },
/* 35 */
/***/ function(module, exports) {

	module.exports = {
	  ".header-line": {
	    "width": "100%",
	    "borderTopWidth": "1px",
	    "borderRightWidth": "1px",
	    "borderBottomWidth": "1px",
	    "borderLeftWidth": "1px",
	    "borderStyle": "solid",
	    "borderTopColor": "#eeeeee",
	    "borderRightColor": "#eeeeee",
	    "borderBottomColor": "#eeeeee",
	    "borderLeftColor": "#eeeeee"
	  },
	  ".tab-item-warp": {
	    "width": "33.33%",
	    "height": "100px",
	    "display": "flex",
	    "flexDirection": "column",
	    "alignItems": "center",
	    "justifyContent": "center"
	  },
	  ".line": {
	    "width": "30%",
	    "borderStyle": "solid",
	    "borderTopWidth": "1px",
	    "borderRightWidth": "1px",
	    "borderBottomWidth": "1px",
	    "borderLeftWidth": "1px"
	  },
	  ".tab-item": {
	    "textAlign": "center",
	    "width": "50%",
	    "marginBottom": "15px"
	  },
	  ".tab-bar": {
	    "display": "flex",
	    "borderTopWidth": "1px",
	    "borderRightWidth": "1px",
	    "borderBottomWidth": "1px",
	    "borderLeftWidth": "1px",
	    "borderStyle": "solid",
	    "borderTopColor": "#eeeeee",
	    "borderRightColor": "#eeeeee",
	    "borderBottomColor": "#eeeeee",
	    "borderLeftColor": "#eeeeee"
	  }
	}

/***/ },
/* 36 */
/***/ function(module, exports) {

	module.exports = function(module, exports, $app_require$){"use strict";
	
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	exports.default = {
	  data: {
	    tabHeadList: [{
	      title: "小说",
	      url: '/v2/book/search?count=20&tag=小说'
	    }, {
	      title: "历史",
	      url: '/v2/book/search?count=20&tag=历史'
	    }, {
	      title: "传记",
	      url: '/v2/book/search?count=20&tag=传记'
	    }],
	    currentIndex: 0,
	    theme: { color: '' }
	  },
	  onInit: function onInit() {
	    console.log('start book');
	    this.theme = this.$app.$def.theme;
	
	    this.changeTabIndex(0);
	  },
	  changeTabIndex: function changeTabIndex(index) {
	    var item = Object.assign({}, this.tabHeadList[index]);
	    item.render = true;
	    this.tabHeadList.splice(index, 1, item);
	  },
	  onChangeTabIndex: function onChangeTabIndex(evt) {
	    this.currentIndex = evt.index;
	    this.changeTabIndex(evt.index);
	  },
	  renderTabContent: function renderTabContent(index) {
	    return !!this.tabHeadList[index].render;
	  }
	};}

/***/ },
/* 37 */
/***/ function(module, exports) {

	module.exports = {
	  "type": "div",
	  "attr": {},
	  "classList": [
	    "home-warp"
	  ],
	  "children": [
	    {
	      "type": "div",
	      "attr": {},
	      "classList": [
	        "header"
	      ],
	      "style": {
	        "backgroundColor": function () {return this.theme.color}
	      },
	      "children": [
	        {
	          "type": "image",
	          "attr": {
	            "src": "../assets/menu.png"
	          },
	          "events": {
	            "click": "showMenu"
	          },
	          "classList": [
	            "head-menu"
	          ]
	        },
	        {
	          "type": "text",
	          "attr": {
	            "value": function () {return this.menuList[this.currentIndex].type}
	          },
	          "classList": [
	            "head-title"
	          ]
	        },
	        {
	          "type": "image",
	          "attr": {
	            "src": "../assets/search.png"
	          },
	          "shown": function () {return true},
	          "classList": [
	            "head-search"
	          ]
	        }
	      ]
	    },
	    {
	      "type": "div",
	      "attr": {
	        "show": function () {return this.list[this.currentIndex].type==='movie'}
	      },
	      "classList": [
	        "content-warp"
	      ],
	      "children": [
	        {
	          "type": "movie",
	          "attr": {},
	          "shown": function () {return this.list[0].render},
	          "classList": [
	            "item-content"
	          ],
	          "events": {
	            "to-detail": "toMovie"
	          }
	        }
	      ]
	    },
	    {
	      "type": "div",
	      "attr": {
	        "show": function () {return this.list[this.currentIndex].type==='book'}
	      },
	      "classList": [
	        "content-warp"
	      ],
	      "children": [
	        {
	          "type": "book",
	          "attr": {},
	          "shown": function () {return this.list[1].render},
	          "classList": [
	            "item-content"
	          ],
	          "events": {
	            "to-detail": "toBook"
	          }
	        }
	      ]
	    },
	    {
	      "type": "div",
	      "attr": {
	        "show": function () {return this.list[this.currentIndex].type==='music'}
	      },
	      "classList": [
	        "content-warp"
	      ],
	      "children": [
	        {
	          "type": "music",
	          "attr": {},
	          "shown": function () {return this.list[2].render},
	          "classList": [
	            "item-content"
	          ],
	          "events": {
	            "to-detail": "toMusic"
	          }
	        }
	      ]
	    },
	    {
	      "type": "div",
	      "attr": {},
	      "classList": [
	        "bottom"
	      ],
	      "children": [
	        {
	          "type": "div",
	          "attr": {},
	          "classList": [
	            "line"
	          ]
	        },
	        {
	          "type": "div",
	          "attr": {},
	          "classList": [
	            "bottom-content"
	          ],
	          "children": [
	            {
	              "type": "div",
	              "attr": {},
	              "classList": [
	                "item-menu"
	              ],
	              "repeat": function () {return this.menuList},
	              "events": {
	                "click": function (evt) {this.changeTab(this.$idx,evt)}
	              },
	              "children": [
	                {
	                  "type": "image",
	                  "attr": {
	                    "src": function () {return this.currentIndex===this.$idx?this.$item.selectIcon:this.$item.defaultIcon}
	                  },
	                  "classList": [
	                    "icon"
	                  ]
	                },
	                {
	                  "type": "text",
	                  "attr": {
	                    "value": function () {return this.$item.type}
	                  },
	                  "classList": [
	                    "icon-word"
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
	      "attr": {},
	      "classList": function () {return ['model', this.modelStyle]},
	      "style": {
	        "width": function () {return this.clear}
	      },
	      "events": {
	        "click": "close"
	      },
	      "children": [
	        {
	          "type": "div",
	          "attr": {},
	          "events": {
	            "click": "stop"
	          },
	          "classList": function () {return ['model-menu', this.menuStyle]},
	          "children": [
	            {
	              "type": "div",
	              "attr": {},
	              "classList": [
	                "bg"
	              ],
	              "children": [
	                {
	                  "type": "div",
	                  "attr": {},
	                  "classList": [
	                    "self-mess"
	                  ],
	                  "children": [
	                    {
	                      "type": "image",
	                      "attr": {
	                        "src": "../assets/github.png"
	                      },
	                      "classList": [
	                        "favicon"
	                      ]
	                    },
	                    {
	                      "type": "text",
	                      "attr": {
	                        "value": "Keen Jaan"
	                      },
	                      "classList": [
	                        "name"
	                      ]
	                    }
	                  ]
	                }
	              ]
	            },
	            {
	              "type": "block",
	              "attr": {},
	              "repeat": function () {return this.menu},
	              "children": [
	                {
	                  "type": "div",
	                  "attr": {},
	                  "classList": [
	                    "menu-item"
	                  ],
	                  "events": {
	                    "click": function (evt) {this.toPage(this.$item.router,evt)}
	                  },
	                  "children": [
	                    {
	                      "type": "image",
	                      "attr": {
	                        "src": function () {return this.$item.img[this.theme.skin]}
	                      },
	                      "classList": [
	                        "icon-setting"
	                      ]
	                    },
	                    {
	                      "type": "div",
	                      "attr": {},
	                      "classList": [
	                        "menu-item-warp"
	                      ],
	                      "children": [
	                        {
	                          "type": "text",
	                          "attr": {
	                            "value": function () {return this.$item.name}
	                          },
	                          "classList": [
	                            "menu-item-word"
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
	                    "line-black"
	                  ]
	                }
	              ]
	            }
	          ]
	        }
	      ]
	    }
	  ]
	}

/***/ },
/* 38 */
/***/ function(module, exports) {

	module.exports = {
	  ".icon-setting": {
	    "width": "50px",
	    "height": "50px",
	    "marginRight": "50px"
	  },
	  ".line-black": {
	    "width": "100%",
	    "height": "0px",
	    "borderTopWidth": "1px",
	    "borderRightWidth": "1px",
	    "borderBottomWidth": "1px",
	    "borderLeftWidth": "1px",
	    "borderStyle": "solid",
	    "borderTopColor": "#bbbbbb",
	    "borderRightColor": "#bbbbbb",
	    "borderBottomColor": "#bbbbbb",
	    "borderLeftColor": "#bbbbbb"
	  },
	  ".menu-item-warp": {
	    "width": "300px"
	  },
	  ".menu-item-word": {
	    "fontSize": "36px",
	    "width": "300px",
	    "color": "#666666"
	  },
	  ".menu-item": {
	    "height": "120px",
	    "display": "flex",
	    "alignItems": "center",
	    "paddingLeft": "30px"
	  },
	  ".bg": {
	    "width": "600px",
	    "height": "400px",
	    "backgroundImage": "../assets/bg.png"
	  },
	  ".name": {
	    "marginTop": "40px",
	    "fontSize": "48px",
	    "width": "300px",
	    "textAlign": "center",
	    "color": "#cccccc"
	  },
	  ".self-mess": {
	    "display": "flex",
	    "flexDirection": "column",
	    "justifyContent": "center",
	    "alignItems": "center",
	    "width": "300px",
	    "height": "100%"
	  },
	  ".favicon": {
	    "width": "160px",
	    "height": "160px",
	    "borderRadius": "50%"
	  },
	  ".header": {
	    "height": "100px",
	    "paddingTop": "0px",
	    "paddingRight": "30px",
	    "paddingBottom": "0px",
	    "paddingLeft": "30px",
	    "display": "flex",
	    "alignItems": "center"
	  },
	  ".head-title": {
	    "flex": 1,
	    "textAlign": "center",
	    "color": "#ffffff"
	  },
	  ".head-menu": {
	    "width": "50px",
	    "height": "50px"
	  },
	  ".head-search": {
	    "width": "50px",
	    "height": "50px"
	  },
	  ".home-warp": {
	    "display": "flex",
	    "flexDirection": "column"
	  },
	  ".content-warp": {
	    "flex": 1,
	    "paddingBottom": "121px"
	  },
	  ".model": {
	    "position": "fixed",
	    "height": "100%"
	  },
	  ".show-model": {
	    "animationName": "showModel",
	    "animationDuration": "200ms",
	    "backgroundColor": "rgba(0,0,0,0.5)",
	    "animationTimingFunction": "ease-in-out"
	  },
	  ".hide-model": {
	    "animationName": "hideModel",
	    "animationDuration": "200ms",
	    "animationTimingFunction": "ease-in-out",
	    "backgroundColor": "rgba(0,0,0,0)"
	  },
	  ".model-menu": {
	    "width": "600px",
	    "height": "100%",
	    "backgroundColor": "#d1d1d1",
	    "display": "flex",
	    "flexDirection": "column"
	  },
	  ".show-menu": {
	    "animationName": "showMenu",
	    "animationDuration": "200ms",
	    "animationTimingFunction": "ease-in-out"
	  },
	  ".hide-menu": {
	    "animationName": "hideMenu",
	    "animationDuration": "200ms",
	    "animationTimingFunction": "ease-in-out"
	  },
	  "@KEYFRAMES": {
	    "showModel": [
	      {
	        "backgroundColor": "rgba(0,0,0,0)",
	        "time": 0
	      },
	      {
	        "backgroundColor": "rgba(0,0,0,0.4)",
	        "time": 50
	      },
	      {
	        "backgroundColor": "rgba(0,0,0,0.5)",
	        "time": 100
	      }
	    ],
	    "showMenu": [
	      {
	        "transform": "{\"translateX\":\"-600px\"}",
	        "time": 0
	      },
	      {
	        "transform": "{\"translateX\":\"0px\"}",
	        "time": 100
	      }
	    ],
	    "hideModel": [
	      {
	        "backgroundColor": "rgba(0,0,0,0.5)",
	        "time": 0
	      },
	      {
	        "backgroundColor": "rgba(0,0,0,0.4)",
	        "time": 50
	      },
	      {
	        "backgroundColor": "rgba(0,0,0,0)",
	        "time": 100
	      }
	    ],
	    "hideMenu": [
	      {
	        "transform": "{\"translateX\":\"0px\"}",
	        "time": 0
	      },
	      {
	        "transform": "{\"translateX\":\"-600px\"}",
	        "time": 100
	      }
	    ]
	  },
	  ".bottom": {
	    "position": "fixed",
	    "left": "0px",
	    "bottom": "0px",
	    "width": "100%",
	    "height": "121px",
	    "display": "flex",
	    "flexDirection": "column"
	  },
	  ".line": {
	    "width": "100%",
	    "height": "0px",
	    "borderTopWidth": "1px",
	    "borderRightWidth": "1px",
	    "borderBottomWidth": "1px",
	    "borderLeftWidth": "1px",
	    "borderStyle": "solid",
	    "borderTopColor": "#dddddd",
	    "borderRightColor": "#dddddd",
	    "borderBottomColor": "#dddddd",
	    "borderLeftColor": "#dddddd"
	  },
	  ".bottom-content": {
	    "width": "100%",
	    "height": "120px"
	  },
	  ".item-menu": {
	    "width": "33.33%",
	    "display": "flex",
	    "flexDirection": "column",
	    "alignItems": "center",
	    "justifyContent": "center"
	  },
	  ".icon": {
	    "width": "50px",
	    "height": "50px"
	  },
	  ".icon-word": {
	    "fontSize": "24px",
	    "color": "#999999",
	    "marginTop": "8px"
	  }
	}

/***/ },
/* 39 */
/***/ function(module, exports) {

	module.exports = function(module, exports, $app_require$){'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	    value: true
	});
	
	var _typeof = typeof Symbol === "function" && typeof Symbol.iterator === "symbol" ? function (obj) { return typeof obj; } : function (obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; };
	
	var _system = $app_require$('@app-module/system.router');
	
	var _system2 = _interopRequireDefault(_system);
	
	var _system3 = $app_require$('@app-module/system.prompt');
	
	var _system4 = _interopRequireDefault(_system3);
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
	
	exports.default = {
	    data: {
	        menuList: [{
	            type: '电影',
	            defaultIcon: '../assets/film.png',
	            name: 'film'
	        }, {
	            type: '读书',
	            defaultIcon: '../assets/book.png',
	            name: 'book'
	        }, {
	            type: '音乐',
	            defaultIcon: '../assets/music.png',
	            name: 'music'
	        }],
	        list: [{
	            type: 'movie',
	            render: true
	        }, {
	            type: 'book',
	            render: false
	        }, {
	            type: 'music',
	            render: false
	        }],
	        skinIcon: {
	            green: {
	                film: '../assets/film-green.png',
	                book: '../assets/book-green.png',
	                music: '../assets/music-green.png'
	            },
	            blue: {
	                film: '../assets/film-blue.png',
	                book: '../assets/book-blue.png',
	                music: '../assets/music-blue.png'
	            },
	            pink: {
	                film: '../assets/film-pink.png',
	                book: '../assets/book-pink.png',
	                music: '../assets/music-pink.png'
	            }
	        },
	        menu: [{
	            name: '主页',
	            img: {
	                green: '../assets/home-green.png',
	                blue: '../assets/home-blue.png',
	                pink: '../assets/home-pink.png'
	            },
	            router: '/HomePage'
	        }, {
	            name: '主题',
	            img: {
	                green: '../assets/theme-green.png',
	                blue: '../assets/theme-blue.png',
	                pink: '../assets/theme-pink.png'
	            },
	            router: '/Theme'
	        }, {
	            name: '反馈',
	            img: {
	                green: '../assets/suggest-green.png',
	                blue: '../assets/suggest-blue.png',
	                pink: '../assets/suggest-pink.png'
	            },
	            router: ''
	        }, {
	            name: '关于',
	            img: {
	                green: '../assets/about-green.png',
	                blue: '../assets/about-blue.png',
	                pink: '../assets/about-pink.png'
	            },
	            router: '/About'
	        }],
	        modelStyle: '',
	        menuStyle: '',
	        clear: '0',
	        currentIndex: 0,
	        theme: { skin: '' }
	    },
	    onReady: function onReady() {
	        this.theme = this.$app.$def.theme;
	        this.$page.setTitleBar({ backgroundColor: this.theme.color, textColor: '#ffffff' });
	
	        var skin = this.skinIcon[this.theme.skin];
	
	        var arr = this.menuList.map(function (item) {
	            item.selectIcon = skin[item.name];
	            return Object.assign({}, item);
	        });
	        this.menuList = arr;
	        this.$watch('theme.skin', 'switchSkin');
	    },
	    switchSkin: function switchSkin(newSkin, oldSkin) {
	        this.$page.setTitleBar({ backgroundColor: newSkin, textColor: '#ffffff' });
	        console.log(newSkin, oldSkin, 8888);
	        var skin = this.skinIcon[newSkin];
	        var arr = this.menuList.map(function (item) {
	            item.selectIcon = skin[item.name];
	            return Object.assign({}, item);
	        });
	        this.menuList = arr;
	    },
	    showMenu: function showMenu(evt) {
	        this.clear = '750px';
	        this.modelStyle = 'show-model';
	        this.menuStyle = 'show-menu';
	    },
	    close: function close() {
	        this.modelStyle = 'hide-model';
	        this.menuStyle = 'hide-menu';
	        var that = this;
	        setTimeout(function () {
	            that.clear = '0';
	        }, 200);
	    },
	    stop: function stop() {
	        return false;
	    },
	    changeTab: function changeTab(index) {
	        this.currentIndex = index;
	        this.list[index].render = true;
	    },
	    toMovie: function toMovie(params) {
	        console.log('movie', params.detail.id);
	        _system2.default.push({
	            uri: '/Movie',
	            params: { id: params.detail.id }
	        });
	    },
	    toBook: function toBook(params) {
	        console.log('book');
	        _system2.default.push({
	            uri: '/Book',
	            params: { id: params.detail.id }
	        });
	    },
	    toMusic: function toMusic(params) {
	        _system2.default.push({
	            uri: '/Music',
	            params: { id: params.detail.id }
	        });
	    },
	    toPage: function toPage(path) {
	        if (path) {
	            _system2.default.push({
	                uri: path
	            });
	        } else {
	            _system4.default.showToast({
	                message: '暂无该功能'
	            });
	        }
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