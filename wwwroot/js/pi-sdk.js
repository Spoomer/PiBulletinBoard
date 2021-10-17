!(function (e) {
    var t = {};
    function n(r) {
        if (t[r]) return t[r].exports;
        var o = (t[r] = { i: r, l: !1, exports: {} });
        return e[r].call(o.exports, o, o.exports, n), (o.l = !0), o.exports;
    }
    (n.m = e),
        (n.c = t),
        (n.d = function (e, t, r) {
            n.o(e, t) || Object.defineProperty(e, t, { enumerable: !0, get: r });
        }),
        (n.r = function (e) {
            "undefined" != typeof Symbol && Symbol.toStringTag && Object.defineProperty(e, Symbol.toStringTag, { value: "Module" }), Object.defineProperty(e, "__esModule", { value: !0 });
        }),
        (n.t = function (e, t) {
            if ((1 & t && (e = n(e)), 8 & t)) return e;
            if (4 & t && "object" == typeof e && e && e.__esModule) return e;
            var r = Object.create(null);
            if ((n.r(r), Object.defineProperty(r, "default", { enumerable: !0, value: e }), 2 & t && "string" != typeof e))
                for (var o in e)
                    n.d(
                        r,
                        o,
                        function (t) {
                            return e[t];
                        }.bind(null, o)
                    );
            return r;
        }),
        (n.n = function (e) {
            var t =
                e && e.__esModule
                    ? function () {
                        return e.default;
                    }
                    : function () {
                        return e;
                    };
            return n.d(t, "a", t), t;
        }),
        (n.o = function (e, t) {
            return Object.prototype.hasOwnProperty.call(e, t);
        }),
        (n.p = ""),
        n((n.s = 10));
})([
    function (e, t, n) {
        "use strict";
        var r = n(1),
            o = Object.prototype.toString;
        function i(e) {
            return "[object Array]" === o.call(e);
        }
        function s(e) {
            return void 0 === e;
        }
        function a(e) {
            return null !== e && "object" == typeof e;
        }
        function u(e) {
            return "[object Function]" === o.call(e);
        }
        function c(e, t) {
            if (null != e)
                if (("object" != typeof e && (e = [e]), i(e))) for (var n = 0, r = e.length; n < r; n++) t.call(null, e[n], n, e);
                else for (var o in e) Object.prototype.hasOwnProperty.call(e, o) && t.call(null, e[o], o, e);
        }
        e.exports = {
            isArray: i,
            isArrayBuffer: function (e) {
                return "[object ArrayBuffer]" === o.call(e);
            },
            isBuffer: function (e) {
                return null !== e && !s(e) && null !== e.constructor && !s(e.constructor) && "function" == typeof e.constructor.isBuffer && e.constructor.isBuffer(e);
            },
            isFormData: function (e) {
                return "undefined" != typeof FormData && e instanceof FormData;
            },
            isArrayBufferView: function (e) {
                return "undefined" != typeof ArrayBuffer && ArrayBuffer.isView ? ArrayBuffer.isView(e) : e && e.buffer && e.buffer instanceof ArrayBuffer;
            },
            isString: function (e) {
                return "string" == typeof e;
            },
            isNumber: function (e) {
                return "number" == typeof e;
            },
            isObject: a,
            isUndefined: s,
            isDate: function (e) {
                return "[object Date]" === o.call(e);
            },
            isFile: function (e) {
                return "[object File]" === o.call(e);
            },
            isBlob: function (e) {
                return "[object Blob]" === o.call(e);
            },
            isFunction: u,
            isStream: function (e) {
                return a(e) && u(e.pipe);
            },
            isURLSearchParams: function (e) {
                return "undefined" != typeof URLSearchParams && e instanceof URLSearchParams;
            },
            isStandardBrowserEnv: function () {
                return ("undefined" == typeof navigator || ("ReactNative" !== navigator.product && "NativeScript" !== navigator.product && "NS" !== navigator.product)) && "undefined" != typeof window && "undefined" != typeof document;
            },
            forEach: c,
            merge: function e() {
                var t = {};
                function n(n, r) {
                    "object" == typeof t[r] && "object" == typeof n ? (t[r] = e(t[r], n)) : (t[r] = n);
                }
                for (var r = 0, o = arguments.length; r < o; r++) c(arguments[r], n);
                return t;
            },
            deepMerge: function e() {
                var t = {};
                function n(n, r) {
                    "object" == typeof t[r] && "object" == typeof n ? (t[r] = e(t[r], n)) : (t[r] = "object" == typeof n ? e({}, n) : n);
                }
                for (var r = 0, o = arguments.length; r < o; r++) c(arguments[r], n);
                return t;
            },
            extend: function (e, t, n) {
                return (
                    c(t, function (t, o) {
                        e[o] = n && "function" == typeof t ? r(t, n) : t;
                    }),
                    e
                );
            },
            trim: function (e) {
                return e.replace(/^\s*/, "").replace(/\s*$/, "");
            },
        };
    },
    function (e, t, n) {
        "use strict";
        e.exports = function (e, t) {
            return function () {
                for (var n = new Array(arguments.length), r = 0; r < n.length; r++) n[r] = arguments[r];
                return e.apply(t, n);
            };
        };
    },
    function (e, t, n) {
        "use strict";
        var r = n(0);
        function o(e) {
            return encodeURIComponent(e).replace(/%40/gi, "@").replace(/%3A/gi, ":").replace(/%24/g, "$").replace(/%2C/gi, ",").replace(/%20/g, "+").replace(/%5B/gi, "[").replace(/%5D/gi, "]");
        }
        e.exports = function (e, t, n) {
            if (!t) return e;
            var i;
            if (n) i = n(t);
            else if (r.isURLSearchParams(t)) i = t.toString();
            else {
                var s = [];
                r.forEach(t, function (e, t) {
                    null != e &&
                        (r.isArray(e) ? (t += "[]") : (e = [e]),
                            r.forEach(e, function (e) {
                                r.isDate(e) ? (e = e.toISOString()) : r.isObject(e) && (e = JSON.stringify(e)), s.push(o(t) + "=" + o(e));
                            }));
                }),
                    (i = s.join("&"));
            }
            if (i) {
                var a = e.indexOf("#");
                -1 !== a && (e = e.slice(0, a)), (e += (-1 === e.indexOf("?") ? "?" : "&") + i);
            }
            return e;
        };
    },
    function (e, t, n) {
        "use strict";
        e.exports = function (e) {
            return !(!e || !e.__CANCEL__);
        };
    },
    function (e, t, n) {
        "use strict";
        (function (t) {
            var r = n(0),
                o = n(17),
                i = { "Content-Type": "application/x-www-form-urlencoded" };
            function s(e, t) {
                !r.isUndefined(e) && r.isUndefined(e["Content-Type"]) && (e["Content-Type"] = t);
            }
            var a,
                u = {
                    adapter: (("undefined" != typeof XMLHttpRequest || (void 0 !== t && "[object process]" === Object.prototype.toString.call(t))) && (a = n(5)), a),
                    transformRequest: [
                        function (e, t) {
                            return (
                                o(t, "Accept"),
                                o(t, "Content-Type"),
                                r.isFormData(e) || r.isArrayBuffer(e) || r.isBuffer(e) || r.isStream(e) || r.isFile(e) || r.isBlob(e)
                                    ? e
                                    : r.isArrayBufferView(e)
                                        ? e.buffer
                                        : r.isURLSearchParams(e)
                                            ? (s(t, "application/x-www-form-urlencoded;charset=utf-8"), e.toString())
                                            : r.isObject(e)
                                                ? (s(t, "application/json;charset=utf-8"), JSON.stringify(e))
                                                : e
                            );
                        },
                    ],
                    transformResponse: [
                        function (e) {
                            if ("string" == typeof e)
                                try {
                                    e = JSON.parse(e);
                                } catch (e) { }
                            return e;
                        },
                    ],
                    timeout: 0,
                    xsrfCookieName: "XSRF-TOKEN",
                    xsrfHeaderName: "X-XSRF-TOKEN",
                    maxContentLength: -1,
                    validateStatus: function (e) {
                        return e >= 200 && e < 300;
                    },
                };
            (u.headers = { common: { Accept: "application/json, text/plain, */*" } }),
                r.forEach(["delete", "get", "head"], function (e) {
                    u.headers[e] = {};
                }),
                r.forEach(["post", "put", "patch"], function (e) {
                    u.headers[e] = r.merge(i);
                }),
                (e.exports = u);
        }.call(this, n(16)));
    },
    function (e, t, n) {
        "use strict";
        var r = n(0),
            o = n(18),
            i = n(2),
            s = n(20),
            a = n(23),
            u = n(24),
            c = n(6);
        e.exports = function (e) {
            return new Promise(function (t, f) {
                var l = e.data,
                    p = e.headers;
                r.isFormData(l) && delete p["Content-Type"];
                var d = new XMLHttpRequest();
                if (e.auth) {
                    var h = e.auth.username || "",
                        m = e.auth.password || "";
                    p.Authorization = "Basic " + btoa(h + ":" + m);
                }
                var y = s(e.baseURL, e.url);
                if (
                    (d.open(e.method.toUpperCase(), i(y, e.params, e.paramsSerializer), !0),
                        (d.timeout = e.timeout),
                        (d.onreadystatechange = function () {
                            if (d && 4 === d.readyState && (0 !== d.status || (d.responseURL && 0 === d.responseURL.indexOf("file:")))) {
                                var n = "getAllResponseHeaders" in d ? a(d.getAllResponseHeaders()) : null,
                                    r = { data: e.responseType && "text" !== e.responseType ? d.response : d.responseText, status: d.status, statusText: d.statusText, headers: n, config: e, request: d };
                                o(t, f, r), (d = null);
                            }
                        }),
                        (d.onabort = function () {
                            d && (f(c("Request aborted", e, "ECONNABORTED", d)), (d = null));
                        }),
                        (d.onerror = function () {
                            f(c("Network Error", e, null, d)), (d = null);
                        }),
                        (d.ontimeout = function () {
                            var t = "timeout of " + e.timeout + "ms exceeded";
                            e.timeoutErrorMessage && (t = e.timeoutErrorMessage), f(c(t, e, "ECONNABORTED", d)), (d = null);
                        }),
                        r.isStandardBrowserEnv())
                ) {
                    var v = n(25),
                        w = (e.withCredentials || u(y)) && e.xsrfCookieName ? v.read(e.xsrfCookieName) : void 0;
                    w && (p[e.xsrfHeaderName] = w);
                }
                if (
                    ("setRequestHeader" in d &&
                        r.forEach(p, function (e, t) {
                            void 0 === l && "content-type" === t.toLowerCase() ? delete p[t] : d.setRequestHeader(t, e);
                        }),
                        r.isUndefined(e.withCredentials) || (d.withCredentials = !!e.withCredentials),
                        e.responseType)
                )
                    try {
                        d.responseType = e.responseType;
                    } catch (t) {
                        if ("json" !== e.responseType) throw t;
                    }
                "function" == typeof e.onDownloadProgress && d.addEventListener("progress", e.onDownloadProgress),
                    "function" == typeof e.onUploadProgress && d.upload && d.upload.addEventListener("progress", e.onUploadProgress),
                    e.cancelToken &&
                    e.cancelToken.promise.then(function (e) {
                        d && (d.abort(), f(e), (d = null));
                    }),
                    void 0 === l && (l = null),
                    d.send(l);
            });
        };
    },
    function (e, t, n) {
        "use strict";
        var r = n(19);
        e.exports = function (e, t, n, o, i) {
            var s = new Error(e);
            return r(s, t, n, o, i);
        };
    },
    function (e, t, n) {
        "use strict";
        var r = n(0);
        e.exports = function (e, t) {
            t = t || {};
            var n = {},
                o = ["url", "method", "params", "data"],
                i = ["headers", "auth", "proxy"],
                s = [
                    "baseURL",
                    "url",
                    "transformRequest",
                    "transformResponse",
                    "paramsSerializer",
                    "timeout",
                    "withCredentials",
                    "adapter",
                    "responseType",
                    "xsrfCookieName",
                    "xsrfHeaderName",
                    "onUploadProgress",
                    "onDownloadProgress",
                    "maxContentLength",
                    "validateStatus",
                    "maxRedirects",
                    "httpAgent",
                    "httpsAgent",
                    "cancelToken",
                    "socketPath",
                ];
            r.forEach(o, function (e) {
                void 0 !== t[e] && (n[e] = t[e]);
            }),
                r.forEach(i, function (o) {
                    r.isObject(t[o]) ? (n[o] = r.deepMerge(e[o], t[o])) : void 0 !== t[o] ? (n[o] = t[o]) : r.isObject(e[o]) ? (n[o] = r.deepMerge(e[o])) : void 0 !== e[o] && (n[o] = e[o]);
                }),
                r.forEach(s, function (r) {
                    void 0 !== t[r] ? (n[r] = t[r]) : void 0 !== e[r] && (n[r] = e[r]);
                });
            var a = o.concat(i).concat(s),
                u = Object.keys(t).filter(function (e) {
                    return -1 === a.indexOf(e);
                });
            return (
                r.forEach(u, function (r) {
                    void 0 !== t[r] ? (n[r] = t[r]) : void 0 !== e[r] && (n[r] = e[r]);
                }),
                n
            );
        };
    },
    function (e, t, n) {
        "use strict";
        function r(e) {
            this.message = e;
        }
        (r.prototype.toString = function () {
            return "Cancel" + (this.message ? ": " + this.message : "");
        }),
            (r.prototype.__CANCEL__ = !0),
            (e.exports = r);
    },
    function (e, t, n) {
        e.exports = n(11);
    },
    function (e, t, n) {
        var r = n(28).default;
        window.Pi = new r();
    },
    function (e, t, n) {
        "use strict";
        var r = n(0),
            o = n(1),
            i = n(12),
            s = n(7);
        function a(e) {
            var t = new i(e),
                n = o(i.prototype.request, t);
            return r.extend(n, i.prototype, t), r.extend(n, t), n;
        }
        var u = a(n(4));
        (u.Axios = i),
            (u.create = function (e) {
                return a(s(u.defaults, e));
            }),
            (u.Cancel = n(8)),
            (u.CancelToken = n(26)),
            (u.isCancel = n(3)),
            (u.all = function (e) {
                return Promise.all(e);
            }),
            (u.spread = n(27)),
            (e.exports = u),
            (e.exports.default = u);
    },
    function (e, t, n) {
        "use strict";
        var r = n(0),
            o = n(2),
            i = n(13),
            s = n(14),
            a = n(7);
        function u(e) {
            (this.defaults = e), (this.interceptors = { request: new i(), response: new i() });
        }
        (u.prototype.request = function (e) {
            "string" == typeof e ? ((e = arguments[1] || {}).url = arguments[0]) : (e = e || {}),
                (e = a(this.defaults, e)).method ? (e.method = e.method.toLowerCase()) : this.defaults.method ? (e.method = this.defaults.method.toLowerCase()) : (e.method = "get");
            var t = [s, void 0],
                n = Promise.resolve(e);
            for (
                this.interceptors.request.forEach(function (e) {
                    t.unshift(e.fulfilled, e.rejected);
                }),
                this.interceptors.response.forEach(function (e) {
                    t.push(e.fulfilled, e.rejected);
                });
                t.length;

            )
                n = n.then(t.shift(), t.shift());
            return n;
        }),
            (u.prototype.getUri = function (e) {
                return (e = a(this.defaults, e)), o(e.url, e.params, e.paramsSerializer).replace(/^\?/, "");
            }),
            r.forEach(["delete", "get", "head", "options"], function (e) {
                u.prototype[e] = function (t, n) {
                    return this.request(r.merge(n || {}, { method: e, url: t }));
                };
            }),
            r.forEach(["post", "put", "patch"], function (e) {
                u.prototype[e] = function (t, n, o) {
                    return this.request(r.merge(o || {}, { method: e, url: t, data: n }));
                };
            }),
            (e.exports = u);
    },
    function (e, t, n) {
        "use strict";
        var r = n(0);
        function o() {
            this.handlers = [];
        }
        (o.prototype.use = function (e, t) {
            return this.handlers.push({ fulfilled: e, rejected: t }), this.handlers.length - 1;
        }),
            (o.prototype.eject = function (e) {
                this.handlers[e] && (this.handlers[e] = null);
            }),
            (o.prototype.forEach = function (e) {
                r.forEach(this.handlers, function (t) {
                    null !== t && e(t);
                });
            }),
            (e.exports = o);
    },
    function (e, t, n) {
        "use strict";
        var r = n(0),
            o = n(15),
            i = n(3),
            s = n(4);
        function a(e) {
            e.cancelToken && e.cancelToken.throwIfRequested();
        }
        e.exports = function (e) {
            return (
                a(e),
                (e.headers = e.headers || {}),
                (e.data = o(e.data, e.headers, e.transformRequest)),
                (e.headers = r.merge(e.headers.common || {}, e.headers[e.method] || {}, e.headers)),
                r.forEach(["delete", "get", "head", "post", "put", "patch", "common"], function (t) {
                    delete e.headers[t];
                }),
                (e.adapter || s.adapter)(e).then(
                    function (t) {
                        return a(e), (t.data = o(t.data, t.headers, e.transformResponse)), t;
                    },
                    function (t) {
                        return i(t) || (a(e), t && t.response && (t.response.data = o(t.response.data, t.response.headers, e.transformResponse))), Promise.reject(t);
                    }
                )
            );
        };
    },
    function (e, t, n) {
        "use strict";
        var r = n(0);
        e.exports = function (e, t, n) {
            return (
                r.forEach(n, function (n) {
                    e = n(e, t);
                }),
                e
            );
        };
    },
    function (e, t) {
        var n,
            r,
            o = (e.exports = {});
        function i() {
            throw new Error("setTimeout has not been defined");
        }
        function s() {
            throw new Error("clearTimeout has not been defined");
        }
        function a(e) {
            if (n === setTimeout) return setTimeout(e, 0);
            if ((n === i || !n) && setTimeout) return (n = setTimeout), setTimeout(e, 0);
            try {
                return n(e, 0);
            } catch (t) {
                try {
                    return n.call(null, e, 0);
                } catch (t) {
                    return n.call(this, e, 0);
                }
            }
        }
        !(function () {
            try {
                n = "function" == typeof setTimeout ? setTimeout : i;
            } catch (e) {
                n = i;
            }
            try {
                r = "function" == typeof clearTimeout ? clearTimeout : s;
            } catch (e) {
                r = s;
            }
        })();
        var u,
            c = [],
            f = !1,
            l = -1;
        function p() {
            f && u && ((f = !1), u.length ? (c = u.concat(c)) : (l = -1), c.length && d());
        }
        function d() {
            if (!f) {
                var e = a(p);
                f = !0;
                for (var t = c.length; t;) {
                    for (u = c, c = []; ++l < t;) u && u[l].run();
                    (l = -1), (t = c.length);
                }
                (u = null),
                    (f = !1),
                    (function (e) {
                        if (r === clearTimeout) return clearTimeout(e);
                        if ((r === s || !r) && clearTimeout) return (r = clearTimeout), clearTimeout(e);
                        try {
                            r(e);
                        } catch (t) {
                            try {
                                return r.call(null, e);
                            } catch (t) {
                                return r.call(this, e);
                            }
                        }
                    })(e);
            }
        }
        function h(e, t) {
            (this.fun = e), (this.array = t);
        }
        function m() { }
        (o.nextTick = function (e) {
            var t = new Array(arguments.length - 1);
            if (arguments.length > 1) for (var n = 1; n < arguments.length; n++) t[n - 1] = arguments[n];
            c.push(new h(e, t)), 1 !== c.length || f || a(d);
        }),
            (h.prototype.run = function () {
                this.fun.apply(null, this.array);
            }),
            (o.title = "browser"),
            (o.browser = !0),
            (o.env = {}),
            (o.argv = []),
            (o.version = ""),
            (o.versions = {}),
            (o.on = m),
            (o.addListener = m),
            (o.once = m),
            (o.off = m),
            (o.removeListener = m),
            (o.removeAllListeners = m),
            (o.emit = m),
            (o.prependListener = m),
            (o.prependOnceListener = m),
            (o.listeners = function (e) {
                return [];
            }),
            (o.binding = function (e) {
                throw new Error("process.binding is not supported");
            }),
            (o.cwd = function () {
                return "/";
            }),
            (o.chdir = function (e) {
                throw new Error("process.chdir is not supported");
            }),
            (o.umask = function () {
                return 0;
            });
    },
    function (e, t, n) {
        "use strict";
        var r = n(0);
        e.exports = function (e, t) {
            r.forEach(e, function (n, r) {
                r !== t && r.toUpperCase() === t.toUpperCase() && ((e[t] = n), delete e[r]);
            });
        };
    },
    function (e, t, n) {
        "use strict";
        var r = n(6);
        e.exports = function (e, t, n) {
            var o = n.config.validateStatus;
            !o || o(n.status) ? e(n) : t(r("Request failed with status code " + n.status, n.config, null, n.request, n));
        };
    },
    function (e, t, n) {
        "use strict";
        e.exports = function (e, t, n, r, o) {
            return (
                (e.config = t),
                n && (e.code = n),
                (e.request = r),
                (e.response = o),
                (e.isAxiosError = !0),
                (e.toJSON = function () {
                    return {
                        message: this.message,
                        name: this.name,
                        description: this.description,
                        number: this.number,
                        fileName: this.fileName,
                        lineNumber: this.lineNumber,
                        columnNumber: this.columnNumber,
                        stack: this.stack,
                        config: this.config,
                        code: this.code,
                    };
                }),
                e
            );
        };
    },
    function (e, t, n) {
        "use strict";
        var r = n(21),
            o = n(22);
        e.exports = function (e, t) {
            return e && !r(t) ? o(e, t) : t;
        };
    },
    function (e, t, n) {
        "use strict";
        e.exports = function (e) {
            return /^([a-z][a-z\d\+\-\.]*:)?\/\//i.test(e);
        };
    },
    function (e, t, n) {
        "use strict";
        e.exports = function (e, t) {
            return t ? e.replace(/\/+$/, "") + "/" + t.replace(/^\/+/, "") : e;
        };
    },
    function (e, t, n) {
        "use strict";
        var r = n(0),
            o = [
                "age",
                "authorization",
                "content-length",
                "content-type",
                "etag",
                "expires",
                "from",
                "host",
                "if-modified-since",
                "if-unmodified-since",
                "last-modified",
                "location",
                "max-forwards",
                "proxy-authorization",
                "referer",
                "retry-after",
                "user-agent",
            ];
        e.exports = function (e) {
            var t,
                n,
                i,
                s = {};
            return e
                ? (r.forEach(e.split("\n"), function (e) {
                    if (((i = e.indexOf(":")), (t = r.trim(e.substr(0, i)).toLowerCase()), (n = r.trim(e.substr(i + 1))), t)) {
                        if (s[t] && o.indexOf(t) >= 0) return;
                        s[t] = "set-cookie" === t ? (s[t] ? s[t] : []).concat([n]) : s[t] ? s[t] + ", " + n : n;
                    }
                }),
                    s)
                : s;
        };
    },
    function (e, t, n) {
        "use strict";
        var r = n(0);
        e.exports = r.isStandardBrowserEnv()
            ? (function () {
                var e,
                    t = /(msie|trident)/i.test(navigator.userAgent),
                    n = document.createElement("a");
                function o(e) {
                    var r = e;
                    return (
                        t && (n.setAttribute("href", r), (r = n.href)),
                        n.setAttribute("href", r),
                        {
                            href: n.href,
                            protocol: n.protocol ? n.protocol.replace(/:$/, "") : "",
                            host: n.host,
                            search: n.search ? n.search.replace(/^\?/, "") : "",
                            hash: n.hash ? n.hash.replace(/^#/, "") : "",
                            hostname: n.hostname,
                            port: n.port,
                            pathname: "/" === n.pathname.charAt(0) ? n.pathname : "/" + n.pathname,
                        }
                    );
                }
                return (
                    (e = o(window.location.href)),
                    function (t) {
                        var n = r.isString(t) ? o(t) : t;
                        return n.protocol === e.protocol && n.host === e.host;
                    }
                );
            })()
            : function () {
                return !0;
            };
    },
    function (e, t, n) {
        "use strict";
        var r = n(0);
        e.exports = r.isStandardBrowserEnv()
            ? {
                write: function (e, t, n, o, i, s) {
                    var a = [];
                    a.push(e + "=" + encodeURIComponent(t)),
                        r.isNumber(n) && a.push("expires=" + new Date(n).toGMTString()),
                        r.isString(o) && a.push("path=" + o),
                        r.isString(i) && a.push("domain=" + i),
                        !0 === s && a.push("secure"),
                        (document.cookie = a.join("; "));
                },
                read: function (e) {
                    var t = document.cookie.match(new RegExp("(^|;\\s*)(" + e + ")=([^;]*)"));
                    return t ? decodeURIComponent(t[3]) : null;
                },
                remove: function (e) {
                    this.write(e, "", Date.now() - 864e5);
                },
            }
            : {
                write: function () { },
                read: function () {
                    return null;
                },
                remove: function () { },
            };
    },
    function (e, t, n) {
        "use strict";
        var r = n(8);
        function o(e) {
            if ("function" != typeof e) throw new TypeError("executor must be a function.");
            var t;
            this.promise = new Promise(function (e) {
                t = e;
            });
            var n = this;
            e(function (e) {
                n.reason || ((n.reason = new r(e)), t(n.reason));
            });
        }
        (o.prototype.throwIfRequested = function () {
            if (this.reason) throw this.reason;
        }),
            (o.source = function () {
                var e;
                return {
                    token: new o(function (t) {
                        e = t;
                    }),
                    cancel: e,
                };
            }),
            (e.exports = o);
    },
    function (e, t, n) {
        "use strict";
        e.exports = function (e) {
            return function (t) {
                return e.apply(null, t);
            };
        };
    },
    function (e, t, n) {
        "use strict";
        n.r(t);
        var r = function () {
            return (r =
                Object.assign ||
                function (e) {
                    for (var t, n = 1, r = arguments.length; n < r; n++) for (var o in (t = arguments[n])) Object.prototype.hasOwnProperty.call(t, o) && (e[o] = t[o]);
                    return e;
                }).apply(this, arguments);
        },
            o = function (e, t, n, r) {
                return new (n || (n = Promise))(function (o, i) {
                    function s(e) {
                        try {
                            u(r.next(e));
                        } catch (e) {
                            i(e);
                        }
                    }
                    function a(e) {
                        try {
                            u(r.throw(e));
                        } catch (e) {
                            i(e);
                        }
                    }
                    function u(e) {
                        var t;
                        e.done
                            ? o(e.value)
                            : ((t = e.value),
                                t instanceof n
                                    ? t
                                    : new n(function (e) {
                                        e(t);
                                    })).then(s, a);
                    }
                    u((r = r.apply(e, t || [])).next());
                });
            },
            i = function (e, t) {
                var n,
                    r,
                    o,
                    i,
                    s = {
                        label: 0,
                        sent: function () {
                            if (1 & o[0]) throw o[1];
                            return o[1];
                        },
                        trys: [],
                        ops: [],
                    };
                return (
                    (i = { next: a(0), throw: a(1), return: a(2) }),
                    "function" == typeof Symbol &&
                    (i[Symbol.iterator] = function () {
                        return this;
                    }),
                    i
                );
                function a(i) {
                    return function (a) {
                        return (function (i) {
                            if (n) throw new TypeError("Generator is already executing.");
                            for (; s;)
                                try {
                                    if (((n = 1), r && (o = 2 & i[0] ? r.return : i[0] ? r.throw || ((o = r.return) && o.call(r), 0) : r.next) && !(o = o.call(r, i[1])).done)) return o;
                                    switch (((r = 0), o && (i = [2 & i[0], o.value]), i[0])) {
                                        case 0:
                                        case 1:
                                            o = i;
                                            break;
                                        case 4:
                                            return s.label++, { value: i[1], done: !1 };
                                        case 5:
                                            s.label++, (r = i[1]), (i = [0]);
                                            continue;
                                        case 7:
                                            (i = s.ops.pop()), s.trys.pop();
                                            continue;
                                        default:
                                            if (!((o = s.trys), (o = o.length > 0 && o[o.length - 1]) || (6 !== i[0] && 2 !== i[0]))) {
                                                s = 0;
                                                continue;
                                            }
                                            if (3 === i[0] && (!o || (i[1] > o[0] && i[1] < o[3]))) {
                                                s.label = i[1];
                                                break;
                                            }
                                            if (6 === i[0] && s.label < o[1]) {
                                                (s.label = o[1]), (o = i);
                                                break;
                                            }
                                            if (o && s.label < o[2]) {
                                                (s.label = o[2]), s.ops.push(i);
                                                break;
                                            }
                                            o[2] && s.ops.pop(), s.trys.pop();
                                            continue;
                                    }
                                    i = t.call(e, s);
                                } catch (e) {
                                    (i = [6, e]), (r = 0);
                                } finally {
                                    n = o = 0;
                                }
                            if (5 & i[0]) throw i[1];
                            return { value: i[0] ? i[1] : void 0, done: !0 };
                        })([i, a]);
                    };
                }
            },
            s = new ((function () {
                function e() {
                    var e = this;
                    (this.lastEmittedId = 0),
                        (this.emittedPromises = {}),
                        (this.sandboxMode = !1),
                        (this.getHostPlatformURL = function () {
                            return e.sandboxMode ? "https://sandbox.minepi.com" : "https://app-cdn.minepi.com";
                        }),
                        (this.sendSDKMessage = function (t) {
                            return o(e, void 0, void 0, function () {
                                var e,
                                    n,
                                    o,
                                    s,
                                    a = this;
                                return i(this, function (i) {
                                    return (
                                        (e = this.lastEmittedId++),
                                        (n = r({ id: e }, t)),
                                        (o = JSON.stringify(n)),
                                        (s = this.getHostPlatformURL()),
                                        console.log("Sending message to app platform (target origin: " + s + "):", n),
                                        window.parent.postMessage(o, s),
                                        [
                                            2,
                                            new Promise(function (t, n) {
                                                (a.emittedPromises[e] = { resolve: t, reject: n }),
                                                    setTimeout(function () {
                                                        return n(new Error("Messaging promise with id " + e + " timed out after 60000ms."));
                                                    }, 6e4);
                                            }),
                                        ]
                                    );
                                });
                            });
                        }),
                        (this.handleIncomingMessage = function (t) {
                            var n = null;
                            try {
                                var r = t.data;
                                if ("string" != typeof r) return void console.log("Received message with non-string data:", r);
                                var o = JSON.parse(r);
                                if (null == (n = o.id)) throw new Error("No id found in message response");
                                if ((console.log("Received response for message id " + n + ": ", o), !e.emittedPromises[n])) throw new Error("No emitted promise found for native messaging response id " + n);
                                e.emittedPromises[n].resolve(o), delete e.emittedPromises[n];
                            } catch (r) {
                                if (null != n)
                                    return (
                                        console.error("Native messaging: error when handling response for message id " + n + ". Error is logged below."),
                                        console.error(r),
                                        console.error(t.data),
                                        void (e.emittedPromises[n] && e.emittedPromises[n].reject(r))
                                    );
                                console.error("Native messaging: error when handling incoming message (possible response?). Error is logged below."), console.error(r), console.error(t.data);
                            }
                        }),
                        window.addEventListener("message", function (t) {
                            return e.handleIncomingMessage(t);
                        });
                }
                return (
                    (e.prototype.setSandboxMode = function (e) {
                        this.sandboxMode = e;
                    }),
                    e
                );
            })())(),
            a = n(9),
            u = n.n(a),
            c = function (e, t, n, r) {
                return new (n || (n = Promise))(function (o, i) {
                    function s(e) {
                        try {
                            u(r.next(e));
                        } catch (e) {
                            i(e);
                        }
                    }
                    function a(e) {
                        try {
                            u(r.throw(e));
                        } catch (e) {
                            i(e);
                        }
                    }
                    function u(e) {
                        var t;
                        e.done
                            ? o(e.value)
                            : ((t = e.value),
                                t instanceof n
                                    ? t
                                    : new n(function (e) {
                                        e(t);
                                    })).then(s, a);
                    }
                    u((r = r.apply(e, t || [])).next());
                });
            },
            f = function (e, t) {
                var n,
                    r,
                    o,
                    i,
                    s = {
                        label: 0,
                        sent: function () {
                            if (1 & o[0]) throw o[1];
                            return o[1];
                        },
                        trys: [],
                        ops: [],
                    };
                return (
                    (i = { next: a(0), throw: a(1), return: a(2) }),
                    "function" == typeof Symbol &&
                    (i[Symbol.iterator] = function () {
                        return this;
                    }),
                    i
                );
                function a(i) {
                    return function (a) {
                        return (function (i) {
                            if (n) throw new TypeError("Generator is already executing.");
                            for (; s;)
                                try {
                                    if (((n = 1), r && (o = 2 & i[0] ? r.return : i[0] ? r.throw || ((o = r.return) && o.call(r), 0) : r.next) && !(o = o.call(r, i[1])).done)) return o;
                                    switch (((r = 0), o && (i = [2 & i[0], o.value]), i[0])) {
                                        case 0:
                                        case 1:
                                            o = i;
                                            break;
                                        case 4:
                                            return s.label++, { value: i[1], done: !1 };
                                        case 5:
                                            s.label++, (r = i[1]), (i = [0]);
                                            continue;
                                        case 7:
                                            (i = s.ops.pop()), s.trys.pop();
                                            continue;
                                        default:
                                            if (!((o = s.trys), (o = o.length > 0 && o[o.length - 1]) || (6 !== i[0] && 2 !== i[0]))) {
                                                s = 0;
                                                continue;
                                            }
                                            if (3 === i[0] && (!o || (i[1] > o[0] && i[1] < o[3]))) {
                                                s.label = i[1];
                                                break;
                                            }
                                            if (6 === i[0] && s.label < o[1]) {
                                                (s.label = o[1]), (o = i);
                                                break;
                                            }
                                            if (o && s.label < o[2]) {
                                                (s.label = o[2]), s.ops.push(i);
                                                break;
                                            }
                                            o[2] && s.ops.pop(), s.trys.pop();
                                            continue;
                                    }
                                    i = t.call(e, s);
                                } catch (e) {
                                    (i = [6, e]), (r = 0);
                                } finally {
                                    n = o = 0;
                                }
                            if (5 & i[0]) throw i[1];
                            return { value: i[0] ? i[1] : void 0, done: !0 };
                        })([i, a]);
                    };
                }
            },
            l = (function () {
                function e() {
                    var e = this;
                    (this.accessToken = null),
                        (this.backendURL = null),
                        (this.frontendURL = null),
                        (this.axiosClient = null),
                        (this.transferAxiosClient = null),
                        (this.createAxios = function () {
                            e.backendURL && (e.axiosClient = u.a.create({ baseURL: e.backendURL, timeout: 2e4 }));
                        }),
                        (this.handleError = function (t) {
                            var n = t.response && t.response.status;
                            401 !== n && 403 !== n ? e.sendMessageToPiNetwork({ type: "@pi:app:error:unknown" }) : e.sendMessageToPiNetwork({ type: "@pi:app:error:auth" });
                        }),
                        (this.getOptions = function () {
                            if (e.accessToken) return { headers: e.accessToken ? { Authorization: "Bearer " + e.accessToken } : {} };
                        }),
                        (this.get = function (t) {
                            return c(e, void 0, void 0, function () {
                                var e;
                                return f(this, function (n) {
                                    switch (n.label) {
                                        case 0:
                                            if (!this.axiosClient) return [2, null];
                                            n.label = 1;
                                        case 1:
                                            return n.trys.push([1, 3, , 4]), [4, this.axiosClient.get(t, this.getOptions())];
                                        case 2:
                                            return [2, n.sent().data];
                                        case 3:
                                            throw ((e = n.sent()), console.error(e), this.handleError(e), e);
                                        case 4:
                                            return [2];
                                    }
                                });
                            });
                        }),
                        (this.post = function (t, n) {
                            return (
                                void 0 === n && (n = {}),
                                c(e, void 0, void 0, function () {
                                    var e;
                                    return f(this, function (r) {
                                        switch (r.label) {
                                            case 0:
                                                if (!this.axiosClient) return [2, null];
                                                r.label = 1;
                                            case 1:
                                                return r.trys.push([1, 3, , 4]), [4, this.axiosClient.post(t, n, this.getOptions())];
                                            case 2:
                                                return [2, r.sent().data];
                                            case 3:
                                                throw ((e = r.sent()), console.error(e), this.handleError(e), e);
                                            case 4:
                                                return [2];
                                        }
                                    });
                                })
                            );
                        }),
                        (this.sendMessageToPiNetwork = function (t) {
                            if (e.frontendURL) {
                                var n = JSON.stringify(t);
                                window.parent.postMessage(n, e.frontendURL);
                            }
                        }),
                        (this.waitForAction = function (t) {
                            return new Promise(function (n, r) {
                                console.log("Waiting for action ... ");
                                var o = window.setTimeout(function () {
                                    return r("timeout");
                                }, 6e4);
                                console.log("Timeout", o),
                                    window.addEventListener("message", function (r) {
                                        return e.handlePiNetworkMessage(r, t, n, o);
                                    });
                            });
                        }),
                        (this.handlePiNetworkMessage = function (e, t, n, r) {
                            var o = e.data,
                                i = null;
                            try {
                                i = JSON.parse(o);
                            } catch (e) {
                                return console.log(e), void console.warn("Error while parsing request", e, o);
                            }
                            console.log("Message !", i), i ? i.type === t.type && (window.clearTimeout(r), n(i)) : console.warn("Unable to parse action");
                        }),
                        (this.dateFormatter = function () {
                            var e = function (e) {
                                return e < 10 ? "0" + e : e.toString();
                            },
                                t = new Date(),
                                n = t.getUTCMonth() + 1,
                                r = t.getUTCDate(),
                                o = t.getUTCHours(),
                                i = t.getUTCMinutes(),
                                s = t.getUTCSeconds();
                            return e(n) + "-" + e(r) + " " + e(o) + ":" + e(i) + ":" + e(s);
                        }),
                        (this.reportError = function (t, n, r) {
                            void 0 === r && (r = null), e.post("network/error", { error: { time: e.dateFormatter(), call: t, message: n, data: r } });
                        });
                }
                return (
                    (e.prototype.init = function (e) {
                        (this.accessToken = e.accessToken), (this.backendURL = e.backendURL), (this.frontendURL = e.frontendURL), this.createAxios();
                    }),
                    e
                );
            })(),
            p = new ((function () {
                function e() {
                    this.instance = null;
                }
                return (
                    (e.prototype.setInstance = function (e) {
                        this.instance = e;
                    }),
                    (e.prototype.getInstance = function () {
                        if (!this.instance) throw new Error("ApiContainer: instance not initialized");
                        return this.instance;
                    }),
                    e
                );
            })())(),
            d = function (e, t, n, r) {
                return new (n || (n = Promise))(function (o, i) {
                    function s(e) {
                        try {
                            u(r.next(e));
                        } catch (e) {
                            i(e);
                        }
                    }
                    function a(e) {
                        try {
                            u(r.throw(e));
                        } catch (e) {
                            i(e);
                        }
                    }
                    function u(e) {
                        var t;
                        e.done
                            ? o(e.value)
                            : ((t = e.value),
                                t instanceof n
                                    ? t
                                    : new n(function (e) {
                                        e(t);
                                    })).then(s, a);
                    }
                    u((r = r.apply(e, t || [])).next());
                });
            },
            h = function (e, t) {
                var n,
                    r,
                    o,
                    i,
                    s = {
                        label: 0,
                        sent: function () {
                            if (1 & o[0]) throw o[1];
                            return o[1];
                        },
                        trys: [],
                        ops: [],
                    };
                return (
                    (i = { next: a(0), throw: a(1), return: a(2) }),
                    "function" == typeof Symbol &&
                    (i[Symbol.iterator] = function () {
                        return this;
                    }),
                    i
                );
                function a(i) {
                    return function (a) {
                        return (function (i) {
                            if (n) throw new TypeError("Generator is already executing.");
                            for (; s;)
                                try {
                                    if (((n = 1), r && (o = 2 & i[0] ? r.return : i[0] ? r.throw || ((o = r.return) && o.call(r), 0) : r.next) && !(o = o.call(r, i[1])).done)) return o;
                                    switch (((r = 0), o && (i = [2 & i[0], o.value]), i[0])) {
                                        case 0:
                                        case 1:
                                            o = i;
                                            break;
                                        case 4:
                                            return s.label++, { value: i[1], done: !1 };
                                        case 5:
                                            s.label++, (r = i[1]), (i = [0]);
                                            continue;
                                        case 7:
                                            (i = s.ops.pop()), s.trys.pop();
                                            continue;
                                        default:
                                            if (!((o = s.trys), (o = o.length > 0 && o[o.length - 1]) || (6 !== i[0] && 2 !== i[0]))) {
                                                s = 0;
                                                continue;
                                            }
                                            if (3 === i[0] && (!o || (i[1] > o[0] && i[1] < o[3]))) {
                                                s.label = i[1];
                                                break;
                                            }
                                            if (6 === i[0] && s.label < o[1]) {
                                                (s.label = o[1]), (o = i);
                                                break;
                                            }
                                            if (o && s.label < o[2]) {
                                                (s.label = o[2]), s.ops.push(i);
                                                break;
                                            }
                                            o[2] && s.ops.pop(), s.trys.pop();
                                            continue;
                                    }
                                    i = t.call(e, s);
                                } catch (e) {
                                    (i = [6, e]), (r = 0);
                                } finally {
                                    n = o = 0;
                                }
                            if (5 & i[0]) throw i[1];
                            return { value: i[0] ? i[1] : void 0, done: !0 };
                        })([i, a]);
                    };
                }
            },
            m = (function () {
                function e(e, t, n) {
                    var r = this;
                    (this.paymentData = e),
                        (this.callbacks = t),
                        (this.onIncompletePaymentFound = n),
                        (this.runPaymentFlow = function () {
                            return d(r, void 0, void 0, function () {
                                var e, t, n, r, o, i, a, u;
                                return h(this, function (c) {
                                    switch (c.label) {
                                        case 0:
                                            return c.trys.push([0, 11, , 12]), (e = ""), [4, s.sendSDKMessage({ type: "@pi:app:payments:prepare_payment_flow" })];
                                        case 1:
                                            if ((t = c.sent()).payload.pending) return [3, 7];
                                            c.label = 2;
                                        case 2:
                                            return c.trys.push([2, 4, , 6]), [4, ((f = this.paymentData), p.getInstance().post("/v2/payments", f))];
                                        case 3:
                                            return (n = c.sent()), (e = n.identifier), [3, 6];
                                        case 4:
                                            return (r = c.sent()), [4, s.sendSDKMessage({ type: "@pi:app:payments:show_pre_payment_error", payload: { paymentError: r.response.data.error } })];
                                        case 5:
                                            return c.sent(), this.callbacks.onError(r), [2, console.error(r)];
                                        case 6:
                                            return [3, 8];
                                        case 7:
                                            return (o = t.payload.pendingPayment), (i = new Error("A pending payment needs to be handled.")), this.callbacks.onError(i, o), [2, this.onIncompletePaymentFound(o)];
                                        case 8:
                                            return [4, s.sendSDKMessage({ type: "@pi:app:payments:start_payment_flow", payload: { paymentId: e } })];
                                        case 9:
                                            return c.sent(), this.callbacks.onReadyForServerApproval(e), [4, s.sendSDKMessage({ type: "@pi:app:payments:wait_for_transaction" })];
                                        case 10:
                                            return (a = c.sent()).payload.cancelled ? this.callbacks.onCancel(a.payload.paymentId) : this.callbacks.onReadyForServerCompletion(a.payload.paymentId, a.payload.txid), [3, 12];
                                        case 11:
                                            throw ((u = c.sent()), this.callbacks.onError(u), u);
                                        case 12:
                                            return [2];
                                    }
                                    var f;
                                });
                            });
                        }),
                        this.runPaymentFlow();
                }
                return (
                    (e.checkForPendingPayment = function (e) {
                        return d(void 0, void 0, void 0, function () {
                            var t;
                            return h(this, function (n) {
                                switch (n.label) {
                                    case 0:
                                        return [4, p.getInstance().get("/v2/payments/incomplete")];
                                    case 1:
                                        return (t = n.sent()).exists && e(t.payment), [2];
                                }
                            });
                        });
                    }),
                    e
                );
            })(),
            y = function (e, t, n, r) {
                return new (n || (n = Promise))(function (o, i) {
                    function s(e) {
                        try {
                            u(r.next(e));
                        } catch (e) {
                            i(e);
                        }
                    }
                    function a(e) {
                        try {
                            u(r.throw(e));
                        } catch (e) {
                            i(e);
                        }
                    }
                    function u(e) {
                        var t;
                        e.done
                            ? o(e.value)
                            : ((t = e.value),
                                t instanceof n
                                    ? t
                                    : new n(function (e) {
                                        e(t);
                                    })).then(s, a);
                    }
                    u((r = r.apply(e, t || [])).next());
                });
            },
            v = function (e, t) {
                var n,
                    r,
                    o,
                    i,
                    s = {
                        label: 0,
                        sent: function () {
                            if (1 & o[0]) throw o[1];
                            return o[1];
                        },
                        trys: [],
                        ops: [],
                    };
                return (
                    (i = { next: a(0), throw: a(1), return: a(2) }),
                    "function" == typeof Symbol &&
                    (i[Symbol.iterator] = function () {
                        return this;
                    }),
                    i
                );
                function a(i) {
                    return function (a) {
                        return (function (i) {
                            if (n) throw new TypeError("Generator is already executing.");
                            for (; s;)
                                try {
                                    if (((n = 1), r && (o = 2 & i[0] ? r.return : i[0] ? r.throw || ((o = r.return) && o.call(r), 0) : r.next) && !(o = o.call(r, i[1])).done)) return o;
                                    switch (((r = 0), o && (i = [2 & i[0], o.value]), i[0])) {
                                        case 0:
                                        case 1:
                                            o = i;
                                            break;
                                        case 4:
                                            return s.label++, { value: i[1], done: !1 };
                                        case 5:
                                            s.label++, (r = i[1]), (i = [0]);
                                            continue;
                                        case 7:
                                            (i = s.ops.pop()), s.trys.pop();
                                            continue;
                                        default:
                                            if (!((o = s.trys), (o = o.length > 0 && o[o.length - 1]) || (6 !== i[0] && 2 !== i[0]))) {
                                                s = 0;
                                                continue;
                                            }
                                            if (3 === i[0] && (!o || (i[1] > o[0] && i[1] < o[3]))) {
                                                s.label = i[1];
                                                break;
                                            }
                                            if (6 === i[0] && s.label < o[1]) {
                                                (s.label = o[1]), (o = i);
                                                break;
                                            }
                                            if (o && s.label < o[2]) {
                                                (s.label = o[2]), s.ops.push(i);
                                                break;
                                            }
                                            o[2] && s.ops.pop(), s.trys.pop();
                                            continue;
                                    }
                                    i = t.call(e, s);
                                } catch (e) {
                                    (i = [6, e]), (r = 0);
                                } finally {
                                    n = o = 0;
                                }
                            if (5 & i[0]) throw i[1];
                            return { value: i[0] ? i[1] : void 0, done: !0 };
                        })([i, a]);
                    };
                }
            },
            w = function (e) {
                return y(void 0, void 0, void 0, function () {
                    return v(this, function (t) {
                        switch (t.label) {
                            case 0:
                                return [4, s.sendSDKMessage({ type: "@pi:app:sdk:open_consent_modal", payload: { scopes: e } })];
                            case 1:
                                return [2, t.sent().payload];
                        }
                    });
                });
            },
            g = function (e, t, n, r) {
                return new (n || (n = Promise))(function (o, i) {
                    function s(e) {
                        try {
                            u(r.next(e));
                        } catch (e) {
                            i(e);
                        }
                    }
                    function a(e) {
                        try {
                            u(r.throw(e));
                        } catch (e) {
                            i(e);
                        }
                    }
                    function u(e) {
                        var t;
                        e.done
                            ? o(e.value)
                            : ((t = e.value),
                                t instanceof n
                                    ? t
                                    : new n(function (e) {
                                        e(t);
                                    })).then(s, a);
                    }
                    u((r = r.apply(e, t || [])).next());
                });
            },
            b = function (e, t) {
                var n,
                    r,
                    o,
                    i,
                    s = {
                        label: 0,
                        sent: function () {
                            if (1 & o[0]) throw o[1];
                            return o[1];
                        },
                        trys: [],
                        ops: [],
                    };
                return (
                    (i = { next: a(0), throw: a(1), return: a(2) }),
                    "function" == typeof Symbol &&
                    (i[Symbol.iterator] = function () {
                        return this;
                    }),
                    i
                );
                function a(i) {
                    return function (a) {
                        return (function (i) {
                            if (n) throw new TypeError("Generator is already executing.");
                            for (; s;)
                                try {
                                    if (((n = 1), r && (o = 2 & i[0] ? r.return : i[0] ? r.throw || ((o = r.return) && o.call(r), 0) : r.next) && !(o = o.call(r, i[1])).done)) return o;
                                    switch (((r = 0), o && (i = [2 & i[0], o.value]), i[0])) {
                                        case 0:
                                        case 1:
                                            o = i;
                                            break;
                                        case 4:
                                            return s.label++, { value: i[1], done: !1 };
                                        case 5:
                                            s.label++, (r = i[1]), (i = [0]);
                                            continue;
                                        case 7:
                                            (i = s.ops.pop()), s.trys.pop();
                                            continue;
                                        default:
                                            if (!((o = s.trys), (o = o.length > 0 && o[o.length - 1]) || (6 !== i[0] && 2 !== i[0]))) {
                                                s = 0;
                                                continue;
                                            }
                                            if (3 === i[0] && (!o || (i[1] > o[0] && i[1] < o[3]))) {
                                                s.label = i[1];
                                                break;
                                            }
                                            if (6 === i[0] && s.label < o[1]) {
                                                (s.label = o[1]), (o = i);
                                                break;
                                            }
                                            if (o && s.label < o[2]) {
                                                (s.label = o[2]), s.ops.push(i);
                                                break;
                                            }
                                            o[2] && s.ops.pop(), s.trys.pop();
                                            continue;
                                    }
                                    i = t.call(e, s);
                                } catch (e) {
                                    (i = [6, e]), (r = 0);
                                } finally {
                                    n = o = 0;
                                }
                            if (5 & i[0]) throw i[1];
                            return { value: i[0] ? i[1] : void 0, done: !0 };
                        })([i, a]);
                    };
                }
            },
            x = ["payments", "username", "roles"],
            E = function () {
                var e = this;
                (this.initialized = !1),
                    (this.api = new l()),
                    (this.init = function (t) {
                        var n = t.version,
                            r = t.sandbox;
                        if ("2.0" !== n) throw new Error("Unrecognized version number passed to Pi.init()");
                        r && s.setSandboxMode(!0), (e.initialized = !0);
                    }),
                    (this.authenticate = function (t, n) {
                        return g(e, void 0, void 0, function () {
                            var e, r;
                            return b(this, function (o) {
                                switch (o.label) {
                                    case 0:
                                        if (!this.initialized) throw new Error("Pi Network SDK was not initialized. Call init() before any other method.");
                                        if (
                                            !t.every(function (e) {
                                                return x.includes(e);
                                            })
                                        )
                                            throw new Error("Invalid scopes found. Please check the scopes you're requesting again.");
                                        return [4, w(t)];
                                    case 1:
                                        return o.sent().cancelled
                                            ? [2, Promise.reject(new Error("User consent cancelled"))]
                                            : [
                                                4,
                                                y(void 0, void 0, void 0, function () {
                                                    return v(this, function (e) {
                                                        switch (e.label) {
                                                            case 0:
                                                                return [4, s.sendSDKMessage({ type: "@pi:app:sdk:communication_information_request" })];
                                                            case 1:
                                                                return [2, e.sent().payload];
                                                        }
                                                    });
                                                }),
                                            ];
                                    case 2:
                                        (e = o.sent()), this.api.init(e), (this.onIncompletePaymentFound = n), (o.label = 3);
                                    case 3:
                                        return o.trys.push([3, 5, , 6]), [4, this.api.get("/v2/me")];
                                    case 4:
                                        return (r = o.sent()) && this.api.accessToken ? (m.checkForPendingPayment(n), [2, { user: r, accessToken: this.api.accessToken }]) : [2, Promise.reject(new Error("Authentication failed."))];
                                    case 5:
                                        return o.sent(), [2, Promise.reject(new Error("Authentication failed."))];
                                    case 6:
                                        return [2];
                                }
                            });
                        });
                    }),
                    (this.createPayment = function (t, n) {
                        if (!e.initialized) throw new Error("Pi Network SDK was not initialized. Call init() before any other method.");
                        return new m(t, n, e.onIncompletePaymentFound);
                    }),
                    (this.openShareDialog = function (t, n) {
                        if (!e.initialized) throw new Error("Pi Network SDK was not initialized. Call init() before any other method.");
                        return new Promise(function (r, o) {
                            return g(e, void 0, void 0, function () {
                                return b(this, function (e) {
                                    return s.sendSDKMessage({ type: "@pi:app:share_dialog:open", payload: { title: t, sharingMessage: n } }), r(), [2];
                                });
                            });
                        });
                    }),
                    (this.openConversation = function (t) {
                        if (!e.initialized) throw new Error("Pi Network SDK was not initialized. Call init() before any other method.");
                        return new Promise(function (n, r) {
                            return g(e, void 0, void 0, function () {
                                return b(this, function (e) {
                                    return s.sendSDKMessage({ type: "@pi:app:conversation:open_with_id", payload: { conversationId: t } }), n(), [2];
                                });
                            });
                        });
                    }),
                    p.setInstance(this.api);
            };
        t.default = E;
    },
]);
