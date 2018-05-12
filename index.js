/*
 * @Author: qiaojianfeng 
 * @Date: 2018-05-12 12:40:06 
 * @Last Modified by: qiaojianfeng
 * @Last Modified time: 2018-05-12 14:48:02
 * 参考自 v-wechat-title 去掉favicon，对于qun项目感觉有些鸡肋还是单纯些好😄
 */

(function(window) {
  function install(Vue) {
    var setTitle = function(title) {
      if (title === undefined || window.document.title === title) {
        return;
      }
      document.title = title;
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
      setTitle(binding.value);
    });
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
})();
