(globalThis["TURBOPACK"] || (globalThis["TURBOPACK"] = [])).push([typeof document === "object" ? document.currentScript : undefined,
"[project]/frontend/node_modules/@hookform/resolvers/dist/resolvers.mjs [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "toNestErrors",
    ()=>o,
    "validateFieldsNatively",
    ()=>s
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$react$2d$hook$2d$form$2f$dist$2f$index$2e$esm$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/frontend/node_modules/react-hook-form/dist/index.esm.mjs [app-client] (ecmascript)");
;
const t = (r, t, s)=>{
    if (r && "reportValidity" in r) {
        const o = (0, __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$react$2d$hook$2d$form$2f$dist$2f$index$2e$esm$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["get"])(s, t);
        r.setCustomValidity(o && o.message || ""), r.reportValidity();
    }
}, s = (e, r)=>{
    for(const s in r.fields){
        const o = r.fields[s];
        o && o.ref && "reportValidity" in o.ref ? t(o.ref, s, e) : o && o.refs && o.refs.forEach((r)=>t(r, s, e));
    }
}, o = (t, o)=>{
    o.shouldUseNativeValidation && s(t, o);
    const n = {};
    for(const s in t){
        const f = (0, __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$react$2d$hook$2d$form$2f$dist$2f$index$2e$esm$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["get"])(o.fields, s), c = Object.assign(t[s] || {}, {
            ref: f && f.refs ? f.refs[0] : f && f.ref
        });
        if (i(o.names || Object.keys(t), s)) {
            const t = Object.assign({}, (0, __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$react$2d$hook$2d$form$2f$dist$2f$index$2e$esm$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["get"])(n, s));
            (0, __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$react$2d$hook$2d$form$2f$dist$2f$index$2e$esm$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["set"])(t, "root", c), (0, __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$react$2d$hook$2d$form$2f$dist$2f$index$2e$esm$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["set"])(n, s, t);
        } else (0, __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$react$2d$hook$2d$form$2f$dist$2f$index$2e$esm$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["set"])(n, s, c);
    }
    return n;
}, i = (e, r)=>{
    const t = n(r).replace(/[.*+?^${}()|\\]/g, "\\$&");
    return e.some((e)=>n(e).match(`^${t}\\.\\d+`));
};
function n(e) {
    return e.replace(/\[(\d+)]/g, ".$1").replace(/[[\]]/g, "");
}
;
}),
"[project]/frontend/node_modules/@hookform/resolvers/zod/dist/zod.mjs [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "zodResolver",
    ()=>u
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f40$hookform$2f$resolvers$2f$dist$2f$resolvers$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/frontend/node_modules/@hookform/resolvers/dist/resolvers.mjs [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$react$2d$hook$2d$form$2f$dist$2f$index$2e$esm$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/frontend/node_modules/react-hook-form/dist/index.esm.mjs [app-client] (ecmascript)");
;
;
function o() {
    return o = ("TURBOPACK compile-time truthy", 1) ? Object.assign.bind() : "TURBOPACK unreachable", o.apply(null, arguments);
}
function t(r, e) {
    try {
        var n = r();
    } catch (r) {
        return e(r);
    }
    return n && n.then ? n.then(void 0, e) : n;
}
function s(r, e) {
    for(var o = Object.create(null); r.length;){
        var t = r[0], s = t.code, i = t.message, u = t.path.join(".");
        if (!o[u]) if ("unionErrors" in t) {
            var a, c, l = t.unionErrors.reduce(function(r, e) {
                return e.errors.length < r.errors.length ? e : r;
            }).errors[0];
            o[u] = {
                message: null != (a = null == l ? void 0 : l.message) ? a : i,
                type: null != (c = null == l ? void 0 : l.code) ? c : s
            };
        } else o[u] = {
            message: i,
            type: s
        };
        if ("unionErrors" in t && t.unionErrors.forEach(function(e) {
            return e.errors.forEach(function(e) {
                return r.push(e);
            });
        }), e) {
            var f = o[u].types, d = f && f[t.code];
            o[u] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$react$2d$hook$2d$form$2f$dist$2f$index$2e$esm$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["appendErrors"])(u, e, o, s, d ? [].concat(d, t.message) : t.message);
        }
        r.shift();
    }
    return o;
}
function i(r, e) {
    for(var t = Object.create(null), s = function() {
        var s = r[0], i = s.code, u = s.message, a = s.path.join(".");
        if (!t[a]) if ("invalid_union" === s.code && s.errors.length > 0) {
            var c, l, f = s.errors.reduce(function(r, e) {
                return e.length < r.length ? e : r;
            })[0];
            t[a] = {
                message: null != (c = null == f ? void 0 : f.message) ? c : u,
                type: null != (l = null == f ? void 0 : f.code) ? l : i
            };
        } else t[a] = {
            message: u,
            type: i
        };
        if ("invalid_union" === s.code && s.errors.forEach(function(e) {
            return e.forEach(function(e) {
                return r.push(o({}, e, {
                    path: [].concat(s.path, e.path)
                }));
            });
        }), e) {
            var d = t[a].types, h = d && d[s.code];
            t[a] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$react$2d$hook$2d$form$2f$dist$2f$index$2e$esm$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["appendErrors"])(a, e, t, i, h ? [].concat(h, s.message) : s.message);
        }
        r.shift();
    }; r.length;)s();
    return t;
}
function u(n, o, u) {
    if (void 0 === u && (u = {}), function(r) {
        return "_zod" in r && "object" == typeof r._zod;
    }(n)) return function(s, a, c) {
        try {
            return Promise.resolve(t(function() {
                function e(e) {
                    return c.shouldUseNativeValidation && (0, __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f40$hookform$2f$resolvers$2f$dist$2f$resolvers$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["validateFieldsNatively"])({}, c), {
                        errors: {},
                        values: u.raw ? Object.assign({}, s) : e
                    };
                }
                var t = n;
                return "sync" === u.mode ? e(t.parse(s, o)) : Promise.resolve(t.parseAsync(s, o)).then(e);
            }, function(r) {
                if (function(r) {
                    var e;
                    return !(null == r || null == (e = r._zod) || null == (e = e.traits) || !e.has("$ZodError"));
                }(r)) return {
                    values: {},
                    errors: (0, __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f40$hookform$2f$resolvers$2f$dist$2f$resolvers$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["toNestErrors"])(i(r.issues, !c.shouldUseNativeValidation && "all" === c.criteriaMode), c)
                };
                throw r;
            }));
        } catch (r) {
            return Promise.reject(r);
        }
    };
    if (function(r) {
        return "_def" in r && "object" == typeof r._def;
    }(n)) return function(i, a, c) {
        try {
            return Promise.resolve(t(function() {
                return Promise.resolve(n["sync" === u.mode ? "parse" : "parseAsync"](i, o)).then(function(e) {
                    return c.shouldUseNativeValidation && (0, __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f40$hookform$2f$resolvers$2f$dist$2f$resolvers$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["validateFieldsNatively"])({}, c), {
                        errors: {},
                        values: u.raw ? Object.assign({}, i) : e
                    };
                });
            }, function(r) {
                if (function(r) {
                    return Array.isArray(null == r ? void 0 : r.issues);
                }(r)) return {
                    values: {},
                    errors: (0, __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f40$hookform$2f$resolvers$2f$dist$2f$resolvers$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["toNestErrors"])(s(r.errors, !c.shouldUseNativeValidation && "all" === c.criteriaMode), c)
                };
                throw r;
            }));
        } catch (r) {
            return Promise.reject(r);
        }
    };
    throw new Error("Invalid input: not a Zod schema");
}
;
}),
"[project]/frontend/node_modules/@mui/icons-material/Close.mjs [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>__TURBOPACK__default__export__
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f40$mui$2f$material$2f$SvgIcon$2f$createSvgIcon$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__createSvgIcon$3e$__$3c$export__createSvgIcon__as__default$3e$__ = __turbopack_context__.i("[project]/frontend/node_modules/@mui/material/SvgIcon/createSvgIcon.mjs [app-client] (ecmascript) <export default as createSvgIcon> <export createSvgIcon as default>");
var __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/frontend/node_modules/next/dist/compiled/react/jsx-runtime.js [app-client] (ecmascript)");
"use client";
;
;
const __TURBOPACK__default__export__ = (0, __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f40$mui$2f$material$2f$SvgIcon$2f$createSvgIcon$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__createSvgIcon$3e$__$3c$export__createSvgIcon__as__default$3e$__["default"])(/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsx"])("path", {
    d: "M19 6.41 17.59 5 12 10.59 6.41 5 5 6.41 10.59 12 5 17.59 6.41 19 12 13.41 17.59 19 19 17.59 13.41 12z"
}), 'Close');
}),
"[project]/frontend/node_modules/@mui/icons-material/Delete.mjs [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>__TURBOPACK__default__export__
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f40$mui$2f$material$2f$SvgIcon$2f$createSvgIcon$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__createSvgIcon$3e$__$3c$export__createSvgIcon__as__default$3e$__ = __turbopack_context__.i("[project]/frontend/node_modules/@mui/material/SvgIcon/createSvgIcon.mjs [app-client] (ecmascript) <export default as createSvgIcon> <export createSvgIcon as default>");
var __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/frontend/node_modules/next/dist/compiled/react/jsx-runtime.js [app-client] (ecmascript)");
"use client";
;
;
const __TURBOPACK__default__export__ = (0, __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f40$mui$2f$material$2f$SvgIcon$2f$createSvgIcon$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__createSvgIcon$3e$__$3c$export__createSvgIcon__as__default$3e$__["default"])(/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsx"])("path", {
    d: "M6 19c0 1.1.9 2 2 2h8c1.1 0 2-.9 2-2V7H6zM19 4h-3.5l-1-1h-5l-1 1H5v2h14z"
}), 'Delete');
}),
"[project]/frontend/node_modules/@mui/icons-material/EditOutlined.mjs [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>__TURBOPACK__default__export__
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f40$mui$2f$material$2f$SvgIcon$2f$createSvgIcon$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__createSvgIcon$3e$__$3c$export__createSvgIcon__as__default$3e$__ = __turbopack_context__.i("[project]/frontend/node_modules/@mui/material/SvgIcon/createSvgIcon.mjs [app-client] (ecmascript) <export default as createSvgIcon> <export createSvgIcon as default>");
var __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/frontend/node_modules/next/dist/compiled/react/jsx-runtime.js [app-client] (ecmascript)");
"use client";
;
;
const __TURBOPACK__default__export__ = (0, __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f40$mui$2f$material$2f$SvgIcon$2f$createSvgIcon$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__createSvgIcon$3e$__$3c$export__createSvgIcon__as__default$3e$__["default"])(/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsx"])("path", {
    d: "m14.06 9.02.92.92L5.92 19H5v-.92zM17.66 3c-.25 0-.51.1-.7.29l-1.83 1.83 3.75 3.75 1.83-1.83c.39-.39.39-1.02 0-1.41l-2.34-2.34c-.2-.2-.45-.29-.71-.29m-3.6 3.19L3 17.25V21h3.75L17.81 9.94z"
}), 'EditOutlined');
}),
"[project]/frontend/node_modules/@mui/material/node_modules/react-is/cjs/react-is.development.js [app-client] (ecmascript)", ((__turbopack_context__, module, exports) => {
"use strict";

var __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$next$2f$dist$2f$build$2f$polyfills$2f$process$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = /*#__PURE__*/ __turbopack_context__.i("[project]/frontend/node_modules/next/dist/build/polyfills/process.js [app-client] (ecmascript)");
/**
 * @license React
 * react-is.development.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */ "use strict";
"production" !== ("TURBOPACK compile-time value", "development") && function() {
    function typeOf(object) {
        if ("object" === typeof object && null !== object) {
            var $$typeof = object.$$typeof;
            switch($$typeof){
                case REACT_ELEMENT_TYPE:
                    switch(object = object.type, object){
                        case REACT_FRAGMENT_TYPE:
                        case REACT_PROFILER_TYPE:
                        case REACT_STRICT_MODE_TYPE:
                        case REACT_SUSPENSE_TYPE:
                        case REACT_SUSPENSE_LIST_TYPE:
                        case REACT_VIEW_TRANSITION_TYPE:
                            return object;
                        default:
                            switch(object = object && object.$$typeof, object){
                                case REACT_CONTEXT_TYPE:
                                case REACT_FORWARD_REF_TYPE:
                                case REACT_LAZY_TYPE:
                                case REACT_MEMO_TYPE:
                                    return object;
                                case REACT_CONSUMER_TYPE:
                                    return object;
                                default:
                                    return $$typeof;
                            }
                    }
                case REACT_PORTAL_TYPE:
                    return $$typeof;
            }
        }
    }
    var REACT_ELEMENT_TYPE = Symbol.for("react.transitional.element"), REACT_PORTAL_TYPE = Symbol.for("react.portal"), REACT_FRAGMENT_TYPE = Symbol.for("react.fragment"), REACT_STRICT_MODE_TYPE = Symbol.for("react.strict_mode"), REACT_PROFILER_TYPE = Symbol.for("react.profiler"), REACT_CONSUMER_TYPE = Symbol.for("react.consumer"), REACT_CONTEXT_TYPE = Symbol.for("react.context"), REACT_FORWARD_REF_TYPE = Symbol.for("react.forward_ref"), REACT_SUSPENSE_TYPE = Symbol.for("react.suspense"), REACT_SUSPENSE_LIST_TYPE = Symbol.for("react.suspense_list"), REACT_MEMO_TYPE = Symbol.for("react.memo"), REACT_LAZY_TYPE = Symbol.for("react.lazy"), REACT_VIEW_TRANSITION_TYPE = Symbol.for("react.view_transition"), REACT_CLIENT_REFERENCE = Symbol.for("react.client.reference");
    exports.ContextConsumer = REACT_CONSUMER_TYPE;
    exports.ContextProvider = REACT_CONTEXT_TYPE;
    exports.Element = REACT_ELEMENT_TYPE;
    exports.ForwardRef = REACT_FORWARD_REF_TYPE;
    exports.Fragment = REACT_FRAGMENT_TYPE;
    exports.Lazy = REACT_LAZY_TYPE;
    exports.Memo = REACT_MEMO_TYPE;
    exports.Portal = REACT_PORTAL_TYPE;
    exports.Profiler = REACT_PROFILER_TYPE;
    exports.StrictMode = REACT_STRICT_MODE_TYPE;
    exports.Suspense = REACT_SUSPENSE_TYPE;
    exports.SuspenseList = REACT_SUSPENSE_LIST_TYPE;
    exports.isContextConsumer = function(object) {
        return typeOf(object) === REACT_CONSUMER_TYPE;
    };
    exports.isContextProvider = function(object) {
        return typeOf(object) === REACT_CONTEXT_TYPE;
    };
    exports.isElement = function(object) {
        return "object" === typeof object && null !== object && object.$$typeof === REACT_ELEMENT_TYPE;
    };
    exports.isForwardRef = function(object) {
        return typeOf(object) === REACT_FORWARD_REF_TYPE;
    };
    exports.isFragment = function(object) {
        return typeOf(object) === REACT_FRAGMENT_TYPE;
    };
    exports.isLazy = function(object) {
        return typeOf(object) === REACT_LAZY_TYPE;
    };
    exports.isMemo = function(object) {
        return typeOf(object) === REACT_MEMO_TYPE;
    };
    exports.isPortal = function(object) {
        return typeOf(object) === REACT_PORTAL_TYPE;
    };
    exports.isProfiler = function(object) {
        return typeOf(object) === REACT_PROFILER_TYPE;
    };
    exports.isStrictMode = function(object) {
        return typeOf(object) === REACT_STRICT_MODE_TYPE;
    };
    exports.isSuspense = function(object) {
        return typeOf(object) === REACT_SUSPENSE_TYPE;
    };
    exports.isSuspenseList = function(object) {
        return typeOf(object) === REACT_SUSPENSE_LIST_TYPE;
    };
    exports.isValidElementType = function(type) {
        return "string" === typeof type || "function" === typeof type || type === REACT_FRAGMENT_TYPE || type === REACT_PROFILER_TYPE || type === REACT_STRICT_MODE_TYPE || type === REACT_SUSPENSE_TYPE || type === REACT_SUSPENSE_LIST_TYPE || type === REACT_VIEW_TRANSITION_TYPE || "object" === typeof type && null !== type && (type.$$typeof === REACT_LAZY_TYPE || type.$$typeof === REACT_MEMO_TYPE || type.$$typeof === REACT_CONTEXT_TYPE || type.$$typeof === REACT_CONSUMER_TYPE || type.$$typeof === REACT_FORWARD_REF_TYPE || type.$$typeof === REACT_CLIENT_REFERENCE || void 0 !== type.getModuleId) ? !0 : !1;
    };
    exports.typeOf = typeOf;
}();
}),
"[project]/frontend/node_modules/@mui/material/node_modules/react-is/index.js [app-client] (ecmascript)", ((__turbopack_context__, module, exports) => {
"use strict";

var __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$next$2f$dist$2f$build$2f$polyfills$2f$process$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = /*#__PURE__*/ __turbopack_context__.i("[project]/frontend/node_modules/next/dist/build/polyfills/process.js [app-client] (ecmascript)");
'use strict';
if ("TURBOPACK compile-time falsy", 0) //TURBOPACK unreachable
;
else {
    module.exports = __turbopack_context__.r("[project]/frontend/node_modules/@mui/material/node_modules/react-is/cjs/react-is.development.js [app-client] (ecmascript)");
}
}),
"[project]/frontend/node_modules/@mui/system/GlobalStyles/GlobalStyles.mjs [app-client] (ecmascript) <export default as GlobalStyles>", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "GlobalStyles",
    ()=>__TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f40$mui$2f$system$2f$GlobalStyles$2f$GlobalStyles$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"]
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f40$mui$2f$system$2f$GlobalStyles$2f$GlobalStyles$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/frontend/node_modules/@mui/system/GlobalStyles/GlobalStyles.mjs [app-client] (ecmascript)");
}),
"[project]/frontend/node_modules/@mui/system/createBox/createBox.mjs [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>createBox
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/frontend/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$clsx$2f$dist$2f$clsx$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/frontend/node_modules/clsx/dist/clsx.mjs [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f40$mui$2f$styled$2d$engine$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__ = __turbopack_context__.i("[project]/frontend/node_modules/@mui/styled-engine/index.mjs [app-client] (ecmascript) <locals>");
var __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f40$mui$2f$system$2f$styleFunctionSx$2f$styleFunctionSx$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/frontend/node_modules/@mui/system/styleFunctionSx/styleFunctionSx.mjs [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f40$mui$2f$system$2f$useTheme$2f$useTheme$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/frontend/node_modules/@mui/system/useTheme/useTheme.mjs [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/frontend/node_modules/next/dist/compiled/react/jsx-runtime.js [app-client] (ecmascript)");
'use client';
;
;
;
;
;
;
function createBox(options = {}) {
    const { themeId, defaultTheme, defaultClassName = 'MuiBox-root', generateClassName } = options;
    const BoxRoot = (0, __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f40$mui$2f$styled$2d$engine$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__["default"])('div', {
        shouldForwardProp: (prop)=>prop !== 'theme' && prop !== 'sx' && prop !== 'as'
    })(__TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f40$mui$2f$system$2f$styleFunctionSx$2f$styleFunctionSx$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"]);
    const Box = /*#__PURE__*/ __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["forwardRef"](function Box(inProps, ref) {
        const theme = (0, __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f40$mui$2f$system$2f$useTheme$2f$useTheme$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"])(defaultTheme);
        const { className, component = 'div', ...other } = inProps;
        return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsx"])(BoxRoot, {
            as: component,
            ref: ref,
            className: (0, __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$clsx$2f$dist$2f$clsx$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"])(className, generateClassName ? generateClassName(defaultClassName) : defaultClassName),
            theme: themeId ? theme[themeId] || theme : theme,
            ...other
        });
    });
    return Box;
}
}),
"[project]/frontend/node_modules/@mui/system/createBox/createBox.mjs [app-client] (ecmascript) <export default as createBox>", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "createBox",
    ()=>__TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f40$mui$2f$system$2f$createBox$2f$createBox$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"]
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f40$mui$2f$system$2f$createBox$2f$createBox$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/frontend/node_modules/@mui/system/createBox/createBox.mjs [app-client] (ecmascript)");
}),
"[project]/frontend/node_modules/@mui/system/styleFunctionSx/extendSxProp.mjs [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>extendSxProp
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f40$mui$2f$utils$2f$deepmerge$2f$deepmerge$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/frontend/node_modules/@mui/utils/deepmerge/deepmerge.mjs [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f40$mui$2f$system$2f$styleFunctionSx$2f$defaultSxConfig$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/frontend/node_modules/@mui/system/styleFunctionSx/defaultSxConfig.mjs [app-client] (ecmascript)");
;
;
const splitProps = (props)=>{
    const result = {
        systemProps: {},
        otherProps: {}
    };
    const config = props?.theme?.unstable_sxConfig ?? __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f40$mui$2f$system$2f$styleFunctionSx$2f$defaultSxConfig$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"];
    Object.keys(props).forEach((prop)=>{
        if (config[prop]) {
            result.systemProps[prop] = props[prop];
        } else {
            result.otherProps[prop] = props[prop];
        }
    });
    return result;
};
function extendSxProp(props) {
    const { sx: inSx, ...other } = props;
    const { systemProps, otherProps } = splitProps(other);
    let finalSx;
    if (Array.isArray(inSx)) {
        finalSx = [
            systemProps,
            ...inSx
        ];
    } else if (typeof inSx === 'function') {
        finalSx = (...args)=>{
            const result = inSx(...args);
            if (!(0, __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f40$mui$2f$utils$2f$deepmerge$2f$deepmerge$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["isPlainObject"])(result)) {
                return systemProps;
            }
            return {
                ...systemProps,
                ...result
            };
        };
    } else {
        finalSx = {
            ...systemProps,
            ...inSx
        };
    }
    return {
        ...otherProps,
        sx: finalSx
    };
}
}),
"[project]/frontend/node_modules/@mui/system/styleFunctionSx/extendSxProp.mjs [app-client] (ecmascript) <export default as extendSxProp>", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "extendSxProp",
    ()=>__TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f40$mui$2f$system$2f$styleFunctionSx$2f$extendSxProp$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"]
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f40$mui$2f$system$2f$styleFunctionSx$2f$extendSxProp$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/frontend/node_modules/@mui/system/styleFunctionSx/extendSxProp.mjs [app-client] (ecmascript)");
}),
"[project]/frontend/node_modules/@mui/system/useTheme/useTheme.mjs [app-client] (ecmascript) <export default as useTheme>", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "useTheme",
    ()=>__TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f40$mui$2f$system$2f$useTheme$2f$useTheme$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"]
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f40$mui$2f$system$2f$useTheme$2f$useTheme$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/frontend/node_modules/@mui/system/useTheme/useTheme.mjs [app-client] (ecmascript)");
}),
"[project]/frontend/node_modules/@mui/utils/ClassNameGenerator/ClassNameGenerator.mjs [app-client] (ecmascript) <export default as unstable_ClassNameGenerator>", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "unstable_ClassNameGenerator",
    ()=>__TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f40$mui$2f$utils$2f$ClassNameGenerator$2f$ClassNameGenerator$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"]
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f40$mui$2f$utils$2f$ClassNameGenerator$2f$ClassNameGenerator$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/frontend/node_modules/@mui/utils/ClassNameGenerator/ClassNameGenerator.mjs [app-client] (ecmascript)");
}),
"[project]/frontend/node_modules/@mui/utils/HTMLElementType/HTMLElementType.mjs [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>HTMLElementType
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$next$2f$dist$2f$build$2f$polyfills$2f$process$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = /*#__PURE__*/ __turbopack_context__.i("[project]/frontend/node_modules/next/dist/build/polyfills/process.js [app-client] (ecmascript)");
function HTMLElementType(props, propName, componentName, location, propFullName) {
    if ("TURBOPACK compile-time falsy", 0) //TURBOPACK unreachable
    ;
    const propValue = props[propName];
    const safePropName = propFullName || propName;
    if (propValue == null) {
        return null;
    }
    if (propValue && propValue.nodeType !== 1) {
        return new Error(`Invalid ${location} \`${safePropName}\` supplied to \`${componentName}\`. ` + `Expected an HTMLElement.`);
    }
    return null;
}
}),
"[project]/frontend/node_modules/@mui/utils/appendOwnerState/appendOwnerState.mjs [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>__TURBOPACK__default__export__
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f40$mui$2f$utils$2f$isHostComponent$2f$isHostComponent$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/frontend/node_modules/@mui/utils/isHostComponent/isHostComponent.mjs [app-client] (ecmascript)");
;
/**
 * Type of the ownerState based on the type of an element it applies to.
 * This resolves to the provided OwnerState for React components and `undefined` for host components.
 * Falls back to `OwnerState | undefined` when the exact type can't be determined in development time.
 */ /**
 * Appends the ownerState object to the props, merging with the existing one if necessary.
 *
 * @param elementType Type of the element that owns the `existingProps`. If the element is a DOM node or undefined, `ownerState` is not applied.
 * @param otherProps Props of the element.
 * @param ownerState
 */ function appendOwnerState(elementType, otherProps, ownerState) {
    if (elementType === undefined || (0, __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f40$mui$2f$utils$2f$isHostComponent$2f$isHostComponent$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"])(elementType)) {
        return otherProps;
    }
    return {
        ...otherProps,
        ownerState: {
            ...otherProps.ownerState,
            ...ownerState
        }
    };
}
const __TURBOPACK__default__export__ = appendOwnerState;
}),
"[project]/frontend/node_modules/@mui/utils/chainPropTypes/chainPropTypes.mjs [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>chainPropTypes
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$next$2f$dist$2f$build$2f$polyfills$2f$process$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = /*#__PURE__*/ __turbopack_context__.i("[project]/frontend/node_modules/next/dist/build/polyfills/process.js [app-client] (ecmascript)");
function chainPropTypes(propType1, propType2) {
    if ("TURBOPACK compile-time falsy", 0) //TURBOPACK unreachable
    ;
    return function validate(...args) {
        return propType1(...args) || propType2(...args);
    };
}
}),
"[project]/frontend/node_modules/@mui/utils/contains/contains.mjs [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

