;
(self.AMP = self.AMP || []).push({
    m: 0,
    v: "2401262004000",
    n: "amp-sidebar",
    ev: "0.1",
    l: !0,
    f: function(t, i) {
        ! function() {
            function i(t) {
                if (void 0 === t)
                    throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
                return t
            }

            function n(t, i) {
                return (n = Object.setPrototypeOf || function(t, i) {
                    return t.__proto__ = i,
                        t
                })(t, i)
            }

            function r(t, i) {
                if ("function" != typeof i && null !== i)
                    throw new TypeError("Super expression must either be null or a function");
                t.prototype = Object.create(i && i.prototype, {
                        constructor: {
                            value: t,
                            writable: !0,
                            configurable: !0
                        }
                    }),
                    i && n(t, i)
            }

            function s(t) {
                return (s = Object.setPrototypeOf ? Object.getPrototypeOf : function(t) {
                    return t.__proto__ || Object.getPrototypeOf(t)
                })(t)
            }

            function e(t) {
                return (e = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function(t) {
                        return typeof t
                    } :
                    function(t) {
                        return t && "function" == typeof Symbol && t.constructor === Symbol && t !== Symbol.prototype ? "symbol" : typeof t
                    }
                )(t)
            }

            function o(t, n) {
                if (n && ("object" === e(n) || "function" == typeof n))
                    return n;
                if (void 0 !== n)
                    throw new TypeError("Derived constructors may only return object or undefined");
                return i(t)
            }

            function a(t) {
                var i = function() {
                    if ("undefined" == typeof Reflect || !Reflect.construct)
                        return !1;
                    if (Reflect.construct.sham)
                        return !1;
                    if ("function" == typeof Proxy)
                        return !0;
                    try {
                        return Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], (function() {}))), !0
                    } catch (t) {
                        return !1
                    }
                }();
                return function() {
                    var n, r = s(t);
                    if (i) {
                        var e = s(this).constructor;
                        n = Reflect.construct(r, arguments, e)
                    } else
                        n = r.apply(this, arguments);
                    return o(this, n)
                }
            }

            function h(t) {
                return t ? Array.prototype.slice.call(t) : []
            }
            var u = Array.isArray;

            function f(t, i) {
                (null == i || i > t.length) && (i = t.length);
                for (var n = 0, r = new Array(i); n < i; n++)
                    r[n] = t[n];
                return r
            }

            function c(t, i) {
                var n = "undefined" != typeof Symbol && t[Symbol.iterator] || t["@@iterator"];
                if (n)
                    return (n = n.call(t)).next.bind(n);
                if (Array.isArray(t) || (n = function(t, i) {
                        if (t) {
                            if ("string" == typeof t)
                                return f(t, i);
                            var n = Object.prototype.toString.call(t).slice(8, -1);
                            return "Object" === n && t.constructor && (n = t.constructor.name),
                                "Map" === n || "Set" === n ? Array.from(t) : "Arguments" === n || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n) ? f(t, i) : void 0
                        }
                    }(t)) || i && t && "number" == typeof t.length) {
                    n && (t = n);
                    var r = 0;
                    return function() {
                        return r >= t.length ? {
                            done: !0
                        } : {
                            done: !1,
                            value: t[r++]
                        }
                    }
                }
                throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")
            }
            var l, v, d = Object.prototype;

            function m(t) {
                return 1 == (null == t ? void 0 : t.nodeType)
            }

            function p(t, i, n, r, s, e, o, a, h, u, f) {
                return t
            }

            function b(t) {
                return (t.ownerDocument || t).defaultView
            }

            function y(t, i) {
                return t.replace(/^|,/g, "$&".concat(i, " "))
            }

            function w(t, i) {
                return t.closest ? t.closest(i) : function(t, i, n) {
                    var r;
                    for (r = t; r && void 0 !== r; r = r.parentElement)
                        if (i(r))
                            return r;
                    return null
                }(t, (function(t) {
                    return function(t, i) {
                        var n = t.matches || t.webkitMatchesSelector || t.mozMatchesSelector || t.msMatchesSelector || t.oMatchesSelector;
                        return !!n && n.call(t, i)
                    }(t, i)
                }))
            }

            function g(t) {
                return function(t, i) {
                    for (var n = [], r = t.firstElementChild; r; r = r.nextElementSibling)
                        void 0,
                        o = void 0,
                        "string" == typeof(e = s = r) ? o = e : m(e) && (o = e.tagName), !(o && o.toLowerCase().startsWith("i-") || s.nodeType === Node.ELEMENT_NODE && (s.hasAttribute("placeholder") || s.hasAttribute("fallback") || s.hasAttribute("overflow"))) && n.push(r);
                    var s, e, o;
                    return n
                }(t)
            }

            function k(t) {
                var i = t.isConnected;
                if (void 0 !== i)
                    return i;
                for (var n = t;
                    (n = x(n)).host;)
                    n = n.host;
                return n.nodeType === Node.DOCUMENT_NODE
            }

            function x(t) {
                if (Node.prototype.getRootNode)
                    return t.getRootNode();
                var i, n;
                for (i = t; i.parentNode && (!(n = i) || "I-AMPHTML-SHADOW-ROOT" != n.tagName && (11 != n.nodeType || "[object ShadowRoot]" !== Object.prototype.toString.call(n))); i = i.parentNode)
                ;
                return i
            }

            function M(t) {
                try {
                    t.focus()
                } catch (t) {}
            }

            function A(t) {
                var i = Object.getOwnPropertyDescriptor(t, "message");
                if (null != i && i.writable)
                    return t;
                var n = t.message,
                    r = t.stack,
                    s = new Error(n);
                for (var e in t)
                    s[e] = t[e];
                return s.stack = r,
                    s
            }

            function O(t) {
                for (var i, n = null, r = "", s = c(arguments, !0); !(i = s()).done;) {
                    var e = i.value;
                    e instanceof Error && !n ? n = A(e) : (r && (r += " "),
                        r += e)
                }
                return n ? r && (n.message = r + ": " + n.message) : n = new Error(r),
                    n
            }

            function E(t) {
                var i, n;
                null === (i = (n = self).__AMP_REPORT_ERROR) || void 0 === i || i.call(n, t)
            }

            function S(t) {
                var i = O.apply(null, arguments);
                setTimeout((function() {
                    throw E(i),
                        i
                }))
            }

            function j(t) {
                try {
                    for (var i = arguments.length, n = new Array(i > 1 ? i - 1 : 0), r = 1; r < i; r++)
                        n[r - 1] = arguments[r];
                    return t.apply(null, n)
                } catch (t) {
                    S(t)
                }
            }
            d.hasOwnProperty,
                d.toString;
            var D = ["Webkit", "webkit", "Moz", "moz", "ms", "O", "o"],
                X = {
                    "getPropertyPriority": function() {
                        return ""
                    },
                    "getPropertyValue": function() {
                        return ""
                    }
                };

            function z(t, i, n, r, s) {
                var e = function(t, i, n) {
                    if (i.startsWith("--"))
                        return i;
                    v || (v = Object.create(null));
                    var r = v[i];
                    if (!r || n) {
                        if (r = i,
                            void 0 === t[i]) {
                            var s = function(t) {
                                    return t.charAt(0).toUpperCase() + t.slice(1)
                                }(i),
                                e = function(t, i) {
                                    for (var n = 0; n < D.length; n++) {
                                        var r = D[n] + i;
                                        if (void 0 !== t[r])
                                            return r
                                    }
                                    return ""
                                }(t, s);
                            void 0 !== t[e] && (r = e)
                        }
                        n || (v[i] = r)
                    }
                    return r
                }(t.style, i, s);
                if (e) {
                    var o, a = r ? n + r : n;
                    t.style.setProperty((o = e.replace(/[A-Z]/g, (function(t) {
                            return "-" + t.toLowerCase()
                        })),
                        D.some((function(t) {
                            return o.startsWith(t + "-")
                        })) ? "-".concat(o) : o), a)
                }
            }

            function R(t, i) {
                for (var n in i)
                    z(t, n, i[n])
            }

            function P(t, i) {
                void 0 === i && (i = t.hasAttribute("hidden")),
                    i ? t.removeAttribute("hidden") : t.setAttribute("hidden", "")
            }

            function _(t, i) {
                return t.getComputedStyle(i) || X
            }
            var I = /vertical/,
                T = new WeakMap,
                C = new WeakMap,
                W = new WeakMap;

            function B(t) {
                var i = T.get(t);
                return i || (i = new t.ResizeObserver(L),
                        T.set(t, i)),
                    i
            }

            function L(t) {
                for (var i = new Set, n = t.length - 1; n >= 0; n--) {
                    var r = t[n],
                        s = r.target;
                    if (!i.has(s)) {
                        i.add(s);
                        var e = C.get(s);
                        if (e) {
                            W.set(s, r);
                            for (var o = 0; o < e.length; o++) {
                                var a = e[o],
                                    h = a.callback;
                                N(a.type, h, r)
                            }
                        }
                    }
                }
            }

            function N(t, i, n) {
                if (0 == t) {
                    var r = n.contentRect,
                        s = r.height;
                    j(i, {
                        width: r.width,
                        height: s
                    })
                } else if (1 == t) {
                    var e, o = n.borderBoxSize;
                    if (o)
                        e = o.length > 0 ? o[0] : {
                            inlineSize: 0,
                            blockSize: 0
                        };
                    else {
                        var a, h, u = n.target,
                            f = b(u),
                            c = I.test(_(f, u).writingMode),
                            l = u,
                            v = l.offsetHeight,
                            d = l.offsetWidth;
                        c ? (h = d,
                                a = v) : (a = d,
                                h = v),
                            e = {
                                inlineSize: a,
                                blockSize: h
                            }
                    }
                    j(i, e)
                }
            }
            var Y = [],
                V = "__AMP_MODAL_SAVED_TAB_INDEX";

            function q(t) {
                for (var i = [], n = t; n; n = n.parentNode || n.host)
                    i.push(n);
                return i
            }

            function F(t, i, n) {
                null === n || null == n ? t.removeAttribute(i) : t.setAttribute(i, n)
            }
            var H = "i-amphtml-element",
                U = function(t) {
                    return t.unmount()
                };

            function $(t, i, n, r) {
                for (var s, e = u(s = t) ? s : [s], o = 0; o < e.length; o++)
                    G(e[o], i, n, r)
            }

            function G(t, i, n, r) {
                if (i && t.classList.contains(H)) {
                    var s = t;
                    if (j(r, s), !n) {
                        var e = s.getPlaceholder();
                        return void(e && G(e, !0, !1, r))
                    }
                }
                for (var o = t.getElementsByClassName(H), a = null, h = 0; h < o.length; h++) {
                    var u = o[h];
                    if (n)
                        j(r, u);
                    else {
                        a = a || [];
                        for (var f = !1, c = 0; c < a.length; c++)
                            if (a[c].contains(u)) {
                                f = !0;
                                break
                            }
                        f || (a.push(u),
                            j(r, u))
                    }
                }
            }
            self.__AMP_LOG = self.__AMP_LOG || {
                user: null,
                dev: null,
                userForEmbed: null
            };
            var Z, J = self.__AMP_LOG;

            function K(t) {
                return J.user || (J.user = Q()),
                    function(t, i) {
                        return i && i.ownerDocument.defaultView != t
                    }(J.user.win, t) ? J.userForEmbed || (J.userForEmbed = Q()) : J.user
            }

            function Q(t) {
                return function(t, i) {
                    throw new Error("failed to call initLogConstructor")
                }()
            }

            function tt(t, i, n, r, s, e, o, a, h, u, f) {
                return t
            }

            function it(t, i) {
                return ot(t = function(t) {
                    return t.__AMP_TOP || (t.__AMP_TOP = t)
                }(t), i)
            }

            function nt(t, i) {
                return ot(et(st(t)), i)
            }

            function rt(t, i) {
                var n = et(st(t));
                return at(n, i) ? ot(n, i) : null
            }

            function st(t) {
                return t.nodeType ? (i = b(t),
                    it(i, "ampdoc")).getAmpDoc(t) : t;
                var i
            }

            function et(t) {
                var i = st(t);
                return i.isSingleDoc() ? i.win : i
            }

            function ot(t, i) {
                tt(at(t, i));
                var n = function(t) {
                    var i = t.__AMP_SERVICES;
                    return i || (i = t.__AMP_SERVICES = {}),
                        i
                }(t)[i];
                return n.obj || (tt(n.ctor),
                        tt(n.context),
                        n.obj = new n.ctor(n.context),
                        tt(n.obj),
                        n.context = null,
                        n.resolve && n.resolve(n.obj)),
                    n.obj
            }

            function at(t, i) {
                var n = t.__AMP_SERVICES && t.__AMP_SERVICES[i];
                return !(!n || !n.ctor)
            }
            var ht, ut = function(t) {
                    return nt(t, "owners")
                },
                ft = function(t) {
                    return ot(t, "timer")
                };

            function ct(t) {
                if (void 0 !== ht)
                    return ht;
                ht = !1;
                try {
                    var i = {
                        get passive() {
                            return ht = !0, !1
                        }
                    };
                    t.addEventListener("test-options", null, i),
                        t.removeEventListener("test-options", null, i)
                } catch (t) {}
                return ht
            }

            function lt(t, i) {
                var n, r = function(t, i) {
                    if (void 0 !== l ? l : l = function(t) {
                            try {
                                var i = t.ownerDocument,
                                    n = i.createElement("div"),
                                    r = i.createElement("div");
                                return n.appendChild(r),
                                    n.querySelector(":scope div") === r
                            } catch (t) {
                                return !1
                            }
                        }(t))
                        return t.querySelector(y(i, ":scope"));
                    var n = function(t, i) {
                        var n = t.classList,
                            r = "i-amphtml-scoped";
                        n.add(r);
                        var s = y(":not([toolbar]) [autoscroll]", ".".concat(r)),
                            e = t.querySelectorAll(s);
                        return n.remove(r),
                            e
                    }(t)[0];
                    return void 0 === n ? null : n
                }(i, ":not([toolbar]) [autoscroll]");
                if (r) {
                    var s = _(t.win, i)["overflow-y"];
                    "scroll" == s || "auto" == s ? (n = t,
                        nt(n, "viewport")).animateScrollWithinParent(r, i, "center", 0) : K().error("AMP-SIDEBAR", "for 'autoscroll', 'nav [toolbar]' element must be set to overflow\n        'scroll' or 'auto' for 'autoscroll' to work.")
                }
            }

            function vt(t, i) {
                var n = ft(t);
                return n.promise(1).then((function() {
                    return n.promise(i)
                }))
            }
            var dt = function() {
                    function t() {
                        this.Xn = null
                    }
                    var i = t.prototype;
                    return i.add = function(t) {
                            var i = this;
                            return this.Xn || (this.Xn = []),
                                this.Xn.push(t),
                                function() {
                                    i.remove(t)
                                }
                        },
                        i.remove = function(t) {
                            var i, n, r;
                            this.Xn && (n = t, -1 != (r = (i = this.Xn).indexOf(n)) && i.splice(r, 1))
                        },
                        i.removeAll = function() {
                            this.Xn && (this.Xn.length = 0)
                        },
                        i.fire = function(t) {
                            if (this.Xn)
                                for (var i, n = c(this.Xn.slice(), !0); !(i = n()).done;)
                                    (0,
                                        i.value)(t)
                        },
                        i.getHandlerCount = function() {
                            var t, i;
                            return null !== (t = null === (i = this.Xn) || void 0 === i ? void 0 : i.length) && void 0 !== t ? t : 0
                        },
                        t
                }(),
                mt = function() {
                    function t(t, i, n) {
                        var r = this;
                        this.xs = ft(t),
                            this.Es = i,
                            this.Os = n || 0,
                            this.Ts = -1,
                            this.Ps = 0,
                            this.Is = !1,
                            this.Ss = function() {
                                r.Ms()
                            }
                    }
                    var i = t.prototype;
                    return i.isPending = function() {
                            return -1 != this.Ts
                        },
                        i.schedule = function(t) {
                            var i = t || this.Os;
                            this.Is && i < 10 && (i = 10);
                            var n = Date.now() + i;
                            return (!this.isPending() || n - this.Ps < -10) && (this.cancel(),
                                this.Ps = n,
                                this.Ts = this.xs.delay(this.Ss, i), !0)
                        },
                        i.Ms = function() {
                            this.Ts = -1,
                                this.Ps = 0,
                                this.Is = !0,
                                this.Es(),
                                this.Is = !1
                        },
                        i.cancel = function() {
                            this.isPending() && (this.xs.cancel(this.Ts),
                                this.Ts = -1)
                        },
                        t
                }(),
                pt = "__AMP_Gestures",
                bt = function(t, i, n, r) {
                    this.type = t,
                        this.data = i,
                        this.time = n,
                        this.event = r
                },
                yt = function() {
                    function t(t) {
                        var i = arguments.length > 1 && void 0 !== arguments[1] && arguments[1],
                            n = arguments.length > 2 && void 0 !== arguments[2] && arguments[2];
                        this.tp = t,
                            this._I = [],
                            this.Bd = [],
                            this.Vi = [],
                            this.MI = [],
                            this.II = null;
                        var r = t.ownerDocument.defaultView,
                            s = ct(r);
                        this.NI = i || s,
                            this.zI = n,
                            this.RI = !1,
                            this.Ms = new mt(b(t), this.xv.bind(this)),
                            this.jI = new dt,
                            this.CI = Object.create(null),
                            this.DI = this.Wp.bind(this),
                            this.LI = this.tm.bind(this),
                            this.UI = this.Qp.bind(this),
                            this.YI = this.Km.bind(this),
                            this.tp.addEventListener("touchstart", this.DI, !!s && {
                                passive: !0
                            }),
                            this.tp.addEventListener("touchend", this.LI),
                            this.tp.addEventListener("touchmove", this.UI, !!s && {
                                passive: !0
                            }),
                            this.tp.addEventListener("touchcancel", this.YI),
                            this.HI = !1
                    }
                    t.get = function(i) {
                        var n = arguments.length > 1 && void 0 !== arguments[1] && arguments[1],
                            r = arguments.length > 2 && void 0 !== arguments[2] && arguments[2],
                            s = i[pt];
                        return s || (s = new t(i, n, r),
                                i[pt] = s),
                            s
                    };
                    var i = t.prototype;
                    return i.cleanup = function() {
                            this.tp.removeEventListener("touchstart", this.DI),
                                this.tp.removeEventListener("touchend", this.LI),
                                this.tp.removeEventListener("touchmove", this.UI),
                                this.tp.removeEventListener("touchcancel", this.YI),
                                delete this.tp[pt],
                                this.Ms.cancel()
                        },
                        i.onGesture = function(t, i) {
                            var n = new t(this),
                                r = n.getType(),
                                s = this.CI[r];
                            return s || (this._I.push(n),
                                    s = new dt,
                                    this.CI[r] = s),
                                s.add(i)
                        },
                        i.removeGesture = function(t) {
                            var i = new t(this).getType(),
                                n = this.CI[i];
                            if (n) {
                                n.removeAll();
                                var r = function(t, n) {
                                    for (var r = 0; r < t.length; r++)
                                        if (t[r].getType() == i)
                                            return r;
                                    return -1
                                }(this._I);
                                return !(r < 0 || (this._I.splice(r, 1),
                                    this.Vi.splice(r, 1),
                                    this.MI.splice(r, 1),
                                    this.Bd.splice(r, 1),
                                    delete this.CI[i],
                                    0))
                            }
                            return !1
                        },
                        i.onPointerDown = function(t) {
                            return this.jI.add(t)
                        },
                        i.Wp = function(t) {
                            var i = Date.now();
                            this.RI = !1,
                                this.jI.fire(t);
                            for (var n = 0; n < this._I.length; n++)
                                this.Vi[n] || (this.MI[n] && this.MI[n] < i && this.Qm(n),
                                    this._I[n].onTouchStart(t) && this.tg(n));
                            this.VI(t)
                        },
                        i.Qp = function(t) {
                            for (var i = Date.now(), n = 0; n < this._I.length; n++)
                                this.Bd[n] && (this.MI[n] && this.MI[n] < i ? this.Qm(n) : this._I[n].onTouchMove(t) || this.Qm(n));
                            this.VI(t)
                        },
                        i.tm = function(t) {
                            for (var i = Date.now(), n = 0; n < this._I.length; n++)
                                if (this.Bd[n])
                                    if (this.MI[n] && this.MI[n] < i)
                                        this.Qm(n);
                                    else {
                                        this._I[n].onTouchEnd(t);
                                        var r = !this.MI[n],
                                            s = this.MI[n] < i;
                                        this.II == this._I[n] || !r && !s || this.Qm(n)
                                    }
                            this.VI(t)
                        },
                        i.Km = function(t) {
                            for (var i = 0; i < this._I.length; i++)
                                this.GI(i);
                            this.VI(t)
                        },
                        i.Gp = function(t, i) {
                            if (this.II)
                                t.acceptCancel();
                            else {
                                for (var n = Date.now(), r = 0; r < this._I.length; r++)
                                    this._I[r] == t && (this.Vi[r] = n + i,
                                        this.MI[r] = 0);
                                this.HI = !0
                            }
                        },
                        i.BI = function(t, i) {
                            if (this.II)
                                t.acceptCancel();
                            else
                                for (var n = Date.now(), r = 0; r < this._I.length; r++)
                                    this._I[r] == t && (this.MI[r] = n + i)
                        },
                        i.FI = function(t) {
                            this.II == t && (this.II = null,
                                this.RI = !0)
                        },
                        i.WI = function(t, i, n) {
                            p(this.II == t);
                            var r = this.CI[t.getType()];
                            r && r.fire(new bt(t.getType(), i, Date.now(), n))
                        },
                        i.VI = function(t) {
                            var i = !!this.II || this.RI;
                            if (this.RI = !1, !i)
                                for (var n = Date.now(), r = 0; r < this._I.length; r++)
                                    if (this.Vi[r] || this.MI[r] && this.MI[r] >= n) {
                                        i = !0;
                                        break
                                    }
                            i ? (t.stopPropagation(),
                                    this.NI || t.preventDefault()) : this.zI && t.stopPropagation(),
                                this.HI && (this.HI = !1,
                                    this.xv())
                        },
                        i.xv = function() {
                            for (var t = Date.now(), i = -1, n = 0; n < this._I.length; n++)
                                this.Vi[n] ? (-1 == i || this.Vi[n] > this.Vi[i]) && (i = n) : this.MI[n] && this.MI[n] < t && this.Qm(n);
                            if (-1 != i) {
                                for (var r = 0, s = 0; s < this._I.length; s++)
                                    !this.Vi[s] && this.Bd[s] && (r = Math.max(r, this.MI[s] - t));
                                r < 2 ? this.ZI(i) : this.Ms.schedule(r)
                            }
                        },
                        i.ZI = function(t) {
                            for (var i = this._I[t], n = 0; n < this._I.length; n++)
                                n != t && this.GI(n);
                            this.Vi[t] = 0,
                                this.MI[t] = 0,
                                this.II = i,
                                i.acceptStart()
                        },
                        i.tg = function(t) {
                            this.Bd[t] = !0,
                                this.MI[t] = 0
                        },
                        i.Qm = function(t) {
                            this.Bd[t] = !1,
                                this.MI[t] = 0,
                                this.Vi[t] || this._I[t].acceptCancel()
                        },
                        i.GI = function(t) {
                            this.Vi[t] = 0,
                                this.Qm(t)
                        },
                        t
                }(),
                wt = function() {
                    function t(t, i) {
                        this.XI = t,
                            this.Ey = i
                    }
                    var i = t.prototype;
                    return i.getType = function() {
                            return this.XI
                        },
                        i.signalReady = function(t) {
                            this.Ey.Gp(this, t)
                        },
                        i.signalPending = function(t) {
                            this.Ey.BI(this, t)
                        },
                        i.signalEnd = function() {
                            this.Ey.FI(this)
                        },
                        i.signalEmit = function(t, i) {
                            this.Ey.WI(this, t, i)
                        },
                        i.acceptStart = function() {},
                        i.acceptCancel = function() {},
                        i.onTouchStart = function(t) {
                            return !1
                        },
                        i.onTouchMove = function(t) {
                            return !1
                        },
                        i.onTouchEnd = function(t) {},
                        t
                }();

            function gt(t, i, n) {
                i < 1 && (i = 1);
                var r = t / i,
                    s = .5 + Math.min(i / 33.34, .5);
                return r * s + n * (1 - s)
            }
            Math.round(-16.67 / Math.log(.95));
            var kt = function(t) {
                    r(n, t);
                    var i = a(n);

                    function n(t) {
                        return i.call(this, "swipe-x", t, !0, !1)
                    }
                    return n
                }(function(t) {
                    r(n, t);
                    var i = a(n);

                    function n(t, n, r, s) {
                        var e;
                        return (e = i.call(this, t, n)).qI = r,
                            e.$I = s,
                            e.II = !1,
                            e.KI = 0,
                            e.JI = 0,
                            e.QI = 0,
                            e.tN = 0,
                            e.iN = 0,
                            e.nN = 0,
                            e.Ya = 0,
                            e.rN = 0,
                            e.oN = 0,
                            e.aN = 0,
                            e.sN = 0,
                            e
                    }
                    var s = n.prototype;
                    return s.onTouchStart = function(t) {
                            var i = t.touches;
                            return !!(this.II && i && i.length > 1) || !(!i || 1 != i.length) && (this.Ya = Date.now(),
                                this.KI = i[0].clientX,
                                this.JI = i[0].clientY, !0)
                        },
                        s.onTouchMove = function(t) {
                            var i = t.touches;
                            if (i && i.length >= 1) {
                                var n = i[0],
                                    r = n.clientX,
                                    s = n.clientY;
                                if (this.QI = r,
                                    this.tN = s,
                                    this.II)
                                    this.eN(!1, !1, t);
                                else {
                                    var e = Math.abs(r - this.KI),
                                        o = Math.abs(s - this.JI);
                                    if (this.qI && this.$I)
                                        (e >= 8 || o >= 8) && this.signalReady(-10);
                                    else if (this.qI) {
                                        if (e >= 8 && e > o)
                                            this.signalReady(-10);
                                        else if (o >= 8)
                                            return !1
                                    } else {
                                        if (!this.$I)
                                            return !1;
                                        if (o >= 8 && o > e)
                                            this.signalReady(-10);
                                        else if (e >= 8)
                                            return !1
                                    }
                                }
                                return !0
                            }
                            return !1
                        },
                        s.onTouchEnd = function(t) {
                            var i = t.touches;
                            i && 0 == i.length && this.uN(t)
                        },
                        s.acceptStart = function() {
                            this.II = !0,
                                this.iN = this.KI,
                                this.nN = this.JI,
                                this.oN = this.Ya,
                                this.KI = this.QI,
                                this.JI = this.tN,
                                this.eN(!0, !1, null)
                        },
                        s.acceptCancel = function() {
                            this.II = !1
                        },
                        s.eN = function(t, i, n) {
                            this.rN = Date.now();
                            var r = this.rN - this.oN;
                            if (!i && r > 4 || i && r > 16) {
                                var s = gt(this.QI - this.iN, r, this.aN),
                                    e = gt(this.tN - this.nN, r, this.sN);
                                (!i || r > 32 || 0 != s || 0 != e) && (this.aN = Math.abs(s) > 1e-4 ? s : 0,
                                    this.sN = Math.abs(e) > 1e-4 ? e : 0),
                                this.iN = this.QI,
                                    this.nN = this.tN,
                                    this.oN = this.rN
                            }
                            this.signalEmit({
                                first: t,
                                last: i,
                                time: this.rN,
                                deltaX: this.QI - this.KI,
                                deltaY: this.tN - this.JI,
                                startX: this.KI,
                                startY: this.JI,
                                lastX: this.QI,
                                lastY: this.tN,
                                velocityX: this.aN,
                                velocityY: this.sN
                            }, n)
                        },
                        s.uN = function(t) {
                            this.II && (this.II = !1,
                                this.eN(!1, !0, t),
                                this.signalEnd())
                        },
                        n
                }(wt)),
                xt = "backward",
                Mt = "horizontal",
                At = function() {
                    function t(t, i, n) {
                        this.t = t,
                            this.Ix = i,
                            this.t5 = n,
                            this.i5 = xt,
                            this.n5 = Mt,
                            this.r5 = null,
                            this.e5 = null
                    }
                    var i = t.prototype;
                    return i.s5 = function() {
                            return this.n5 == Mt ? this.r5.offsetWidth : this.r5.offsetHeight
                        },
                        i.o5 = function(t, i) {
                            var n = this.n5 == Mt ? t : i;
                            return this.i5 == xt ? -Math.min(n, 0) : Math.max(n, 0)
                        },
                        i.a5 = function(t) {
                            var i = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : "",
                                n = this.i5 == xt ? -t : t,
                                r = this.n5 == Mt ? "".concat(n).concat(i) : 0,
                                s = this.n5 == Mt ? 0 : "".concat(n).concat(i);
                            return "translate(".concat(r, ", ").concat(s, ")")
                        },
                        i.startSwipe = function(t) {
                            var i = t.direction,
                                n = t.mask,
                                r = t.orientation,
                                s = t.swipeElement;
                            this.r5 = s,
                                this.e5 = n,
                                this.i5 = i,
                                this.n5 = r
                        },
                        i.swipeMove = function(t) {
                            this.h5(t, !1)
                        },
                        i.endSwipe = function(t) {
                            this.h5(t, !0)
                        },
                        i.u5 = function(t, i) {
                            var n = .75 * i;
                            return R(this.r5, {
                                    transform: this.a5(t, "px"),
                                    transition: "".concat(n, "ms transform ").concat("cubic-bezier(0.15, .55, .3, 0.95)")
                                }),
                                vt(this.t, n)
                        },
                        i.f5 = function(t) {
                            var i = this,
                                n = .8 * t;
                            return this.Ix((function() {
                                R(i.r5, {
                                        transform: i.a5(0),
                                        transition: "".concat(n, "ms transform ease-in")
                                    }),
                                    R(i.e5, {
                                        opacity: "",
                                        transition: "".concat(n, "ms opacity ease-in")
                                    })
                            })).then((function() {
                                return vt(i.t, n)
                            }))
                        },
                        i.c5 = function(t) {
                            var i = this,
                                n = .75 * (this.s5() - t);
                            return this.Ix((function() {
                                R(i.r5, {
                                        transform: i.a5(100, "%"),
                                        transition: "".concat(n, "ms transform ease-out")
                                    }),
                                    R(i.e5, {
                                        opacity: 0,
                                        transition: "".concat(n, "ms opacity ease-out")
                                    })
                            })).then((function() {
                                return vt(i.t, n)
                            })).then((function() {
                                return i.t5()
                            }))
                        },
                        i.l5 = function() {
                            var t = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : "",
                                i = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : "";
                            R(this.r5, {
                                    transform: t,
                                    transition: ""
                                }),
                                R(this.e5, {
                                    opacity: i,
                                    transition: ""
                                })
                        },
                        i.v5 = function(t, i, n, r) {
                            var s = this,
                                e = 22.5 * t + n,
                                o = 22.5 * i + r,
                                a = this.o5(e, o),
                                h = this.o5(t, i),
                                u = .5 * this.s5();
                            return a < u && h < .65 ? this.u5(a, h).then((function() {
                                return s.f5(a)
                            })) : this.c5(a)
                        },
                        i.h5 = function(t, i) {
                            var n = this,
                                r = t.deltaX,
                                s = t.deltaY,
                                e = t.velocityX,
                                o = t.velocityY;
                            this.Ix((function() {
                                if (i)
                                    n.v5(e, o, r, s).then((function() {
                                        n.l5()
                                    }));
                                else {
                                    var t = n.o5(r, s),
                                        a = t / n.s5(),
                                        h = Math.max(0, 1 - a);
                                    n.l5(n.a5(t, "px"), h)
                                }
                            }))
                        },
                        t
                }(),
                Ot = function() {
                    function t(t, i) {
                        this.Hg = i,
                            this.d5 = t,
                            this.gr = i.getAmpDoc(),
                            this.m5 = this.d5.getAttribute("toolbar"),
                            this.p5 = null,
                            this.b5 = void 0,
                            this.y5 = !1,
                            this.d5.classList.add("amp-sidebar-toolbar-target-hidden"),
                            this.w5()
                    }
                    var i = t.prototype;
                    return i.onLayoutChange = function() {
                            this.gr.win.matchMedia(this.m5).matches ? this.g5() : this.k5()
                        },
                        i.w5 = function() {
                            this.p5 = this.d5.cloneNode(!0);
                            var t, i, n = (t = this.d5.getAttribute("toolbar-target"),
                                    '"toolbar-target" is required',
                                    i = this.d5,
                                    K().assert(t, '"toolbar-target" is required', i, undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined)),
                                r = this.gr.getElementById(n);
                            if (!r)
                                throw K().createError("Could not find the toolbar-target element with an id: ".concat(n));
                            this.b5 = r,
                                this.p5.classList.add("i-amphtml-toolbar"),
                                P(this.b5, !1)
                        },
                        i.O5 = function() {
                            return this.y5
                        },
                        i.g5 = function() {
                            var t = this;
                            return this.O5() ? Z || (Z = Promise.resolve(void 0)) : this.Hg.mutateElement((function() {
                                t.b5 && (P(t.b5, !0),
                                    t.b5.contains(t.p5) || t.b5.appendChild(t.p5),
                                    t.d5.classList.add("amp-sidebar-toolbar-target-shown"),
                                    t.d5.classList.remove("amp-sidebar-toolbar-target-hidden"),
                                    t.y5 = !0,
                                    lt(t.gr, t.p5))
                            }))
                        },
                        i.k5 = function() {
                            var t = this;
                            this.O5() && this.Hg.mutateElement((function() {
                                t.b5 && (P(t.b5, !1),
                                    t.d5.classList.add("amp-sidebar-toolbar-target-hidden"),
                                    t.d5.classList.remove("amp-sidebar-toolbar-target-shown"),
                                    t.y5 = !1)
                            }))
                        },
                        t
                }();

            function Et(t) {
                var i = t.indexOf("#");
                return -1 == i ? t : t.substring(0, i)
            }
            var St = "amp-sidebar toolbar",
                jt = "left",
                Dt = "right",
                Xt = function(t) {
                    r(s, t);
                    var n = a(s);

                    function s(t) {
                        var r;
                        (r = n.call(this, t)).du = null,
                            r.Ds = null,
                            r.x5 = null,
                            r.iW = null,
                            r.Dl = r.win.document,
                            r.rW = r.Dl.documentElement,
                            r.nX = null,
                            r.j5 = [];
                        var s = it(r.win, "platform");
                        return r.BY = s.isIos(),
                            r.mC = s.isSafari(),
                            r.wY = -1,
                            r.M5 = !1,
                            r.XY = null,
                            r.CY = null,
                            r.E5 = 0,
                            r.S5 = !1,
                            r.A5 = null,
                            r.D5 = new At(r.win, (function(t) {
                                return r.mutateElement(t)
                            }), (function() {
                                return r.X5(!0, 3)
                            })),
                            r.tht = !1,
                            r.iht = !1,
                            r.Wg = r.Wg.bind(i(r)),
                            r._5 = null,
                            r
                    }
                    var e = s.prototype;
                    return e.buildCallback = function() {
                            var t, i = this,
                                n = this.element;
                            n.classList.add("i-amphtml-overlay"),
                                n.classList.add("i-amphtml-scrollable"),
                                this.nX = n.getAttribute("side"),
                                this.iht = n.hasAttribute("data-disable-swipe-close"),
                                this.du = this.getViewport(),
                                this.Ds = function(t) {
                                    return rt(t, "action")
                                }(n),
                                this.element.parentNode != this.element.ownerDocument.body && this.element.parentNode != this.getAmpDoc().getBody() && this.user().warn(St, "".concat(St, " is recommended to be a direct child of the <body> element to preserve a logical DOM order.")),
                                this.nX != jt && this.nX != Dt && (this.nX = this.R5("rtl" == ((t = this.Dl).body.getAttribute("dir") || t.documentElement.getAttribute("dir") || "ltr") ? Dt : jt),
                                    n.setAttribute("side", this.nX)),
                                this.P5(),
                                n.addEventListener("amp:dom-update", (function() {
                                    i.P5()
                                })),
                                this.getAmpDoc().whenReady().then((function() {
                                    h(n.querySelectorAll("nav[toolbar]")).forEach((function(t) {
                                            try {
                                                i.j5.push(new Ot(t, i))
                                            } catch (t) {
                                                i.user().error(St, "Failed to instantiate toolbar", t)
                                            }
                                        })),
                                        i.Wg()
                                })),
                                this.BY && this.T5(),
                                n.hasAttribute("role") || n.setAttribute("role", "menu"),
                                n.tabIndex = -1,
                                this.rW.addEventListener("keydown", (function(t) {
                                    "Escape" == t.key && i._A(3) && t.preventDefault()
                                })),
                                this.XY = this.wX(),
                                this.XY || (this.XY = this.createScreenReaderCloseButton(),
                                    n.insertBefore(this.XY, this.element.firstChild)),
                                n.appendChild(this.createScreenReaderCloseButton()),
                                this.registerDefaultAction((function(t) {
                                    var n = t.caller,
                                        r = t.trust;
                                    i.aX(r, n)
                                }), "open"),
                                this.registerAction("close", (function(t) {
                                    i._A(t.trust)
                                })),
                                this.registerAction("toggle", (function(t) {
                                    var n = t.caller,
                                        r = t.trust;
                                    i.S5 ? i._A(r) : i.aX(r, n)
                                })),
                                this.Ds.addToAllowlist("amp-sidebar", ["open", "close", "toggle"], ["email"]),
                                n.addEventListener("click", (function(t) {
                                    var r = w(t.target, "A");
                                    if (r && r.href) {
                                        var s = function(t) {
                                                return rt(t, "url")
                                            }(n).parse(r.href),
                                            e = i.getAmpDoc().getUrl();
                                        if (Et(r.href) != Et(e))
                                            return;
                                        s.hash && i._A(3)
                                    }
                                }), !0),
                                this.KX(this.element)
                        },
                        e.attachedCallback = function() {
                            this._5 = this.du.onResize(function(t, i, n) {
                                    var r = 0,
                                        s = 0,
                                        e = null;

                                    function o() {
                                        r = 0;
                                        var n, a = 100 - (t.Date.now() - s);
                                        a > 0 ? r = t.setTimeout(o, a) : (n = e,
                                            e = null,
                                            i.apply(null, n))
                                    }
                                    return function() {
                                        s = t.Date.now();
                                        for (var i = arguments.length, n = new Array(i), a = 0; a < i; a++)
                                            n[a] = arguments[a];
                                        e = n,
                                            r || (r = t.setTimeout(o, 100))
                                    }
                                }(this.win, this.Wg)),
                                this.Wg()
                        },
                        e.detachedCallback = function() {
                            this._5 && (this._5(),
                                this._5 = null)
                        },
                        e.P5 = function() {
                            if (!this.A5) {
                                var t = this.element.querySelector("amp-nested-menu");
                                t && ((i = this.win,
                                        it(i, "extensions")).installExtensionForDoc(this.getAmpDoc(), "amp-nested-menu"),
                                    this.A5 = t)
                            }
                            var i
                        },
                        e.wX = function() {
                            for (var t = this.element.querySelectorAll("[on]"), i = 0; i < t.length; i++) {
                                var n = t[i],
                                    r = this.Ds.hasResolvableActionForTarget(n, "tap", this.element, tt(n.parentElement)),
                                    s = w(n, "[toolbar]");
                                if (r && !s)
                                    return n
                            }
                            return null
                        },
                        e.createScreenReaderCloseButton = function() {
                            var t = this,
                                i = this.element.getAttribute("data-close-button-aria-label") || "Close the sidebar",
                                n = this.Dl.createElement("button");
                            return n.textContent = i,
                                n.classList.add("i-amphtml-screen-reader"),
                                n.tabIndex = -1,
                                n.addEventListener("click", (function() {
                                    t._A(3)
                                })),
                                n
                        },
                        e.Wg = function() {
                            var t = this;
                            this.getAmpDoc().whenReady().then((function() {
                                t.j5.forEach((function(t) {
                                    t.onLayoutChange()
                                }))
                            }))
                        },
                        e.z5 = function(t, i) {
                            var n = this;
                            this.x5 = t;
                            var r = function() {
                                n.x5 === t && n.mutateElement(t)
                            };
                            i ? ft(this.win).delay(r, i) : r()
                        },
                        e.I5 = function(t) {
                            var i = this;
                            P(this.element, !0),
                                P(this.C5(), !0),
                                this.du.addToFixedLayer(this.element, !0),
                                this.mutateElement((function() {
                                    ! function(t) {
                                        p(Y.every((function(i) {
                                                return i.element !== t
                                            }))),
                                            p(k(t));
                                        var i = function(t) {
                                                for (var i = [], n = q(t), r = function(t) {
                                                        var r = n[t];
                                                        if (!r.parentNode)
                                                            return "continue";
                                                        h(r.parentNode.children).filter((function(t) {
                                                            return t != r
                                                        })).forEach((function(t) {
                                                            return i.push(t)
                                                        }))
                                                    }, s = 0; s < n.length; s++)
                                                    r(s);
                                                return i
                                            }(t),
                                            n = q(t).filter(m),
                                            r = function(t) {
                                                for (var i = [], n = t; n;) {
                                                    var r = x(n),
                                                        s = r.querySelectorAll(["a[href]", "area[href]", "button", "details summary", "iframe", "input", "select", "textarea", "[contenteditable]", "[draggable]", "[tabindex]"].join(","));
                                                    Array.prototype.push.apply(i, s),
                                                        n = r.host
                                                }
                                                return i
                                            }(t),
                                            s = r.filter((function(i) {
                                                return t.contains(i) && void 0 !== i[V]
                                            })),
                                            e = r.filter((function(i) {
                                                return !t.contains(i) && void 0 === i[V]
                                            })),
                                            o = i.concat(n).map((function(t) {
                                                return {
                                                    element: t,
                                                    prevValue: t.getAttribute("aria-hidden")
                                                }
                                            }));
                                        n.forEach((function(t) {
                                                return t.removeAttribute("aria-hidden")
                                            })),
                                            i.forEach((function(t) {
                                                return t.setAttribute("aria-hidden", "true")
                                            })),
                                            e.forEach((function(t) {
                                                t[V] = t.getAttribute("tabindex"),
                                                    t.setAttribute("tabindex", "-1")
                                            })),
                                            s.forEach((function(t) {
                                                p(void 0 !== t[V]),
                                                    F(t, "tabindex", t[V])
                                            })),
                                            Y.push({
                                                element: t,
                                                hiddenElementInfos: o,
                                                focusableExternalElements: e,
                                                focusableInternalElements: s
                                            })
                                    }(i.element)
                                })),
                                this.BY && this.mC && this.N5(),
                                this.element.scrollTop = 1,
                                this.element.setAttribute("open", ""),
                                this.C5().setAttribute("open", ""),
                                this.z5((function() {
                                    return i.L5(t)
                                }), 350),
                                lt(this.getAmpDoc(), this.element)
                        },
                        e.L5 = function(t) {
                            var i = g(this.element),
                                n = ut(this.element);
                            n.scheduleLayout(this.element, i),
                                n.scheduleResume(this.element, i),
                                this.W5() || M(tt(this.XY)),
                                this.nD("sidebarOpen", t),
                                this.element.setAttribute("i-amphtml-sidebar-opened", ""),
                                this.C5().setAttribute("i-amphtml-sidebar-opened", ""),
                                this.setAsContainer()
                        },
                        e.B5 = function(t, i) {
                            var n = this;
                            this.C5().removeAttribute("open"),
                                this.C5().removeAttribute("i-amphtml-sidebar-opened"),
                                this.mutateElement((function() {
                                    ! function(t) {
                                        var i = Y.pop();
                                        p(i);
                                        var n = i.element,
                                            r = i.focusableExternalElements,
                                            s = i.focusableInternalElements,
                                            e = i.hiddenElementInfos;
                                        p(k(t)),
                                            p(n === t),
                                            e.forEach((function(t) {
                                                return F(t.element, "aria-hidden", t.prevValue)
                                            })),
                                            s.forEach((function(t) {
                                                return t.setAttribute("tabindex", "-1")
                                            })),
                                            r.forEach((function(t) {
                                                p(void 0 !== t[V]),
                                                    F(t, "tabindex", t[V]),
                                                    t[V] = void 0
                                            }))
                                    }(n.element)
                                })),
                                this.element.removeAttribute("open"),
                                this.element.removeAttribute("i-amphtml-sidebar-opened"),
                                this.z5((function() {
                                    return n.Y5(i)
                                }), t ? 0 : 350)
                        },
                        e.Y5 = function(t) {
                            P(this.element, !1),
                                P(this.C5(), !1),
                                ut(this.element).schedulePause(this.element, g(this.element)),
                                this.nD("sidebarClose", t),
                                this.removeAsContainer(),
                                function(t) {
                                    $(t, !(arguments.length > 1 && void 0 !== arguments[1]) || arguments[1], !0, U)
                                }(this.element, !1)
                        },
                        e.aX = function(t, i) {
                            var n = this;
                            this.S5 || (this.S5 = !0,
                                this.du.enterOverlayMode(),
                                this.z5((function() {
                                    return n.I5(t)
                                })),
                                this.yZ().push((function() {
                                    n.BY ? n.X5(!0, t) : n._A(t)
                                })).then((function(t) {
                                    n.wY = t
                                })),
                                i && (this.CY = i,
                                    this.E5 = this.du.getScrollTop()),
                                function(t, i, n) {
                                    var r = t.ownerDocument.defaultView;
                                    if (r) {
                                        var s = C.get(t);
                                        if (s || (s = [],
                                                C.set(t, s),
                                                B(r).observe(t)), !s.some((function(t) {
                                                return t.callback === n && 0 === t.type
                                            }))) {
                                            s.push({
                                                type: 0,
                                                callback: n
                                            });
                                            var e = W.get(t);
                                            e && setTimeout((function() {
                                                return N(0, n, e)
                                            }))
                                        }
                                    }
                                }(this.element, 0, this.Wg))
                        },
                        e._A = function(t) {
                            return this.X5(!1, t)
                        },
                        e.X5 = function(t, i) {
                            var n = this;
                            if (!this.S5)
                                return !1;
                            this.S5 = !1,
                                this.du.leaveOverlayMode();
                            var r = this.E5 == this.du.getScrollTop(),
                                s = this.element.contains(this.Dl.activeElement);
                            return this.z5((function() {
                                    return n.B5(t, i)
                                })),
                                t && (P(this.element, !1),
                                    P(this.C5(), !1)), -1 != this.wY && (this.yZ().pop(this.wY),
                                    this.wY = -1),
                                this.CY && s && r && (this.W5() || M(this.CY)),
                                function(t, i, n) {
                                    var r = C.get(t);
                                    if (r && (function(t, i) {
                                                for (var r = [], s = 0, e = 0; e < t.length; e++) {
                                                    var o = t[e];
                                                    (a = o).callback === n && 0 === a.type ? r.push(o) : (s < e && (t[s] = o),
                                                        s++)
                                                }
                                                var a;
                                                s < t.length && (t.length = s)
                                            }(r),
                                            0 == r.length)) {
                                        C.delete(t),
                                            W.delete(t);
                                        var s = t.ownerDocument.defaultView;
                                        s && B(s).unobserve(t)
                                    }
                                }(this.element, 0, this.Wg), !0
                        },
                        e.KX = function(t) {
                            var i = this;
                            this.iht || yt.get(t, !0, !0).onGesture(kt, (function(t) {
                                var n = t.data,
                                    r = t.event;
                                i.F5(n, r)
                            }))
                        },
                        e.F5 = function(t, i) {
                            var n;
                            if (!t.first)
                                return t.last ? (this.tht && this.D5.endSwipe(t),
                                    void(this.tht = !1)) : void(i && i.target && (n = i.target,
                                    "input" !== n.nodeName.toLowerCase() || "range" !== n.getAttribute("type")) && (this.tht = !0,
                                    this.D5.swipeMove(t)));
                            this.D5.startSwipe({
                                swipeElement: this.element,
                                mask: this.iW,
                                direction: this.nX == jt ? xt : "forward",
                                orientation: Mt
                            })
                        },
                        e.R5 = function(t) {
                            return w(this.element, "amp-story") ? t == jt ? Dt : jt : t
                        },
                        e.C5 = function() {
                            var t = this;
                            if (!this.iW) {
                                var i = this.Dl.createElement("div");
                                i.classList.add("amp-sidebar-mask", "i-amphtml-sidebar-mask"),
                                    i.addEventListener("click", (function() {
                                        t._A(3)
                                    })),
                                    this.getAmpDoc().getBody().appendChild(i),
                                    i.addEventListener("touchmove", (function(t) {
                                        t.preventDefault()
                                    })),
                                    this.KX(i),
                                    this.iW = i
                            }
                            return this.iW
                        },
                        e.T5 = function() {
                            var t = this;
                            this.element.addEventListener("scroll", (function(i) {
                                t.S5 && (t.element.scrollTop < 1 ? (t.element.scrollTop = 1,
                                    i.preventDefault()) : t.element.scrollHeight == t.element.scrollTop + t.element.offsetHeight && (t.element.scrollTop = t.element.scrollTop - 1,
                                    i.preventDefault()))
                            }))
                        },
                        e.N5 = function() {
                            if (!this.M5) {
                                var t = this.Dl.createElement("div");
                                R(t, {
                                        "height": "54px",
                                        "width": "100%",
                                        "background-color": "transparent"
                                    }),
                                    this.element.appendChild(t),
                                    this.M5 = !0
                            }
                        },
                        e.yZ = function() {
                            return nt(this.getAmpDoc(), "history")
                        },
                        e.nD = function(t, i) {
                            var n = function(t, i, n, r) {
                                var s = {
                                    detail: n
                                };
                                if (Object.assign(s, void 0),
                                    "function" == typeof t.CustomEvent)
                                    return new t.CustomEvent(i, s);
                                var e = t.document.createEvent("CustomEvent");
                                return e.initCustomEvent(i, !!s.bubbles, !!s.cancelable, n),
                                    e
                            }(this.win, "".concat(St, ".").concat(t), {});
                            this.Ds.trigger(this.element, t, n, i)
                        },
                        e.W5 = function() {
                            return this.BY && (t = this.element,
                                nt(t, "viewer")).isEmbedded();
                            var t
                        },
                        s
                }(t.BaseElement);
            t.registerElement("amp-sidebar", Xt, "amp-sidebar{--story-page-vh:1vh;position:fixed!important;top:0;max-height:100vh!important;height:100vh;max-width:80vw;background-color:#efefef;min-width:45px!important;outline:none;overflow-x:hidden!important;overflow-y:auto!important;z-index:2147483647;-webkit-overflow-scrolling:touch;will-change:transform}amp-sidebar[side=left]{left:0!important;transform:translateX(-100%);animation-name:i-amphtml-sidebar-slide-out-left}amp-sidebar[side=left][open]{animation-name:i-amphtml-sidebar-slide-in-left}amp-sidebar[side=right]{right:0!important;transform:translateX(100%);animation-name:i-amphtml-sidebar-slide-out-right}amp-sidebar[side=right][open]{animation-name:i-amphtml-sidebar-slide-in-right}amp-sidebar[side][i-amphtml-sidebar-opened]{transform:none;animation:none}.i-amphtml-sidebar-mask,amp-sidebar[side]{animation-duration:233ms;animation-timing-function:cubic-bezier(0,0,.21,1);animation-fill-mode:forwards}.i-amphtml-toolbar>ol,.i-amphtml-toolbar>ul{display:-ms-flexbox;display:flex;-ms-flex-pack:start;justify-content:flex-start;-ms-flex-wrap:wrap;flex-wrap:wrap;overflow:auto;list-style-type:none;padding:0;margin:0}.amp-sidebar-mask{background-color:rgba(0,0,0,.5)}.i-amphtml-sidebar-mask{position:fixed!important;top:0!important;left:0!important;width:100vw!important;height:100vh!important;background-image:none!important;animation-name:i-amphtml-sidebar-mask-fade-out;z-index:2147483646}.i-amphtml-sidebar-mask[open]{animation-name:i-amphtml-sidebar-mask-fade-in}.i-amphtml-sidebar-mask[i-amphtml-sidebar-opened]{animation:none}@keyframes i-amphtml-sidebar-slide-in-left{0%{transform:translateX(-100%)}to{transform:translateX(0)}}@keyframes i-amphtml-sidebar-slide-out-left{0%{transform:translateX(0)}to{transform:translateX(-100%)}}@keyframes i-amphtml-sidebar-slide-in-right{0%{transform:translateX(100%)}to{transform:translateX(0)}}@keyframes i-amphtml-sidebar-slide-out-right{0%{transform:translateX(0)}to{transform:translateX(100%)}}@keyframes i-amphtml-sidebar-mask-fade-in{0%{opacity:0}to{opacity:1}}@keyframes i-amphtml-sidebar-mask-fade-out{0%{opacity:1}to{opacity:0}}\n/*# sourceURL=/extensions/amp-sidebar/0.1/amp-sidebar.css*/")
        }();
        /*! https://mths.be/cssescape v1.5.1 by @mathias | MIT license */
    }
});
//# sourceMappingURL=amp-sidebar-0.1.js.map