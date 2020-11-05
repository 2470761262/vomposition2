!(function (t, e) {
  if ("object" == typeof exports && "object" == typeof module)
    module.exports = e();
  else if ("function" == typeof define && define.amd) define([], e);
  else {
    var o = e();
    for (var n in o) ("object" == typeof exports ? exports : t)[n] = o[n];
  }
})(window, function () {
  return (function (t) {
    var e = {};
    function o(n) {
      if (e[n]) return e[n].exports;
      var r = (e[n] = { i: n, l: !1, exports: {} });
      return t[n].call(r.exports, r, r.exports, o), (r.l = !0), r.exports;
    }
    return (
      (o.m = t),
      (o.c = e),
      (o.d = function (t, e, n) {
        o.o(t, e) || Object.defineProperty(t, e, { enumerable: !0, get: n });
      }),
      (o.r = function (t) {
        "undefined" != typeof Symbol &&
          Symbol.toStringTag &&
          Object.defineProperty(t, Symbol.toStringTag, { value: "Module" }),
          Object.defineProperty(t, "__esModule", { value: !0 });
      }),
      (o.t = function (t, e) {
        if ((1 & e && (t = o(t)), 8 & e)) return t;
        if (4 & e && "object" == typeof t && t && t.__esModule) return t;
        var n = Object.create(null);
        if (
          (o.r(n),
          Object.defineProperty(n, "default", { enumerable: !0, value: t }),
          2 & e && "string" != typeof t)
        )
          for (var r in t)
            o.d(
              n,
              r,
              function (e) {
                return t[e];
              }.bind(null, r)
            );
        return n;
      }),
      (o.n = function (t) {
        var e =
          t && t.__esModule
            ? function () {
                return t.default;
              }
            : function () {
                return t;
              };
        return o.d(e, "a", e), e;
      }),
      (o.o = function (t, e) {
        return Object.prototype.hasOwnProperty.call(t, e);
      }),
      (o.p = ""),
      o((o.s = 0))
    );
  })([
    function (t, e, o) {
      "use strict";
      Object.defineProperty(e, "__esModule", { value: !0 }),
        (e.V2Init = e.Vcomposition2 = void 0);
      e.Vcomposition2 = class {
        constructor(t) {
          (this.root = null), (this.vm = t), (this.root = this.vm.root);
        }
        onCreate(t) {
          this.vm.$on("hook:created", () => {
            const e = t();
            e && Object.assign(this.vm, e);
          });
        }
        onMounted(t) {
          this.vm.$on("hook:mounted", () => {
            const e = t();
            e && Object.assign(this.vm, e);
          });
        }
        onUnMounted(t) {
          this.vm.$on("hook:beforeDestroy", t);
        }
        onDestroyed(t) {
          this.vm.$on("hook:destroyed", t);
        }
        onWatch(t, e, o) {
          return this.vm.$watch("root." + t, e, o);
        }
        onComputed(t, e) {
          this.vm.$watch(
            e,
            function (e) {
              this.$set(this.cd, t, e);
            },
            { deep: !0, immediate: !0 }
          );
        }
        ref(t, e) {
          this.vm.$set(this.vm.root, t, e);
        }
      };
      e.V2Init = (t) => (
        (t.data = function () {
          return { root: {}, cd: {} };
        }),
        t
      );
    },
  ]);
});