/**
 * Copied from @base-ui/utils
 *
 * Shadow DOM-aware containment check.
 *
 * Native `parent.contains(child)` returns `false` when the child is inside a
 * shadow root that is a descendant of the parent. This function handles that
 * case by traversing up through shadow root hosts.
 *
 * @param parent - The potential ancestor element.
 * @param child - The potential descendant element.
 * @returns Whether `parent` contains `child`, even across shadow root boundaries.
 */ __turbopack_context__.s([
    "default",
    ()=>contains
]);
function contains(parent, child) {
    if (!parent || !child) {
        return false;
    }
    // First, attempt with the faster native method.
    if (parent.contains(child)) {
        return true;
    }
    // Then fall back to traversing out of shadow roots when needed.
    const rootNode = child.getRootNode?.();
    if (rootNode && rootNode instanceof ShadowRoot) {
        let next = child;
        while(next){
            if (parent === next) {
                return true;
            }
            next = next.parentNode ?? next.host ?? null;
        }
    }
    return false;
}
}),
"[project]/frontend/node_modules/@mui/utils/createChainedFunction/createChainedFunction.mjs [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

/**
 * Safe chained function.
 *
 * Will only create a new function if needed,
 * otherwise will pass back existing functions or null.
 */ __turbopack_context__.s([
    "default",
    ()=>createChainedFunction
]);
function createChainedFunction(...funcs) {
    return funcs.reduce((acc, func)=>{
        if (func == null) {
            return acc;
        }
        return function chainedFunction(...args) {
            acc.apply(this, args);
            func.apply(this, args);
        };
    }, ()=>{});
}
}),
"[project]/frontend/node_modules/@mui/utils/debounce/debounce.mjs [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

// Corresponds to 10 frames at 60 Hz.
// A few bytes payload overhead when lodash/debounce is ~3 kB and debounce ~300 B.
__turbopack_context__.s([
    "default",
    ()=>debounce
]);
function debounce(func, wait = 166) {
    let timeout;
    function debounced(...args) {
        const later = ()=>{
            // @ts-ignore
            func.apply(this, args);
        };
        clearTimeout(timeout);
        timeout = setTimeout(later, wait);
    }
    debounced.clear = ()=>{
        clearTimeout(timeout);
    };
    return debounced;
}
}),
"[project]/frontend/node_modules/@mui/utils/elementAcceptingRef/elementAcceptingRef.mjs [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>__TURBOPACK__default__export__
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$prop$2d$types$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/frontend/node_modules/prop-types/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f40$mui$2f$utils$2f$chainPropTypes$2f$chainPropTypes$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/frontend/node_modules/@mui/utils/chainPropTypes/chainPropTypes.mjs [app-client] (ecmascript)");
;
;
function isClassComponent(elementType) {
    // elementType.prototype?.isReactComponent
    const { prototype = {} } = elementType;
    return Boolean(prototype.isReactComponent);
}
function acceptingRef(props, propName, componentName, location, propFullName) {
    const element = props[propName];
    const safePropName = propFullName || propName;
    if (element == null || // When server-side rendering React doesn't warn either.
    // This is not an accurate check for SSR.
    // This is only in place for Emotion compat.
    // TODO: Revisit once https://github.com/react/react/issues/20047 is resolved.
    typeof window === 'undefined') {
        return null;
    }
    let warningHint;
    const elementType = element.type;
    /**
   * Blacklisting instead of whitelisting
   *
   * Blacklisting will miss some components, such as React.Fragment. Those will at least
   * trigger a warning in React.
   * We can't whitelist because there is no safe way to detect React.forwardRef
   * or class components. "Safe" means there's no public API.
   *
   */ if (typeof elementType === 'function' && !isClassComponent(elementType)) {
        warningHint = 'Did you accidentally use a plain function component for an element instead?';
    }
    if (warningHint !== undefined) {
        return new Error(`Invalid ${location} \`${safePropName}\` supplied to \`${componentName}\`. ` + `Expected an element that can hold a ref. ${warningHint} ` + 'For more information see https://mui.com/r/caveat-with-refs-guide');
    }
    return null;
}
const elementAcceptingRef = (0, __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f40$mui$2f$utils$2f$chainPropTypes$2f$chainPropTypes$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"])(__TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$prop$2d$types$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].element, acceptingRef);
elementAcceptingRef.isRequired = (0, __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f40$mui$2f$utils$2f$chainPropTypes$2f$chainPropTypes$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"])(__TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$prop$2d$types$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].element.isRequired, acceptingRef);
const __TURBOPACK__default__export__ = elementAcceptingRef;
}),
"[project]/frontend/node_modules/@mui/utils/elementTypeAcceptingRef/elementTypeAcceptingRef.mjs [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>__TURBOPACK__default__export__
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$prop$2d$types$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/frontend/node_modules/prop-types/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/frontend/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f40$mui$2f$utils$2f$chainPropTypes$2f$chainPropTypes$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/frontend/node_modules/@mui/utils/chainPropTypes/chainPropTypes.mjs [app-client] (ecmascript)");
;
;
;
function isClassComponent(elementType) {
    // elementType.prototype?.isReactComponent
    const { prototype = {} } = elementType;
    return Boolean(prototype.isReactComponent);
}
function elementTypeAcceptingRef(props, propName, componentName, location, propFullName) {
    const propValue = props[propName];
    const safePropName = propFullName || propName;
    if (propValue == null || // When server-side rendering React doesn't warn either.
    // This is not an accurate check for SSR.
    // This is only in place for emotion compat.
    // TODO: Revisit once https://github.com/react/react/issues/20047 is resolved.
    typeof window === 'undefined') {
        return null;
    }
    let warningHint;
    /**
   * Blacklisting instead of whitelisting
   *
   * Blacklisting will miss some components, such as React.Fragment. Those will at least
   * trigger a warning in React.
   * We can't whitelist because there is no safe way to detect React.forwardRef
   * or class components. "Safe" means there's no public API.
   *
   */ if (typeof propValue === 'function' && !isClassComponent(propValue)) {
        warningHint = 'Did you accidentally provide a plain function component instead?';
    }
    if (propValue === __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Fragment"]) {
        warningHint = 'Did you accidentally provide a React.Fragment instead?';
    }
    if (warningHint !== undefined) {
        // #host-reference
        return new Error(`Invalid ${location} \`${safePropName}\` supplied to \`${componentName}\`. ` + `Expected an element type that can hold a ref. ${warningHint} ` + 'For more information see https://mui.com/r/caveat-with-refs-guide');
    }
    return null;
}
const __TURBOPACK__default__export__ = (0, __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f40$mui$2f$utils$2f$chainPropTypes$2f$chainPropTypes$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"])(__TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$prop$2d$types$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].elementType, elementTypeAcceptingRef);
}),
"[project]/frontend/node_modules/@mui/utils/extractEventHandlers/extractEventHandlers.mjs [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>__TURBOPACK__default__export__
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f40$mui$2f$utils$2f$isEventHandler$2f$isEventHandler$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/frontend/node_modules/@mui/utils/isEventHandler/isEventHandler.mjs [app-client] (ecmascript)");
;
/**
 * Extracts event handlers from a given object.
 * A prop is considered an event handler if it is a function and its name starts with `on`.
 *
 * @param object An object to extract event handlers from.
 */ function extractEventHandlers(object) {
    if (object === undefined) {
        return {};
    }
    const result = {};
    for (const prop of Object.keys(object)){
        if ((0, __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f40$mui$2f$utils$2f$isEventHandler$2f$isEventHandler$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"])(prop, object[prop])) {
            result[prop] = object[prop];
        }
    }
    return result;
}
const __TURBOPACK__default__export__ = extractEventHandlers;
}),
"[project]/frontend/node_modules/@mui/utils/fastObjectShallowCompare/fastObjectShallowCompare.mjs [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>fastObjectShallowCompare
]);
// From mui-x: https://github.com/mui/mui-x/blob/bb92fb0adac6764461adea9a9d7d43f1095f49e5/packages/x-internals/src/fastObjectShallowCompare/fastObjectShallowCompare.ts
/* eslint-disable guard-for-in */ const is = Object.is;
function fastObjectShallowCompare(a, b) {
    if (a === b) {
        return true;
    }
    if (!(a instanceof Object) || !(b instanceof Object)) {
        return false;
    }
    let aLength = 0;
    let bLength = 0;
    for(const key in a){
        aLength += 1;
        if (!is(a[key], b[key])) {
            return false;
        }
        if (!(key in b)) {
            return false;
        }
    }
    // eslint-disable-next-line @typescript-eslint/naming-convention, @typescript-eslint/no-unused-vars
    for(const _ in b){
        bLength += 1;
    }
    return aLength === bLength;
}
}),
"[project]/frontend/node_modules/@mui/utils/getActiveElement/getActiveElement.mjs [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

