"use strict";

/**
 *判断字符串中括号是否匹配
 *
 * @param {string} str 输入的源字符串
 * @returns boolean
 */
function isBalanced(str) {
  var originStr = str; //转存参数

  var resultArr = []; //结果数组

  if (originStr.length == 0) return true;

  for (var i = 0, len = originStr.length; i < len; i++) {
    if (originStr[i] === '{') {
      resultArr.push(originStr[i]);
    } else if (originStr[i] === '}') {
      var temp = resultArr.pop();

      if (temp !== '{') {
        return false;
        break;
      }
    }

    if (originStr[i] === '[') {
      resultArr.push(originStr[i]);
    } else if (originStr[i] === ']') {
      var _temp = resultArr.pop();

      if (_temp !== '[') {
        return false;
        break;
      }
    }

    if (originStr[i] === '(') {
      resultArr.push(originStr[i]);
    } else if (originStr[i] === ')') {
      var _temp2 = resultArr.pop();

      if (_temp2 !== '(') {
        return false;
        break;
      }
    }
  }

  return resultArr.length === 0 ? true : false;
}

var expression = "{()}{}[]"; // console.log(isBalanced(expression));
"use strict";

var xhr;

if (window.XMLHttpRequest) {
  xhr = new XMLHttpRequest();
} else {
  xhr = new ActiveXObject('Microsoft.XMLHTTP');
}

xhr.onreadystatechange = function () {
  if (xhr.readyState === 4 && xhr.status === 200) {
    console.log(xhr.responseText);
  } else {
    console.log(xhr.readyState);
  }
};

var url = 'http://test.domain.com'; // xhr.open('GET',url,true);
// xhr.send();
"use strict";

!function () {
  function o(w, v, i) {
    return w.getAttribute(v) || i;
  }

  function j(i) {
    return document.getElementsByTagName(i);
  }

  function l() {
    var i = j("script"),
        w = i.length,
        v = i[w - 1];
    return {
      l: w,
      z: o(v, "zIndex", -1),
      o: o(v, "opacity", 0.5),
      c: o(v, "color", "0,0,0"),
      n: o(v, "count", 99)
    };
  }

  function k() {
    r = u.width = window.innerWidth || document.documentElement.clientWidth || document.body.clientWidth, n = u.height = window.innerHeight || document.documentElement.clientHeight || document.body.clientHeight;
  }

  function b() {
    e.clearRect(0, 0, r, n);
    var w = [f].concat(t);
    var x, v, A, B, z, y;
    t.forEach(function (i) {
      i.x += i.xa, i.y += i.ya, i.xa *= i.x > r || i.x < 0 ? -1 : 1, i.ya *= i.y > n || i.y < 0 ? -1 : 1, e.fillRect(i.x - 0.5, i.y - 0.5, 1, 1);

      for (v = 0; v < w.length; v++) {
        x = w[v];

        if (i !== x && null !== x.x && null !== x.y) {
          B = i.x - x.x, z = i.y - x.y, y = B * B + z * z;
          y < x.max && (x === f && y >= x.max / 2 && (i.x -= 0.03 * B, i.y -= 0.03 * z), A = (x.max - y) / x.max, e.beginPath(), e.lineWidth = A / 2, e.strokeStyle = "rgba(" + s.c + "," + (A + 0.2) + ")", e.moveTo(i.x, i.y), e.lineTo(x.x, x.y), e.stroke());
        }
      }

      w.splice(w.indexOf(i), 1);
    }), m(b);
  }

  var u = document.createElement("canvas"),
      s = l(),
      c = "c_n" + s.l,
      e = u.getContext("2d"),
      r,
      n,
      m = window.requestAnimationFrame || window.webkitRequestAnimationFrame || window.mozRequestAnimationFrame || window.oRequestAnimationFrame || window.msRequestAnimationFrame || function (i) {
    window.setTimeout(i, 1000 / 45);
  },
      a = Math.random,
      f = {
    x: null,
    y: null,
    max: 20000
  };

  u.id = c;
  u.style.cssText = "position:fixed;top:0;left:0;z-index:" + s.z + ";opacity:" + s.o;
  j("body")[0].appendChild(u);
  k(), window.onresize = k;
  window.onmousemove = function (i) {
    i = i || window.event, f.x = i.clientX, f.y = i.clientY;
  }, window.onmouseout = function () {
    f.x = null, f.y = null;
  };

  for (var t = [], p = 0; s.n > p; p++) {
    var h = a() * r,
        g = a() * n,
        q = 2 * a() - 1,
        d = 2 * a() - 1;
    t.push({
      x: h,
      y: g,
      xa: q,
      ya: d,
      max: 6000
    });
  }

  setTimeout(function () {
    b();
  }, 100);
}();
"use strict";

function log(params) {
  console.log(params);
}

window.testJsonp = function (data) {
  console.log('调用了');
  console.log(data);
}; // var constru = new Date();
// console.log(Object.prototype);
// console.log(Object.prototype.__proto__);
// console.log(Function.prototype);
// console.log(Function.__proto__);
// console.log(Function.prototype.__proto__);
// var num = 666 + 2;
// console.log(num.__proto__);
// console.log(Function.prototype === Function.__proto__);
// var foo = function testPrototype() {
//     console.log(...arguments);
// }
// console.log(foo.__proto__);
// console.log(foo.prototype);
// console.log(foo('ljgl', 666, null));
// var bb = {
//     name: 'jiangfeng',
//     age: 26
// };
// // console.log(bb.prototype);
// var cc = {
// 	name: 'jiangfeng',
// 	age: 26
// };
// log(bb === cc); // true
// https://www.jianshu.com/u/6d92660a8cea?name=jiangfeng&age=18&sex=male


function test(url, key) {
  var reg = new RegExp("(^|&)" + key + "=([^&]*)(&|$)");
  var paramStr = url.substr(url.indexOf('?') + 1);
  var r = paramStr.match(reg);

  if (r != null) {
    return unescape(r[2]);
  }

  return null;
}

console.log(test('https://www.jianshu.com/u/6d92660a8cea?name=peakj&age=18&sex=male', 'name'));
//# sourceMappingURL=all.js.map
