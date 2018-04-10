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

	__webpack_require__(8)
	__webpack_require__(1)
	var $app_template$ = __webpack_require__(12)
	var $app_style$ = __webpack_require__(13)
	var $app_script$ = __webpack_require__(14)
	
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
/* 12 */
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
	        "title": "图书详情"
	      }
	    },
	    {
	      "type": "div",
	      "attr": {},
	      "classList": [
	        "warp-content"
	      ],
	      "children": [
	        {
	          "type": "div",
	          "attr": {},
	          "children": [
	            {
	              "type": "text",
	              "attr": {
	                "value": function () {return this.detail.title}
	              },
	              "classList": [
	                "title"
	              ],
	              "style": {
	                "color": function () {return this.theme.color}
	              }
	            }
	          ]
	        },
	        {
	          "type": "div",
	          "attr": {},
	          "classList": [
	            "mess-warp"
	          ],
	          "shown": function () {return this.detail.title},
	          "children": [
	            {
	              "type": "div",
	              "attr": {},
	              "classList": [
	                "mess"
	              ],
	              "children": [
	                {
	                  "type": "div",
	                  "attr": {},
	                  "children": [
	                    {
	                      "type": "rate",
	                      "attr": {
	                        "rate": function () {return this.detail.rating&&this.detail.rating.numRaters?this.detail.rating.average:''}
	                      }
	                    },
	                    {
	                      "type": "text",
	                      "attr": {
	                        "value": function () {return (this.detail.rating&&this.detail.rating.numRaters) + '人评价'}
	                      },
	                      "classList": [
	                        "remark"
	                      ]
	                    }
	                  ]
	                },
	                {
	                  "type": "div",
	                  "attr": {},
	                  "classList": [
	                    "move"
	                  ],
	                  "children": [
	                    {
	                      "type": "text",
	                      "attr": {},
	                      "children": [
	                        {
	                          "type": "span",
	                          "attr": {
	                            "value": "作者："
	                          },
	                          "style": {
	                            "color": function () {return this.theme.color}
	                          }
	                        },
	                        {
	                          "type": "span",
	                          "attr": {
	                            "value": function () {return this.detail.author&&this.detail.author.join('/')}
	                          }
	                        }
	                      ]
	                    },
	                    {
	                      "type": "text",
	                      "attr": {},
	                      "children": [
	                        {
	                          "type": "span",
	                          "attr": {
	                            "value": "原名："
	                          },
	                          "style": {
	                            "color": function () {return this.theme.color}
	                          }
	                        },
	                        {
	                          "type": "span",
	                          "attr": {
	                            "value": function () {return this.detail.origin_title}
	                          }
	                        }
	                      ]
	                    },
	                    {
	                      "type": "text",
	                      "attr": {},
	                      "children": [
	                        {
	                          "type": "span",
	                          "attr": {
	                            "value": "译者："
	                          },
	                          "style": {
	                            "color": function () {return this.theme.color}
	                          }
	                        },
	                        {
	                          "type": "span",
	                          "attr": {
	                            "value": function () {return this.detail.translator}
	                          }
	                        }
	                      ]
	                    },
	                    {
	                      "type": "text",
	                      "attr": {},
	                      "children": [
	                        {
	                          "type": "span",
	                          "attr": {
	                            "value": "出版社："
	                          },
	                          "style": {
	                            "color": function () {return this.theme.color}
	                          }
	                        },
	                        {
	                          "type": "span",
	                          "attr": {
	                            "value": function () {return this.detail.publisher}
	                          }
	                        }
	                      ]
	                    },
	                    {
	                      "type": "text",
	                      "attr": {},
	                      "children": [
	                        {
	                          "type": "span",
	                          "attr": {
	                            "value": "出版时间："
	                          },
	                          "style": {
	                            "color": function () {return this.theme.color}
	                          }
	                        },
	                        {
	                          "type": "span",
	                          "attr": {
	                            "value": function () {return this.detail.pubdate}
	                          }
	                        }
	                      ]
	                    },
	                    {
	                      "type": "text",
	                      "attr": {
	                        "value": function () {return (this.detail.pages) + '页 / ' + (this.detail.binding) + ' / ' + (this.detail.price)}
	                      }
	                    }
	                  ]
	                }
	              ]
	            },
	            {
	              "type": "image",
	              "attr": {
	                "src": function () {return this.detail.image}
	              },
	              "classList": [
	                "cover"
	              ]
	            }
	          ]
	        },
	        {
	          "type": "div",
	          "attr": {},
	          "classList": [
	            "line"
	          ],
	          "shown": function () {return this.detail.title}
	        },
	        {
	          "type": "div",
	          "attr": {},
	          "classList": [
	            "e-book"
	          ],
	          "shown": function () {return this.detail.title},
	          "events": {
	            "click": "buy"
	          },
	          "children": [
	            {
	              "type": "text",
	              "attr": {
	                "value": "豆瓣购买"
	              },
	              "style": {
	                "color": function () {return this.theme.color}
	              }
	            },
	            {
	              "type": "text",
	              "attr": {
	                "value": function () {return this.detail.price}
	              },
	              "style": {
	                "color": "#e43937"
	              }
	            }
	          ]
	        },
	        {
	          "type": "div",
	          "attr": {},
	          "classList": [
	            "line-middle"
	          ],
	          "shown": function () {return this.detail.title}
	        },
	        {
	          "type": "div",
	          "attr": {},
	          "classList": [
	            "e-book"
	          ],
	          "shown": function () {return this.detail.title},
	          "children": [
	            {
	              "type": "text",
	              "attr": {
	                "value": "电子书"
	              },
	              "style": {
	                "color": function () {return this.theme.color}
	              }
	            },
	            {
	              "type": "text",
	              "attr": {
	                "value": function () {return this.detail.ebook_price?this.detail.ebook_price+'元':'暂无价格'}
	              },
	              "style": {
	                "color": "#e43937"
	              }
	            }
	          ]
	        },
	        {
	          "type": "div",
	          "attr": {},
	          "classList": [
	            "line"
	          ],
	          "shown": function () {return this.detail.title}
	        },
	        {
	          "type": "text",
	          "attr": {
	            "value": "内容简介"
	          },
	          "classList": [
	            "introduct"
	          ],
	          "shown": function () {return this.detail.title},
	          "style": {
	            "color": function () {return this.theme.color}
	          }
	        },
	        {
	          "type": "text",
	          "attr": {
	            "value": function () {return this.detail.summary}
	          },
	          "classList": [
	            "introduct-detail"
	          ]
	        },
	        {
	          "type": "text",
	          "attr": {
	            "value": "作者简介"
	          },
	          "classList": [
	            "actor"
	          ],
	          "shown": function () {return this.detail.title},
	          "style": {
	            "color": function () {return this.theme.color}
	          }
	        },
	        {
	          "type": "text",
	          "attr": {
	            "value": function () {return this.detail.author_intro}
	          }
	        },
	        {
	          "type": "text",
	          "attr": {
	            "value": "相关标签"
	          },
	          "classList": [
	            "introduct"
	          ],
	          "shown": function () {return this.detail.title},
	          "style": {
	            "color": function () {return this.theme.color}
	          }
	        },
	        {
	          "type": "div",
	          "attr": {},
	          "classList": [
	            "tag-warp"
	          ],
	          "children": [
	            {
	              "type": "div",
	              "attr": {},
	              "classList": [
	                "tag-item"
	              ],
	              "repeat": function () {return this.detail.tags},
	              "children": [
	                {
	                  "type": "div",
	                  "attr": {},
	                  "classList": [
	                    "tag"
	                  ],
	                  "children": [
	                    {
	                      "type": "text",
	                      "attr": {
	                        "value": function () {return this.$item.name}
	                      }
	                    }
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
/* 13 */
/***/ function(module, exports) {

	module.exports = {
	  ".warp": {
	    "display": "flex",
	    "flexDirection": "column",
	    "backgroundColor": "#ffffff"
	  },
	  ".warp-content": {
	    "display": "flex",
	    "flexDirection": "column",
	    "paddingTop": "20px",
	    "paddingRight": "30px",
	    "paddingBottom": "20px",
	    "paddingLeft": "30px"
	  },
	  ".title": {
	    "fontSize": "42px",
	    "marginBottom": "20px"
	  },
	  ".remark": {
	    "fontSize": "24px",
	    "marginLeft": "15px",
	    "color": "#aaaaaa"
	  },
	  ".cover": {
	    "width": "210px",
	    "height": "315px",
	    "marginLeft": "30px"
	  },
	  ".mess-warp": {
	    "display": "flex",
	    "marginBottom": "40px"
	  },
	  ".mess": {
	    "flex": 1,
	    "display": "flex",
	    "flexDirection": "column"
	  },
	  ".mess-word": {
	    "fontSize": "26px",
	    "lineHeight": "40px",
	    "marginTop": "24px"
	  },
	  ".introduct": {
	    "color": "#aaaaaa",
	    "fontSize": "30px",
	    "marginTop": "30px",
	    "marginRight": "0px",
	    "marginBottom": "20px",
	    "marginLeft": "0px"
	  },
	  ".introduct-detail": {
	    "lineHeight": "42px"
	  },
	  ".tag": {
	    "paddingTop": "5px",
	    "paddingRight": "20px",
	    "paddingBottom": "5px",
	    "paddingLeft": "20px",
	    "borderRadius": "30px",
	    "backgroundColor": "#f5f5f5",
	    "color": "#494949"
	  },
	  ".tag-warp": {
	    "display": "flex",
	    "flexWrap": "wrap"
	  },
	  ".tag-item": {
	    "paddingTop": "10px",
	    "paddingRight": "5px",
	    "paddingBottom": "10px",
	    "paddingLeft": "5px"
	  },
	  ".move": {
	    "display": "flex",
	    "flexDirection": "column",
	    "fontSize": "24px",
	    "marginTop": "30px"
	  },
	  ".actor": {
	    "color": "#aaaaaa",
	    "marginTop": "30px",
	    "marginRight": "0px",
	    "marginBottom": "10px",
	    "marginLeft": "0px"
	  },
	  ".su-title": {
	    "color": "#999999",
	    "marginTop": "20px"
	  },
	  ".e-book": {
	    "height": "100px",
	    "display": "flex",
	    "alignItems": "center",
	    "justifyContent": "space-between"
	  },
	  ".line": {
	    "width": "100%",
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
	  ".line-middle": {
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
	  }
	}

/***/ },
/* 14 */
/***/ function(module, exports) {

	module.exports = function(module, exports, $app_require$){'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	
	var _typeof = typeof Symbol === "function" && typeof Symbol.iterator === "symbol" ? function (obj) { return typeof obj; } : function (obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; };
	
	var _system = $app_require$('@app-module/system.webview');
	
	var _system2 = _interopRequireDefault(_system);
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
	
	function _asyncToGenerator(fn) { return function () { var gen = fn.apply(this, arguments); return new Promise(function (resolve, reject) { function step(key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { return Promise.resolve(value).then(function (value) { step("next", value); }, function (err) { step("throw", err); }); } } return step("next"); }); }; }
	
	exports.default = {
	  public: {
	    detail: {},
	    id: '',
	    theme: { color: '' }
	  },
	  onReady: function onReady() {
	    this.theme = this.$app.$def.theme;
	    this.$page.setTitleBar({ backgroundColor: this.theme.color, textColor: '#ffffff' });
	    this.getData();
	  },
	  getData: function () {
	    var _ref = _asyncToGenerator(regeneratorRuntime.mark(function _callee() {
	      var detail, data;
	      return regeneratorRuntime.wrap(function _callee$(_context) {
	        while (1) {
	          switch (_context.prev = _context.next) {
	            case 0:
	              _context.next = 2;
	              return network.get('/v2/book/' + this.id);
	
	            case 2:
	              detail = _context.sent;
	              data = JSON.parse(detail);
	
	              this.detail = data;
	
	            case 5:
	            case 'end':
	              return _context.stop();
	          }
	        }
	      }, _callee, this);
	    }));
	
	    function getData() {
	      return _ref.apply(this, arguments);
	    }
	
	    return getData;
	  }(),
	  buy: function buy() {
	    _system2.default.loadUrl({
	      url: 'https://m.douban.com/book/subject/' + this.id
	    });
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