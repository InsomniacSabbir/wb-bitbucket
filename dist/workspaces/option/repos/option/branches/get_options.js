!function(e,t){"object"==typeof exports&&"object"==typeof module?module.exports=t():"function"==typeof define&&define.amd?define([],t):"object"==typeof exports?exports.main=t():e.main=t()}(this,(function(){return function(e){var t={};function r(o){if(t[o])return t[o].exports;var n=t[o]={i:o,l:!1,exports:{}};return e[o].call(n.exports,n,n.exports,r),n.l=!0,n.exports}return r.m=e,r.c=t,r.d=function(e,t,o){r.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:o})},r.r=function(e){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},r.t=function(e,t){if(1&t&&(e=r(e)),8&t)return e;if(4&t&&"object"==typeof e&&e&&e.__esModule)return e;var o=Object.create(null);if(r.r(o),Object.defineProperty(o,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var n in e)r.d(o,n,function(t){return e[t]}.bind(null,n));return o},r.n=function(e){var t=e&&e.__esModule?function(){return e.default}:function(){return e};return r.d(t,"a",t),t},r.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},r.p="",r(r.s=14)}({0:function(e,t,r){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.PACKAGE_NAME=t.accessToken=t.apiUrl=void 0,t.apiUrl="https://api.bitbucket.org/2.0/",t.accessToken=VARS&&VARS.BITBUCKET_PERSONAL_TOKEN,t.PACKAGE_NAME="bitbucket"},1:function(e,t,r){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.createPR=t.DeleteWithAuth=t.UpdateWithAuth=t.fetchWithAuth=t.decodeApiResponse=t.getUrl=void 0;var o=r(0);function n(e,r){var n=r?JSON.stringify(r):null,s={Authorization:"Basic "+o.accessToken};n&&(s["content-type"]="application/json");var i=httpPost(t.getUrl(e),n,s),u=t.decodeApiResponse(i).response,c=void 0===u?{}:u;if("error"===c.type)throw notify(c.error.message,"error",3e3),c.error.message;return c.values}t.getUrl=function(e){return o.apiUrl+e},t.decodeApiResponse=function(e){return e.response?{response:JSON.parse(e.response),status:e.status}:{response:{},status:e.status}},t.fetchWithAuth=function(e){var r=httpGet(t.getUrl(e),{Authorization:"Basic "+o.accessToken}),n=t.decodeApiResponse(r).response,s=void 0===n?{}:n;if("error"===s.type)throw s.error.message;return s.values||null},t.UpdateWithAuth=n,t.DeleteWithAuth=function(e){var r={Authorization:"Basic "+o.accessToken},n=httpDelete(t.getUrl(e),null,r),s=t.decodeApiResponse(n).response,i=void 0===s?{}:s;if("error"===i.type)throw notify(i.error.message,"error",3e3),i.error.message;return i},t.createPR=function(e,t){var r={title:prompt("PR title"),source:{branch:{name:e}},destination:{branch:{name:t}}};try{n("repositories/"+options.workspaces.uuid+"/"+options.repos.slug+"/pullrequests/",r),notify("PR created","success",3e3),reIndex([o.PACKAGE_NAME,"workspaces",options.workspaces.name,"repos",options.repos.name,"PRs"])}catch(e){throw e}}},14:function(e,t,r){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var o=r(1),n=null;t.default=function(){return options.workspaces&&options.repos&&(n=o.fetchWithAuth("repositories/"+options.workspaces.uuid+"/"+options.repos.slug+"/refs/branches"))?JSON.stringify({add:n}):{}}}})}));