/**
 * Gets the actual active element, traversing through shadow roots if necessary.
 *
 * When an element inside a shadow root has focus, `document.activeElement` returns
 * the shadow host element. This function recursively traverses shadow roots to find
 * the actual focused element.
 *
 * @param root - The document or shadow root to start the search from.
 * @returns The actual focused element, or null if no element has focus.
 *
 * @example
 * // In a shadow DOM context
 * const activeElement = getActiveElement(document);
 * // Returns the actual focused element inside the shadow root
 *
 * @example
 * // Starting from a specific document
 * const activeElement = getActiveElement(ownerDocument(element));
 */ __turbopack_context__.s([
    "default",
    ()=>activeElement
]);
function activeElement(doc) {
    let element = doc.activeElement;
    while(element?.shadowRoot?.activeElement != null){
        element = element.shadowRoot.activeElement;
    }
    return element;
}
}),
"[project]/frontend/node_modules/@mui/utils/getReactElementRef/getReactElementRef.mjs [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>getReactElementRef
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/frontend/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
;
function getReactElementRef(element) {
    // 'ref' is passed as prop in React 19, whereas 'ref' is directly attached to children in older versions
    if (parseInt(__TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["version"], 10) >= 19) {
        return element?.props?.ref || null;
    }
    // @ts-expect-error element.ref is not included in the ReactElement type
    // https://github.com/DefinitelyTyped/DefinitelyTyped/discussions/70189
    return element?.ref || null;
}
}),
"[project]/frontend/node_modules/@mui/utils/getScrollbarSize/getScrollbarSize.mjs [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

// A change of the browser zoom change the scrollbar size.
// Credit https://github.com/twbs/bootstrap/blob/488fd8afc535ca3a6ad4dc581f5e89217b6a36ac/js/src/util/scrollbar.js#L14-L18
__turbopack_context__.s([
    "default",
    ()=>getScrollbarSize
]);
function getScrollbarSize(win = window) {
    // https://developer.mozilla.org/en-US/docs/Web/API/Window/innerWidth#usage_notes
    const documentWidth = win.document.documentElement.clientWidth;
    return win.innerWidth - documentWidth;
}
}),
"[project]/frontend/node_modules/@mui/utils/integerPropType/integerPropType.mjs [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>__TURBOPACK__default__export__,
    "getTypeByValue",
    ()=>getTypeByValue
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$next$2f$dist$2f$build$2f$polyfills$2f$process$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = /*#__PURE__*/ __turbopack_context__.i("[project]/frontend/node_modules/next/dist/build/polyfills/process.js [app-client] (ecmascript)");
function getTypeByValue(value) {
    const valueType = typeof value;
    switch(valueType){
        case 'number':
            if (Number.isNaN(value)) {
                return 'NaN';
            }
            if (!Number.isFinite(value)) {
                return 'Infinity';
            }
            if (value !== Math.floor(value)) {
                return 'float';
            }
            return 'number';
        case 'object':
            if (value === null) {
                return 'null';
            }
            return value.constructor.name;
        default:
            return valueType;
    }
}
function requiredInteger(props, propName, componentName, location) {
    const propValue = props[propName];
    if (propValue == null || !Number.isInteger(propValue)) {
        const propType = getTypeByValue(propValue);
        return new RangeError(`Invalid ${location} \`${propName}\` of type \`${propType}\` supplied to \`${componentName}\`, expected \`integer\`.`);
    }
    return null;
}
function validator(props, propName, componentName, location) {
    const propValue = props[propName];
    if (propValue === undefined) {
        return null;
    }
    return requiredInteger(props, propName, componentName, location);
}
function validatorNoop() {
    return null;
}
validator.isRequired = requiredInteger;
validatorNoop.isRequired = validatorNoop;
const integerPropType = ("TURBOPACK compile-time falsy", 0) ? "TURBOPACK unreachable" : validator;
const __TURBOPACK__default__export__ = integerPropType;
}),
"[project]/frontend/node_modules/@mui/utils/isEventHandler/isEventHandler.mjs [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

// Brought from [Base UI](https://github.com/mui/base-ui/blob/master/packages/react/src/merge-props/mergeProps.ts#L119)
// Use it directly from Base UI once it's a package dependency.
__turbopack_context__.s([
    "default",
    ()=>isEventHandler
]);
function isEventHandler(key, value) {
    // This approach is more efficient than using a regex.
    const thirdCharCode = key.charCodeAt(2);
    return key[0] === 'o' && key[1] === 'n' && thirdCharCode >= 65 /* A */  && thirdCharCode <= 90 /* Z */  && typeof value === 'function';
}
}),
"[project]/frontend/node_modules/@mui/utils/isFocusVisible/isFocusVisible.mjs [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

/**
 * Returns a boolean indicating if the event's target has :focus-visible
 */ __turbopack_context__.s([
    "default",
    ()=>isFocusVisible
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$next$2f$dist$2f$build$2f$polyfills$2f$process$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = /*#__PURE__*/ __turbopack_context__.i("[project]/frontend/node_modules/next/dist/build/polyfills/process.js [app-client] (ecmascript)");
function isFocusVisible(element) {
    try {
        return element.matches(':focus-visible');
    } catch (error) {
        // Do not warn on jsdom tests, otherwise all tests that rely on focus have to be skipped
        // Tests that rely on `:focus-visible` will still have to be skipped in jsdom
        if (("TURBOPACK compile-time value", "development") !== 'production' && !window.navigator.userAgent.includes('jsdom')) {
            console.warn([
                'MUI: The `:focus-visible` pseudo class is not supported in this browser.',
                'Some components rely on this feature to work properly.'
            ].join('\n'));
        }
    }
    return false;
}
}),
"[project]/frontend/node_modules/@mui/utils/isHostComponent/isHostComponent.mjs [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>__TURBOPACK__default__export__
]);
/**
 * Determines if a given element is a DOM element name (i.e. not a React component).
 */ function isHostComponent(element) {
    return typeof element === 'string';
}
const __TURBOPACK__default__export__ = isHostComponent;
}),
"[project]/frontend/node_modules/@mui/utils/isMuiElement/isMuiElement.mjs [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>isMuiElement
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/frontend/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
;
function isMuiElement(element, muiNames) {
    return /*#__PURE__*/ __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["isValidElement"](element) && muiNames.indexOf(// For server components `muiName` is available in element.type._payload.value.muiName
    // relevant info - https://github.com/react/react/blob/2807d781a08db8e9873687fccc25c0f12b4fb3d4/packages/react/src/ReactLazy.js#L45
    // eslint-disable-next-line no-underscore-dangle
    element.type.muiName ?? element.type?._payload?.value?.muiName) !== -1;
}
}),
"[project]/frontend/node_modules/@mui/utils/mergeSlotProps/mergeSlotProps.mjs [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>__TURBOPACK__default__export__
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$clsx$2f$dist$2f$clsx$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/frontend/node_modules/clsx/dist/clsx.mjs [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f40$mui$2f$utils$2f$extractEventHandlers$2f$extractEventHandlers$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/frontend/node_modules/@mui/utils/extractEventHandlers/extractEventHandlers.mjs [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f40$mui$2f$utils$2f$omitEventHandlers$2f$omitEventHandlers$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/frontend/node_modules/@mui/utils/omitEventHandlers/omitEventHandlers.mjs [app-client] (ecmascript)");
;
;
;
/**
 * Merges the slot component internal props (usually coming from a hook)
 * with the externally provided ones.
 *
 * The merge order is (the latter overrides the former):
 * 1. The internal props (specified as a getter function to work with get*Props hook result)
 * 2. Additional props (specified internally on a Base UI component)
 * 3. External props specified on the owner component. These should only be used on a root slot.
 * 4. External props specified in the `slotProps.*` prop.
 * 5. The `className` prop - combined from all the above.
 * @param parameters
 * @returns
 */ function mergeSlotProps(parameters) {
    const { getSlotProps, additionalProps, externalSlotProps, externalForwardedProps, className } = parameters;
    if (!getSlotProps) {
        // The simpler case - getSlotProps is not defined, so no internal event handlers are defined,
        // so we can simply merge all the props without having to worry about extracting event handlers.
        const joinedClasses = (0, __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$clsx$2f$dist$2f$clsx$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"])(additionalProps?.className, className, externalForwardedProps?.className, externalSlotProps?.className);
        const mergedStyle = {
            ...additionalProps?.style,
            ...externalForwardedProps?.style,
            ...externalSlotProps?.style
        };
        const props = {
            ...additionalProps,
            ...externalForwardedProps,
            ...externalSlotProps
        };
        if (joinedClasses.length > 0) {
            props.className = joinedClasses;
        }
        if (Object.keys(mergedStyle).length > 0) {
            props.style = mergedStyle;
        }
        return {
            props,
            internalRef: undefined
        };
    }
    // In this case, getSlotProps is responsible for calling the external event handlers.
    // We don't need to include them in the merged props because of this.
    const eventHandlers = (0, __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f40$mui$2f$utils$2f$extractEventHandlers$2f$extractEventHandlers$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"])({
        ...externalForwardedProps,
        ...externalSlotProps
    });
    const componentsPropsWithoutEventHandlers = (0, __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f40$mui$2f$utils$2f$omitEventHandlers$2f$omitEventHandlers$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"])(externalSlotProps);
    const otherPropsWithoutEventHandlers = (0, __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f40$mui$2f$utils$2f$omitEventHandlers$2f$omitEventHandlers$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"])(externalForwardedProps);
    const internalSlotProps = getSlotProps(eventHandlers);
    // The order of classes is important here.
    // Emotion (that we use in libraries consuming Base UI) depends on this order
    // to properly override style. It requires the most important classes to be last
    // (see https://github.com/mui/material-ui/pull/33205) for the related discussion.
    const joinedClasses = (0, __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$clsx$2f$dist$2f$clsx$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"])(internalSlotProps?.className, additionalProps?.className, className, externalForwardedProps?.className, externalSlotProps?.className);
    const mergedStyle = {
        ...internalSlotProps?.style,
        ...additionalProps?.style,
        ...externalForwardedProps?.style,
        ...externalSlotProps?.style
    };
    const props = {
        ...internalSlotProps,
        ...additionalProps,
        ...otherPropsWithoutEventHandlers,
        ...componentsPropsWithoutEventHandlers
    };
    if (joinedClasses.length > 0) {
        props.className = joinedClasses;
    }
    if (Object.keys(mergedStyle).length > 0) {
        props.style = mergedStyle;
    }
    return {
        props,
        internalRef: internalSlotProps.ref
    };
}
const __TURBOPACK__default__export__ = mergeSlotProps;
}),
"[project]/frontend/node_modules/@mui/utils/omitEventHandlers/omitEventHandlers.mjs [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>__TURBOPACK__default__export__
]);
/**
 * Removes event handlers from the given object.
 * A field is considered an event handler if it is a function with a name beginning with `on`.
 *
 * @param object Object to remove event handlers from.
 * @returns Object with event handlers removed.
 */ function omitEventHandlers(object) {
    if (object === undefined) {
        return {};
    }
    const result = {};
    Object.keys(object).filter((prop)=>!(prop.match(/^on[A-Z]/) && typeof object[prop] === 'function')).forEach((prop)=>{
        result[prop] = object[prop];
    });
    return result;
}
const __TURBOPACK__default__export__ = omitEventHandlers;
}),
"[project]/frontend/node_modules/@mui/utils/ownerDocument/ownerDocument.mjs [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>ownerDocument
]);
function ownerDocument(node) {
    return node && node.ownerDocument || document;
}
}),
"[project]/frontend/node_modules/@mui/utils/ownerWindow/ownerWindow.mjs [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>ownerWindow
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f40$mui$2f$utils$2f$ownerDocument$2f$ownerDocument$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/frontend/node_modules/@mui/utils/ownerDocument/ownerDocument.mjs [app-client] (ecmascript)");
;
function ownerWindow(node) {
    const doc = (0, __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f40$mui$2f$utils$2f$ownerDocument$2f$ownerDocument$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"])(node);
    return doc.defaultView || window;
}
}),
"[project]/frontend/node_modules/@mui/utils/refType/refType.mjs [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>__TURBOPACK__default__export__
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$prop$2d$types$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/frontend/node_modules/prop-types/index.js [app-client] (ecmascript)");
;
const refType = __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$prop$2d$types$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].oneOfType([
    __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$prop$2d$types$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].func,
    __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$prop$2d$types$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].object
]);
const __TURBOPACK__default__export__ = refType;
}),
"[project]/frontend/node_modules/@mui/utils/resolveComponentProps/resolveComponentProps.mjs [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>__TURBOPACK__default__export__
]);
/**
 * If `componentProps` is a function, calls it with the provided `ownerState`.
 * Otherwise, just returns `componentProps`.
 */ function resolveComponentProps(componentProps, ownerState, slotState) {
    if (typeof componentProps === 'function') {
        return componentProps(ownerState, slotState);
    }
    return componentProps;
}
const __TURBOPACK__default__export__ = resolveComponentProps;
}),
"[project]/frontend/node_modules/@mui/utils/setRef/setRef.mjs [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

