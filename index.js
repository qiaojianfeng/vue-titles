/*
 * @Author: qiaojianfeng
 * @Date: 2018-05-12 12:40:06
 * @Last Modified by: qiaojianfeng
 * @Last Modified time: 2019-07-24 16:16:47
 */

(function(window) {
  function install(Vue) {
    var setMyTitle = function(title) {
      if (title === void 0 || window.document.title === title) return;
      window.document.title = title;
      var ua = navigator.userAgent.toLowerCase();
      if (/iphone|ipad|ipod/.test(ua)) {
        var iframe = document.createElement('iframe');
        iframe.style.display = 'none';
        var iframeCallback = function() {
          setTimeout(function() {
            iframe.removeEventListener('load', iframeCallback);
            document.body.removeChild(iframe);
          }, 0);
        };
        iframe.addEventListener('load', iframeCallback);
        document.body.appendChild(iframe);
      }
    };
    Vue.directive('title', function(el, binding) {
      setMyTitle(binding.value);
    });
    Vue.prototype.$setTitle = function(title) {
      setMyTitle(title);
    };
  }
  if (typeof module !== 'undefined' && typeof exports === 'object') {
    module.exports = install;
  } else if (typeof define === 'function' && (define.amd || define.cmd)) {
    define(function() {
      return install;
    });
  } else if (window.Vue) {
    Vue.use(install);
  }
})(window);
