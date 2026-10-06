(globalThis["TURBOPACK"] || (globalThis["TURBOPACK"] = [])).push([typeof document === "object" ? document.currentScript : undefined,
"[project]/frontend/app/components/SidebarItem.tsx [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "SidebarItem",
    ()=>SidebarItem
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/frontend/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$next$2f$dist$2f$client$2f$app$2d$dir$2f$link$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/frontend/node_modules/next/dist/client/app-dir/link.js [app-client] (ecmascript)");
;
;
function SidebarItem({ label, icon: Icon, href, active }) {
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$next$2f$dist$2f$client$2f$app$2d$dir$2f$link$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
        href: href,
        className: `block py-4 w-full border-b border-[#195756] transition-colors ${active ? 'bg-[#00BFA6]/10 border-l-4 border-l-[#00BFA6]' : 'hover:bg-white/5'}`,
        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: "w-full ",
            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "pl-4 flex ",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(Icon, {
                        className: active ? "text-[#00BFA6]" : "text-white"
                    }, void 0, false, {
                        fileName: "[project]/frontend/app/components/SidebarItem.tsx",
                        lineNumber: 16,
                        columnNumber: 21
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                        className: `ml-3 ${active ? 'text-[#00BFA6]' : 'text-white'}`,
                        children: label
                    }, void 0, false, {
                        fileName: "[project]/frontend/app/components/SidebarItem.tsx",
                        lineNumber: 17,
                        columnNumber: 21
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/frontend/app/components/SidebarItem.tsx",
                lineNumber: 15,
                columnNumber: 17
            }, this)
        }, void 0, false, {
            fileName: "[project]/frontend/app/components/SidebarItem.tsx",
            lineNumber: 14,
            columnNumber: 13
        }, this)
    }, void 0, false, {
        fileName: "[project]/frontend/app/components/SidebarItem.tsx",
        lineNumber: 13,
        columnNumber: 9
    }, this);
}
_c = SidebarItem;
var _c;
__turbopack_context__.k.register(_c, "SidebarItem");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/frontend/app/components/SiderBar.tsx [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "SiderBar",
    ()=>SiderBar
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/frontend/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$app$2f$components$2f$SidebarItem$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/frontend/app/components/SidebarItem.tsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f40$mui$2f$icons$2d$material$2f$WindPower$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/frontend/node_modules/@mui/icons-material/WindPower.mjs [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f40$mui$2f$icons$2d$material$2f$Air$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/frontend/node_modules/@mui/icons-material/Air.mjs [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f40$mui$2f$icons$2d$material$2f$MenuBook$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/frontend/node_modules/@mui/icons-material/MenuBook.mjs [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$next$2f$navigation$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/frontend/node_modules/next/navigation.js [app-client] (ecmascript)");
;
var _s = __turbopack_context__.k.signature();
"use client";
;
;
;
;
;
function SiderBar() {
    _s();
    const path = (0, __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$next$2f$navigation$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["usePathname"])();
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        className: "flex p-2 bg-[#044947] flex-col items-start gap-2 w-80 shrink-0 overflow-y-auto border-r border-gray-200",
        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("nav", {
            className: "w-full",
            children: [
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$app$2f$components$2f$SidebarItem$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["SidebarItem"], {
                    label: "SIMULAÇÕES",
                    icon: __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f40$mui$2f$icons$2d$material$2f$Air$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"],
                    href: "/simulations",
                    active: path === '/simulations'
                }, void 0, false, {
                    fileName: "[project]/frontend/app/components/SiderBar.tsx",
                    lineNumber: 13,
                    columnNumber: 17
                }, this),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$app$2f$components$2f$SidebarItem$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["SidebarItem"], {
                    label: "TURBINAS",
                    icon: __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f40$mui$2f$icons$2d$material$2f$WindPower$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"],
                    href: "/turbines",
                    active: path === '/turbines'
                }, void 0, false, {
                    fileName: "[project]/frontend/app/components/SiderBar.tsx",
                    lineNumber: 19,
                    columnNumber: 17
                }, this),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$app$2f$components$2f$SidebarItem$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["SidebarItem"], {
                    label: "CATÁLOGO DE TURBINAS",
                    icon: __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f40$mui$2f$icons$2d$material$2f$MenuBook$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"],
                    href: "/turbine-catalog",
                    active: path === '/turbine-catalog' || path === '/'
                }, void 0, false, {
                    fileName: "[project]/frontend/app/components/SiderBar.tsx",
                    lineNumber: 25,
                    columnNumber: 17
                }, this)
            ]
        }, void 0, true, {
            fileName: "[project]/frontend/app/components/SiderBar.tsx",
            lineNumber: 12,
            columnNumber: 13
        }, this)
    }, void 0, false, {
        fileName: "[project]/frontend/app/components/SiderBar.tsx",
        lineNumber: 11,
        columnNumber: 9
    }, this);
}
_s(SiderBar, "kx72sda92+XlSh1QiZvq/YVQxpY=", false, function() {
    return [
        __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$next$2f$navigation$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["usePathname"]
    ];
});
_c = SiderBar;
var _c;
__turbopack_context__.k.register(_c, "SiderBar");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/frontend/app/components/providers/mui-provider.tsx [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "MuiProvider",
    ()=>MuiProvider
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/frontend/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f40$mui$2f$material$2f$styles$2f$ThemeProvider$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__ThemeProvider$3e$__ = __turbopack_context__.i("[project]/frontend/node_modules/@mui/material/styles/ThemeProvider.mjs [app-client] (ecmascript) <export default as ThemeProvider>");
var __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$app$2f$components$2f$providers$2f$theme$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/frontend/app/components/providers/theme.ts [app-client] (ecmascript)");
"use client";
;
;
;
function MuiProvider({ children }) {
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f40$mui$2f$material$2f$styles$2f$ThemeProvider$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__ThemeProvider$3e$__["ThemeProvider"], {
        theme: __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$app$2f$components$2f$providers$2f$theme$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["theme"],
        children: children
    }, void 0, false, {
        fileName: "[project]/frontend/app/components/providers/mui-provider.tsx",
        lineNumber: 8,
        columnNumber: 10
    }, this);
}
_c = MuiProvider;
var _c;
__turbopack_context__.k.register(_c, "MuiProvider");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/frontend/app/components/providers/react-query-provider.tsx [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "ReactQueryProvider",
    ()=>ReactQueryProvider
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/frontend/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f40$tanstack$2f$query$2d$core$2f$build$2f$modern$2f$queryClient$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/frontend/node_modules/@tanstack/query-core/build/modern/queryClient.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f40$tanstack$2f$react$2d$query$2f$build$2f$modern$2f$QueryClientProvider$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/frontend/node_modules/@tanstack/react-query/build/modern/QueryClientProvider.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/frontend/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
;
var _s = __turbopack_context__.k.signature();
"use client";
;
;
function ReactQueryProvider({ children }) {
    _s();
    const [queryClient] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])({
        "ReactQueryProvider.useState": ()=>new __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f40$tanstack$2f$query$2d$core$2f$build$2f$modern$2f$queryClient$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["QueryClient"]({
                defaultOptions: {
                    queries: {
                        staleTime: 1000 * 60 * 5,
                        refetchOnWindowFocus: false
                    }
                }
            })
    }["ReactQueryProvider.useState"]);
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f40$tanstack$2f$react$2d$query$2f$build$2f$modern$2f$QueryClientProvider$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["QueryClientProvider"], {
        client: queryClient,
        children: children
    }, void 0, false, {
        fileName: "[project]/frontend/app/components/providers/react-query-provider.tsx",
        lineNumber: 9,
        columnNumber: 9
    }, this);
}
_s(ReactQueryProvider, "zCafUH/N9JxHZLdUrmM5nGOvRDU=");
_c = ReactQueryProvider;
var _c;
__turbopack_context__.k.register(_c, "ReactQueryProvider");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/frontend/app/components/providers/theme.ts [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "theme",
    ()=>theme
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f40$mui$2f$material$2f$styles$2f$createTheme$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__createTheme$3e$__ = __turbopack_context__.i("[project]/frontend/node_modules/@mui/material/styles/createTheme.mjs [app-client] (ecmascript) <export default as createTheme>");
"use client";
;
const theme = (0, __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f40$mui$2f$material$2f$styles$2f$createTheme$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__createTheme$3e$__["createTheme"])({
    palette: {
        primary: {
            main: "#044947",
            dark: "#033B39",
            contrastText: "#FFFFFF"
        }
    },
    components: {
        MuiDialog: {
            defaultProps: {
                maxWidth: "sm",
                fullWidth: true
            },
            styleOverrides: {
                paper: {
                    borderRadius: "18px",
                    border: "1px solid #CDDEE0",
                    backgroundColor: "#FFFFFF",
                    "& .modal-form-body": {
                        padding: "20px 24px",
                        display: "flex",
                        flexDirection: "column",
                        gap: "16px"
                    },
                    "& .modal-form-grid": {
                        display: "grid",
                        gridTemplateColumns: "repeat(2, minmax(0, 1fr))",
                        gap: "16px"
                    },
                    "& .modal-field-label": {
                        display: "block",
                        marginBottom: "6px",
                        fontFamily: "var(--font-jetbrains-mono), monospace",
                        fontWeight: 600,
                        fontSize: "12px",
                        textTransform: "uppercase",
                        letterSpacing: "0.04em",
                        color: "#245C60"
                    },
                    "& .MuiOutlinedInput-input": {
                        padding: "11px 14px",
                        color: "#24464C",
                        "&::placeholder": {
                            color: "#8BA4AC",
                            opacity: 1
                        }
                    },
                    "& .modal-form-footer": {
                        display: "flex",
                        justifyContent: "flex-end",
                        flexShrink: 0,
                        padding: "12px 24px",
                        borderTop: "1px solid #E1ECEE"
                    },
                    "& .modal-form-footer .MuiButton-root[type='submit']": {
                        fontFamily: "var(--font-jetbrains-mono), monospace",
                        fontSize: "14px",
                        fontWeight: 600,
                        borderRadius: "8px",
                        minWidth: "112px",
                        minHeight: "40px",
                        "&:not(.Mui-disabled)": {
                            backgroundColor: "#32C3B7",
                            color: "#FFFFFF",
                            "&:hover": {
                                backgroundColor: "#25AFA4"
                            }
                        }
                    },
                    "& .turbine-dialog-content": {
                        display: "flex",
                        flexDirection: "column",
                        minHeight: 0,
                        overflow: "hidden"
                    },
                    "& .turbine-form": {
                        display: "flex",
                        flexDirection: "column",
                        height: "min(580px, calc(100dvh - 160px))",
                        minHeight: 0
                    },
                    "& .turbine-form > .modal-form-body": {
                        flex: "1 1 auto",
                        minHeight: 0,
                        overflow: "hidden"
                    },
                    "& .turbine-form > .modal-form-body > :not(.model-selection)": {
                        flexShrink: 0
                    },
                    "& .model-selection": {
                        display: "flex",
                        flexDirection: "column",
                        flex: "1 1 auto",
                        minHeight: 0
                    },
                    "& .model-list": {
                        display: "flex",
                        flexDirection: "column",
                        flexWrap: "nowrap",
                        flex: "1 1 auto",
                        minHeight: 0,
                        overflowY: "auto",
                        overflowX: "hidden"
                    },
                    "& .model-list > label": {
                        flexShrink: 0,
                        width: "100%"
                    },
                    "@media (max-height: 600px)": {
                        "& .turbine-dialog-content": {
                            overflowY: "auto"
                        },
                        "& .turbine-form": {
                            height: "auto",
                            flexShrink: 0
                        },
                        "& .turbine-form > .modal-form-body": {
                            overflow: "visible"
                        },
                        "& .model-list": {
                            flex: "none",
                            maxHeight: "180px"
                        }
                    },
                    "@media (max-width: 600px)": {
                        "& .modal-form-body": {
                            padding: "16px",
                            gap: "12px"
                        },
                        "& .modal-form-grid": {
                            gridTemplateColumns: "minmax(0, 1fr)",
                            gap: "12px"
                        },
                        "& .modal-form-footer": {
                            padding: "12px 16px"
                        }
                    }
                }
            }
        },
        MuiDialogTitle: {
            styleOverrides: {
                root: {
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "space-between",
                    flexShrink: 0,
                    gap: "12px",
                    padding: "16px 24px",
                    borderBottom: "1px solid #E1ECEE",
                    color: "#044947",
                    fontFamily: "var(--font-outfit), sans-serif",
                    fontWeight: 700,
                    fontSize: "22px",
                    "& .MuiIconButton-root": {
                        color: "#94A3B8"
                    },
                    "@media (max-width: 600px)": {
                        padding: "12px 16px",
                        fontSize: "20px"
                    }
                }
            }
        },
        MuiDialogContent: {
            styleOverrides: {
                root: {
                    padding: 0
                }
            }
        },
        MuiButton: {
            defaultProps: {
                variant: "contained",
                color: "primary",
                disableElevation: true
            },
            styleOverrides: {
                root: {
                    fontFamily: "var(--font-outfit), sans-serif",
                    fontWeight: 600,
                    fontSize: "14px",
                    textTransform: "none",
                    borderRadius: "8px",
                    minHeight: "40px",
                    padding: "8px 16px"
                }
            }
        }
    }
});
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
]);

//# sourceMappingURL=frontend_app_components_0poi0dw._.js.map