/**
 * TODO v5: consider making it private
 *
 * passes {value} to {ref}
 *
 * WARNING: Be sure to only call this inside a callback that is passed as a ref.
 * Otherwise, make sure to cleanup the previous {ref} if it changes. See
 * https://github.com/mui/material-ui/issues/13539
 *
 * Useful if you want to expose the ref of an inner component to the public API
 * while still using it inside the component.
 * @param ref A ref callback or ref object. If anything falsy, this is a no-op.
 */ __turbopack_context__.s([
    "default",
    ()=>setRef
]);
function setRef(ref, value) {
    if (typeof ref === 'function') {
        ref(value);
    } else if (ref) {
        ref.current = value;
    }
}
}),
"[project]/frontend/node_modules/@mui/utils/useControlled/useControlled.mjs [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>useControlled
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$next$2f$dist$2f$build$2f$polyfills$2f$process$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = /*#__PURE__*/ __turbopack_context__.i("[project]/frontend/node_modules/next/dist/build/polyfills/process.js [app-client] (ecmascript)");
// TODO: uncomment once we enable eslint-plugin-react-compiler // eslint-disable-next-line react-compiler/react-compiler -- process.env never changes, dependency arrays are intentionally ignored
/* eslint-disable react-hooks/rules-of-hooks, react-hooks/exhaustive-deps */ var __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/frontend/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
'use client';
;
function useControlled(props) {
    const { controlled, default: defaultProp, name, state = 'value' } = props;
    // isControlled is ignored in the hook dependency lists as it should never change.
    const { current: isControlled } = __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRef"](controlled !== undefined);
    const [valueState, setValue] = __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"](defaultProp);
    const value = isControlled ? controlled : valueState;
    if ("TURBOPACK compile-time truthy", 1) {
        __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"]({
            "useControlled.useEffect": ()=>{
                if (isControlled !== (controlled !== undefined)) {
                    console.error([
                        `MUI: A component is changing the ${isControlled ? '' : 'un'}controlled ${state} state of ${name} to be ${isControlled ? 'un' : ''}controlled.`,
                        'Elements should not switch from uncontrolled to controlled (or vice versa).',
                        `Decide between using a controlled or uncontrolled ${name} ` + 'element for the lifetime of the component.',
                        "The nature of the state is determined during the first render. It's considered controlled if the value is not `undefined`.",
                        'More info: https://fb.me/react-controlled-components'
                    ].join('\n'));
                }
            }
        }["useControlled.useEffect"], [
            state,
            name,
            controlled
        ]);
        const { current: defaultValue } = __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRef"](defaultProp);
        __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"]({
            "useControlled.useEffect": ()=>{
                if (!isControlled && JSON.stringify(defaultProp) !== JSON.stringify(defaultValue)) {
                    console.error([
                        `MUI: A component is changing the default ${state} state of an uncontrolled ${name} after being initialized. ` + `To suppress this warning opt to use a controlled ${name}.`
                    ].join('\n'));
                }
            }
        }["useControlled.useEffect"], [
            JSON.stringify(defaultProp)
        ]);
    }
    const setValueIfUncontrolled = __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useCallback"]({
        "useControlled.useCallback[setValueIfUncontrolled]": (newValue)=>{
            if (!isControlled) {
                setValue(newValue);
            }
        }
    }["useControlled.useCallback[setValueIfUncontrolled]"], []);
    // TODO: provide overloads for the useControlled function to account for the case where either
    // controlled or default is not undefined.
    // In that case the return type should be [T, React.Dispatch<React.SetStateAction<T>>]
    // otherwise it should be [T | undefined, React.Dispatch<React.SetStateAction<T | undefined>>]
    return [
        value,
        setValueIfUncontrolled
    ];
}
}),
"[project]/frontend/node_modules/@mui/utils/useEventCallback/useEventCallback.mjs [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>__TURBOPACK__default__export__
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/frontend/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f40$mui$2f$utils$2f$useEnhancedEffect$2f$useEnhancedEffect$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/frontend/node_modules/@mui/utils/useEnhancedEffect/useEnhancedEffect.mjs [app-client] (ecmascript)");
'use client';
;
;
/**
 * Inspired by https://github.com/react/react/issues/14099#issuecomment-440013892
 * See RFC in https://github.com/reactjs/rfcs/pull/220
 */ function useEventCallback(fn) {
    const ref = __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRef"](fn);
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f40$mui$2f$utils$2f$useEnhancedEffect$2f$useEnhancedEffect$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"])({
        "useEventCallback.useEnhancedEffect": ()=>{
            ref.current = fn;
        }
    }["useEventCallback.useEnhancedEffect"]);
    return __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRef"]({
        "useEventCallback.useRef": (...args)=>// @ts-expect-error hide `this`
            (0, ref.current)(...args)
    }["useEventCallback.useRef"]).current;
}
const __TURBOPACK__default__export__ = useEventCallback;
}),
"[project]/frontend/node_modules/@mui/utils/useForkRef/useForkRef.mjs [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>useForkRef
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/frontend/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
'use client';
;
function useForkRef(...refs) {
    const cleanupRef = __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRef"](undefined);
    const refEffect = __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useCallback"]({
        "useForkRef.useCallback[refEffect]": (instance)=>{
            const cleanups = refs.map({
                "useForkRef.useCallback[refEffect].cleanups": (ref)=>{
                    if (ref == null) {
                        return null;
                    }
                    if (typeof ref === 'function') {
                        const refCallback = ref;
                        const refCleanup = refCallback(instance);
                        return typeof refCleanup === 'function' ? refCleanup : ({
                            "useForkRef.useCallback[refEffect].cleanups": ()=>{
                                refCallback(null);
                            }
                        })["useForkRef.useCallback[refEffect].cleanups"];
                    }
                    ref.current = instance;
                    return ({
                        "useForkRef.useCallback[refEffect].cleanups": ()=>{
                            ref.current = null;
                        }
                    })["useForkRef.useCallback[refEffect].cleanups"];
                }
            }["useForkRef.useCallback[refEffect].cleanups"]);
            return ({
                "useForkRef.useCallback[refEffect]": ()=>{
                    cleanups.forEach({
                        "useForkRef.useCallback[refEffect]": (refCleanup)=>refCleanup?.()
                    }["useForkRef.useCallback[refEffect]"]);
                }
            })["useForkRef.useCallback[refEffect]"];
        // eslint-disable-next-line react-hooks/exhaustive-deps, react-hooks/use-memo
        }
    }["useForkRef.useCallback[refEffect]"], refs);
    return __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useMemo"]({
        "useForkRef.useMemo": ()=>{
            if (refs.every({
                "useForkRef.useMemo": (ref)=>ref == null
            }["useForkRef.useMemo"])) {
                return null;
            }
            return ({
                "useForkRef.useMemo": (value)=>{
                    if (cleanupRef.current) {
                        cleanupRef.current();
                        cleanupRef.current = undefined;
                    }
                    if (value != null) {
                        cleanupRef.current = refEffect(value);
                    }
                }
            })["useForkRef.useMemo"];
        // TODO: uncomment once we enable eslint-plugin-react-compiler // eslint-disable-next-line react-compiler/react-compiler -- intentionally ignoring that the dependency array must be an array literal
        // eslint-disable-next-line react-hooks/exhaustive-deps, react-hooks/use-memo
        }
    }["useForkRef.useMemo"], refs);
}
}),
"[project]/frontend/node_modules/@mui/utils/useLazyRef/useLazyRef.mjs [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>useLazyRef
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/frontend/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
'use client';
;
const UNINITIALIZED = {};
function useLazyRef(init, initArg) {
    const ref = __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRef"](UNINITIALIZED);
    if (ref.current === UNINITIALIZED) {
        ref.current = init(initArg);
    }
    return ref;
}
}),
"[project]/frontend/node_modules/@mui/utils/useOnMount/useOnMount.mjs [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>useOnMount
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/frontend/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
'use client';
;
const EMPTY = [];
function useOnMount(fn) {
    // TODO: uncomment once we enable eslint-plugin-react-compiler // eslint-disable-next-line react-compiler/react-compiler -- no need to put `fn` in the dependency array
    /* eslint-disable react-hooks/exhaustive-deps */ __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"](fn, EMPTY);
/* eslint-enable react-hooks/exhaustive-deps */ }
}),
"[project]/frontend/node_modules/@mui/utils/useRovingTabIndex/RovingTabIndexContext.mjs [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "RovingTabIndexContext",
    ()=>RovingTabIndexContext,
    "useRovingTabIndexContext",
    ()=>useRovingTabIndexContext
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$next$2f$dist$2f$build$2f$polyfills$2f$process$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = /*#__PURE__*/ __turbopack_context__.i("[project]/frontend/node_modules/next/dist/build/polyfills/process.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/frontend/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
'use client';
;
const RovingTabIndexContext = /*#__PURE__*/ __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["createContext"](undefined);
if ("TURBOPACK compile-time truthy", 1) {
    RovingTabIndexContext.displayName = 'RovingTabIndexContext';
}
function useRovingTabIndexContext() {
    const context = __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useContext"](RovingTabIndexContext);
    if (context === undefined) {
        throw new Error('MUI: RovingTabIndexContext is missing. Roving tab index items must be placed within a roving tab index provider.');
    }
    return context;
}
}),
"[project]/frontend/node_modules/@mui/utils/useRovingTabIndex/useRovingTabIndex.mjs [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "isItemFocusable",
    ()=>isItemFocusable,
    "useRovingTabIndexItem",
    ()=>useRovingTabIndexItem,
    "useRovingTabIndexRoot",
    ()=>useRovingTabIndexRoot
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/frontend/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f40$mui$2f$utils$2f$fastObjectShallowCompare$2f$fastObjectShallowCompare$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/frontend/node_modules/@mui/utils/fastObjectShallowCompare/fastObjectShallowCompare.mjs [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f40$mui$2f$utils$2f$getActiveElement$2f$getActiveElement$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/frontend/node_modules/@mui/utils/getActiveElement/getActiveElement.mjs [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f40$mui$2f$utils$2f$ownerDocument$2f$ownerDocument$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/frontend/node_modules/@mui/utils/ownerDocument/ownerDocument.mjs [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f40$mui$2f$utils$2f$setRef$2f$setRef$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/frontend/node_modules/@mui/utils/setRef/setRef.mjs [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f40$mui$2f$utils$2f$useEnhancedEffect$2f$useEnhancedEffect$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/frontend/node_modules/@mui/utils/useEnhancedEffect/useEnhancedEffect.mjs [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f40$mui$2f$utils$2f$useEventCallback$2f$useEventCallback$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/frontend/node_modules/@mui/utils/useEventCallback/useEventCallback.mjs [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f40$mui$2f$utils$2f$useForkRef$2f$useForkRef$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/frontend/node_modules/@mui/utils/useForkRef/useForkRef.mjs [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f40$mui$2f$utils$2f$useRovingTabIndex$2f$RovingTabIndexContext$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/frontend/node_modules/@mui/utils/useRovingTabIndex/RovingTabIndexContext.mjs [app-client] (ecmascript)");
'use client';
;
;
;
;
;
;
;
;
;
const SUPPORTED_KEYS = [
    'ArrowRight',
    'ArrowLeft',
    'ArrowUp',
    'ArrowDown',
    'Home',
    'End'
];
function useRovingTabIndexRoot(params) {
    const { activeItemId: activeItemIdProp, getDefaultActiveItemId, orientation, isRtl = false, isItemFocusable: itemFilter = isItemFocusable, wrap = true } = params;
    const [activeItemIdState, setActiveItemIdState] = __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"](activeItemIdProp);
    const [previousActiveItemIdProp, setPreviousActiveItemIdProp] = __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"](activeItemIdProp);
    let activeItemIdCandidate = activeItemIdState;
    if (activeItemIdProp !== previousActiveItemIdProp) {
        setPreviousActiveItemIdProp(activeItemIdProp);
        if (activeItemIdProp !== undefined && activeItemIdProp !== activeItemIdState) {
            activeItemIdCandidate = activeItemIdProp;
            setActiveItemIdState(activeItemIdProp);
        }
    }
    const containerRef = __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRef"](null);
    // based on https://github.com/mui/base-ui/blob/7392a928fca91fcc68b9fad3439ac61e10f3f7ba/packages/react/src/composite/list/CompositeList.tsx#L25-L35
    const itemMapRef = __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRef"](new Map());
    const [mapTick, setMapTick] = __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"](0);
    const orderedItems = __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useMemo"]({
        "useRovingTabIndexRoot.useMemo[orderedItems]": ()=>{
            void mapTick;
            return getOrderedItems(itemMapRef.current);
        }
    }["useRovingTabIndexRoot.useMemo[orderedItems]"], [
        mapTick
    ]);
    const resolvedActiveItemId = resolveActiveItemId(activeItemIdCandidate, orderedItems, itemFilter, getDefaultActiveItemId);
    const activeItemIdRef = __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRef"](resolvedActiveItemId);
    activeItemIdRef.current = resolvedActiveItemId;
    const getActiveItem = __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useCallback"]({
        "useRovingTabIndexRoot.useCallback[getActiveItem]": ()=>{
            const snapshot = getOrderedItems(itemMapRef.current);
            const resolvedItemId = resolveActiveItemId(activeItemIdRef.current, snapshot, itemFilter, getDefaultActiveItemId);
            return getItemById(snapshot, resolvedItemId);
        }
    }["useRovingTabIndexRoot.useCallback[getActiveItem]"], [
        getDefaultActiveItemId,
        itemFilter
    ]);
    const getItemMap = __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useCallback"]({
        "useRovingTabIndexRoot.useCallback[getItemMap]": ()=>{
            return itemMapRef.current;
        }
    }["useRovingTabIndexRoot.useCallback[getItemMap]"], []);
    const registerItem = (0, __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f40$mui$2f$utils$2f$useEventCallback$2f$useEventCallback$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"])({
        "useRovingTabIndexRoot.useEventCallback[registerItem]": (item)=>{
            const previousItem = itemMapRef.current.get(item.id);
            if ((0, __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f40$mui$2f$utils$2f$fastObjectShallowCompare$2f$fastObjectShallowCompare$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"])(previousItem ?? null, item)) {
                return;
            }
            itemMapRef.current.set(item.id, item);
            setMapTick({
                "useRovingTabIndexRoot.useEventCallback[registerItem]": (value)=>value + 1
            }["useRovingTabIndexRoot.useEventCallback[registerItem]"]);
        }
    }["useRovingTabIndexRoot.useEventCallback[registerItem]"]);
    const unregisterItem = (0, __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f40$mui$2f$utils$2f$useEventCallback$2f$useEventCallback$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"])({
        "useRovingTabIndexRoot.useEventCallback[unregisterItem]": (itemId)=>{
            if (itemMapRef.current.delete(itemId)) {
                setMapTick({
                    "useRovingTabIndexRoot.useEventCallback[unregisterItem]": (value)=>value + 1
                }["useRovingTabIndexRoot.useEventCallback[unregisterItem]"]);
            }
        }
    }["useRovingTabIndexRoot.useEventCallback[unregisterItem]"]);
    const setActiveItemId = (0, __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f40$mui$2f$utils$2f$useEventCallback$2f$useEventCallback$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"])({
        "useRovingTabIndexRoot.useEventCallback[setActiveItemId]": (itemId)=>{
            setActiveItemIdState(itemId);
        }
    }["useRovingTabIndexRoot.useEventCallback[setActiveItemId]"]);
    const isItemActive = __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useCallback"]({
        "useRovingTabIndexRoot.useCallback[isItemActive]": (itemId)=>{
            return activeItemIdRef.current === itemId;
        }
    }["useRovingTabIndexRoot.useCallback[isItemActive]"], []);
    // Moves focus relative to a starting index. This is the directional helper used by
    // keyboard navigation and `focusNext()`.
    const focusItem = __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useCallback"]({
        "useRovingTabIndexRoot.useCallback[focusItem]": (currentIndex, direction, wrap, isItemFocusableOverride)=>{
            const snapshot = getNavigableItemsSnapshot(itemMapRef.current);
            const nextItem = getNextActiveItem(snapshot, currentIndex, direction, wrap, isItemFocusableOverride ?? itemFilter);
            if (!nextItem) {
                return null;
            }
            nextItem.element?.focus();
            setActiveItemIdState(nextItem.id);
            return nextItem;
        }
    }["useRovingTabIndexRoot.useCallback[focusItem]"], [
        itemFilter
    ]);
    const getContainerProps = __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useCallback"]({
        "useRovingTabIndexRoot.useCallback[getContainerProps]": (ref, onFocusProp, onKeyDownProp)=>{
            const onFocus = {
                "useRovingTabIndexRoot.useCallback[getContainerProps].onFocus": (event)=>{
                    onFocusProp?.(event);
                    const snapshot = getNavigableItemsSnapshot(itemMapRef.current);
                    const focusedIndex = findItemIndexByElement(snapshot, event.target);
                    if (focusedIndex !== -1) {
                        setActiveItemIdState(snapshot[focusedIndex].id);
                    }
                }
            }["useRovingTabIndexRoot.useCallback[getContainerProps].onFocus"];
            const onKeyDown = {
                "useRovingTabIndexRoot.useCallback[getContainerProps].onKeyDown": (event)=>{
                    onKeyDownProp?.(event);
                    if (event.defaultPrevented || event.altKey || event.shiftKey || event.ctrlKey || event.metaKey) {
                        return;
                    }
                    if (!SUPPORTED_KEYS.includes(event.key)) {
                        return;
                    }
                    let previousItemKey = orientation === 'horizontal' ? 'ArrowLeft' : 'ArrowUp';
                    let nextItemKey = orientation === 'horizontal' ? 'ArrowRight' : 'ArrowDown';
                    if (orientation === 'horizontal' && isRtl) {
                        previousItemKey = 'ArrowRight';
                        nextItemKey = 'ArrowLeft';
                    }
                    const snapshot = getNavigableItemsSnapshot(itemMapRef.current);
                    const currentFocus = (0, __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f40$mui$2f$utils$2f$getActiveElement$2f$getActiveElement$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"])((0, __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f40$mui$2f$utils$2f$ownerDocument$2f$ownerDocument$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"])(containerRef.current));
                    const isFocusOnContainer = currentFocus === containerRef.current;
                    let currentIndex = getCurrentActiveItemIndex(snapshot, currentFocus, activeItemIdRef.current);
                    let direction = 'next';
                    switch(event.key){
                        case previousItemKey:
                            direction = 'previous';
                            event.preventDefault();
                            if (isFocusOnContainer) {
                                // Set to length, so that the previous focused element will be the last one.
                                currentIndex = snapshot.length;
                            }
                            break;
                        case nextItemKey:
                            event.preventDefault();
                            if (isFocusOnContainer) {
                                currentIndex = -1;
                            }
                            break;
                        case 'Home':
                            event.preventDefault();
                            currentIndex = -1;
                            break;
                        case 'End':
                            event.preventDefault();
                            direction = 'previous';
                            currentIndex = snapshot.length;
                            break;
                        default:
                            return;
                    }
                    focusItem(currentIndex, direction, wrap);
                }
            }["useRovingTabIndexRoot.useCallback[getContainerProps].onKeyDown"];
            return {
                onFocus,
                onKeyDown,
                ref: handleRefs(ref, {
                    "useRovingTabIndexRoot.useCallback[getContainerProps]": (elementNode)=>{
                        containerRef.current = elementNode;
                    }
                }["useRovingTabIndexRoot.useCallback[getContainerProps]"])
            };
        }
    }["useRovingTabIndexRoot.useCallback[getContainerProps]"], [
        focusItem,
        isRtl,
        orientation,
        wrap
    ]);
    const focusNext = __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useCallback"]({
        "useRovingTabIndexRoot.useCallback[focusNext]": (isItemFocusableOverride)=>{
            const snapshot = getNavigableItemsSnapshot(itemMapRef.current);
            const currentFocus = (0, __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f40$mui$2f$utils$2f$getActiveElement$2f$getActiveElement$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"])((0, __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f40$mui$2f$utils$2f$ownerDocument$2f$ownerDocument$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"])(containerRef.current));
            const isFocusOnContainer = currentFocus === containerRef.current;
            const currentIndex = isFocusOnContainer ? -1 : getCurrentActiveItemIndex(snapshot, currentFocus, activeItemIdRef.current);
            return focusItem(currentIndex, 'next', true, isItemFocusableOverride)?.id ?? null;
        }
    }["useRovingTabIndexRoot.useCallback[focusNext]"], [
        focusItem
    ]);
    return __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useMemo"]({
        "useRovingTabIndexRoot.useMemo": ()=>({
                activeItemId: resolvedActiveItemId,
                focusNext,
                getActiveItem,
                getContainerProps,
                getItemMap,
                isItemActive,
                registerItem,
                setActiveItemId,
                unregisterItem
            })
    }["useRovingTabIndexRoot.useMemo"], [
        resolvedActiveItemId,
        focusNext,
        getActiveItem,
        getContainerProps,
        getItemMap,
        isItemActive,
        registerItem,
        setActiveItemId,
        unregisterItem
    ]);
}
function useRovingTabIndexItem(params) {
    const rootContext = (0, __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f40$mui$2f$utils$2f$useRovingTabIndex$2f$RovingTabIndexContext$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRovingTabIndexContext"])();
    const { activeItemId, registerItem, unregisterItem } = rootContext;
    const elementRef = __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRef"](null);
    const item = __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useMemo"]({
        "useRovingTabIndexItem.useMemo[item]": ()=>({
                disabled: params.disabled ?? false,
                element: null,
                focusableWhenDisabled: params.focusableWhenDisabled ?? false,
                id: params.id,
                selected: params.selected ?? false,
                textValue: params.textValue
            })
    }["useRovingTabIndexItem.useMemo[item]"], [
        params.disabled,
        params.focusableWhenDisabled,
        params.id,
        params.selected,
        params.textValue
    ]);
    const latestItemRef = __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRef"](item);
    // Keep the ref callback stable across item prop changes. The callback reads the latest
    // item metadata from this ref so React does not have to detach and re-attach the ref
    // every time `disabled`, `selected`, or similar item state changes.
    latestItemRef.current = item;
    const handleElementRef = __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useCallback"]({
        "useRovingTabIndexItem.useCallback[handleElementRef]": (element)=>{
            elementRef.current = element;
            if (element == null) {
                // Ref detachment runs during React's commit phase. Calling `unregisterItem()`
                // synchronously here can trigger a nested state update while React is still
                // finishing that commit. Unregister in a microtask so it runs after the
                // commit completes.
                queueMicrotask({
                    "useRovingTabIndexItem.useCallback[handleElementRef]": ()=>{
                        // null check prevents stale unregisters for a remove-then-re-add edge case
                        if (elementRef.current == null) {
                            unregisterItem(params.id);
                        }
                    }
                }["useRovingTabIndexItem.useCallback[handleElementRef]"]);
                return;
            }
            registerItem({
                ...latestItemRef.current,
                element
            });
        }
    }["useRovingTabIndexItem.useCallback[handleElementRef]"], [
        params.id,
        registerItem,
        unregisterItem
    ]);
    // `UseRovingTabIndexItemReturnValue.ref` must always be a callback ref. `useForkRef()`
    // is typed to return `null` when every input ref is nullish, but this call always includes
    // `handleElementRef`, so the merged ref cannot be `null` here.
    const mergedRef = (0, __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f40$mui$2f$utils$2f$useForkRef$2f$useForkRef$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"])(params.ref, handleElementRef);
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f40$mui$2f$utils$2f$useEnhancedEffect$2f$useEnhancedEffect$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"])({
        "useRovingTabIndexItem.useEnhancedEffect": ()=>{
            if (!elementRef.current) {
                return;
            }
            registerItem({
                ...item,
                element: elementRef.current
            });
        }
    }["useRovingTabIndexItem.useEnhancedEffect"], [
        item,
        registerItem
    ]);
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f40$mui$2f$utils$2f$useEnhancedEffect$2f$useEnhancedEffect$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"])({
        "useRovingTabIndexItem.useEnhancedEffect": ()=>{
            const itemId = params.id;
            // Keep unmount cleanup separate from the effect above. The effect above re-runs when
            // item metadata changes, but we only want to unregister on unmount or when the item id changes.
            return ({
                "useRovingTabIndexItem.useEnhancedEffect": ()=>{
                    unregisterItem(itemId);
                }
            })["useRovingTabIndexItem.useEnhancedEffect"];
        }
    }["useRovingTabIndexItem.useEnhancedEffect"], [
        params.id,
        unregisterItem
    ]);
    return {
        ref: mergedRef,
        tabIndex: activeItemId === params.id ? 0 : -1
    };
}
/**
 * Resolves which item id should own the roving tab stop for the current render.
 *
 * This is the top-level decision point for "who gets `tabIndex=0` right now?".
 * For example:
 * - `Tabs` sometimes passes `selectedValue` as `activeItemId` so the selected tab becomes
 *   the tab stop when focus enters the list from outside.
 * - `MenuList` leaves `activeItemId` undefined and relies on the default-item logic below
 *   so that menu-specific rules decide which menu item should initially own the tab stop.
 *
 * @param activeItemId The item id supplied through the root hook's `activeItemId` option.
 *   `undefined` means "the caller did not ask for a specific item, use the default-item
 *   logic instead". `null` means "there is intentionally no preferred item, so also fall
 *   back to the default-item logic".
 * @param items The ordered registered items currently in the roving set.
 * @param isFocusable A predicate that decides whether an item may receive roving focus.
 * @param getDefaultActiveItemId Optional caller-provided function that picks the preferred
 *   default item when `activeItemId` is not driving the tab stop directly.
 * @returns The id of the item that should own `tabIndex=0`, or `null` if no item is focusable.
 */ function resolveActiveItemId(activeItemId, items, isFocusable, getDefaultActiveItemId) {
    if (activeItemId != null) {
        return resolveRequestedItemId(activeItemId, items, isFocusable);
    }
    return resolveDefaultItemId(items, isFocusable, getDefaultActiveItemId);
}
/**
 * Resolves the item id supplied through the root hook's `activeItemId` option.
 *
 * This path is used when a component such as `Tabs` or `MenuList` wants roving focus to
 * follow a specific logical item. For example, `Tabs` can pass the selected tab's value as
 * `activeItemId` so that the selected tab owns `tabIndex=0` when focus enters the list.
 *
 * @param requestedItemId The item id passed to the root hook's `activeItemId` option.
 * @param items The ordered registered items currently in the roving set.
 * @param isFocusable A predicate that decides whether an item may receive roving focus.
 * @returns The same id when it still points to a focusable item. If that id no longer exists,
 *   returns the first focusable item. If the id still exists but the item is not focusable,
 *   returns the next focusable item after it without wrapping.
 */ function resolveRequestedItemId(requestedItemId, items, isFocusable) {
    const requestedItemIndex = findItemIndexById(items, requestedItemId);
    if (requestedItemIndex === -1) {
        return getFirstFocusableItemId(items, isFocusable);
    }
    if (isFocusable(items[requestedItemIndex])) {
        return items[requestedItemIndex].id;
    }
    return getNextActiveItem(items, requestedItemIndex, 'next', false, isFocusable)?.id ?? null;
}
/**
 * Resolves the default active item when the caller is not driving roving focus with
 * `activeItemId`.
 *
 * This path is used on the initial render and whenever the caller leaves the choice of tab
 * stop to the hook. `getDefaultActiveItemId` lets a component prefer a specific logical item
 * before falling back to the first focusable item.
 *
 * For example:
 * - `MenuList` uses this path all the time. When `variant="selectedMenu"`, it prefers the
 *   selected menu item; otherwise it prefers the first focusable menu item.
 * - `Tabs` uses this path while focus is already inside the tab list, because at that point
 *   the current roving position should be driven by actual focus movement rather than by the
 *   selected tab value.
 *
 * @param items The ordered registered items currently in the roving set.
 * @param isFocusable A predicate that decides whether an item may receive roving focus.
 * @param getDefaultActiveItemId Optional caller-provided function that chooses which item
 *   should own the tab stop before the generic "first focusable item" fallback runs.
 * @returns The default item id when it points to a focusable item, otherwise the first
 *   focusable item in the snapshot, or `null` when none are focusable.
 */ function resolveDefaultItemId(items, isFocusable, getDefaultActiveItemId) {
    const defaultItemId = getDefaultActiveItemId?.(items);
    if (defaultItemId != null) {
        const defaultItem = getItemById(items, defaultItemId);
        if (defaultItem && isFocusable(defaultItem)) {
            return defaultItem.id;
        }
    }
    return getFirstFocusableItemId(items, isFocusable);
}
/**
 * Finds the best starting index for keyboard navigation.
 *
 * This is used immediately before keyboard navigation and `focusNext()` navigation. It prefers
 * the item that currently holds DOM focus, but if focus is on the container or outside the item
 * set it falls back to the last known active item id.
 *
 * @param items The navigable item snapshot used for the current keyboard interaction.
 * @param currentFocus The element that currently has DOM focus, if any.
 * @param fallbackActiveItemId The last known active item id when focus is not on an item.
 * @returns The focused item's index when focus is currently on an item. Otherwise, the index
 *   of the fallback active item id, or `-1` when no matching item exists.
 */ function getCurrentActiveItemIndex(items, currentFocus, fallbackActiveItemId) {
    if (currentFocus) {
        const focusedIndex = findItemIndexByElement(items, currentFocus);
        if (focusedIndex !== -1) {
            return focusedIndex;
        }
    }
    return findItemIndexById(items, fallbackActiveItemId);
}
/**
 * Walks the item snapshot to find the next focusable item in the requested direction.
 *
 * This is the shared navigation primitive used by keyboard handling and imperative helpers
 * such as `focusNext()`. It starts from the supplied index, advances through the snapshot in
 * the requested direction, and skips over items that fail the `isFocusable` predicate.
 *
 * @param items The ordered navigable item snapshot.
 * @param currentIndex The index to start from. Use `-1` to start before the first item or
 *   `items.length` to start after the last item.
 * @param direction The direction to move through the snapshot.
 * @param wrap Whether navigation should wrap around at the ends of the list.
 * @param isFocusable A predicate that decides whether an item may receive roving focus.
 * @returns The next focusable item record, or `null` when no focusable item can be reached.
 */ function getNextActiveItem(items, currentIndex, direction, wrap, isFocusable) {
    const lastIndex = items.length - 1;
    if (lastIndex === -1) {
        return null;
    }
    let wrappedOnce = false;
    let nextIndex = getNextIndex(currentIndex, lastIndex, direction, wrap);
    const startIndex = nextIndex;
    while(nextIndex !== -1){
        if (nextIndex === startIndex) {
            if (wrappedOnce) {
                return null;
            }
            wrappedOnce = true;
        }
        const nextItem = items[nextIndex];
        if (!nextItem || !isFocusable(nextItem)) {
            nextIndex = getNextIndex(nextIndex, lastIndex, direction, wrap);
        } else {
            return nextItem;
        }
    }
    return null;
}
function getFirstFocusableItemId(items, isFocusable) {
    return items.find((item)=>isFocusable(item))?.id ?? null;
}
function getItemById(items, itemId) {
    return itemId == null ? null : items.find((item)=>item.id === itemId) ?? null;
}
function findItemIndexById(items, itemId) {
    return itemId == null ? -1 : items.findIndex((item)=>item.id === itemId);
}
function findItemIndexByElement(items, element) {
    if (!element) {
        return -1;
    }
    return items.findIndex((item)=>item.element === element || item.element?.contains(element));
}
function getOrderedItems(itemMap) {
    const items = Array.from(itemMap.values());
    if (items.every((item)=>item.element == null)) {
        return items;
    }
    const connectedItems = items.filter(isConnectedItem).sort((itemA, itemB)=>sortByDocumentPosition(itemA.element, itemB.element));
    const disconnectedItems = items.filter((item)=>!isConnectedItem(item));
    return [
        ...connectedItems,
        ...disconnectedItems
    ];
}
function getNavigableItemsSnapshot(itemMap) {
    return getOrderedItems(itemMap).filter(isConnectedItem);
}
function getNextIndex(currentIndex, lastIndex, direction, wrap = true) {
    if (direction === 'next') {
        if (currentIndex === lastIndex) {
            return wrap ? 0 : -1;
        }
        return currentIndex + 1;
    }
    if (currentIndex === 0) {
        return wrap ? lastIndex : -1;
    }
    return currentIndex - 1;
}
function isItemFocusable(item) {
    if (!item.element) {
        return false;
    }
    if (item.focusableWhenDisabled) {
        return true;
    }
    return !item.disabled && !item.element.hasAttribute('disabled') && item.element.getAttribute('aria-disabled') !== 'true' && item.element.hasAttribute('tabindex');
}
function isConnectedItem(item) {
    return item.element != null && item.element.isConnected;
}
/* eslint-disable no-bitwise */ function sortByDocumentPosition(a, b) {
    if (a === b) {
        return 0;
    }
    const position = a.compareDocumentPosition(b);
    if (position & Node.DOCUMENT_POSITION_FOLLOWING || position & Node.DOCUMENT_POSITION_CONTAINED_BY) {
        return -1;
    }
    if (position & Node.DOCUMENT_POSITION_PRECEDING || position & Node.DOCUMENT_POSITION_CONTAINS) {
        return 1;
    }
    return 0;
}
/* eslint-enable no-bitwise */ function handleRefs(...refs) {
    return (node)=>{
        refs.forEach((ref)=>{
            (0, __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f40$mui$2f$utils$2f$setRef$2f$setRef$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"])(ref ?? null, node);
        });
    };
}
}),
"[project]/frontend/node_modules/@mui/utils/useSlotProps/useSlotProps.mjs [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>__TURBOPACK__default__export__
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f40$mui$2f$utils$2f$useForkRef$2f$useForkRef$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/frontend/node_modules/@mui/utils/useForkRef/useForkRef.mjs [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f40$mui$2f$utils$2f$appendOwnerState$2f$appendOwnerState$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/frontend/node_modules/@mui/utils/appendOwnerState/appendOwnerState.mjs [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f40$mui$2f$utils$2f$mergeSlotProps$2f$mergeSlotProps$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/frontend/node_modules/@mui/utils/mergeSlotProps/mergeSlotProps.mjs [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f40$mui$2f$utils$2f$resolveComponentProps$2f$resolveComponentProps$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/frontend/node_modules/@mui/utils/resolveComponentProps/resolveComponentProps.mjs [app-client] (ecmascript)");
'use client';
;
;
;
;
/**
 * @ignore - do not document.
 * Builds the props to be passed into the slot of an unstyled component.
 * It merges the internal props of the component with the ones supplied by the user, allowing to customize the behavior.
 * If the slot component is not a host component, it also merges in the `ownerState`.
 *
 * @param parameters.getSlotProps - A function that returns the props to be passed to the slot component.
 */ function useSlotProps(parameters) {
    const { elementType, externalSlotProps, ownerState, skipResolvingSlotProps = false, ...other } = parameters;
    const resolvedComponentsProps = skipResolvingSlotProps ? {} : (0, __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f40$mui$2f$utils$2f$resolveComponentProps$2f$resolveComponentProps$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"])(externalSlotProps, ownerState);
    const { props: mergedProps, internalRef } = (0, __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f40$mui$2f$utils$2f$mergeSlotProps$2f$mergeSlotProps$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"])({
        ...other,
        externalSlotProps: resolvedComponentsProps
    });
    const ref = (0, __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f40$mui$2f$utils$2f$useForkRef$2f$useForkRef$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"])(internalRef, resolvedComponentsProps?.ref, parameters.additionalProps?.ref);
    const props = (0, __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f40$mui$2f$utils$2f$appendOwnerState$2f$appendOwnerState$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"])(elementType, {
        ...mergedProps,
        ref
    }, ownerState);
    return props;
}
const __TURBOPACK__default__export__ = useSlotProps;
}),
"[project]/frontend/node_modules/@mui/utils/useTimeout/useTimeout.mjs [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "Timeout",
    ()=>Timeout,
    "default",
    ()=>useTimeout
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f40$mui$2f$utils$2f$useLazyRef$2f$useLazyRef$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/frontend/node_modules/@mui/utils/useLazyRef/useLazyRef.mjs [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f40$mui$2f$utils$2f$useOnMount$2f$useOnMount$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/frontend/node_modules/@mui/utils/useOnMount/useOnMount.mjs [app-client] (ecmascript)");
'use client';
;
;
class Timeout {
    static create() {
        return new Timeout();
    }
    currentId = null;
    /**
   * Executes `fn` after `delay`, clearing any previously scheduled call.
   */ start(delay, fn) {
        this.clear();
        this.currentId = setTimeout(()=>{
            this.currentId = null;
            fn();
        }, delay);
    }
    clear = ()=>{
        if (this.currentId !== null) {
            clearTimeout(this.currentId);
            this.currentId = null;
        }
    };
    disposeEffect = ()=>{
        return this.clear;
    };
}
function useTimeout() {
    const timeout = (0, __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f40$mui$2f$utils$2f$useLazyRef$2f$useLazyRef$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"])(Timeout.create).current;
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f40$mui$2f$utils$2f$useOnMount$2f$useOnMount$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"])(timeout.disposeEffect);
    return timeout;
}
}),
"[project]/frontend/node_modules/@mui/utils/useValueAsRef/useValueAsRef.mjs [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>useValueAsRef
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f40$mui$2f$utils$2f$useEnhancedEffect$2f$useEnhancedEffect$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/frontend/node_modules/@mui/utils/useEnhancedEffect/useEnhancedEffect.mjs [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f40$mui$2f$utils$2f$useLazyRef$2f$useLazyRef$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/frontend/node_modules/@mui/utils/useLazyRef/useLazyRef.mjs [app-client] (ecmascript)");
'use client';
;
;
function useValueAsRef(value) {
    const latest = (0, __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f40$mui$2f$utils$2f$useLazyRef$2f$useLazyRef$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"])({
        "useValueAsRef.useLazyRef": ()=>createValueRef(value)
    }["useValueAsRef.useLazyRef"]).current;
    latest.next = value;
    // eslint-disable-next-line react-hooks/exhaustive-deps -- effect never changes; it reads latest.next.
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f40$mui$2f$utils$2f$useEnhancedEffect$2f$useEnhancedEffect$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"])(latest.effect);
    return latest;
}
function createValueRef(value) {
    const latest = {
        current: value,
        next: value,
        effect: ()=>{
            latest.current = latest.next;
        }
    };
    return latest;
}
}),
"[project]/frontend/node_modules/@tanstack/query-core/build/modern/mutationObserver.js [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "MutationObserver",
    ()=>MutationObserver
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f40$tanstack$2f$query$2d$core$2f$build$2f$modern$2f$utils$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/frontend/node_modules/@tanstack/query-core/build/modern/utils.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f40$tanstack$2f$query$2d$core$2f$build$2f$modern$2f$subscribable$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/frontend/node_modules/@tanstack/query-core/build/modern/subscribable.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f40$tanstack$2f$query$2d$core$2f$build$2f$modern$2f$notifyManager$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/frontend/node_modules/@tanstack/query-core/build/modern/notifyManager.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f40$tanstack$2f$query$2d$core$2f$build$2f$modern$2f$mutation$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/frontend/node_modules/@tanstack/query-core/build/modern/mutation.js [app-client] (ecmascript)");
;
;
;
;
//#region src/mutationObserver.ts
/**
* Observes a single mutation and derives a `MutationObserverResult` from it.
* A framework hook like `useMutation` creates one `MutationObserver` per hook
* call, keeps it stable across re-renders, calls `setOptions` when the options
* passed to the hook change, subscribes to it to re-render on updates, and
* reads `getCurrentResult()` for the value to return. Calling `mutate()`
* builds a new underlying `Mutation` in the `MutationCache` and executes it.
*
* @example
* ```ts
* const observer = new MutationObserver(queryClient, {
*   mutationFn: (variables: { title: string }) => addPost(variables),
* })
* ```
*/ var MutationObserver = class extends __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f40$tanstack$2f$query$2d$core$2f$build$2f$modern$2f$subscribable$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Subscribable"] {
    #client;
    #currentResult = void 0;
    #currentMutation;
    #mutateOptions;
    constructor(client, options){
        super();
        this.#client = client;
        this.setOptions(options);
        this.bindMethods();
        this.#updateResult();
    }
    bindMethods() {
        this.mutate = this.mutate.bind(this);
        this.reset = this.reset.bind(this);
    }
    /**
	* Updates the observer's options.
	*
	* If the new `mutationKey` differs from the previous one (and both were
	* defined), the observer is reset, detaching it from the mutation it was
	* observing. Otherwise, if the currently observed mutation is still
	* `pending`, its options are updated in place as well.
	*
	* @example
	* ```ts
	* observer.setOptions({
	*   mutationFn: (variables: { title: string }) => addPost(variables),
	*   onSuccess: (data) => console.log(data),
	* })
	* ```
	*/ setOptions(options) {
        const prevOptions = this.options;
        this.options = this.#client.defaultMutationOptions(options);
        if (!(0, __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f40$tanstack$2f$query$2d$core$2f$build$2f$modern$2f$utils$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["shallowEqualObjects"])(this.options, prevOptions)) this.#client.getMutationCache().notify({
            type: "observerOptionsUpdated",
            mutation: this.#currentMutation,
            observer: this
        });
        if (prevOptions?.mutationKey && this.options.mutationKey && (0, __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f40$tanstack$2f$query$2d$core$2f$build$2f$modern$2f$utils$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["hashKey"])(prevOptions.mutationKey) !== (0, __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f40$tanstack$2f$query$2d$core$2f$build$2f$modern$2f$utils$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["hashKey"])(this.options.mutationKey)) this.reset();
        else if (this.#currentMutation?.state.status === "pending") this.#currentMutation.setOptions(this.options);
    }
    onSubscribe() {
        if (this.listeners.size === 1 && this.#currentMutation) {
            this.#currentMutation.addObserver(this);
            this.#updateResult();
        }
    }
    onUnsubscribe() {
        if (!this.hasListeners()) this.#currentMutation?.removeObserver(this);
    }
    /** @internal */ onMutationUpdate(action) {
        this.#updateResult();
        this.#notify(action);
    }
    /**
	* Returns the observer's current result, derived from the observed
	* mutation's state (or the default, `idle` state if no mutation has been
	* built yet, e.g. before the first `mutate()` call or after `reset()`).
	*/ getCurrentResult() {
        return this.#currentResult;
    }
    /**
	* Detaches the observer from the mutation it is currently observing (if
	* any) and resets the observed result back to its default, `idle` state.
	*
	* This does not cancel an in-flight mutation; the mutation itself keeps
	* running to completion and its own callbacks still fire, but this
	* observer stops reflecting its state and a subsequent `mutate()` call
	* will build a brand new mutation.
	*
	* @example
	* ```ts
	* observer.reset()
	* ```
	*
	* @see {@link MutationObserver#mutate}
	*/ reset() {
        this.#currentMutation?.removeObserver(this);
        this.#currentMutation = void 0;
        this.#updateResult();
        this.#notify();
    }
    /**
	* Builds a new `Mutation` in the `MutationCache` using the observer's
	* current options, detaches this observer from any previously observed
	* mutation, attaches it to the new one, and executes it with the given
	* variables.
	*
	* The optional per-call `options` (`onSuccess`/`onError`/`onSettled`) are
	* invoked once the mutation settles, in addition to any callbacks defined
	* on the observer's own options.
	*
	* @example
	* ```ts
	* await observer.mutate(
	*   { title: 'New post' },
	*   { onSuccess: (data) => console.log(data) },
	* )
	* ```
	*/ mutate(variables, options) {
        this.#mutateOptions = options;
        this.#currentMutation?.removeObserver(this);
        this.#currentMutation = this.#client.getMutationCache().build(this.#client, this.options);
        this.#currentMutation.addObserver(this);
        return this.#currentMutation.execute(variables);
    }
    #updateResult() {
        const state = this.#currentMutation?.state ?? (0, __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f40$tanstack$2f$query$2d$core$2f$build$2f$modern$2f$mutation$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["getDefaultState"])();
        this.#currentResult = {
            ...state,
            isPending: state.status === "pending",
            isSuccess: state.status === "success",
            isError: state.status === "error",
            isIdle: state.status === "idle",
            mutate: this.mutate,
            reset: this.reset
        };
    }
    #notify(action) {
        __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f40$tanstack$2f$query$2d$core$2f$build$2f$modern$2f$notifyManager$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["notifyManager"].batch(()=>{
            if (this.#mutateOptions && this.hasListeners()) {
                const variables = this.#currentResult.variables;
                const onMutateResult = this.#currentResult.context;
                const context = {
                    client: this.#client,
                    meta: this.options.meta,
                    mutationKey: this.options.mutationKey
                };
                if (action?.type === "success") {
                    try {
                        this.#mutateOptions.onSuccess?.(action.data, variables, onMutateResult, context);
                    } catch (e) {
                        Promise.reject(e);
                    }
                    try {
                        this.#mutateOptions.onSettled?.(action.data, null, variables, onMutateResult, context);
                    } catch (e) {
                        Promise.reject(e);
                    }
                } else if (action?.type === "error") {
                    try {
                        this.#mutateOptions.onError?.(action.error, variables, onMutateResult, context);
                    } catch (e) {
                        Promise.reject(e);
                    }
                    try {
                        this.#mutateOptions.onSettled?.(void 0, action.error, variables, onMutateResult, context);
                    } catch (e) {
                        Promise.reject(e);
                    }
                }
            }
            this.listeners.forEach((listener)=>{
                listener(this.#currentResult);
            });
        });
    }
};
;
}),
"[project]/frontend/node_modules/@tanstack/query-core/build/modern/queryObserver.js [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "QueryObserver",
    ()=>QueryObserver
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f40$tanstack$2f$query$2d$core$2f$build$2f$modern$2f$timeoutManager$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/frontend/node_modules/@tanstack/query-core/build/modern/timeoutManager.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f40$tanstack$2f$query$2d$core$2f$build$2f$modern$2f$utils$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/frontend/node_modules/@tanstack/query-core/build/modern/utils.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f40$tanstack$2f$query$2d$core$2f$build$2f$modern$2f$environmentManager$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/frontend/node_modules/@tanstack/query-core/build/modern/environmentManager.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f40$tanstack$2f$query$2d$core$2f$build$2f$modern$2f$subscribable$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/frontend/node_modules/@tanstack/query-core/build/modern/subscribable.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f40$tanstack$2f$query$2d$core$2f$build$2f$modern$2f$focusManager$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/frontend/node_modules/@tanstack/query-core/build/modern/focusManager.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f40$tanstack$2f$query$2d$core$2f$build$2f$modern$2f$notifyManager$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/frontend/node_modules/@tanstack/query-core/build/modern/notifyManager.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f40$tanstack$2f$query$2d$core$2f$build$2f$modern$2f$query$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/frontend/node_modules/@tanstack/query-core/build/modern/query.js [app-client] (ecmascript)");
;
;
;
;
;
;
;
//#region src/queryObserver.ts
/**
* A `QueryObserver` watches a single query in the `QueryCache` and computes a
* `QueryObserverResult` from its state, recomputing and notifying subscribers
* whenever the underlying query (or the observer's options) changes. It is
* the primitive that framework adapters (e.g. `useQuery`) build their hooks
* on top of, but it can also be used directly to observe and switch between
* queries outside of any framework.
*
* @example
* ```ts
* const observer = new QueryObserver(queryClient, {
*   queryKey: ['posts'],
*   queryFn: fetchPosts,
* })
*
* const unsubscribe = observer.subscribe((result) => {
*   console.log(result.data)
* })
* ```
*/ var QueryObserver = class extends __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f40$tanstack$2f$query$2d$core$2f$build$2f$modern$2f$subscribable$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Subscribable"] {
    #client;
    #currentQuery = void 0;
    #currentQueryInitialState = void 0;
    #currentResult = void 0;
    #currentResultState;
    #currentResultOptions;
    #selectError;
    #selectFn;
    #selectResult;
    #lastQueryWithDefinedData;
    #staleTimeoutId;
    #refetchIntervalId;
    #currentRefetchInterval;
    #trackedProps = /* @__PURE__ */ new Set();
    constructor(client, options){
        super();
        this.options = options;
        this.#client = client;
        this.#selectError = null;
        this.bindMethods();
        this.setOptions(options);
    }
    bindMethods() {
        this.refetch = this.refetch.bind(this);
    }
    onSubscribe() {
        if (this.listeners.size === 1) {
            this.#currentQuery.addObserver(this);
            if (shouldFetchOnMount(this.#currentQuery, this.options)) this.#executeFetch();
            else this.updateResult();
            this.#updateTimers();
        }
    }
    onUnsubscribe() {
        if (!this.hasListeners()) this.destroy();
    }
    /**
	* Returns whether the observed query is currently stale and configured
	* (via the `refetchOnReconnect` option) to refetch when the network
	* reconnects.
	*/ shouldFetchOnReconnect() {
        return shouldFetchOn(this.#currentQuery, this.options, this.options.refetchOnReconnect);
    }
    /**
	* Returns whether the observed query is currently stale and configured
	* (via the `refetchOnWindowFocus` option) to refetch when the window
	* regains focus.
	*/ shouldFetchOnWindowFocus() {
        return shouldFetchOn(this.#currentQuery, this.options, this.options.refetchOnWindowFocus);
    }
    /**
	* Stops observing the current query: clears all listeners, cancels the
	* stale and refetch-interval timers, and removes this observer from the
	* query it was observing.
	*/ destroy() {
        this.listeners = /* @__PURE__ */ new Set();
        this.#clearStaleTimeout();
        this.#clearRefetchInterval();
        this.#currentQuery.removeObserver(this);
    }
    /**
	* Updates the observer's options. This will re-resolve the query being
	* observed (switching to a different query if the `queryKey` changed),
	* trigger a fetch if the new options require one and the observer has
	* subscribers, recompute the current result, and reschedule the stale and
	* refetch-interval timers as needed.
	*
	* @example
	* ```ts
	* observer.setOptions({ queryKey: ['posts', 1], queryFn: () => fetchPost(1) })
	* // later: switch to a different query, reusing the same observer
	* observer.setOptions({ queryKey: ['posts', 2], queryFn: () => fetchPost(2) })
	* ```
	*/ setOptions(options) {
        const prevOptions = this.options;
        const prevQuery = this.#currentQuery;
        this.options = this.#client.defaultQueryOptions(options);
        if (this.options.enabled !== void 0 && typeof this.options.enabled !== "boolean" && typeof this.options.enabled !== "function" && typeof (0, __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f40$tanstack$2f$query$2d$core$2f$build$2f$modern$2f$utils$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["resolveQueryValue"])(this.options.enabled, this.#currentQuery) !== "boolean") throw new Error("Expected enabled to be a boolean or a callback that returns a boolean");
        this.#updateQuery();
        this.#currentQuery.setOptions(this.options);
        if (prevOptions._defaulted && !(0, __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f40$tanstack$2f$query$2d$core$2f$build$2f$modern$2f$utils$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["shallowEqualObjects"])(this.options, prevOptions)) this.#client.getQueryCache().notify({
            type: "observerOptionsUpdated",
            query: this.#currentQuery,
            observer: this
        });
        const mounted = this.hasListeners();
        if (mounted && shouldFetchOptionally(this.#currentQuery, prevQuery, this.options, prevOptions)) this.#executeFetch();
        this.updateResult();
        if (mounted && (this.#currentQuery !== prevQuery || (0, __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f40$tanstack$2f$query$2d$core$2f$build$2f$modern$2f$utils$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["resolveQueryValue"])(this.options.enabled, this.#currentQuery) !== (0, __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f40$tanstack$2f$query$2d$core$2f$build$2f$modern$2f$utils$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["resolveQueryValue"])(prevOptions.enabled, this.#currentQuery) || (0, __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f40$tanstack$2f$query$2d$core$2f$build$2f$modern$2f$utils$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["resolveQueryValue"])(this.options.staleTime, this.#currentQuery) !== (0, __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f40$tanstack$2f$query$2d$core$2f$build$2f$modern$2f$utils$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["resolveQueryValue"])(prevOptions.staleTime, this.#currentQuery))) this.#updateStaleTimeout();
        const nextRefetchInterval = this.#computeRefetchInterval();
        if (mounted && (this.#currentQuery !== prevQuery || (0, __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f40$tanstack$2f$query$2d$core$2f$build$2f$modern$2f$utils$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["resolveQueryValue"])(this.options.enabled, this.#currentQuery) !== (0, __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f40$tanstack$2f$query$2d$core$2f$build$2f$modern$2f$utils$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["resolveQueryValue"])(prevOptions.enabled, this.#currentQuery) || nextRefetchInterval !== this.#currentRefetchInterval)) this.#updateRefetchInterval(nextRefetchInterval);
    }
    /**
	* Computes the result the observer would produce for the given (already-defaulted) options
	* right now, building the underlying `Query` if it doesn't exist yet, without waiting for a
	* subscription callback. Called by framework adapters on every render (e.g. `useQuery`) so the
	* returned value is available synchronously, ahead of `setOptions` triggering an actual fetch.
	*/ getOptimisticResult(options) {
        const query = this.#client.getQueryCache().build(this.#client, options);
        const result = this.createResult(query, options);
        if (!(0, __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f40$tanstack$2f$query$2d$core$2f$build$2f$modern$2f$utils$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["shallowEqualObjects"])(this.getCurrentResult(), result)) {
            this.#currentResult = result;
            this.#currentResultOptions = this.options;
            this.#currentResultState = this.#currentQuery.state;
        }
        return result;
    }
    /**
	* Returns the most recently computed `QueryObserverResult` for the
	* observed query. This is a point-in-time read; to be notified of updates
	* as they happen, subscribe to the observer instead (its inherited
	* `subscribe` method).
	*
	* @example
	* ```ts
	* const result = observer.getCurrentResult()
	* console.log(result.status, result.data)
	* ```
	*/ getCurrentResult() {
        return this.#currentResult;
    }
    /**
	* Wraps a `QueryObserverResult` in a `Proxy` that records which properties are read, via
	* {@link QueryObserver#trackProp} (and an optional `onPropTracked` callback). Used by framework
	* adapters when `notifyOnChangeProps` is not set, to implement its default "only re-render on
	* properties you actually read" behavior.
	*/ trackResult(result, onPropTracked) {
        return new Proxy(result, {
            get: (target, key)=>{
                this.trackProp(key);
                onPropTracked?.(key);
                return Reflect.get(target, key);
            }
        });
    }
    /**
	* Records that the given `QueryObserverResult` property was read, so a subsequent update only
	* notifies this observer if a tracked property actually changed. Normally called indirectly via
	* {@link QueryObserver#trackResult}'s proxy; exposed directly for adapters that track property
	* access themselves (e.g. through their own reactivity system) instead of via the proxy.
	*/ trackProp(key) {
        this.#trackedProps.add(key);
    }
    /**
	* Returns the `Query` instance this observer is currently observing.
	*/ getCurrentQuery() {
        return this.#currentQuery;
    }
    /**
	* Refetches the observed query and returns a promise that resolves with
	* the resulting `QueryObserverResult`.
	*
	* @example
	* ```ts
	* const result = await observer.refetch({ cancelRefetch: false })
	* console.log(result.data)
	* ```
	*/ refetch({ ...options } = {}) {
        return this.fetch({
            ...options
        });
    }
    /**
	* Fetches a query defined by the given options without affecting this
	* observer's own tracked query or result, and returns a promise that
	* resolves with the `QueryObserverResult` for that fetch. This is useful
	* for prefetching data that another observer (e.g. a query about to be
	* navigated to) will need, ahead of time.
	*
	* @example
	* ```ts
	* const result = await observer.fetchOptimistic({
	*   queryKey: ['posts', 2],
	*   queryFn: () => fetchPost(2),
	* })
	* console.log(result.data)
	* ```
	*/ fetchOptimistic(options) {
        const defaultedOptions = this.#client.defaultQueryOptions(options);
        const query = this.#client.getQueryCache().build(this.#client, defaultedOptions);
        let unsubscribe = ()=>{};
        let resolveEarly;
        const cachePromise = new Promise((resolve)=>{
            resolveEarly = resolve;
            unsubscribe = this.#client.getQueryCache().subscribe((event)=>{
                if (event.type === "updated" && event.query.queryHash === query.queryHash && query.state.data !== void 0) {
                    unsubscribe();
                    resolve(this.createResult(query, defaultedOptions));
                }
            });
        });
        return Promise.race([
            query.fetch().then(()=>{
                const result = this.createResult(query, defaultedOptions);
                resolveEarly?.(result);
                return result;
            }).finally(()=>{
                unsubscribe();
            }),
            cachePromise
        ]);
    }
    fetch(fetchOptions) {
        return this.#executeFetch({
            ...fetchOptions,
            cancelRefetch: fetchOptions.cancelRefetch ?? true
        }).then(()=>{
            this.updateResult();
            return this.#currentResult;
        });
    }
    #executeFetch(fetchOptions) {
        this.#updateQuery();
        let promise = this.#currentQuery.fetch(this.options, fetchOptions);
        if (!fetchOptions?.throwOnError) promise = promise.catch(__TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f40$tanstack$2f$query$2d$core$2f$build$2f$modern$2f$utils$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["noop"]);
        return promise;
    }
    #shouldScheduleTimer(timeout) {
        return !(0, __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f40$tanstack$2f$query$2d$core$2f$build$2f$modern$2f$environmentManager$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["isServer"])() && (0, __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f40$tanstack$2f$query$2d$core$2f$build$2f$modern$2f$utils$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["resolveQueryValue"])(this.options.enabled, this.#currentQuery) !== false && (0, __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f40$tanstack$2f$query$2d$core$2f$build$2f$modern$2f$utils$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["isValidTimeout"])(timeout);
    }
    #updateStaleTimeout() {
        this.#clearStaleTimeout();
        const staleTime = (0, __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f40$tanstack$2f$query$2d$core$2f$build$2f$modern$2f$utils$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["resolveQueryValue"])(this.options.staleTime, this.#currentQuery);
        if (this.#currentResult.isStale || !this.#shouldScheduleTimer(staleTime)) return;
        const timeout = (0, __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f40$tanstack$2f$query$2d$core$2f$build$2f$modern$2f$utils$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["timeUntilStale"])(this.#currentResult.dataUpdatedAt, staleTime) + 1;
        this.#staleTimeoutId = __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f40$tanstack$2f$query$2d$core$2f$build$2f$modern$2f$timeoutManager$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["timeoutManager"].setTimeout(()=>{
            if (!this.#currentResult.isStale) this.updateResult();
        }, timeout);
    }
    #computeRefetchInterval() {
        return (0, __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f40$tanstack$2f$query$2d$core$2f$build$2f$modern$2f$utils$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["resolveQueryValue"])(this.options.refetchInterval, this.#currentQuery) ?? false;
    }
    #updateRefetchInterval(nextInterval) {
        this.#clearRefetchInterval();
        this.#currentRefetchInterval = nextInterval;
        if (this.#currentRefetchInterval === 0 || !this.#shouldScheduleTimer(this.#currentRefetchInterval)) return;
        this.#refetchIntervalId = __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f40$tanstack$2f$query$2d$core$2f$build$2f$modern$2f$timeoutManager$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["timeoutManager"].setInterval(()=>{
            if (this.options.refetchIntervalInBackground || __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f40$tanstack$2f$query$2d$core$2f$build$2f$modern$2f$focusManager$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["focusManager"].isFocused()) this.#executeFetch();
        }, this.#currentRefetchInterval);
    }
    #updateTimers() {
        this.#updateStaleTimeout();
        this.#updateRefetchInterval(this.#computeRefetchInterval());
    }
    #clearStaleTimeout() {
        if (this.#staleTimeoutId !== void 0) {
            __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f40$tanstack$2f$query$2d$core$2f$build$2f$modern$2f$timeoutManager$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["timeoutManager"].clearTimeout(this.#staleTimeoutId);
            this.#staleTimeoutId = void 0;
        }
    }
    #clearRefetchInterval() {
        if (this.#refetchIntervalId !== void 0) {
            __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f40$tanstack$2f$query$2d$core$2f$build$2f$modern$2f$timeoutManager$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["timeoutManager"].clearInterval(this.#refetchIntervalId);
            this.#refetchIntervalId = void 0;
        }
    }
    createResult(query, options) {
        const prevQuery = this.#currentQuery;
        const prevOptions = this.options;
        const prevResult = this.#currentResult;
        const prevResultState = this.#currentResultState;
        const prevResultOptions = this.#currentResultOptions;
        const queryInitialState = query !== prevQuery ? query.state : this.#currentQueryInitialState;
        const { state } = query;
        let newState = {
            ...state
        };
        let isPlaceholderData = false;
        let data;
        if (options._optimisticResults) {
            const mounted = this.hasListeners();
            const fetchOnMount = !mounted && shouldFetchOnMount(query, options);
            const fetchOptionally = mounted && shouldFetchOptionally(query, prevQuery, options, prevOptions);
            if (fetchOnMount || fetchOptionally) newState = {
                ...newState,
                ...(0, __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f40$tanstack$2f$query$2d$core$2f$build$2f$modern$2f$query$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["fetchState"])(state.data, query.options)
            };
            if (options._optimisticResults === "isRestoring") newState.fetchStatus = "idle";
        }
        let { error, errorUpdatedAt, status } = newState;
        data = newState.data;
        let skipSelect = false;
        if (options.placeholderData !== void 0 && data === void 0 && status === "pending") {
            let placeholderData;
            if (prevResult?.isPlaceholderData && options.placeholderData === prevResultOptions?.placeholderData) {
                placeholderData = prevResult.data;
                skipSelect = true;
            } else placeholderData = typeof options.placeholderData === "function" ? options.placeholderData(this.#lastQueryWithDefinedData?.state.data, this.#lastQueryWithDefinedData) : options.placeholderData;
            if (placeholderData !== void 0) {
                status = "success";
                data = (0, __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f40$tanstack$2f$query$2d$core$2f$build$2f$modern$2f$utils$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["replaceData"])(prevResult?.data, placeholderData, options);
                isPlaceholderData = true;
            }
        }
        if (options.select && data !== void 0 && !skipSelect) {
            if (prevResult && data === prevResultState?.data && options.select === this.#selectFn) data = this.#selectResult;
            else try {
                this.#selectFn = options.select;
                data = options.select(data);
                data = (0, __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f40$tanstack$2f$query$2d$core$2f$build$2f$modern$2f$utils$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["replaceData"])(prevResult?.data, data, options);
                this.#selectResult = data;
                this.#selectError = null;
            } catch (selectError) {
                this.#selectError = selectError;
            }
        } else if (data === void 0) this.#selectError = null;
        if (this.#selectError) {
            error = this.#selectError;
            data = this.#selectResult;
            errorUpdatedAt = Date.now();
            status = "error";
            isPlaceholderData = false;
        }
        const isFetching = newState.fetchStatus === "fetching";
        const isPending = status === "pending";
        const isError = status === "error";
        const isLoading = isPending && isFetching;
        const hasData = data !== void 0;
        return {
            status,
            fetchStatus: newState.fetchStatus,
            isPending,
            isSuccess: status === "success",
            isError,
            isInitialLoading: isLoading,
            isLoading,
            data,
            dataUpdatedAt: newState.dataUpdatedAt,
            error,
            errorUpdatedAt,
            failureCount: newState.fetchFailureCount,
            failureReason: newState.fetchFailureReason,
            errorUpdateCount: newState.errorUpdateCount,
            isFetched: query.isFetched(),
            isFetchedAfterMount: newState.dataUpdateCount > queryInitialState.dataUpdateCount || newState.errorUpdateCount > queryInitialState.errorUpdateCount,
            isFetching,
            isRefetching: isFetching && !isPending,
            isLoadingError: isError && !hasData,
            isPaused: newState.fetchStatus === "paused",
            isPlaceholderData,
            isRefetchError: isError && hasData,
            isStale: isStale(query, options),
            refetch: this.refetch,
            isEnabled: (0, __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f40$tanstack$2f$query$2d$core$2f$build$2f$modern$2f$utils$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["resolveQueryValue"])(options.enabled, query) !== false
        };
    }
    /**
	* Recomputes and stores the current result from the current query/options, notifying listeners
	* if it changed. Framework adapters call this right after subscribing to make sure no query
	* update was missed in the gap between creating the observer and subscribing to it.
	*/ updateResult() {
        const prevResult = this.#currentResult;
        const nextResult = this.createResult(this.#currentQuery, this.options);
        this.#currentResultState = this.#currentQuery.state;
        this.#currentResultOptions = this.options;
        if (this.#currentResultState.data !== void 0) this.#lastQueryWithDefinedData = this.#currentQuery;
        if ((0, __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f40$tanstack$2f$query$2d$core$2f$build$2f$modern$2f$utils$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["shallowEqualObjects"])(nextResult, prevResult)) return;
        this.#currentResult = nextResult;
        const shouldNotifyListeners = ()=>{
            if (!prevResult) return true;
            const { notifyOnChangeProps } = this.options;
            const notifyOnChangePropsValue = typeof notifyOnChangeProps === "function" ? notifyOnChangeProps() : notifyOnChangeProps;
            if (notifyOnChangePropsValue === "all" || !notifyOnChangePropsValue && !this.#trackedProps.size) return true;
            const includedProps = new Set(notifyOnChangePropsValue ?? this.#trackedProps);
            if (this.options.throwOnError) includedProps.add("error");
            return Object.keys(this.#currentResult).some((key)=>{
                const typedKey = key;
                return this.#currentResult[typedKey] !== prevResult[typedKey] && includedProps.has(typedKey);
            });
        };
        const notifyListeners = shouldNotifyListeners();
        __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f40$tanstack$2f$query$2d$core$2f$build$2f$modern$2f$notifyManager$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["notifyManager"].batch(()=>{
            if (notifyListeners) this.listeners.forEach((listener)=>{
                listener(this.#currentResult);
            });
            this.#client.getQueryCache().notify({
                query: this.#currentQuery,
                type: "observerResultsUpdated"
            });
        });
    }
    #updateQuery() {
        const query = this.#client.getQueryCache().build(this.#client, this.options);
        if (query === this.#currentQuery) return;
        const prevQuery = this.#currentQuery;
        this.#currentQuery = query;
        this.#currentQueryInitialState = query.state;
        if (this.hasListeners()) {
            prevQuery?.removeObserver(this);
            query.addObserver(this);
        }
    }
    /** @internal */ onQueryUpdate() {
        this.updateResult();
        if (this.hasListeners()) this.#updateTimers();
    }
};
function shouldLoadOnMount(query, options) {
    return (0, __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f40$tanstack$2f$query$2d$core$2f$build$2f$modern$2f$utils$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["resolveQueryValue"])(options.enabled, query) !== false && query.state.data === void 0 && !(query.state.status === "error" && (0, __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f40$tanstack$2f$query$2d$core$2f$build$2f$modern$2f$utils$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["resolveQueryValue"])(options.retryOnMount, query) === false);
}
function shouldFetchOnMount(query, options) {
    return shouldLoadOnMount(query, options) || query.state.data !== void 0 && shouldFetchOn(query, options, options.refetchOnMount);
}
function shouldFetchOn(query, options, field) {
    if ((0, __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f40$tanstack$2f$query$2d$core$2f$build$2f$modern$2f$utils$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["resolveQueryValue"])(options.enabled, query) !== false && (0, __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f40$tanstack$2f$query$2d$core$2f$build$2f$modern$2f$utils$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["resolveQueryValue"])(options.staleTime, query) !== "static") {
        const value = (0, __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f40$tanstack$2f$query$2d$core$2f$build$2f$modern$2f$utils$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["resolveQueryValue"])(field, query);
        return value === "always" || value !== false && isStale(query, options);
    }
    return false;
}
function shouldFetchOptionally(query, prevQuery, options, prevOptions) {
    return (query !== prevQuery || (0, __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f40$tanstack$2f$query$2d$core$2f$build$2f$modern$2f$utils$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["resolveQueryValue"])(prevOptions.enabled, query) === false) && (!options.suspense || query.state.status !== "error") && isStale(query, options);
}
function isStale(query, options) {
    return (0, __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f40$tanstack$2f$query$2d$core$2f$build$2f$modern$2f$utils$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["resolveQueryValue"])(options.enabled, query) !== false && query.isStaleByTime((0, __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f40$tanstack$2f$query$2d$core$2f$build$2f$modern$2f$utils$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["resolveQueryValue"])(options.staleTime, query));
}
;
}),
"[project]/frontend/node_modules/@tanstack/react-query/build/modern/IsRestoringProvider.js [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "IsRestoringProvider",
    ()=>IsRestoringProvider,
    "useIsRestoring",
    ()=>useIsRestoring
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/frontend/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
"use client";
;
//#region src/IsRestoringProvider.ts
const IsRestoringContext = __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["createContext"](false);
/**
* If you are using `PersistQueryClientProvider`, you can also use the `useIsRestoring` hook alongside it to
* check if a restore is currently in progress. `useQuery` and friends also check this internally to avoid
* race conditions between the restore and mounting queries.
*
* @returns `true` while a persisted client is being restored, `false` otherwise.
*/ const useIsRestoring = ()=>__TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useContext"](IsRestoringContext);
/**
* The Provider that `PersistQueryClientProvider` uses to signal whether a persisted client is currently
* being restored, read by `useIsRestoring`.
*/ const IsRestoringProvider = IsRestoringContext.Provider;
;
}),
"[project]/frontend/node_modules/@tanstack/react-query/build/modern/QueryErrorResetBoundary.js [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "QueryErrorResetBoundary",
    ()=>QueryErrorResetBoundary,
    "useQueryErrorResetBoundary",
    ()=>useQueryErrorResetBoundary
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/frontend/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/frontend/node_modules/next/dist/compiled/react/jsx-runtime.js [app-client] (ecmascript)");
"use client";
;
;
//#region src/QueryErrorResetBoundary.tsx
/**
* Resets any query errors within the boundary, so queries know they can try again.
*/ function createValue() {
    let isReset = false;
    return {
        /**
		* Clears the reset state, so queries know not to try again until the boundary is reset again.
		*/ clearReset: ()=>{
            isReset = false;
        },
        /**
		* Resets any query errors within the boundary, so queries know they can try again.
		*/ reset: ()=>{
            isReset = true;
        },
        /**
		* Returns whether the boundary has been reset and not yet cleared.
		*/ isReset: ()=>{
            return isReset;
        }
    };
}
const QueryErrorResetBoundaryContext = __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["createContext"](createValue());
/**
* This hook will reset any query errors within the closest `QueryErrorResetBoundary`. If there is no boundary
* defined it will reset them globally.
*
* @returns The boundary's {@link QueryErrorResetBoundaryValue}.
*
* @example
* ```tsx
* import { ErrorBoundary } from 'react-error-boundary'
* import { useQueryErrorResetBoundary } from '@tanstack/react-query'
*
* function App({ children }: { children: React.ReactNode }) {
*   const { reset } = useQueryErrorResetBoundary()
*
*   return (
*     <ErrorBoundary
*       onReset={reset}
*       fallbackRender={({ resetErrorBoundary }) => (
*         <div>
*           There was an error!
*           <button onClick={() => resetErrorBoundary()}>Try again</button>
*         </div>
*       )}
*     >
*       {children}
*     </ErrorBoundary>
*   )
* }
* ```
*/ const useQueryErrorResetBoundary = ()=>__TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useContext"](QueryErrorResetBoundaryContext);
/**
* When using `suspense` or `throwOnError` in your queries, you need a way to let queries know that you want to
* try again when re-rendering after some error occurred. With the `QueryErrorResetBoundary` component you can
* reset any query errors within the boundaries of the component.
*
* @returns The `children`, rendered as-is, or called with the boundary's {@link QueryErrorResetBoundaryValue}
* if `children` is a function.
*
* @example
* ```tsx
* import { ErrorBoundary } from 'react-error-boundary'
* import { QueryErrorResetBoundary } from '@tanstack/react-query'
*
* function App() {
*   return (
*     <QueryErrorResetBoundary>
*       {({ reset }) => (
*         <ErrorBoundary
*           onReset={reset}
*           fallbackRender={({ resetErrorBoundary }) => (
*             <div>
*               There was an error!
*               <button onClick={() => resetErrorBoundary()}>Try again</button>
*             </div>
*           )}
*         >
*           <Page />
*         </ErrorBoundary>
*       )}
*     </QueryErrorResetBoundary>
*   )
* }
* ```
*/ const QueryErrorResetBoundary = ({ children })=>{
    const [value] = __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"]({
        "QueryErrorResetBoundary.useState": ()=>createValue()
    }["QueryErrorResetBoundary.useState"]);
    return /* @__PURE__ */ (0, __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsx"])(QueryErrorResetBoundaryContext.Provider, {
        value,
        children: typeof children === "function" ? children(value) : children
    });
};
;
}),
"[project]/frontend/node_modules/@tanstack/react-query/build/modern/errorBoundaryUtils.js [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "ensurePreventErrorBoundaryRetry",
    ()=>ensurePreventErrorBoundaryRetry,
    "getHasError",
    ()=>getHasError,
    "useClearResetErrorBoundary",
    ()=>useClearResetErrorBoundary
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/frontend/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f40$tanstack$2f$query$2d$core$2f$build$2f$modern$2f$utils$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/frontend/node_modules/@tanstack/query-core/build/modern/utils.js [app-client] (ecmascript)");
"use client";
;
;
//#region src/errorBoundaryUtils.ts
const ensurePreventErrorBoundaryRetry = (options, errorResetBoundary, query)=>{
    const throwOnError = query?.state.error && typeof options.throwOnError === "function" ? (0, __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f40$tanstack$2f$query$2d$core$2f$build$2f$modern$2f$utils$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["shouldThrowError"])(options.throwOnError, [
        query.state.error,
        query
    ]) : options.throwOnError;
    if (options.suspense || throwOnError) {
        if (!errorResetBoundary.isReset()) options.retryOnMount = false;
    }
};
const useClearResetErrorBoundary = (errorResetBoundary)=>{
    __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"]({
        "useClearResetErrorBoundary.useEffect": ()=>{
            errorResetBoundary.clearReset();
        }
    }["useClearResetErrorBoundary.useEffect"], [
        errorResetBoundary
    ]);
};
const getHasError = ({ result, errorResetBoundary, throwOnError, query, suspense })=>{
    return result.isError && !errorResetBoundary.isReset() && !result.isFetching && query && (suspense && result.data === void 0 || (0, __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f40$tanstack$2f$query$2d$core$2f$build$2f$modern$2f$utils$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["shouldThrowError"])(throwOnError, [
        result.error,
        query
    ]));
};
;
}),
"[project]/frontend/node_modules/@tanstack/react-query/build/modern/suspense.js [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "defaultThrowOnError",
    ()=>defaultThrowOnError,
    "ensureSuspenseTimers",
    ()=>ensureSuspenseTimers,
    "fetchOptimistic",
    ()=>fetchOptimistic,
    "shouldSuspend",
    ()=>shouldSuspend
]);
//#region src/suspense.ts
const defaultThrowOnError = (_error, query)=>query.state.data === void 0;
const ensureSuspenseTimers = (defaultedOptions)=>{
    if (defaultedOptions.suspense) {
        const MIN_SUSPENSE_TIME_MS = 1e3;
        const clamp = (value)=>value === "static" ? value : Math.max(value ?? MIN_SUSPENSE_TIME_MS, MIN_SUSPENSE_TIME_MS);
        const originalStaleTime = defaultedOptions.staleTime;
        defaultedOptions.staleTime = typeof originalStaleTime === "function" ? (...args)=>clamp(originalStaleTime(...args)) : clamp(originalStaleTime);
        if (typeof defaultedOptions.gcTime === "number") defaultedOptions.gcTime = Math.max(defaultedOptions.gcTime, MIN_SUSPENSE_TIME_MS);
    }
};
const shouldSuspend = (defaultedOptions, result)=>defaultedOptions?.suspense && result.isPending;
const fetchOptimistic = (defaultedOptions, observer, errorResetBoundary)=>observer.fetchOptimistic(defaultedOptions).catch(()=>{
        errorResetBoundary.clearReset();
    });
