// npm moduleで配布されていないライブラリの場合は、requireでバンドル化
// jQueryはnpmではいふされているが、コード参考用
window.$ = window.jQuery = require("./libs/jquery-3.1.0.min.js");
window.$.easeing = require("./libs/jquery.easing.1.3.min.js");


console.log(jQuery.easing);