;
}),
"[project]/frontend/node_modules/@tanstack/react-query/build/modern/useBaseQuery.js [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "useBaseQuery",
    ()=>useBaseQuery
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$next$2f$dist$2f$build$2f$polyfills$2f$process$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = /*#__PURE__*/ __turbopack_context__.i("[project]/frontend/node_modules/next/dist/build/polyfills/process.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f40$tanstack$2f$react$2d$query$2f$build$2f$modern$2f$QueryClientProvider$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/frontend/node_modules/@tanstack/react-query/build/modern/QueryClientProvider.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f40$tanstack$2f$react$2d$query$2f$build$2f$modern$2f$IsRestoringProvider$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/frontend/node_modules/@tanstack/react-query/build/modern/IsRestoringProvider.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f40$tanstack$2f$react$2d$query$2f$build$2f$modern$2f$QueryErrorResetBoundary$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/frontend/node_modules/@tanstack/react-query/build/modern/QueryErrorResetBoundary.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f40$tanstack$2f$react$2d$query$2f$build$2f$modern$2f$errorBoundaryUtils$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/frontend/node_modules/@tanstack/react-query/build/modern/errorBoundaryUtils.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f40$tanstack$2f$react$2d$query$2f$build$2f$modern$2f$suspense$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/frontend/node_modules/@tanstack/react-query/build/modern/suspense.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/frontend/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f40$tanstack$2f$query$2d$core$2f$build$2f$modern$2f$utils$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/frontend/node_modules/@tanstack/query-core/build/modern/utils.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f40$tanstack$2f$query$2d$core$2f$build$2f$modern$2f$notifyManager$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/frontend/node_modules/@tanstack/query-core/build/modern/notifyManager.js [app-client] (ecmascript)");
"use client";
;
;
;
;
;
;
;
//#region src/useBaseQuery.ts
function useBaseQuery(options, Observer, queryClient) {
    if ("TURBOPACK compile-time truthy", 1) {
        if (typeof options !== "object" || Array.isArray(options)) throw new Error("Bad argument type. Starting with v5, only the \"Object\" form is allowed when calling query related functions. Please use the error stack to find the culprit call. More info here: https://tanstack.com/query/latest/docs/react/guides/migrating-to-v5#supports-a-single-signature-one-object");
    }
    const isRestoring = (0, __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f40$tanstack$2f$react$2d$query$2f$build$2f$modern$2f$IsRestoringProvider$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useIsRestoring"])();
    const errorResetBoundary = (0, __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f40$tanstack$2f$react$2d$query$2f$build$2f$modern$2f$QueryErrorResetBoundary$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useQueryErrorResetBoundary"])();
    const client = (0, __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f40$tanstack$2f$react$2d$query$2f$build$2f$modern$2f$QueryClientProvider$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useQueryClient"])(queryClient);
    const defaultedOptions = client.defaultQueryOptions(options);
    const query = client.getQueryCache().get(defaultedOptions.queryHash);
    if ("TURBOPACK compile-time truthy", 1) {
        if (!defaultedOptions.queryFn) console.error(`[${defaultedOptions.queryHash}]: No queryFn was passed as an option, and no default queryFn was found. The queryFn parameter is only optional when using a default queryFn. More info here: https://tanstack.com/query/latest/docs/framework/react/guides/default-query-function`);
    }
    const subscribed = options.subscribed !== false;
    defaultedOptions._optimisticResults = isRestoring ? "isRestoring" : subscribed ? "optimistic" : void 0;
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f40$tanstack$2f$react$2d$query$2f$build$2f$modern$2f$suspense$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["ensureSuspenseTimers"])(defaultedOptions);
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f40$tanstack$2f$react$2d$query$2f$build$2f$modern$2f$errorBoundaryUtils$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["ensurePreventErrorBoundaryRetry"])(defaultedOptions, errorResetBoundary, query);
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f40$tanstack$2f$react$2d$query$2f$build$2f$modern$2f$errorBoundaryUtils$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useClearResetErrorBoundary"])(errorResetBoundary);
    const [observer] = __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"]({
        "useBaseQuery.useState": ()=>new Observer(client, defaultedOptions)
    }["useBaseQuery.useState"]);
    const result = observer.getOptimisticResult(defaultedOptions);
    const shouldSubscribe = !isRestoring && subscribed;
    __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useSyncExternalStore"](__TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useCallback"]({
        "useBaseQuery.useSyncExternalStore.useCallback": (onStoreChange)=>{
            const unsubscribe = shouldSubscribe ? observer.subscribe(__TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f40$tanstack$2f$query$2d$core$2f$build$2f$modern$2f$notifyManager$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["notifyManager"].batchCalls(onStoreChange)) : __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f40$tanstack$2f$query$2d$core$2f$build$2f$modern$2f$utils$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["noop"];
            observer.updateResult();
            return unsubscribe;
        }
    }["useBaseQuery.useSyncExternalStore.useCallback"], [
        observer,
        shouldSubscribe
    ]), {
        "useBaseQuery.useSyncExternalStore": ()=>observer.getCurrentResult()
    }["useBaseQuery.useSyncExternalStore"], {
        "useBaseQuery.useSyncExternalStore": ()=>observer.getCurrentResult()
    }["useBaseQuery.useSyncExternalStore"]);
    __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"]({
        "useBaseQuery.useEffect": ()=>{
            observer.setOptions(defaultedOptions);
        }
    }["useBaseQuery.useEffect"], [
        defaultedOptions,
        observer
    ]);
    if ((0, __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f40$tanstack$2f$react$2d$query$2f$build$2f$modern$2f$suspense$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["shouldSuspend"])(defaultedOptions, result)) throw (0, __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f40$tanstack$2f$react$2d$query$2f$build$2f$modern$2f$suspense$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["fetchOptimistic"])(defaultedOptions, observer, errorResetBoundary);
    if ((0, __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f40$tanstack$2f$react$2d$query$2f$build$2f$modern$2f$errorBoundaryUtils$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["getHasError"])({
        result,
        errorResetBoundary,
        throwOnError: defaultedOptions.throwOnError,
        query,
        suspense: defaultedOptions.suspense
    })) throw result.error;
    return !defaultedOptions.notifyOnChangeProps ? observer.trackResult(result) : result;
}
;
}),
"[project]/frontend/node_modules/@tanstack/react-query/build/modern/useMutation.js [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "useMutation",
    ()=>useMutation
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f40$tanstack$2f$react$2d$query$2f$build$2f$modern$2f$QueryClientProvider$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/frontend/node_modules/@tanstack/react-query/build/modern/QueryClientProvider.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/frontend/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f40$tanstack$2f$query$2d$core$2f$build$2f$modern$2f$mutationObserver$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/frontend/node_modules/@tanstack/query-core/build/modern/mutationObserver.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f40$tanstack$2f$query$2d$core$2f$build$2f$modern$2f$utils$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/frontend/node_modules/@tanstack/query-core/build/modern/utils.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f40$tanstack$2f$query$2d$core$2f$build$2f$modern$2f$notifyManager$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/frontend/node_modules/@tanstack/query-core/build/modern/notifyManager.js [app-client] (ecmascript)");
"use client";
;
;
;
//#region src/useMutation.ts
/**
* Unlike queries, mutations are typically used to create/update/delete data or perform server side-effects.
* `useMutation` is the hook for that.
*
* @see {@link mutationOptions} to share these options across multiple `useMutation` call sites, or to look
* the mutation up elsewhere via its `mutationKey` (e.g. with `useMutationState`).
* @param options - The {@link UseMutationOptions} to use — everything you can pass to `useMutation`.
* @param queryClient - Use this to use a custom `QueryClient`. Otherwise, the one from the nearest context will
* be used.
* @returns `mutate`/`mutateAsync` also accept per-call `onSuccess`/`onError`/`onSettled` callbacks as a second
* argument, useful for triggering call-site side effects (e.g. navigation) without coupling them to the shared
* mutation definition. Hook-level callbacks (passed to `options`) fire for every mutation; per-call callbacks
* fire only for the latest call you've made, and only while the component is still mounted — unmounting before
* the mutation settles removes the subscription and prevents them from firing.
*
* @example
* ```tsx
* import { useMutation, useQueryClient } from '@tanstack/react-query'
*
* function AddTodo() {
*   const queryClient = useQueryClient()
*
*   const addMutation = useMutation({
*     mutationFn: addTodo,
*     onSuccess: () => queryClient.invalidateQueries({ queryKey: ['todos'] }),
*   })
*
*   return (
*     <button
*       onClick={() =>
*         addMutation.mutate('Item', {
*           onError: (error) => console.error('Failed to add item:', error),
*         })
*       }
*     >
*       Add
*     </button>
*   )
* }
* ```
*
* @example
* Rendering the mutation's own state, rather than just firing it off:
* ```tsx
* import { useMutation, useQueryClient } from '@tanstack/react-query'
*
* function AddTodo() {
*   const queryClient = useQueryClient()
*
*   const addMutation = useMutation({
*     mutationFn: addTodo,
*     onSuccess: () => queryClient.invalidateQueries({ queryKey: ['todos'] }),
*   })
*
*   return (
*     <div>
*       {addMutation.isPending ? (
*         'Adding todo...'
*       ) : (
*         <>
*           {addMutation.isError ? (
*             <div>An error occurred: {addMutation.error.message}</div>
*           ) : null}
*           <button onClick={() => addMutation.mutate('Item')}>Add</button>
*         </>
*       )}
*     </div>
*   )
* }
* ```
*
* @example
* Optimistic update via `onMutate`, rolling back on `onError`:
* ```tsx
* import { useMutation, useQueryClient } from '@tanstack/react-query'
*
* function AddTodo() {
*   const queryClient = useQueryClient()
*
*   const addMutation = useMutation({
*     mutationFn: addTodo,
*     onMutate: async (newTodo) => {
*       await queryClient.cancelQueries({ queryKey: ['todos'] })
*       const previousTodos = queryClient.getQueryData<Array<string>>(['todos'])
*
*       queryClient.setQueryData<Array<string>>(['todos'], (old) => [
*         ...(old ?? []),
*         newTodo,
*       ])
*
*       // Passed to `onError` as `onMutateResult` if the mutation fails.
*       return { previousTodos }
*     },
*     onError: (_err, _newTodo, onMutateResult) => {
*       queryClient.setQueryData(['todos'], onMutateResult?.previousTodos)
*     },
*     onSettled: () => {
*       queryClient.invalidateQueries({ queryKey: ['todos'] })
*     },
*   })
*
*   return (
*     <button onClick={() => addMutation.mutate('Item')}>Add</button>
*   )
* }
* ```
*
* @example
* Callbacks passed per call to `mutate` only fire for the last call — `mutateAsync` gives you a
* promise per call instead, so you can wait for all of them when they succeed:
* ```tsx
* import { useMutation, useQueryClient } from '@tanstack/react-query'
*
* function AddTodos() {
*   const queryClient = useQueryClient()
*
*   const addMutation = useMutation({
*     mutationFn: addTodo,
*     onSuccess: () => queryClient.invalidateQueries({ queryKey: ['todos'] }),
*   })
*
*   async function handleAddAll(todos: Array<string>) {
*     try {
*       await Promise.all(todos.map((todo) => addMutation.mutateAsync(todo)))
*     } catch (error) {
*       console.error('Failed to add todos:', error)
*     }
*   }
*
*   return (
*     <button onClick={() => handleAddAll(['Todo 1', 'Todo 2', 'Todo 3'])}>
*       Add all
*     </button>
*   )
* }
* ```
*
* @example
* If some of the mutations above can fail independently of the others, and you want to know which ones
* did — rather than losing that information the moment the first one rejects — swap `Promise.all` for
* `Promise.allSettled`:
* ```tsx
* import { useMutation, useQueryClient } from '@tanstack/react-query'
*
* function AddTodos() {
*   const queryClient = useQueryClient()
*
*   const addMutation = useMutation({
*     mutationFn: addTodo,
*     onSuccess: () => queryClient.invalidateQueries({ queryKey: ['todos'] }),
*   })
*
*   async function handleAddAll(todos: Array<string>) {
*     const addResults = await Promise.allSettled(
*       todos.map((todo) => addMutation.mutateAsync(todo)),
*     )
*
*     addResults.forEach((addResult, index) => {
*       if (addResult.status === 'rejected') {
*         console.error(`Failed to add "${todos[index]}":`, addResult.reason)
*       }
*     })
*   }
*
*   return (
*     <button onClick={() => handleAddAll(['Todo 1', 'Todo 2', 'Todo 3'])}>
*       Add all
*     </button>
*   )
* }
* ```
*/ function useMutation(options, queryClient) {
    const client = (0, __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f40$tanstack$2f$react$2d$query$2f$build$2f$modern$2f$QueryClientProvider$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useQueryClient"])(queryClient);
    const [observer] = __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"]({
        "useMutation.useState": ()=>new __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f40$tanstack$2f$query$2d$core$2f$build$2f$modern$2f$mutationObserver$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["MutationObserver"](client, options)
    }["useMutation.useState"]);
    __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"]({
        "useMutation.useEffect": ()=>{
            observer.setOptions(options);
        }
    }["useMutation.useEffect"], [
        observer,
        options
    ]);
    const result = __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useSyncExternalStore"](__TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useCallback"]({
        "useMutation.useSyncExternalStore[result]": (onStoreChange)=>observer.subscribe(__TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f40$tanstack$2f$query$2d$core$2f$build$2f$modern$2f$notifyManager$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["notifyManager"].batchCalls(onStoreChange))
    }["useMutation.useSyncExternalStore[result]"], [
        observer
    ]), {
        "useMutation.useSyncExternalStore[result]": ()=>observer.getCurrentResult()
    }["useMutation.useSyncExternalStore[result]"], {
        "useMutation.useSyncExternalStore[result]": ()=>observer.getCurrentResult()
    }["useMutation.useSyncExternalStore[result]"]);
    const mutate = __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useCallback"]({
        "useMutation.useCallback[mutate]": (...args)=>{
            observer.mutate(args[0], args[1]).catch(__TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f40$tanstack$2f$query$2d$core$2f$build$2f$modern$2f$utils$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["noop"]);
        }
    }["useMutation.useCallback[mutate]"], [
        observer
    ]);
    if (result.error && (0, __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f40$tanstack$2f$query$2d$core$2f$build$2f$modern$2f$utils$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["shouldThrowError"])(observer.options.throwOnError, [
        result.error
    ])) throw result.error;
    return {
        ...result,
        mutate,
        mutateAsync: result.mutate
    };
}
;
}),
"[project]/frontend/node_modules/@tanstack/react-query/build/modern/useQuery.js [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "useQuery",
    ()=>useQuery
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f40$tanstack$2f$react$2d$query$2f$build$2f$modern$2f$useBaseQuery$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/frontend/node_modules/@tanstack/react-query/build/modern/useBaseQuery.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f40$tanstack$2f$query$2d$core$2f$build$2f$modern$2f$queryObserver$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/frontend/node_modules/@tanstack/query-core/build/modern/queryObserver.js [app-client] (ecmascript)");
"use client";
;
;
//#region src/useQuery.ts
function useQuery(options, queryClient) {
    return (0, __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f40$tanstack$2f$react$2d$query$2f$build$2f$modern$2f$useBaseQuery$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useBaseQuery"])(options, __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f40$tanstack$2f$query$2d$core$2f$build$2f$modern$2f$queryObserver$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["QueryObserver"], queryClient);
}
;
}),
"[project]/frontend/node_modules/react-transition-group/esm/TransitionGroupContext.js [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>__TURBOPACK__default__export__
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/frontend/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
;
const __TURBOPACK__default__export__ = __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].createContext(null);
}),
]);

//# sourceMappingURL=19xk_0954-6g._.js.map