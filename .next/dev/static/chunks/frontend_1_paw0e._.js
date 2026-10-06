(globalThis["TURBOPACK"] || (globalThis["TURBOPACK"] = [])).push([typeof document === "object" ? document.currentScript : undefined,
"[project]/frontend/app/components/Card.tsx [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "Card",
    ()=>Card
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/frontend/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
;
function Card({ label, value, unit }) {
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        className: "bg-white p-5 rounded-xl border border-gray-100 shadow-sm flex flex-col justify-between min-w-220px",
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                className: "text-sm font-medium text-gray-500 mb-2",
                children: label
            }, void 0, false, {
                fileName: "[project]/frontend/app/components/Card.tsx",
                lineNumber: 10,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "flex items-baseline gap-2",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                        className: "text-3xl font-mono font-semibold text-[#044947]",
                        children: value
                    }, void 0, false, {
                        fileName: "[project]/frontend/app/components/Card.tsx",
                        lineNumber: 12,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                        className: "text-sm text-gray-500 font-medium",
                        children: unit
                    }, void 0, false, {
                        fileName: "[project]/frontend/app/components/Card.tsx",
                        lineNumber: 13,
                        columnNumber: 9
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/frontend/app/components/Card.tsx",
                lineNumber: 11,
                columnNumber: 7
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/frontend/app/components/Card.tsx",
        lineNumber: 9,
        columnNumber: 5
    }, this);
}
_c = Card;
var _c;
__turbopack_context__.k.register(_c, "Card");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/frontend/app/components/Details.tsx [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>Details
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/frontend/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f40$mui$2f$material$2f$Box$2f$Box$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Box$3e$__ = __turbopack_context__.i("[project]/frontend/node_modules/@mui/material/Box/Box.mjs [app-client] (ecmascript) <export default as Box>");
var __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f40$mui$2f$material$2f$CircularProgress$2f$CircularProgress$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__CircularProgress$3e$__ = __turbopack_context__.i("[project]/frontend/node_modules/@mui/material/CircularProgress/CircularProgress.mjs [app-client] (ecmascript) <export default as CircularProgress>");
var __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f40$mui$2f$material$2f$Dialog$2f$Dialog$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Dialog$3e$__ = __turbopack_context__.i("[project]/frontend/node_modules/@mui/material/Dialog/Dialog.mjs [app-client] (ecmascript) <export default as Dialog>");
var __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f40$mui$2f$material$2f$DialogContent$2f$DialogContent$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__DialogContent$3e$__ = __turbopack_context__.i("[project]/frontend/node_modules/@mui/material/DialogContent/DialogContent.mjs [app-client] (ecmascript) <export default as DialogContent>");
var __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f40$mui$2f$material$2f$DialogTitle$2f$DialogTitle$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__DialogTitle$3e$__ = __turbopack_context__.i("[project]/frontend/node_modules/@mui/material/DialogTitle/DialogTitle.mjs [app-client] (ecmascript) <export default as DialogTitle>");
var __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f40$mui$2f$material$2f$IconButton$2f$IconButton$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__IconButton$3e$__ = __turbopack_context__.i("[project]/frontend/node_modules/@mui/material/IconButton/IconButton.mjs [app-client] (ecmascript) <export default as IconButton>");
var __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$next$2f$dist$2f$shared$2f$lib$2f$app$2d$dynamic$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/frontend/node_modules/next/dist/shared/lib/app-dynamic.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/frontend/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f40$mui$2f$icons$2d$material$2f$Close$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/frontend/node_modules/@mui/icons-material/Close.mjs [app-client] (ecmascript)");
;
;
var _s = __turbopack_context__.k.signature();
"use client";
;
;
;
;
const SimulationMap = (0, __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$next$2f$dist$2f$shared$2f$lib$2f$app$2d$dynamic$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"])(()=>__turbopack_context__.A("[project]/frontend/app/components/SimulationMap.tsx [app-client] (ecmascript, next/dynamic entry, async loader)"), {
    loadableGenerated: {
        modules: [
            "[project]/frontend/app/components/SimulationMap.tsx [app-client] (ecmascript, next/dynamic entry)"
        ]
    },
    ssr: false,
    loading: ()=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f40$mui$2f$material$2f$Box$2f$Box$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Box$3e$__["Box"], {
            className: "flex h-full items-center justify-center bg-[#F4FAF9}",
            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f40$mui$2f$material$2f$CircularProgress$2f$CircularProgress$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__CircularProgress$3e$__["CircularProgress"], {
                size: 28
            }, void 0, false, {
                fileName: "[project]/frontend/app/components/Details.tsx",
                lineNumber: 15,
                columnNumber: 13
            }, ("TURBOPACK compile-time value", void 0))
        }, void 0, false, {
            fileName: "[project]/frontend/app/components/Details.tsx",
            lineNumber: 14,
            columnNumber: 9
        }, ("TURBOPACK compile-time value", void 0))
});
_c = SimulationMap;
function formatCoordinate(value, positiveDirection, negativeDirection) {
    return `${Math.abs(value).toFixed(2)}°${value >= 0 ? positiveDirection : negativeDirection}`;
}
function Details({ simulation, turbines, onClose }) {
    _s();
    const associatedTurbines = (0, __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useMemo"])({
        "Details.useMemo[associatedTurbines]": ()=>{
            return turbines.filter({
                "Details.useMemo[associatedTurbines]": (turbine)=>turbine.simulation_id === simulation?.id
            }["Details.useMemo[associatedTurbines]"]);
        }
    }["Details.useMemo[associatedTurbines]"], [
        turbines,
        simulation?.id
    ]);
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f40$mui$2f$material$2f$Dialog$2f$Dialog$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Dialog$3e$__["Dialog"], {
        open: simulation !== null,
        onClose: onClose,
        maxWidth: "lg",
        fullWidth: true,
        "aria-labelledby": "simulation-details-title",
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f40$mui$2f$material$2f$DialogTitle$2f$DialogTitle$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__DialogTitle$3e$__["DialogTitle"], {
                id: "simulation-details-title",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f40$mui$2f$material$2f$Box$2f$Box$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Box$3e$__["Box"], {
                        component: "span",
                        className: "font-mono text-lg sm:text-xl",
                        children: [
                            "SIMULAÇÃO: ",
                            simulation?.name
                        ]
                    }, void 0, true, {
                        fileName: "[project]/frontend/app/components/Details.tsx",
                        lineNumber: 38,
                        columnNumber: 17
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f40$mui$2f$material$2f$IconButton$2f$IconButton$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__IconButton$3e$__["IconButton"], {
                        onClick: onClose,
                        size: "small",
                        "aria-label": "Fechar visualização",
                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f40$mui$2f$icons$2d$material$2f$Close$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {}, void 0, false, {
                            fileName: "[project]/frontend/app/components/Details.tsx",
                            lineNumber: 40,
                            columnNumber: 21
                        }, this)
                    }, void 0, false, {
                        fileName: "[project]/frontend/app/components/Details.tsx",
                        lineNumber: 39,
                        columnNumber: 17
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/frontend/app/components/Details.tsx",
                lineNumber: 37,
                columnNumber: 13
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f40$mui$2f$material$2f$DialogContent$2f$DialogContent$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__DialogContent$3e$__["DialogContent"], {
                children: simulation && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f40$mui$2f$material$2f$Box$2f$Box$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Box$3e$__["Box"], {
                    className: "grid grid-cols-1 gap-6 p-4 sm:p-6 md:grid-cols-[minmax(240px,1fr)_minmax(0,2fr)]",
                    children: [
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f40$mui$2f$material$2f$Box$2f$Box$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Box$3e$__["Box"], {
                            className: "flex min-w-0 flex-col",
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f40$mui$2f$material$2f$Box$2f$Box$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Box$3e$__["Box"], {
                                    className: "flex items-center justify-between gap-3 border-b border-[#E1ECEE] pb-5",
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                            className: "font-mono text-sm uppercase text-[#78959D]",
                                            children: "Número de turbinas"
                                        }, void 0, false, {
                                            fileName: "[project]/frontend/app/components/Details.tsx",
                                            lineNumber: 48,
                                            columnNumber: 33
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("strong", {
                                            className: "font-mono text-[#044947]",
                                            children: associatedTurbines.length
                                        }, void 0, false, {
                                            fileName: "[project]/frontend/app/components/Details.tsx",
                                            lineNumber: 49,
                                            columnNumber: 33
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/frontend/app/components/Details.tsx",
                                    lineNumber: 47,
                                    columnNumber: 29
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f40$mui$2f$material$2f$Box$2f$Box$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Box$3e$__["Box"], {
                                    className: "my-5 flex items-center gap-3",
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h3", {
                                            className: "m-0 font-mono text-sm font-semibold uppercase text-[#16A6AF]",
                                            children: "Turbinas associadas"
                                        }, void 0, false, {
                                            fileName: "[project]/frontend/app/components/Details.tsx",
                                            lineNumber: 52,
                                            columnNumber: 33
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f40$mui$2f$material$2f$Box$2f$Box$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Box$3e$__["Box"], {
                                            className: "h-px flex-1 bg-[#16A6AF]"
                                        }, void 0, false, {
                                            fileName: "[project]/frontend/app/components/Details.tsx",
                                            lineNumber: 53,
                                            columnNumber: 33
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/frontend/app/components/Details.tsx",
                                    lineNumber: 51,
                                    columnNumber: 29
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f40$mui$2f$material$2f$Box$2f$Box$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Box$3e$__["Box"], {
                                    className: "max-h-64 overflow-y-auto pr-2 md:max-h-95",
                                    children: associatedTurbines.length === 0 ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                        className: "text-sm text-[#64748B]",
                                        children: "Esta simulação não possui turbinas associadas."
                                    }, void 0, false, {
                                        fileName: "[project]/frontend/app/components/Details.tsx",
                                        lineNumber: 57,
                                        columnNumber: 37
                                    }, this) : associatedTurbines.map((turbine)=>{
                                        const [longitude, latitude] = turbine.coordinates.coordinates;
                                        return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f40$mui$2f$material$2f$Box$2f$Box$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Box$3e$__["Box"], {
                                            className: "flex items-start gap-3 border-b border-[#E1ECEE] py-4 first:pt-0",
                                            children: [
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f40$mui$2f$material$2f$Box$2f$Box$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Box$3e$__["Box"], {
                                                    className: "mt-2 h-2.5 w-2.5 shrink-0 rounded-full bg-[#20B8AE]"
                                                }, void 0, false, {
                                                    fileName: "[project]/frontend/app/components/Details.tsx",
                                                    lineNumber: 64,
                                                    columnNumber: 49
                                                }, this),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f40$mui$2f$material$2f$Box$2f$Box$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Box$3e$__["Box"], {
                                                    className: "min-w-0",
                                                    children: [
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                            className: "m-0 font-mono text-sm font-semibold text-[#044947]",
                                                            children: turbine.name
                                                        }, void 0, false, {
                                                            fileName: "[project]/frontend/app/components/Details.tsx",
                                                            lineNumber: 66,
                                                            columnNumber: 53
                                                        }, this),
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                            className: "m-0 pt-1 font-mono text-xs text-[#78959D]",
                                                            children: [
                                                                formatCoordinate(latitude, "N", "S"),
                                                                ", ",
                                                                formatCoordinate(longitude, "E", "W")
                                                            ]
                                                        }, void 0, true, {
                                                            fileName: "[project]/frontend/app/components/Details.tsx",
                                                            lineNumber: 67,
                                                            columnNumber: 53
                                                        }, this)
                                                    ]
                                                }, void 0, true, {
                                                    fileName: "[project]/frontend/app/components/Details.tsx",
                                                    lineNumber: 65,
                                                    columnNumber: 49
                                                }, this)
                                            ]
                                        }, turbine.id, true, {
                                            fileName: "[project]/frontend/app/components/Details.tsx",
                                            lineNumber: 63,
                                            columnNumber: 45
                                        }, this);
                                    })
                                }, void 0, false, {
                                    fileName: "[project]/frontend/app/components/Details.tsx",
                                    lineNumber: 55,
                                    columnNumber: 29
                                }, this)
                            ]
                        }, void 0, true, {
                            fileName: "[project]/frontend/app/components/Details.tsx",
                            lineNumber: 46,
                            columnNumber: 25
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f40$mui$2f$material$2f$Box$2f$Box$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Box$3e$__["Box"], {
                            className: "relative isolate h-80 min-w-0 overflow-hidden rounded-2xl border border-[#CFE4E5] bg-[#F4FAF9] md:h-115",
                            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(SimulationMap, {
                                turbines: associatedTurbines
                            }, simulation.id, false, {
                                fileName: "[project]/frontend/app/components/Details.tsx",
                                lineNumber: 76,
                                columnNumber: 29
                            }, this)
                        }, void 0, false, {
                            fileName: "[project]/frontend/app/components/Details.tsx",
                            lineNumber: 75,
                            columnNumber: 25
                        }, this)
                    ]
                }, void 0, true, {
                    fileName: "[project]/frontend/app/components/Details.tsx",
                    lineNumber: 45,
                    columnNumber: 21
                }, this)
            }, void 0, false, {
                fileName: "[project]/frontend/app/components/Details.tsx",
                lineNumber: 43,
                columnNumber: 13
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/frontend/app/components/Details.tsx",
        lineNumber: 36,
        columnNumber: 9
    }, this);
}
_s(Details, "sgvwgl/zFTTXMwMoH+dN/C18qwA=");
_c1 = Details;
var _c, _c1;
__turbopack_context__.k.register(_c, "SimulationMap");
__turbopack_context__.k.register(_c1, "Details");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/frontend/app/components/SimulationBox.tsx [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>SimulationBox
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/frontend/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f40$mui$2f$material$2f$Box$2f$Box$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/frontend/node_modules/@mui/material/Box/Box.mjs [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f40$mui$2f$material$2f$IconButton$2f$IconButton$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/frontend/node_modules/@mui/material/IconButton/IconButton.mjs [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f40$mui$2f$icons$2d$material$2f$EditOutlined$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/frontend/node_modules/@mui/icons-material/EditOutlined.mjs [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f40$mui$2f$icons$2d$material$2f$Delete$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/frontend/node_modules/@mui/icons-material/Delete.mjs [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f40$mui$2f$icons$2d$material$2f$Visibility$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/frontend/node_modules/@mui/icons-material/Visibility.mjs [app-client] (ecmascript)");
;
;
;
;
;
;
function SimulationBox({ name, date, total, onEdit, onDelete, onClick, disabled = false }) {
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f40$mui$2f$material$2f$Box$2f$Box$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
        className: "min-w-0 w-full min-h-56 rounded-xl border border-gray-200 border-t-4 border-t-[#10B981] bg-white p-5",
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h2", {
                className: "font-sans font-semibold text-[#044947]",
                children: name
            }, void 0, false, {
                fileName: "[project]/frontend/app/components/SimulationBox.tsx",
                lineNumber: 22,
                columnNumber: 13
            }, this),
            date && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                className: "pt-1 font-mono text-xs font-light text-[#64748B]",
                children: date
            }, void 0, false, {
                fileName: "[project]/frontend/app/components/SimulationBox.tsx",
                lineNumber: 23,
                columnNumber: 22
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f40$mui$2f$material$2f$Box$2f$Box$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                className: "mt-5 border-y border-gray-100 pb-5 pt-3",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                        className: "pb-1 text-xs font-light text-[#94A3B8]",
                        children: "Total de turbinas"
                    }, void 0, false, {
                        fileName: "[project]/frontend/app/components/SimulationBox.tsx",
                        lineNumber: 26,
                        columnNumber: 17
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f40$mui$2f$material$2f$Box$2f$Box$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                        className: "flex items-baseline gap-1",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                className: "font-mono text-2xl font-semibold text-[#044947]",
                                children: total
                            }, void 0, false, {
                                fileName: "[project]/frontend/app/components/SimulationBox.tsx",
                                lineNumber: 28,
                                columnNumber: 21
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                className: "font-sans text-sm font-light text-[#64748B]",
                                children: "turbinas"
                            }, void 0, false, {
                                fileName: "[project]/frontend/app/components/SimulationBox.tsx",
                                lineNumber: 29,
                                columnNumber: 21
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/frontend/app/components/SimulationBox.tsx",
                        lineNumber: 27,
                        columnNumber: 17
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/frontend/app/components/SimulationBox.tsx",
                lineNumber: 25,
                columnNumber: 13
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f40$mui$2f$material$2f$Box$2f$Box$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                className: "mt-2 flex justify-end gap-1",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f40$mui$2f$material$2f$IconButton$2f$IconButton$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                        size: "small",
                        "aria-label": `Detalhes ${name}`,
                        title: "Ver simulação",
                        onClick: onClick,
                        disabled: disabled || !onClick,
                        sx: {
                            color: "#94A3B8"
                        },
                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f40$mui$2f$icons$2d$material$2f$Visibility$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                            fontSize: "small"
                        }, void 0, false, {
                            fileName: "[project]/frontend/app/components/SimulationBox.tsx",
                            lineNumber: 36,
                            columnNumber: 21
                        }, this)
                    }, void 0, false, {
                        fileName: "[project]/frontend/app/components/SimulationBox.tsx",
                        lineNumber: 35,
                        columnNumber: 17
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f40$mui$2f$material$2f$IconButton$2f$IconButton$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                        size: "small",
                        "aria-label": `Editar ${name}`,
                        title: "Editar simulação",
                        onClick: onEdit,
                        disabled: disabled || !onEdit,
                        sx: {
                            color: "#94A3B8"
                        },
                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f40$mui$2f$icons$2d$material$2f$EditOutlined$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                            fontSize: "small"
                        }, void 0, false, {
                            fileName: "[project]/frontend/app/components/SimulationBox.tsx",
                            lineNumber: 39,
                            columnNumber: 21
                        }, this)
                    }, void 0, false, {
                        fileName: "[project]/frontend/app/components/SimulationBox.tsx",
                        lineNumber: 38,
                        columnNumber: 17
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f40$mui$2f$material$2f$IconButton$2f$IconButton$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                        size: "small",
                        "aria-label": `Excluir ${name}`,
                        title: "Excluir simulação",
                        onClick: onDelete,
                        disabled: disabled || !onDelete,
                        sx: {
                            color: "#94A3B8",
                            "&:hover": {
                                color: "#C62828"
                            }
                        },
                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f40$mui$2f$icons$2d$material$2f$Delete$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                            fontSize: "small"
                        }, void 0, false, {
                            fileName: "[project]/frontend/app/components/SimulationBox.tsx",
                            lineNumber: 42,
                            columnNumber: 21
                        }, this)
                    }, void 0, false, {
                        fileName: "[project]/frontend/app/components/SimulationBox.tsx",
                        lineNumber: 41,
                        columnNumber: 17
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/frontend/app/components/SimulationBox.tsx",
                lineNumber: 33,
                columnNumber: 13
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/frontend/app/components/SimulationBox.tsx",
        lineNumber: 19,
        columnNumber: 9
    }, this);
}
_c = SimulationBox;
var _c;
__turbopack_context__.k.register(_c, "SimulationBox");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/frontend/app/forms/simulation/create-edit-simulation-form.tsx [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>CreateEditSimulationForm
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/frontend/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f40$hookform$2f$resolvers$2f$zod$2f$dist$2f$zod$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/frontend/node_modules/@hookform/resolvers/zod/dist/zod.mjs [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$react$2d$hook$2d$form$2f$dist$2f$index$2e$esm$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/frontend/node_modules/react-hook-form/dist/index.esm.mjs [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f40$mui$2f$material$2f$Alert$2f$Alert$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Alert$3e$__ = __turbopack_context__.i("[project]/frontend/node_modules/@mui/material/Alert/Alert.mjs [app-client] (ecmascript) <export default as Alert>");
var __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f40$mui$2f$material$2f$Box$2f$Box$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Box$3e$__ = __turbopack_context__.i("[project]/frontend/node_modules/@mui/material/Box/Box.mjs [app-client] (ecmascript) <export default as Box>");
var __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f40$mui$2f$material$2f$Button$2f$Button$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Button$3e$__ = __turbopack_context__.i("[project]/frontend/node_modules/@mui/material/Button/Button.mjs [app-client] (ecmascript) <export default as Button>");
var __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f40$mui$2f$material$2f$Checkbox$2f$Checkbox$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Checkbox$3e$__ = __turbopack_context__.i("[project]/frontend/node_modules/@mui/material/Checkbox/Checkbox.mjs [app-client] (ecmascript) <export default as Checkbox>");
var __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f40$mui$2f$material$2f$CircularProgress$2f$CircularProgress$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__CircularProgress$3e$__ = __turbopack_context__.i("[project]/frontend/node_modules/@mui/material/CircularProgress/CircularProgress.mjs [app-client] (ecmascript) <export default as CircularProgress>");
var __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f40$mui$2f$material$2f$TextField$2f$TextField$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__TextField$3e$__ = __turbopack_context__.i("[project]/frontend/node_modules/@mui/material/TextField/TextField.mjs [app-client] (ecmascript) <export default as TextField>");
var __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$hooks$2f$use$2d$turbine$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/frontend/hooks/use-turbine.ts [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$hooks$2f$use$2d$turbine$2d$catalog$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/frontend/hooks/use-turbine-catalog.ts [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$app$2f$forms$2f$simulation$2f$schema$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/frontend/app/forms/simulation/schema.ts [app-client] (ecmascript)");
;
var _s = __turbopack_context__.k.signature();
"use client";
;
;
;
;
;
;
function CreateEditSimulationForm({ initialValues, simulationId, onSubmit, isLoading, submitError }) {
    _s();
    const { data: turbines = [], isPending: isTurbinesLoading, isError: isTurbinesError, refetch: refetchTurbines } = (0, __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$hooks$2f$use$2d$turbine$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useTurbine"])();
    const { data: catalog = [], isPending: isCatalogLoading, isError: isCatalogError, refetch: refetchCatalog } = (0, __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$hooks$2f$use$2d$turbine$2d$catalog$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useTurbineCatalog"])();
    const isEditing = simulationId !== undefined;
    const availableTurbines = turbines.filter((turbine)=>turbine.simulation_id === null || turbine.simulation_id === simulationId);
    const isListLoading = isTurbinesLoading || isCatalogLoading;
    const isListError = isTurbinesError || isCatalogError;
    const { control, handleSubmit, setError, formState: { errors } } = (0, __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$react$2d$hook$2d$form$2f$dist$2f$index$2e$esm$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useForm"])({
        resolver: (0, __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f40$hookform$2f$resolvers$2f$zod$2f$dist$2f$zod$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["zodResolver"])(__TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$app$2f$forms$2f$simulation$2f$schema$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["simulationSchema"]),
        defaultValues: {
            name: initialValues?.name ?? "",
            turbineIds: initialValues?.turbineIds ?? []
        }
    });
    const handleValidSubmit = async (values)=>{
        const hasUnavailableTurbine = values.turbineIds.some((id)=>!availableTurbines.some((turbine)=>turbine.id === id));
        if (hasUnavailableTurbine) {
            setError("turbineIds", {
                message: "Uma turbina selecionada não está disponível. Feche e abra o formulário para atualizar a seleção."
            });
            return;
        }
        await onSubmit(values);
    };
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f40$mui$2f$material$2f$Box$2f$Box$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Box$3e$__["Box"], {
        component: "form",
        onSubmit: handleSubmit(handleValidSubmit),
        className: "turbine-form",
        noValidate: true,
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f40$mui$2f$material$2f$Box$2f$Box$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Box$3e$__["Box"], {
                className: "modal-form-body",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f40$mui$2f$material$2f$Box$2f$Box$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Box$3e$__["Box"], {
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f40$mui$2f$material$2f$Box$2f$Box$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Box$3e$__["Box"], {
                                component: "label",
                                htmlFor: "simulation-name",
                                className: "modal-field-label",
                                children: "Nome"
                            }, void 0, false, {
                                fileName: "[project]/frontend/app/forms/simulation/create-edit-simulation-form.tsx",
                                lineNumber: 50,
                                columnNumber: 21
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$react$2d$hook$2d$form$2f$dist$2f$index$2e$esm$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Controller"], {
                                name: "name",
                                control: control,
                                render: ({ field: { ref, ...field } })=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f40$mui$2f$material$2f$TextField$2f$TextField$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__TextField$3e$__["TextField"], {
                                        ...field,
                                        id: "simulation-name",
                                        inputRef: ref,
                                        fullWidth: true,
                                        disabled: isLoading,
                                        error: !!errors.name,
                                        helperText: errors.name?.message,
                                        placeholder: "Digite o nome da simulação..."
                                    }, void 0, false, {
                                        fileName: "[project]/frontend/app/forms/simulation/create-edit-simulation-form.tsx",
                                        lineNumber: 52,
                                        columnNumber: 25
                                    }, this)
                            }, void 0, false, {
                                fileName: "[project]/frontend/app/forms/simulation/create-edit-simulation-form.tsx",
                                lineNumber: 51,
                                columnNumber: 21
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/frontend/app/forms/simulation/create-edit-simulation-form.tsx",
                        lineNumber: 49,
                        columnNumber: 17
                    }, this),
                    submitError && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f40$mui$2f$material$2f$Alert$2f$Alert$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Alert$3e$__["Alert"], {
                        severity: "error",
                        children: submitError
                    }, void 0, false, {
                        fileName: "[project]/frontend/app/forms/simulation/create-edit-simulation-form.tsx",
                        lineNumber: 56,
                        columnNumber: 33
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f40$mui$2f$material$2f$Box$2f$Box$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Box$3e$__["Box"], {
                        className: "model-selection",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f40$mui$2f$material$2f$Box$2f$Box$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Box$3e$__["Box"], {
                                className: "mb-3 flex shrink-0 items-center gap-3",
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f40$mui$2f$material$2f$Box$2f$Box$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Box$3e$__["Box"], {
                                        component: "h3",
                                        id: "simulation-turbines-title",
                                        className: "m-0 text-sm font-semibold uppercase tracking-wider text-[#009B9F]",
                                        children: "Turbinas"
                                    }, void 0, false, {
                                        fileName: "[project]/frontend/app/forms/simulation/create-edit-simulation-form.tsx",
                                        lineNumber: 60,
                                        columnNumber: 25
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f40$mui$2f$material$2f$Box$2f$Box$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Box$3e$__["Box"], {
                                        className: "h-px flex-1 bg-[#DCE9EB]"
                                    }, void 0, false, {
                                        fileName: "[project]/frontend/app/forms/simulation/create-edit-simulation-form.tsx",
                                        lineNumber: 61,
                                        columnNumber: 25
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/frontend/app/forms/simulation/create-edit-simulation-form.tsx",
                                lineNumber: 59,
                                columnNumber: 21
                            }, this),
                            isListLoading && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f40$mui$2f$material$2f$Box$2f$Box$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Box$3e$__["Box"], {
                                role: "status",
                                className: "flex items-center gap-3 py-4 text-[#68858C]",
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f40$mui$2f$material$2f$CircularProgress$2f$CircularProgress$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__CircularProgress$3e$__["CircularProgress"], {
                                        size: 20
                                    }, void 0, false, {
                                        fileName: "[project]/frontend/app/forms/simulation/create-edit-simulation-form.tsx",
                                        lineNumber: 66,
                                        columnNumber: 29
                                    }, this),
                                    "Carregando turbinas..."
                                ]
                            }, void 0, true, {
                                fileName: "[project]/frontend/app/forms/simulation/create-edit-simulation-form.tsx",
                                lineNumber: 65,
                                columnNumber: 25
                            }, this),
                            !isListLoading && isListError && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f40$mui$2f$material$2f$Alert$2f$Alert$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Alert$3e$__["Alert"], {
                                severity: "error",
                                action: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f40$mui$2f$material$2f$Button$2f$Button$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Button$3e$__["Button"], {
                                    type: "button",
                                    color: "inherit",
                                    variant: "text",
                                    onClick: ()=>{
                                        void refetchTurbines();
                                        void refetchCatalog();
                                    },
                                    children: "Tentar novamente"
                                }, void 0, false, {
                                    fileName: "[project]/frontend/app/forms/simulation/create-edit-simulation-form.tsx",
                                    lineNumber: 72,
                                    columnNumber: 57
                                }, this),
                                children: "Não foi possível carregar as turbinas e seus modelos."
                            }, void 0, false, {
                                fileName: "[project]/frontend/app/forms/simulation/create-edit-simulation-form.tsx",
                                lineNumber: 72,
                                columnNumber: 25
                            }, this),
                            !isListLoading && !isListError && availableTurbines.length === 0 && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f40$mui$2f$material$2f$Alert$2f$Alert$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Alert$3e$__["Alert"], {
                                severity: "info",
                                children: "Não há turbinas disponíveis para selecionar."
                            }, void 0, false, {
                                fileName: "[project]/frontend/app/forms/simulation/create-edit-simulation-form.tsx",
                                lineNumber: 78,
                                columnNumber: 25
                            }, this),
                            !isListLoading && !isListError && availableTurbines.length > 0 && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$react$2d$hook$2d$form$2f$dist$2f$index$2e$esm$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Controller"], {
                                name: "turbineIds",
                                control: control,
                                render: ({ field })=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f40$mui$2f$material$2f$Box$2f$Box$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Box$3e$__["Box"], {
                                        role: "group",
                                        "aria-labelledby": "simulation-turbines-title",
                                        "aria-describedby": errors.turbineIds ? "simulation-turbines-error" : undefined,
                                        className: "model-list rounded-lg border border-[#D6E5E7]",
                                        children: availableTurbines.map((turbine, index)=>{
                                            const model = catalog.find((item)=>item.id === turbine.turbine_catalog_id);
                                            const selected = field.value.includes(turbine.id);
                                            const [longitude, latitude] = turbine.coordinates.coordinates;
                                            return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f40$mui$2f$material$2f$Box$2f$Box$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Box$3e$__["Box"], {
                                                component: "label",
                                                className: `flex items-center gap-2 border-b border-[#E1ECEE] px-3 py-2 last:border-b-0 ${selected ? "bg-[#F4FAF9]" : "bg-white"} ${isLoading ? "cursor-default" : "cursor-pointer"}`,
                                                children: [
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f40$mui$2f$material$2f$Checkbox$2f$Checkbox$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Checkbox$3e$__["Checkbox"], {
                                                        name: field.name,
                                                        checked: selected,
                                                        disabled: isLoading,
                                                        onBlur: field.onBlur,
                                                        slotProps: {
                                                            input: {
                                                                ref: index === 0 ? field.ref : undefined
                                                            }
                                                        },
                                                        onChange: (_, checked)=>field.onChange(checked ? [
                                                                ...field.value,
                                                                turbine.id
                                                            ] : field.value.filter((id)=>id !== turbine.id)),
                                                        sx: {
                                                            color: "#A8C6CA",
                                                            "&.Mui-checked": {
                                                                color: "#20B8AE"
                                                            }
                                                        }
                                                    }, void 0, false, {
                                                        fileName: "[project]/frontend/app/forms/simulation/create-edit-simulation-form.tsx",
                                                        lineNumber: 91,
                                                        columnNumber: 45
                                                    }, this),
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f40$mui$2f$material$2f$Box$2f$Box$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Box$3e$__["Box"], {
                                                        className: "min-w-0 flex-1",
                                                        children: [
                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f40$mui$2f$material$2f$Box$2f$Box$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Box$3e$__["Box"], {
                                                                component: "p",
                                                                className: "m-0 text-sm font-semibold text-[#16494D]",
                                                                children: turbine.name
                                                            }, void 0, false, {
                                                                fileName: "[project]/frontend/app/forms/simulation/create-edit-simulation-form.tsx",
                                                                lineNumber: 93,
                                                                columnNumber: 49
                                                            }, this),
                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f40$mui$2f$material$2f$Box$2f$Box$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Box$3e$__["Box"], {
                                                                component: "p",
                                                                className: "m-0 text-xs text-[#68858C]",
                                                                children: model ? `${model.manufacturer} · Ø ${model.rotor_diameter} m` : "Modelo não encontrado"
                                                            }, void 0, false, {
                                                                fileName: "[project]/frontend/app/forms/simulation/create-edit-simulation-form.tsx",
                                                                lineNumber: 94,
                                                                columnNumber: 49
                                                            }, this),
                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f40$mui$2f$material$2f$Box$2f$Box$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Box$3e$__["Box"], {
                                                                component: "p",
                                                                className: "m-0 text-xs text-[#68858C]",
                                                                children: [
                                                                    "Lat: ",
                                                                    latitude,
                                                                    "° · Lon: ",
                                                                    longitude,
                                                                    "°"
                                                                ]
                                                            }, void 0, true, {
                                                                fileName: "[project]/frontend/app/forms/simulation/create-edit-simulation-form.tsx",
                                                                lineNumber: 95,
                                                                columnNumber: 49
                                                            }, this)
                                                        ]
                                                    }, void 0, true, {
                                                        fileName: "[project]/frontend/app/forms/simulation/create-edit-simulation-form.tsx",
                                                        lineNumber: 92,
                                                        columnNumber: 45
                                                    }, this),
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f40$mui$2f$material$2f$Box$2f$Box$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Box$3e$__["Box"], {
                                                        component: "span",
                                                        className: "shrink-0 text-sm font-semibold text-[#16494D]",
                                                        children: model ? `${model.nominal_power} MW` : "—"
                                                    }, void 0, false, {
                                                        fileName: "[project]/frontend/app/forms/simulation/create-edit-simulation-form.tsx",
                                                        lineNumber: 97,
                                                        columnNumber: 45
                                                    }, this)
                                                ]
                                            }, turbine.id, true, {
                                                fileName: "[project]/frontend/app/forms/simulation/create-edit-simulation-form.tsx",
                                                lineNumber: 90,
                                                columnNumber: 41
                                            }, this);
                                        })
                                    }, void 0, false, {
                                        fileName: "[project]/frontend/app/forms/simulation/create-edit-simulation-form.tsx",
                                        lineNumber: 83,
                                        columnNumber: 29
                                    }, this)
                            }, void 0, false, {
                                fileName: "[project]/frontend/app/forms/simulation/create-edit-simulation-form.tsx",
                                lineNumber: 82,
                                columnNumber: 25
                            }, this),
                            errors.turbineIds && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f40$mui$2f$material$2f$Box$2f$Box$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Box$3e$__["Box"], {
                                component: "p",
                                id: "simulation-turbines-error",
                                className: "mt-2 shrink-0 text-sm text-[#D32F2F]",
                                children: errors.turbineIds.message
                            }, void 0, false, {
                                fileName: "[project]/frontend/app/forms/simulation/create-edit-simulation-form.tsx",
                                lineNumber: 105,
                                columnNumber: 43
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/frontend/app/forms/simulation/create-edit-simulation-form.tsx",
                        lineNumber: 58,
                        columnNumber: 17
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/frontend/app/forms/simulation/create-edit-simulation-form.tsx",
                lineNumber: 48,
                columnNumber: 13
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f40$mui$2f$material$2f$Box$2f$Box$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Box$3e$__["Box"], {
                className: "modal-form-footer",
                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f40$mui$2f$material$2f$Button$2f$Button$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Button$3e$__["Button"], {
                    type: "submit",
                    disabled: isLoading || isListLoading || isListError || availableTurbines.length === 0,
                    children: isLoading ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f40$mui$2f$material$2f$CircularProgress$2f$CircularProgress$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__CircularProgress$3e$__["CircularProgress"], {
                        size: 20,
                        color: "inherit"
                    }, void 0, false, {
                        fileName: "[project]/frontend/app/forms/simulation/create-edit-simulation-form.tsx",
                        lineNumber: 111,
                        columnNumber: 34
                    }, this) : isEditing ? "Salvar alterações" : "+ Criar"
                }, void 0, false, {
                    fileName: "[project]/frontend/app/forms/simulation/create-edit-simulation-form.tsx",
                    lineNumber: 110,
                    columnNumber: 17
                }, this)
            }, void 0, false, {
                fileName: "[project]/frontend/app/forms/simulation/create-edit-simulation-form.tsx",
                lineNumber: 109,
                columnNumber: 13
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/frontend/app/forms/simulation/create-edit-simulation-form.tsx",
        lineNumber: 47,
        columnNumber: 9
    }, this);
}
_s(CreateEditSimulationForm, "0gIkwexYz5e22Bk0HmLgx8d+grg=", false, function() {
    return [
        __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$hooks$2f$use$2d$turbine$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useTurbine"],
        __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$hooks$2f$use$2d$turbine$2d$catalog$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useTurbineCatalog"],
        __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$react$2d$hook$2d$form$2f$dist$2f$index$2e$esm$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useForm"]
    ];
});
_c = CreateEditSimulationForm;
var _c;
__turbopack_context__.k.register(_c, "CreateEditSimulationForm");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/frontend/app/forms/simulation/format-payload.tsx [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "formatSimulationPayload",
    ()=>formatSimulationPayload
]);
function formatSimulationPayload(values) {
    return {
        name: values.name.trim(),
        turbine_ids: values.turbineIds
    };
}
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/frontend/app/forms/simulation/schema.ts [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "simulationSchema",
    ()=>simulationSchema
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$zod$2f$v4$2f$classic$2f$external$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__$2a$__as__default$3e$__ = __turbopack_context__.i("[project]/frontend/node_modules/zod/v4/classic/external.js [app-client] (ecmascript) <export * as default>");
;
const simulationSchema = __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$zod$2f$v4$2f$classic$2f$external$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__$2a$__as__default$3e$__["default"].object({
    name: __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$zod$2f$v4$2f$classic$2f$external$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__$2a$__as__default$3e$__["default"].string().trim().min(1, {
        message: "O nome da simulação é obrigatório."
    }),
    turbineIds: __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$zod$2f$v4$2f$classic$2f$external$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__$2a$__as__default$3e$__["default"].array(__TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$zod$2f$v4$2f$classic$2f$external$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__$2a$__as__default$3e$__["default"].number().int().positive()).min(1, "Selecione pelo menos uma turbina.")
});
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/frontend/app/simulations/client-simulation.tsx [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>ClientSimulation
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/frontend/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/frontend/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$axios$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__ = __turbopack_context__.i("[project]/frontend/node_modules/axios/index.js [app-client] (ecmascript) <locals>");
var __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$react$2d$hook$2d$form$2f$dist$2f$index$2e$esm$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/frontend/node_modules/react-hook-form/dist/index.esm.mjs [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f40$mui$2f$material$2f$Alert$2f$Alert$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Alert$3e$__ = __turbopack_context__.i("[project]/frontend/node_modules/@mui/material/Alert/Alert.mjs [app-client] (ecmascript) <export default as Alert>");
var __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f40$mui$2f$material$2f$Box$2f$Box$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Box$3e$__ = __turbopack_context__.i("[project]/frontend/node_modules/@mui/material/Box/Box.mjs [app-client] (ecmascript) <export default as Box>");
var __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f40$mui$2f$material$2f$Button$2f$Button$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Button$3e$__ = __turbopack_context__.i("[project]/frontend/node_modules/@mui/material/Button/Button.mjs [app-client] (ecmascript) <export default as Button>");
var __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f40$mui$2f$material$2f$CircularProgress$2f$CircularProgress$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__CircularProgress$3e$__ = __turbopack_context__.i("[project]/frontend/node_modules/@mui/material/CircularProgress/CircularProgress.mjs [app-client] (ecmascript) <export default as CircularProgress>");
var __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f40$mui$2f$material$2f$Dialog$2f$Dialog$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Dialog$3e$__ = __turbopack_context__.i("[project]/frontend/node_modules/@mui/material/Dialog/Dialog.mjs [app-client] (ecmascript) <export default as Dialog>");
var __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f40$mui$2f$material$2f$DialogActions$2f$DialogActions$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__DialogActions$3e$__ = __turbopack_context__.i("[project]/frontend/node_modules/@mui/material/DialogActions/DialogActions.mjs [app-client] (ecmascript) <export default as DialogActions>");
var __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f40$mui$2f$material$2f$DialogContent$2f$DialogContent$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__DialogContent$3e$__ = __turbopack_context__.i("[project]/frontend/node_modules/@mui/material/DialogContent/DialogContent.mjs [app-client] (ecmascript) <export default as DialogContent>");
var __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f40$mui$2f$material$2f$DialogTitle$2f$DialogTitle$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__DialogTitle$3e$__ = __turbopack_context__.i("[project]/frontend/node_modules/@mui/material/DialogTitle/DialogTitle.mjs [app-client] (ecmascript) <export default as DialogTitle>");
var __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f40$mui$2f$material$2f$IconButton$2f$IconButton$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__IconButton$3e$__ = __turbopack_context__.i("[project]/frontend/node_modules/@mui/material/IconButton/IconButton.mjs [app-client] (ecmascript) <export default as IconButton>");
var __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f40$mui$2f$material$2f$TextField$2f$TextField$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__TextField$3e$__ = __turbopack_context__.i("[project]/frontend/node_modules/@mui/material/TextField/TextField.mjs [app-client] (ecmascript) <export default as TextField>");
var __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f40$mui$2f$icons$2d$material$2f$Close$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/frontend/node_modules/@mui/icons-material/Close.mjs [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$hooks$2f$use$2d$simulation$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/frontend/hooks/use-simulation.ts [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$hooks$2f$use$2d$turbine$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/frontend/hooks/use-turbine.ts [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$app$2f$components$2f$Card$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/frontend/app/components/Card.tsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$app$2f$components$2f$SimulationBox$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/frontend/app/components/SimulationBox.tsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$app$2f$forms$2f$simulation$2f$create$2d$edit$2d$simulation$2d$form$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/frontend/app/forms/simulation/create-edit-simulation-form.tsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$app$2f$forms$2f$simulation$2f$format$2d$payload$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/frontend/app/forms/simulation/format-payload.tsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$app$2f$components$2f$Details$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/frontend/app/components/Details.tsx [app-client] (ecmascript)");
;
var _s = __turbopack_context__.k.signature();
"use client";
;
;
;
;
;
;
;
;
;
;
;
;
function getErrorMessage(error) {
    if ((0, __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$axios$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__["isAxiosError"])(error)) {
        const message = error.response?.data?.message;
        if (typeof message === "string") return message;
        if (Array.isArray(message)) return message.join(" ");
    }
    return "Não foi possível concluir a operação.";
}
function ClientSimulation() {
    _s();
    const [viewingSimulation, setViewingSimulation] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(null);
    const { data: simulation = [], isPending, isError, refetch, createSimulation, updateSimulation, deleteSimulation, isCreating, isUpdating, isDeleting } = (0, __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$hooks$2f$use$2d$simulation$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useSimulation"])();
    const { data: turbines = [], isPending: isTurbinesLoading, isError: isTurbinesError, refetch: refetchTurbines } = (0, __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$hooks$2f$use$2d$turbine$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useTurbine"])();
    const [isModalOpen, setIsModalOpen] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(false);
    const [editingSimulation, setEditingSimulation] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(null);
    const [simulationToDelete, setSimulationToDelete] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(null);
    const [initialValues, setInitialValues] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(undefined);
    const [submitError, setSubmitError] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(null);
    const [deleteError, setDeleteError] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(null);
    const isSaving = isCreating || isUpdating;
    const isBusy = isSaving || isDeleting;
    const { control } = (0, __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$react$2d$hook$2d$form$2f$dist$2f$index$2e$esm$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useForm"])({
        defaultValues: {
            search: ""
        }
    });
    const search = (0, __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$react$2d$hook$2d$form$2f$dist$2f$index$2e$esm$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useWatch"])({
        control,
        name: "search"
    });
    const term = search.trim().toLocaleLowerCase("pt-BR");
    const filteredSimulation = simulation.filter((item)=>item.name.toLocaleLowerCase("pt-BR").includes(term));
    const openCreateModal = ()=>{
        setEditingSimulation(null);
        setInitialValues(undefined);
        setSubmitError(null);
        setIsModalOpen(true);
        void refetchTurbines();
    };
    const openEditModal = (item)=>{
        setEditingSimulation(item);
        setInitialValues({
            name: item.name,
            turbineIds: turbines.filter((turbine)=>turbine.simulation_id === item.id).map((turbine)=>turbine.id)
        });
        setSubmitError(null);
        setIsModalOpen(true);
        void refetchTurbines();
    };
    const closeModal = ()=>{
        if (!isSaving) setIsModalOpen(false);
    };
    const openDeleteModal = (item)=>{
        setDeleteError(null);
        setSimulationToDelete(item);
    };
    const closeDeleteModal = ()=>{
        if (!isDeleting) setSimulationToDelete(null);
    };
    const handleSubmit = async (values)=>{
        if (isSaving) return;
        setSubmitError(null);
        try {
            const payload = (0, __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$app$2f$forms$2f$simulation$2f$format$2d$payload$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["formatSimulationPayload"])(values);
            if (editingSimulation) {
                await updateSimulation({
                    id: editingSimulation.id,
                    payload
                });
            } else {
                await createSimulation(payload);
            }
            setIsModalOpen(false);
        } catch (error) {
            setSubmitError(getErrorMessage(error));
            void refetchTurbines();
        }
    };
    const handleDelete = async ()=>{
        if (!simulationToDelete || isDeleting) return;
        setDeleteError(null);
        try {
            await deleteSimulation(simulationToDelete.id);
            setSimulationToDelete(null);
        } catch (error) {
            setDeleteError(getErrorMessage(error));
        }
    };
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f40$mui$2f$material$2f$Box$2f$Box$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Box$3e$__["Box"], {
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h1", {
                className: "text-2xl font-bold text-[#044947]",
                children: "Simulações"
            }, void 0, false, {
                fileName: "[project]/frontend/app/simulations/client-simulation.tsx",
                lineNumber: 121,
                columnNumber: 13
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                className: "pb-4 pt-1 font-light text-[#64748B]",
                children: "Cadastre e gerencie todas as simulações."
            }, void 0, false, {
                fileName: "[project]/frontend/app/simulations/client-simulation.tsx",
                lineNumber: 122,
                columnNumber: 13
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f40$mui$2f$material$2f$Box$2f$Box$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Box$3e$__["Box"], {
                className: "w-full max-w-82 pt-2",
                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$app$2f$components$2f$Card$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Card"], {
                    label: "Total:",
                    unit: "simulações",
                    value: isPending || isError ? "-" : simulation.length
                }, void 0, false, {
                    fileName: "[project]/frontend/app/simulations/client-simulation.tsx",
                    lineNumber: 125,
                    columnNumber: 17
                }, this)
            }, void 0, false, {
                fileName: "[project]/frontend/app/simulations/client-simulation.tsx",
                lineNumber: 124,
                columnNumber: 13
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f40$mui$2f$material$2f$Box$2f$Box$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Box$3e$__["Box"], {
                className: "mt-5 rounded-xl border border-gray-200 bg-white p-3",
                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f40$mui$2f$material$2f$Box$2f$Box$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Box$3e$__["Box"], {
                    className: "flex w-full flex-wrap items-center justify-between gap-4",
                    children: [
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f40$mui$2f$material$2f$Box$2f$Box$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Box$3e$__["Box"], {
                            className: "min-w-0 flex-1 basis-60 max-w-md",
                            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$react$2d$hook$2d$form$2f$dist$2f$index$2e$esm$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Controller"], {
                                name: "search",
                                control: control,
                                render: ({ field: { ref, ...field } })=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f40$mui$2f$material$2f$TextField$2f$TextField$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__TextField$3e$__["TextField"], {
                                        ...field,
                                        inputRef: ref,
                                        label: "Procurar simulação...",
                                        placeholder: "Nome da simulação",
                                        size: "small",
                                        fullWidth: true
                                    }, void 0, false, {
                                        fileName: "[project]/frontend/app/simulations/client-simulation.tsx",
                                        lineNumber: 132,
                                        columnNumber: 29
                                    }, this)
                            }, void 0, false, {
                                fileName: "[project]/frontend/app/simulations/client-simulation.tsx",
                                lineNumber: 131,
                                columnNumber: 25
                            }, this)
                        }, void 0, false, {
                            fileName: "[project]/frontend/app/simulations/client-simulation.tsx",
                            lineNumber: 130,
                            columnNumber: 21
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f40$mui$2f$material$2f$Box$2f$Box$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Box$3e$__["Box"], {
                            className: "ml-auto shrink-0",
                            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f40$mui$2f$material$2f$Button$2f$Button$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Button$3e$__["Button"], {
                                onClick: openCreateModal,
                                disabled: isBusy,
                                children: "+ Adicionar Simulação"
                            }, void 0, false, {
                                fileName: "[project]/frontend/app/simulations/client-simulation.tsx",
                                lineNumber: 136,
                                columnNumber: 25
                            }, this)
                        }, void 0, false, {
                            fileName: "[project]/frontend/app/simulations/client-simulation.tsx",
                            lineNumber: 135,
                            columnNumber: 21
                        }, this)
                    ]
                }, void 0, true, {
                    fileName: "[project]/frontend/app/simulations/client-simulation.tsx",
                    lineNumber: 129,
                    columnNumber: 17
                }, this)
            }, void 0, false, {
                fileName: "[project]/frontend/app/simulations/client-simulation.tsx",
                lineNumber: 128,
                columnNumber: 13
            }, this),
            isPending || isTurbinesLoading ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f40$mui$2f$material$2f$Box$2f$Box$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Box$3e$__["Box"], {
                role: "status",
                className: "flex items-center gap-3 p-6 text-[#64748B]",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f40$mui$2f$material$2f$CircularProgress$2f$CircularProgress$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__CircularProgress$3e$__["CircularProgress"], {
                        size: 24
                    }, void 0, false, {
                        fileName: "[project]/frontend/app/simulations/client-simulation.tsx",
                        lineNumber: 143,
                        columnNumber: 21
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                        children: "Carregando simulações..."
                    }, void 0, false, {
                        fileName: "[project]/frontend/app/simulations/client-simulation.tsx",
                        lineNumber: 144,
                        columnNumber: 21
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/frontend/app/simulations/client-simulation.tsx",
                lineNumber: 142,
                columnNumber: 17
            }, this) : isError || isTurbinesError ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f40$mui$2f$material$2f$Alert$2f$Alert$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Alert$3e$__["Alert"], {
                className: "mt-4",
                severity: "error",
                action: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f40$mui$2f$material$2f$Button$2f$Button$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Button$3e$__["Button"], {
                    color: "inherit",
                    variant: "text",
                    onClick: ()=>{
                        void refetch();
                        void refetchTurbines();
                    },
                    children: "Tentar novamente"
                }, void 0, false, {
                    fileName: "[project]/frontend/app/simulations/client-simulation.tsx",
                    lineNumber: 147,
                    columnNumber: 66
                }, this),
                children: "Não foi possível carregar as simulações e suas turbinas."
            }, void 0, false, {
                fileName: "[project]/frontend/app/simulations/client-simulation.tsx",
                lineNumber: 147,
                columnNumber: 17
            }, this) : filteredSimulation.length === 0 ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                className: "mt-6 text-[#64748B]",
                children: simulation.length === 0 ? "Nenhuma simulação cadastrada." : "Nenhuma simulação encontrada para essa busca."
            }, void 0, false, {
                fileName: "[project]/frontend/app/simulations/client-simulation.tsx",
                lineNumber: 151,
                columnNumber: 17
            }, this) : /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f40$mui$2f$material$2f$Box$2f$Box$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Box$3e$__["Box"], {
                className: "mt-4 grid gap-4",
                sx: {
                    gridTemplateColumns: "repeat(auto-fill, minmax(min(100%, 260px), 1fr))"
                },
                children: filteredSimulation.map((item)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$app$2f$components$2f$SimulationBox$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                        name: item.name,
                        total: turbines.filter((turbine)=>turbine.simulation_id === item.id).length,
                        date: "",
                        onClick: ()=>setViewingSimulation(item),
                        onEdit: ()=>openEditModal(item),
                        onDelete: ()=>openDeleteModal(item),
                        disabled: isBusy
                    }, item.id, false, {
                        fileName: "[project]/frontend/app/simulations/client-simulation.tsx",
                        lineNumber: 155,
                        columnNumber: 25
                    }, this))
            }, void 0, false, {
                fileName: "[project]/frontend/app/simulations/client-simulation.tsx",
                lineNumber: 153,
                columnNumber: 17
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f40$mui$2f$material$2f$Dialog$2f$Dialog$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Dialog$3e$__["Dialog"], {
                open: isModalOpen,
                onClose: closeModal,
                "aria-labelledby": "simulation-form-title",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f40$mui$2f$material$2f$DialogTitle$2f$DialogTitle$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__DialogTitle$3e$__["DialogTitle"], {
                        id: "simulation-form-title",
                        children: [
                            editingSimulation ? "Editar simulação" : "Crie uma nova simulação",
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f40$mui$2f$material$2f$IconButton$2f$IconButton$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__IconButton$3e$__["IconButton"], {
                                onClick: closeModal,
                                disabled: isSaving,
                                size: "small",
                                "aria-label": "Fechar formulário",
                                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f40$mui$2f$icons$2d$material$2f$Close$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {}, void 0, false, {
                                    fileName: "[project]/frontend/app/simulations/client-simulation.tsx",
                                    lineNumber: 173,
                                    columnNumber: 25
                                }, this)
                            }, void 0, false, {
                                fileName: "[project]/frontend/app/simulations/client-simulation.tsx",
                                lineNumber: 172,
                                columnNumber: 21
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/frontend/app/simulations/client-simulation.tsx",
                        lineNumber: 170,
                        columnNumber: 17
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f40$mui$2f$material$2f$DialogContent$2f$DialogContent$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__DialogContent$3e$__["DialogContent"], {
                        className: "turbine-dialog-content",
                        children: isModalOpen && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$app$2f$forms$2f$simulation$2f$create$2d$edit$2d$simulation$2d$form$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                            simulationId: editingSimulation?.id,
                            initialValues: initialValues,
                            onSubmit: handleSubmit,
                            isLoading: isSaving,
                            submitError: submitError
                        }, editingSimulation?.id ?? "create", false, {
                            fileName: "[project]/frontend/app/simulations/client-simulation.tsx",
                            lineNumber: 178,
                            columnNumber: 25
                        }, this)
                    }, void 0, false, {
                        fileName: "[project]/frontend/app/simulations/client-simulation.tsx",
                        lineNumber: 176,
                        columnNumber: 17
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/frontend/app/simulations/client-simulation.tsx",
                lineNumber: 169,
                columnNumber: 13
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f40$mui$2f$material$2f$Dialog$2f$Dialog$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Dialog$3e$__["Dialog"], {
                open: simulationToDelete !== null,
                onClose: closeDeleteModal,
                maxWidth: "xs",
                "aria-labelledby": "delete-simulation-title",
                "aria-describedby": "delete-simulation-description",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f40$mui$2f$material$2f$DialogTitle$2f$DialogTitle$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__DialogTitle$3e$__["DialogTitle"], {
                        id: "delete-simulation-title",
                        children: [
                            "Excluir simulação",
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f40$mui$2f$material$2f$IconButton$2f$IconButton$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__IconButton$3e$__["IconButton"], {
                                onClick: closeDeleteModal,
                                disabled: isDeleting,
                                size: "small",
                                "aria-label": "Fechar confirmação",
                                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f40$mui$2f$icons$2d$material$2f$Close$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {}, void 0, false, {
                                    fileName: "[project]/frontend/app/simulations/client-simulation.tsx",
                                    lineNumber: 187,
                                    columnNumber: 25
                                }, this)
                            }, void 0, false, {
                                fileName: "[project]/frontend/app/simulations/client-simulation.tsx",
                                lineNumber: 186,
                                columnNumber: 21
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/frontend/app/simulations/client-simulation.tsx",
                        lineNumber: 184,
                        columnNumber: 17
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f40$mui$2f$material$2f$DialogContent$2f$DialogContent$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__DialogContent$3e$__["DialogContent"], {
                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f40$mui$2f$material$2f$Box$2f$Box$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Box$3e$__["Box"], {
                            className: "modal-form-body",
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                    id: "delete-simulation-description",
                                    className: "text-sm leading-6 text-[#64748B]",
                                    children: [
                                        "Excluir ",
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("strong", {
                                            children: simulationToDelete?.name
                                        }, void 0, false, {
                                            fileName: "[project]/frontend/app/simulations/client-simulation.tsx",
                                            lineNumber: 192,
                                            columnNumber: 116
                                        }, this),
                                        "? As turbinas serão mantidas e ficarão livres para outra simulação."
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/frontend/app/simulations/client-simulation.tsx",
                                    lineNumber: 192,
                                    columnNumber: 25
                                }, this),
                                deleteError && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f40$mui$2f$material$2f$Alert$2f$Alert$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Alert$3e$__["Alert"], {
                                    severity: "error",
                                    children: deleteError
                                }, void 0, false, {
                                    fileName: "[project]/frontend/app/simulations/client-simulation.tsx",
                                    lineNumber: 193,
                                    columnNumber: 41
                                }, this)
                            ]
                        }, void 0, true, {
                            fileName: "[project]/frontend/app/simulations/client-simulation.tsx",
                            lineNumber: 191,
                            columnNumber: 21
                        }, this)
                    }, void 0, false, {
                        fileName: "[project]/frontend/app/simulations/client-simulation.tsx",
                        lineNumber: 190,
                        columnNumber: 17
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f40$mui$2f$material$2f$DialogActions$2f$DialogActions$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__DialogActions$3e$__["DialogActions"], {
                        sx: {
                            borderTop: "1px solid #E1ECEE",
                            padding: "16px 24px",
                            gap: 1
                        },
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f40$mui$2f$material$2f$Button$2f$Button$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Button$3e$__["Button"], {
                                variant: "outlined",
                                onClick: closeDeleteModal,
                                disabled: isDeleting,
                                autoFocus: true,
                                children: "Cancelar"
                            }, void 0, false, {
                                fileName: "[project]/frontend/app/simulations/client-simulation.tsx",
                                lineNumber: 197,
                                columnNumber: 21
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f40$mui$2f$material$2f$Button$2f$Button$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Button$3e$__["Button"], {
                                color: "error",
                                onClick: handleDelete,
                                disabled: isDeleting,
                                children: isDeleting ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f40$mui$2f$material$2f$CircularProgress$2f$CircularProgress$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__CircularProgress$3e$__["CircularProgress"], {
                                    size: 20,
                                    color: "inherit"
                                }, void 0, false, {
                                    fileName: "[project]/frontend/app/simulations/client-simulation.tsx",
                                    lineNumber: 198,
                                    columnNumber: 102
                                }, this) : "Excluir"
                            }, void 0, false, {
                                fileName: "[project]/frontend/app/simulations/client-simulation.tsx",
                                lineNumber: 198,
                                columnNumber: 21
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/frontend/app/simulations/client-simulation.tsx",
                        lineNumber: 196,
                        columnNumber: 17
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/frontend/app/simulations/client-simulation.tsx",
                lineNumber: 183,
                columnNumber: 13
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$app$2f$components$2f$Details$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                simulation: viewingSimulation,
                turbines: turbines,
                onClose: ()=>setViewingSimulation(null)
            }, void 0, false, {
                fileName: "[project]/frontend/app/simulations/client-simulation.tsx",
                lineNumber: 202,
                columnNumber: 13
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/frontend/app/simulations/client-simulation.tsx",
        lineNumber: 120,
        columnNumber: 9
    }, this);
}
_s(ClientSimulation, "kLg7rpTo7n92tcAxRF+DuUBm4v8=", false, function() {
    return [
        __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$hooks$2f$use$2d$simulation$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useSimulation"],
        __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$hooks$2f$use$2d$turbine$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useTurbine"],
        __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$react$2d$hook$2d$form$2f$dist$2f$index$2e$esm$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useForm"],
        __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$react$2d$hook$2d$form$2f$dist$2f$index$2e$esm$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useWatch"]
    ];
});
_c = ClientSimulation;
var _c;
__turbopack_context__.k.register(_c, "ClientSimulation");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/frontend/clients/projeto-pam/dist/esm/api.js [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "AppApi",
    ()=>AppApi,
    "AppApiAxiosParamCreator",
    ()=>AppApiAxiosParamCreator,
    "AppApiFactory",
    ()=>AppApiFactory,
    "AppApiFp",
    ()=>AppApiFp,
    "PointCoordinatesDtoTypeEnum",
    ()=>PointCoordinatesDtoTypeEnum,
    "SimulationApi",
    ()=>SimulationApi,
    "SimulationApiAxiosParamCreator",
    ()=>SimulationApiAxiosParamCreator,
    "SimulationApiFactory",
    ()=>SimulationApiFactory,
    "SimulationApiFp",
    ()=>SimulationApiFp,
    "TurbineApi",
    ()=>TurbineApi,
    "TurbineApiAxiosParamCreator",
    ()=>TurbineApiAxiosParamCreator,
    "TurbineApiFactory",
    ()=>TurbineApiFactory,
    "TurbineApiFp",
    ()=>TurbineApiFp,
    "TurbinesCatalogApi",
    ()=>TurbinesCatalogApi,
    "TurbinesCatalogApiAxiosParamCreator",
    ()=>TurbinesCatalogApiAxiosParamCreator,
    "TurbinesCatalogApiFactory",
    ()=>TurbinesCatalogApiFactory,
    "TurbinesCatalogApiFp",
    ()=>TurbinesCatalogApiFp
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$clients$2f$projeto$2d$pam$2f$node_modules$2f$axios$2f$lib$2f$axios$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/frontend/clients/projeto-pam/node_modules/axios/lib/axios.js [app-client] (ecmascript)");
// Some imports not used depending on template conditions
// @ts-ignore
var __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$clients$2f$projeto$2d$pam$2f$dist$2f$esm$2f$common$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/frontend/clients/projeto-pam/dist/esm/common.js [app-client] (ecmascript)");
// @ts-ignore
var __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$clients$2f$projeto$2d$pam$2f$dist$2f$esm$2f$base$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/frontend/clients/projeto-pam/dist/esm/base.js [app-client] (ecmascript)");
/* tslint:disable */ /* eslint-disable */ /**
 * PAM
 * Documentação e testes interativos dos endpoints de Simulação, Turbinas e Catálogo
 *
 * The version of the OpenAPI document: 1.0
 *
 *
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 * Do not edit the class manually.
 */ var __awaiter = ("TURBOPACK compile-time value", void 0) && ("TURBOPACK compile-time value", void 0).__awaiter || function(thisArg, _arguments, P, generator) {
    function adopt(value) {
        return value instanceof P ? value : new P(function(resolve) {
            resolve(value);
        });
    }
    return new (P || (P = Promise))(function(resolve, reject) {
        function fulfilled(value) {
            try {
                step(generator.next(value));
            } catch (e) {
                reject(e);
            }
        }
        function rejected(value) {
            try {
                step(generator["throw"](value));
            } catch (e) {
                reject(e);
            }
        }
        function step(result) {
            result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected);
        }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
;
;
;
const PointCoordinatesDtoTypeEnum = {
    Point: 'Point'
};
const AppApiAxiosParamCreator = function(configuration) {
    return {
        /**
         *
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */ appControllerGetHello: (options = {})=>__awaiter(this, void 0, void 0, function*() {
                const localVarPath = `/`;
                // use dummy base URL string because the URL constructor only accepts absolute URLs.
                const localVarUrlObj = new URL(localVarPath, __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$clients$2f$projeto$2d$pam$2f$dist$2f$esm$2f$common$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["DUMMY_BASE_URL"]);
                let baseOptions;
                if (configuration) {
                    baseOptions = configuration.baseOptions;
                }
                const localVarRequestOptions = Object.assign(Object.assign({
                    method: 'GET'
                }, baseOptions), options);
                const localVarHeaderParameter = {};
                const localVarQueryParameter = {};
                (0, __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$clients$2f$projeto$2d$pam$2f$dist$2f$esm$2f$common$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["setSearchParams"])(localVarUrlObj, localVarQueryParameter);
                let headersFromBaseOptions = baseOptions && baseOptions.headers ? baseOptions.headers : {};
                localVarRequestOptions.headers = Object.assign(Object.assign(Object.assign({}, localVarHeaderParameter), headersFromBaseOptions), options.headers);
                return {
                    url: (0, __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$clients$2f$projeto$2d$pam$2f$dist$2f$esm$2f$common$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["toPathString"])(localVarUrlObj),
                    options: localVarRequestOptions
                };
            })
    };
};
_c = AppApiAxiosParamCreator;
const AppApiFp = function(configuration) {
    const localVarAxiosParamCreator = AppApiAxiosParamCreator(configuration);
    return {
        /**
         *
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */ appControllerGetHello (options) {
            var _a, _b, _c;
            return __awaiter(this, void 0, void 0, function*() {
                const localVarAxiosArgs = yield localVarAxiosParamCreator.appControllerGetHello(options);
                const localVarOperationServerIndex = (_a = configuration === null || configuration === void 0 ? void 0 : configuration.serverIndex) !== null && _a !== void 0 ? _a : 0;
                const localVarOperationServerBasePath = (_c = (_b = __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$clients$2f$projeto$2d$pam$2f$dist$2f$esm$2f$base$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["operationServerMap"]['AppApi.appControllerGetHello']) === null || _b === void 0 ? void 0 : _b[localVarOperationServerIndex]) === null || _c === void 0 ? void 0 : _c.url;
                return (axios, basePath)=>(0, __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$clients$2f$projeto$2d$pam$2f$dist$2f$esm$2f$common$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["createRequestFunction"])(localVarAxiosArgs, __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$clients$2f$projeto$2d$pam$2f$node_modules$2f$axios$2f$lib$2f$axios$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$clients$2f$projeto$2d$pam$2f$dist$2f$esm$2f$base$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["BASE_PATH"], configuration)(axios, localVarOperationServerBasePath || basePath);
            });
        }
    };
};
_c1 = AppApiFp;
const AppApiFactory = function(configuration, basePath, axios) {
    const localVarFp = AppApiFp(configuration);
    return {
        /**
         *
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */ appControllerGetHello (options) {
            return localVarFp.appControllerGetHello(options).then((request)=>request(axios, basePath));
        }
    };
};
_c2 = AppApiFactory;
class AppApi extends __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$clients$2f$projeto$2d$pam$2f$dist$2f$esm$2f$base$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["BaseAPI"] {
    /**
     *
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     * @memberof AppApi
     */ appControllerGetHello(options) {
        return AppApiFp(this.configuration).appControllerGetHello(options).then((request)=>request(this.axios, this.basePath));
    }
}
const SimulationApiAxiosParamCreator = function(configuration) {
    return {
        /**
         *
         * @param {CreateSimulationDto} createSimulationDto
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */ simulationControllerCreate: (createSimulationDto, options = {})=>__awaiter(this, void 0, void 0, function*() {
                // verify required parameter 'createSimulationDto' is not null or undefined
                (0, __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$clients$2f$projeto$2d$pam$2f$dist$2f$esm$2f$common$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["assertParamExists"])('simulationControllerCreate', 'createSimulationDto', createSimulationDto);
                const localVarPath = `/simulation`;
                // use dummy base URL string because the URL constructor only accepts absolute URLs.
                const localVarUrlObj = new URL(localVarPath, __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$clients$2f$projeto$2d$pam$2f$dist$2f$esm$2f$common$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["DUMMY_BASE_URL"]);
                let baseOptions;
                if (configuration) {
                    baseOptions = configuration.baseOptions;
                }
                const localVarRequestOptions = Object.assign(Object.assign({
                    method: 'POST'
                }, baseOptions), options);
                const localVarHeaderParameter = {};
                const localVarQueryParameter = {};
                localVarHeaderParameter['Content-Type'] = 'application/json';
                (0, __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$clients$2f$projeto$2d$pam$2f$dist$2f$esm$2f$common$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["setSearchParams"])(localVarUrlObj, localVarQueryParameter);
                let headersFromBaseOptions = baseOptions && baseOptions.headers ? baseOptions.headers : {};
                localVarRequestOptions.headers = Object.assign(Object.assign(Object.assign({}, localVarHeaderParameter), headersFromBaseOptions), options.headers);
                localVarRequestOptions.data = (0, __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$clients$2f$projeto$2d$pam$2f$dist$2f$esm$2f$common$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["serializeDataIfNeeded"])(createSimulationDto, localVarRequestOptions, configuration);
                return {
                    url: (0, __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$clients$2f$projeto$2d$pam$2f$dist$2f$esm$2f$common$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["toPathString"])(localVarUrlObj),
                    options: localVarRequestOptions
                };
            }),
        /**
         *
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */ simulationControllerFindAll: (options = {})=>__awaiter(this, void 0, void 0, function*() {
                const localVarPath = `/simulation`;
                // use dummy base URL string because the URL constructor only accepts absolute URLs.
                const localVarUrlObj = new URL(localVarPath, __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$clients$2f$projeto$2d$pam$2f$dist$2f$esm$2f$common$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["DUMMY_BASE_URL"]);
                let baseOptions;
                if (configuration) {
                    baseOptions = configuration.baseOptions;
                }
                const localVarRequestOptions = Object.assign(Object.assign({
                    method: 'GET'
                }, baseOptions), options);
                const localVarHeaderParameter = {};
                const localVarQueryParameter = {};
                (0, __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$clients$2f$projeto$2d$pam$2f$dist$2f$esm$2f$common$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["setSearchParams"])(localVarUrlObj, localVarQueryParameter);
                let headersFromBaseOptions = baseOptions && baseOptions.headers ? baseOptions.headers : {};
                localVarRequestOptions.headers = Object.assign(Object.assign(Object.assign({}, localVarHeaderParameter), headersFromBaseOptions), options.headers);
                return {
                    url: (0, __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$clients$2f$projeto$2d$pam$2f$dist$2f$esm$2f$common$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["toPathString"])(localVarUrlObj),
                    options: localVarRequestOptions
                };
            }),
        /**
         *
         * @param {number} id ID do catalogo
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */ simulationControllerFindOne: (id, options = {})=>__awaiter(this, void 0, void 0, function*() {
                // verify required parameter 'id' is not null or undefined
                (0, __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$clients$2f$projeto$2d$pam$2f$dist$2f$esm$2f$common$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["assertParamExists"])('simulationControllerFindOne', 'id', id);
                const localVarPath = `/simulation/{id}`.replace(`{${"id"}}`, encodeURIComponent(String(id)));
                // use dummy base URL string because the URL constructor only accepts absolute URLs.
                const localVarUrlObj = new URL(localVarPath, __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$clients$2f$projeto$2d$pam$2f$dist$2f$esm$2f$common$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["DUMMY_BASE_URL"]);
                let baseOptions;
                if (configuration) {
                    baseOptions = configuration.baseOptions;
                }
                const localVarRequestOptions = Object.assign(Object.assign({
                    method: 'GET'
                }, baseOptions), options);
                const localVarHeaderParameter = {};
                const localVarQueryParameter = {};
                (0, __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$clients$2f$projeto$2d$pam$2f$dist$2f$esm$2f$common$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["setSearchParams"])(localVarUrlObj, localVarQueryParameter);
                let headersFromBaseOptions = baseOptions && baseOptions.headers ? baseOptions.headers : {};
                localVarRequestOptions.headers = Object.assign(Object.assign(Object.assign({}, localVarHeaderParameter), headersFromBaseOptions), options.headers);
                return {
                    url: (0, __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$clients$2f$projeto$2d$pam$2f$dist$2f$esm$2f$common$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["toPathString"])(localVarUrlObj),
                    options: localVarRequestOptions
                };
            }),
        /**
         *
         * @param {number} id ID do catalogo
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */ simulationControllerRemove: (id, options = {})=>__awaiter(this, void 0, void 0, function*() {
                // verify required parameter 'id' is not null or undefined
                (0, __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$clients$2f$projeto$2d$pam$2f$dist$2f$esm$2f$common$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["assertParamExists"])('simulationControllerRemove', 'id', id);
                const localVarPath = `/simulation/{id}`.replace(`{${"id"}}`, encodeURIComponent(String(id)));
                // use dummy base URL string because the URL constructor only accepts absolute URLs.
                const localVarUrlObj = new URL(localVarPath, __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$clients$2f$projeto$2d$pam$2f$dist$2f$esm$2f$common$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["DUMMY_BASE_URL"]);
                let baseOptions;
                if (configuration) {
                    baseOptions = configuration.baseOptions;
                }
                const localVarRequestOptions = Object.assign(Object.assign({
                    method: 'DELETE'
                }, baseOptions), options);
                const localVarHeaderParameter = {};
                const localVarQueryParameter = {};
                (0, __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$clients$2f$projeto$2d$pam$2f$dist$2f$esm$2f$common$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["setSearchParams"])(localVarUrlObj, localVarQueryParameter);
                let headersFromBaseOptions = baseOptions && baseOptions.headers ? baseOptions.headers : {};
                localVarRequestOptions.headers = Object.assign(Object.assign(Object.assign({}, localVarHeaderParameter), headersFromBaseOptions), options.headers);
                return {
                    url: (0, __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$clients$2f$projeto$2d$pam$2f$dist$2f$esm$2f$common$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["toPathString"])(localVarUrlObj),
                    options: localVarRequestOptions
                };
            }),
        /**
         *
         * @param {number} id ID do catalogo
         * @param {UpdateSimulationDto} updateSimulationDto
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */ simulationControllerUpdate: (id, updateSimulationDto, options = {})=>__awaiter(this, void 0, void 0, function*() {
                // verify required parameter 'id' is not null or undefined
                (0, __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$clients$2f$projeto$2d$pam$2f$dist$2f$esm$2f$common$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["assertParamExists"])('simulationControllerUpdate', 'id', id);
                // verify required parameter 'updateSimulationDto' is not null or undefined
                (0, __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$clients$2f$projeto$2d$pam$2f$dist$2f$esm$2f$common$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["assertParamExists"])('simulationControllerUpdate', 'updateSimulationDto', updateSimulationDto);
                const localVarPath = `/simulation/{id}`.replace(`{${"id"}}`, encodeURIComponent(String(id)));
                // use dummy base URL string because the URL constructor only accepts absolute URLs.
                const localVarUrlObj = new URL(localVarPath, __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$clients$2f$projeto$2d$pam$2f$dist$2f$esm$2f$common$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["DUMMY_BASE_URL"]);
                let baseOptions;
                if (configuration) {
                    baseOptions = configuration.baseOptions;
                }
                const localVarRequestOptions = Object.assign(Object.assign({
                    method: 'PATCH'
                }, baseOptions), options);
                const localVarHeaderParameter = {};
                const localVarQueryParameter = {};
                localVarHeaderParameter['Content-Type'] = 'application/json';
                (0, __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$clients$2f$projeto$2d$pam$2f$dist$2f$esm$2f$common$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["setSearchParams"])(localVarUrlObj, localVarQueryParameter);
                let headersFromBaseOptions = baseOptions && baseOptions.headers ? baseOptions.headers : {};
                localVarRequestOptions.headers = Object.assign(Object.assign(Object.assign({}, localVarHeaderParameter), headersFromBaseOptions), options.headers);
                localVarRequestOptions.data = (0, __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$clients$2f$projeto$2d$pam$2f$dist$2f$esm$2f$common$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["serializeDataIfNeeded"])(updateSimulationDto, localVarRequestOptions, configuration);
                return {
                    url: (0, __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$clients$2f$projeto$2d$pam$2f$dist$2f$esm$2f$common$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["toPathString"])(localVarUrlObj),
                    options: localVarRequestOptions
                };
            })
    };
};
_c3 = SimulationApiAxiosParamCreator;
const SimulationApiFp = function(configuration) {
    const localVarAxiosParamCreator = SimulationApiAxiosParamCreator(configuration);
    return {
        /**
         *
         * @param {CreateSimulationDto} createSimulationDto
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */ simulationControllerCreate (createSimulationDto, options) {
            var _a, _b, _c;
            return __awaiter(this, void 0, void 0, function*() {
                const localVarAxiosArgs = yield localVarAxiosParamCreator.simulationControllerCreate(createSimulationDto, options);
                const localVarOperationServerIndex = (_a = configuration === null || configuration === void 0 ? void 0 : configuration.serverIndex) !== null && _a !== void 0 ? _a : 0;
                const localVarOperationServerBasePath = (_c = (_b = __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$clients$2f$projeto$2d$pam$2f$dist$2f$esm$2f$base$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["operationServerMap"]['SimulationApi.simulationControllerCreate']) === null || _b === void 0 ? void 0 : _b[localVarOperationServerIndex]) === null || _c === void 0 ? void 0 : _c.url;
                return (axios, basePath)=>(0, __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$clients$2f$projeto$2d$pam$2f$dist$2f$esm$2f$common$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["createRequestFunction"])(localVarAxiosArgs, __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$clients$2f$projeto$2d$pam$2f$node_modules$2f$axios$2f$lib$2f$axios$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$clients$2f$projeto$2d$pam$2f$dist$2f$esm$2f$base$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["BASE_PATH"], configuration)(axios, localVarOperationServerBasePath || basePath);
            });
        },
        /**
         *
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */ simulationControllerFindAll (options) {
            var _a, _b, _c;
            return __awaiter(this, void 0, void 0, function*() {
                const localVarAxiosArgs = yield localVarAxiosParamCreator.simulationControllerFindAll(options);
                const localVarOperationServerIndex = (_a = configuration === null || configuration === void 0 ? void 0 : configuration.serverIndex) !== null && _a !== void 0 ? _a : 0;
                const localVarOperationServerBasePath = (_c = (_b = __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$clients$2f$projeto$2d$pam$2f$dist$2f$esm$2f$base$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["operationServerMap"]['SimulationApi.simulationControllerFindAll']) === null || _b === void 0 ? void 0 : _b[localVarOperationServerIndex]) === null || _c === void 0 ? void 0 : _c.url;
                return (axios, basePath)=>(0, __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$clients$2f$projeto$2d$pam$2f$dist$2f$esm$2f$common$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["createRequestFunction"])(localVarAxiosArgs, __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$clients$2f$projeto$2d$pam$2f$node_modules$2f$axios$2f$lib$2f$axios$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$clients$2f$projeto$2d$pam$2f$dist$2f$esm$2f$base$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["BASE_PATH"], configuration)(axios, localVarOperationServerBasePath || basePath);
            });
        },
        /**
         *
         * @param {number} id ID do catalogo
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */ simulationControllerFindOne (id, options) {
            var _a, _b, _c;
            return __awaiter(this, void 0, void 0, function*() {
                const localVarAxiosArgs = yield localVarAxiosParamCreator.simulationControllerFindOne(id, options);
                const localVarOperationServerIndex = (_a = configuration === null || configuration === void 0 ? void 0 : configuration.serverIndex) !== null && _a !== void 0 ? _a : 0;
                const localVarOperationServerBasePath = (_c = (_b = __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$clients$2f$projeto$2d$pam$2f$dist$2f$esm$2f$base$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["operationServerMap"]['SimulationApi.simulationControllerFindOne']) === null || _b === void 0 ? void 0 : _b[localVarOperationServerIndex]) === null || _c === void 0 ? void 0 : _c.url;
                return (axios, basePath)=>(0, __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$clients$2f$projeto$2d$pam$2f$dist$2f$esm$2f$common$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["createRequestFunction"])(localVarAxiosArgs, __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$clients$2f$projeto$2d$pam$2f$node_modules$2f$axios$2f$lib$2f$axios$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$clients$2f$projeto$2d$pam$2f$dist$2f$esm$2f$base$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["BASE_PATH"], configuration)(axios, localVarOperationServerBasePath || basePath);
            });
        },
        /**
         *
         * @param {number} id ID do catalogo
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */ simulationControllerRemove (id, options) {
            var _a, _b, _c;
            return __awaiter(this, void 0, void 0, function*() {
                const localVarAxiosArgs = yield localVarAxiosParamCreator.simulationControllerRemove(id, options);
                const localVarOperationServerIndex = (_a = configuration === null || configuration === void 0 ? void 0 : configuration.serverIndex) !== null && _a !== void 0 ? _a : 0;
                const localVarOperationServerBasePath = (_c = (_b = __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$clients$2f$projeto$2d$pam$2f$dist$2f$esm$2f$base$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["operationServerMap"]['SimulationApi.simulationControllerRemove']) === null || _b === void 0 ? void 0 : _b[localVarOperationServerIndex]) === null || _c === void 0 ? void 0 : _c.url;
                return (axios, basePath)=>(0, __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$clients$2f$projeto$2d$pam$2f$dist$2f$esm$2f$common$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["createRequestFunction"])(localVarAxiosArgs, __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$clients$2f$projeto$2d$pam$2f$node_modules$2f$axios$2f$lib$2f$axios$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$clients$2f$projeto$2d$pam$2f$dist$2f$esm$2f$base$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["BASE_PATH"], configuration)(axios, localVarOperationServerBasePath || basePath);
            });
        },
        /**
         *
         * @param {number} id ID do catalogo
         * @param {UpdateSimulationDto} updateSimulationDto
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */ simulationControllerUpdate (id, updateSimulationDto, options) {
            var _a, _b, _c;
            return __awaiter(this, void 0, void 0, function*() {
                const localVarAxiosArgs = yield localVarAxiosParamCreator.simulationControllerUpdate(id, updateSimulationDto, options);
                const localVarOperationServerIndex = (_a = configuration === null || configuration === void 0 ? void 0 : configuration.serverIndex) !== null && _a !== void 0 ? _a : 0;
                const localVarOperationServerBasePath = (_c = (_b = __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$clients$2f$projeto$2d$pam$2f$dist$2f$esm$2f$base$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["operationServerMap"]['SimulationApi.simulationControllerUpdate']) === null || _b === void 0 ? void 0 : _b[localVarOperationServerIndex]) === null || _c === void 0 ? void 0 : _c.url;
                return (axios, basePath)=>(0, __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$clients$2f$projeto$2d$pam$2f$dist$2f$esm$2f$common$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["createRequestFunction"])(localVarAxiosArgs, __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$clients$2f$projeto$2d$pam$2f$node_modules$2f$axios$2f$lib$2f$axios$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$clients$2f$projeto$2d$pam$2f$dist$2f$esm$2f$base$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["BASE_PATH"], configuration)(axios, localVarOperationServerBasePath || basePath);
            });
        }
    };
};
_c4 = SimulationApiFp;
const SimulationApiFactory = function(configuration, basePath, axios) {
    const localVarFp = SimulationApiFp(configuration);
    return {
        /**
         *
         * @param {CreateSimulationDto} createSimulationDto
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */ simulationControllerCreate (createSimulationDto, options) {
            return localVarFp.simulationControllerCreate(createSimulationDto, options).then((request)=>request(axios, basePath));
        },
        /**
         *
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */ simulationControllerFindAll (options) {
            return localVarFp.simulationControllerFindAll(options).then((request)=>request(axios, basePath));
        },
        /**
         *
         * @param {number} id ID do catalogo
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */ simulationControllerFindOne (id, options) {
            return localVarFp.simulationControllerFindOne(id, options).then((request)=>request(axios, basePath));
        },
        /**
         *
         * @param {number} id ID do catalogo
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */ simulationControllerRemove (id, options) {
            return localVarFp.simulationControllerRemove(id, options).then((request)=>request(axios, basePath));
        },
        /**
         *
         * @param {number} id ID do catalogo
         * @param {UpdateSimulationDto} updateSimulationDto
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */ simulationControllerUpdate (id, updateSimulationDto, options) {
            return localVarFp.simulationControllerUpdate(id, updateSimulationDto, options).then((request)=>request(axios, basePath));
        }
    };
};
_c5 = SimulationApiFactory;
class SimulationApi extends __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$clients$2f$projeto$2d$pam$2f$dist$2f$esm$2f$base$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["BaseAPI"] {
    /**
     *
     * @param {CreateSimulationDto} createSimulationDto
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     * @memberof SimulationApi
     */ simulationControllerCreate(createSimulationDto, options) {
        return SimulationApiFp(this.configuration).simulationControllerCreate(createSimulationDto, options).then((request)=>request(this.axios, this.basePath));
    }
    /**
     *
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     * @memberof SimulationApi
     */ simulationControllerFindAll(options) {
        return SimulationApiFp(this.configuration).simulationControllerFindAll(options).then((request)=>request(this.axios, this.basePath));
    }
    /**
     *
     * @param {number} id ID do catalogo
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     * @memberof SimulationApi
     */ simulationControllerFindOne(id, options) {
        return SimulationApiFp(this.configuration).simulationControllerFindOne(id, options).then((request)=>request(this.axios, this.basePath));
    }
    /**
     *
     * @param {number} id ID do catalogo
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     * @memberof SimulationApi
     */ simulationControllerRemove(id, options) {
        return SimulationApiFp(this.configuration).simulationControllerRemove(id, options).then((request)=>request(this.axios, this.basePath));
    }
    /**
     *
     * @param {number} id ID do catalogo
     * @param {UpdateSimulationDto} updateSimulationDto
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     * @memberof SimulationApi
     */ simulationControllerUpdate(id, updateSimulationDto, options) {
        return SimulationApiFp(this.configuration).simulationControllerUpdate(id, updateSimulationDto, options).then((request)=>request(this.axios, this.basePath));
    }
}
const TurbineApiAxiosParamCreator = function(configuration) {
    return {
        /**
         *
         * @param {CreateTurbineDto} createTurbineDto
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */ turbinesControllerCreate: (createTurbineDto, options = {})=>__awaiter(this, void 0, void 0, function*() {
                // verify required parameter 'createTurbineDto' is not null or undefined
                (0, __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$clients$2f$projeto$2d$pam$2f$dist$2f$esm$2f$common$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["assertParamExists"])('turbinesControllerCreate', 'createTurbineDto', createTurbineDto);
                const localVarPath = `/turbines`;
                // use dummy base URL string because the URL constructor only accepts absolute URLs.
                const localVarUrlObj = new URL(localVarPath, __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$clients$2f$projeto$2d$pam$2f$dist$2f$esm$2f$common$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["DUMMY_BASE_URL"]);
                let baseOptions;
                if (configuration) {
                    baseOptions = configuration.baseOptions;
                }
                const localVarRequestOptions = Object.assign(Object.assign({
                    method: 'POST'
                }, baseOptions), options);
                const localVarHeaderParameter = {};
                const localVarQueryParameter = {};
                localVarHeaderParameter['Content-Type'] = 'application/json';
                (0, __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$clients$2f$projeto$2d$pam$2f$dist$2f$esm$2f$common$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["setSearchParams"])(localVarUrlObj, localVarQueryParameter);
                let headersFromBaseOptions = baseOptions && baseOptions.headers ? baseOptions.headers : {};
                localVarRequestOptions.headers = Object.assign(Object.assign(Object.assign({}, localVarHeaderParameter), headersFromBaseOptions), options.headers);
                localVarRequestOptions.data = (0, __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$clients$2f$projeto$2d$pam$2f$dist$2f$esm$2f$common$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["serializeDataIfNeeded"])(createTurbineDto, localVarRequestOptions, configuration);
                return {
                    url: (0, __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$clients$2f$projeto$2d$pam$2f$dist$2f$esm$2f$common$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["toPathString"])(localVarUrlObj),
                    options: localVarRequestOptions
                };
            }),
        /**
         *
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */ turbinesControllerFindAll: (options = {})=>__awaiter(this, void 0, void 0, function*() {
                const localVarPath = `/turbines`;
                // use dummy base URL string because the URL constructor only accepts absolute URLs.
                const localVarUrlObj = new URL(localVarPath, __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$clients$2f$projeto$2d$pam$2f$dist$2f$esm$2f$common$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["DUMMY_BASE_URL"]);
                let baseOptions;
                if (configuration) {
                    baseOptions = configuration.baseOptions;
                }
                const localVarRequestOptions = Object.assign(Object.assign({
                    method: 'GET'
                }, baseOptions), options);
                const localVarHeaderParameter = {};
                const localVarQueryParameter = {};
                (0, __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$clients$2f$projeto$2d$pam$2f$dist$2f$esm$2f$common$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["setSearchParams"])(localVarUrlObj, localVarQueryParameter);
                let headersFromBaseOptions = baseOptions && baseOptions.headers ? baseOptions.headers : {};
                localVarRequestOptions.headers = Object.assign(Object.assign(Object.assign({}, localVarHeaderParameter), headersFromBaseOptions), options.headers);
                return {
                    url: (0, __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$clients$2f$projeto$2d$pam$2f$dist$2f$esm$2f$common$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["toPathString"])(localVarUrlObj),
                    options: localVarRequestOptions
                };
            }),
        /**
         *
         * @param {number} id ID do catalogo
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */ turbinesControllerFindOne: (id, options = {})=>__awaiter(this, void 0, void 0, function*() {
                // verify required parameter 'id' is not null or undefined
                (0, __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$clients$2f$projeto$2d$pam$2f$dist$2f$esm$2f$common$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["assertParamExists"])('turbinesControllerFindOne', 'id', id);
                const localVarPath = `/turbines/{id}`.replace(`{${"id"}}`, encodeURIComponent(String(id)));
                // use dummy base URL string because the URL constructor only accepts absolute URLs.
                const localVarUrlObj = new URL(localVarPath, __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$clients$2f$projeto$2d$pam$2f$dist$2f$esm$2f$common$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["DUMMY_BASE_URL"]);
                let baseOptions;
                if (configuration) {
                    baseOptions = configuration.baseOptions;
                }
                const localVarRequestOptions = Object.assign(Object.assign({
                    method: 'GET'
                }, baseOptions), options);
                const localVarHeaderParameter = {};
                const localVarQueryParameter = {};
                (0, __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$clients$2f$projeto$2d$pam$2f$dist$2f$esm$2f$common$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["setSearchParams"])(localVarUrlObj, localVarQueryParameter);
                let headersFromBaseOptions = baseOptions && baseOptions.headers ? baseOptions.headers : {};
                localVarRequestOptions.headers = Object.assign(Object.assign(Object.assign({}, localVarHeaderParameter), headersFromBaseOptions), options.headers);
                return {
                    url: (0, __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$clients$2f$projeto$2d$pam$2f$dist$2f$esm$2f$common$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["toPathString"])(localVarUrlObj),
                    options: localVarRequestOptions
                };
            }),
        /**
         *
         * @param {number} id ID do catalogo
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */ turbinesControllerRemove: (id, options = {})=>__awaiter(this, void 0, void 0, function*() {
                // verify required parameter 'id' is not null or undefined
                (0, __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$clients$2f$projeto$2d$pam$2f$dist$2f$esm$2f$common$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["assertParamExists"])('turbinesControllerRemove', 'id', id);
                const localVarPath = `/turbines/{id}`.replace(`{${"id"}}`, encodeURIComponent(String(id)));
                // use dummy base URL string because the URL constructor only accepts absolute URLs.
                const localVarUrlObj = new URL(localVarPath, __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$clients$2f$projeto$2d$pam$2f$dist$2f$esm$2f$common$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["DUMMY_BASE_URL"]);
                let baseOptions;
                if (configuration) {
                    baseOptions = configuration.baseOptions;
                }
                const localVarRequestOptions = Object.assign(Object.assign({
                    method: 'DELETE'
                }, baseOptions), options);
                const localVarHeaderParameter = {};
                const localVarQueryParameter = {};
                (0, __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$clients$2f$projeto$2d$pam$2f$dist$2f$esm$2f$common$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["setSearchParams"])(localVarUrlObj, localVarQueryParameter);
                let headersFromBaseOptions = baseOptions && baseOptions.headers ? baseOptions.headers : {};
                localVarRequestOptions.headers = Object.assign(Object.assign(Object.assign({}, localVarHeaderParameter), headersFromBaseOptions), options.headers);
                return {
                    url: (0, __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$clients$2f$projeto$2d$pam$2f$dist$2f$esm$2f$common$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["toPathString"])(localVarUrlObj),
                    options: localVarRequestOptions
                };
            }),
        /**
         *
         * @param {number} id ID do catalogo
         * @param {UpdateTurbineDto} updateTurbineDto
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */ turbinesControllerUpdate: (id, updateTurbineDto, options = {})=>__awaiter(this, void 0, void 0, function*() {
                // verify required parameter 'id' is not null or undefined
                (0, __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$clients$2f$projeto$2d$pam$2f$dist$2f$esm$2f$common$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["assertParamExists"])('turbinesControllerUpdate', 'id', id);
                // verify required parameter 'updateTurbineDto' is not null or undefined
                (0, __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$clients$2f$projeto$2d$pam$2f$dist$2f$esm$2f$common$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["assertParamExists"])('turbinesControllerUpdate', 'updateTurbineDto', updateTurbineDto);
                const localVarPath = `/turbines/{id}`.replace(`{${"id"}}`, encodeURIComponent(String(id)));
                // use dummy base URL string because the URL constructor only accepts absolute URLs.
                const localVarUrlObj = new URL(localVarPath, __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$clients$2f$projeto$2d$pam$2f$dist$2f$esm$2f$common$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["DUMMY_BASE_URL"]);
                let baseOptions;
                if (configuration) {
                    baseOptions = configuration.baseOptions;
                }
                const localVarRequestOptions = Object.assign(Object.assign({
                    method: 'PATCH'
                }, baseOptions), options);
                const localVarHeaderParameter = {};
                const localVarQueryParameter = {};
                localVarHeaderParameter['Content-Type'] = 'application/json';
                (0, __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$clients$2f$projeto$2d$pam$2f$dist$2f$esm$2f$common$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["setSearchParams"])(localVarUrlObj, localVarQueryParameter);
                let headersFromBaseOptions = baseOptions && baseOptions.headers ? baseOptions.headers : {};
                localVarRequestOptions.headers = Object.assign(Object.assign(Object.assign({}, localVarHeaderParameter), headersFromBaseOptions), options.headers);
                localVarRequestOptions.data = (0, __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$clients$2f$projeto$2d$pam$2f$dist$2f$esm$2f$common$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["serializeDataIfNeeded"])(updateTurbineDto, localVarRequestOptions, configuration);
                return {
                    url: (0, __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$clients$2f$projeto$2d$pam$2f$dist$2f$esm$2f$common$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["toPathString"])(localVarUrlObj),
                    options: localVarRequestOptions
                };
            })
    };
};
_c6 = TurbineApiAxiosParamCreator;
const TurbineApiFp = function(configuration) {
    const localVarAxiosParamCreator = TurbineApiAxiosParamCreator(configuration);
    return {
        /**
         *
         * @param {CreateTurbineDto} createTurbineDto
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */ turbinesControllerCreate (createTurbineDto, options) {
            var _a, _b, _c;
            return __awaiter(this, void 0, void 0, function*() {
                const localVarAxiosArgs = yield localVarAxiosParamCreator.turbinesControllerCreate(createTurbineDto, options);
                const localVarOperationServerIndex = (_a = configuration === null || configuration === void 0 ? void 0 : configuration.serverIndex) !== null && _a !== void 0 ? _a : 0;
                const localVarOperationServerBasePath = (_c = (_b = __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$clients$2f$projeto$2d$pam$2f$dist$2f$esm$2f$base$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["operationServerMap"]['TurbineApi.turbinesControllerCreate']) === null || _b === void 0 ? void 0 : _b[localVarOperationServerIndex]) === null || _c === void 0 ? void 0 : _c.url;
                return (axios, basePath)=>(0, __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$clients$2f$projeto$2d$pam$2f$dist$2f$esm$2f$common$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["createRequestFunction"])(localVarAxiosArgs, __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$clients$2f$projeto$2d$pam$2f$node_modules$2f$axios$2f$lib$2f$axios$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$clients$2f$projeto$2d$pam$2f$dist$2f$esm$2f$base$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["BASE_PATH"], configuration)(axios, localVarOperationServerBasePath || basePath);
            });
        },
        /**
         *
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */ turbinesControllerFindAll (options) {
            var _a, _b, _c;
            return __awaiter(this, void 0, void 0, function*() {
                const localVarAxiosArgs = yield localVarAxiosParamCreator.turbinesControllerFindAll(options);
                const localVarOperationServerIndex = (_a = configuration === null || configuration === void 0 ? void 0 : configuration.serverIndex) !== null && _a !== void 0 ? _a : 0;
                const localVarOperationServerBasePath = (_c = (_b = __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$clients$2f$projeto$2d$pam$2f$dist$2f$esm$2f$base$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["operationServerMap"]['TurbineApi.turbinesControllerFindAll']) === null || _b === void 0 ? void 0 : _b[localVarOperationServerIndex]) === null || _c === void 0 ? void 0 : _c.url;
                return (axios, basePath)=>(0, __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$clients$2f$projeto$2d$pam$2f$dist$2f$esm$2f$common$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["createRequestFunction"])(localVarAxiosArgs, __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$clients$2f$projeto$2d$pam$2f$node_modules$2f$axios$2f$lib$2f$axios$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$clients$2f$projeto$2d$pam$2f$dist$2f$esm$2f$base$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["BASE_PATH"], configuration)(axios, localVarOperationServerBasePath || basePath);
            });
        },
        /**
         *
         * @param {number} id ID do catalogo
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */ turbinesControllerFindOne (id, options) {
            var _a, _b, _c;
            return __awaiter(this, void 0, void 0, function*() {
                const localVarAxiosArgs = yield localVarAxiosParamCreator.turbinesControllerFindOne(id, options);
                const localVarOperationServerIndex = (_a = configuration === null || configuration === void 0 ? void 0 : configuration.serverIndex) !== null && _a !== void 0 ? _a : 0;
                const localVarOperationServerBasePath = (_c = (_b = __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$clients$2f$projeto$2d$pam$2f$dist$2f$esm$2f$base$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["operationServerMap"]['TurbineApi.turbinesControllerFindOne']) === null || _b === void 0 ? void 0 : _b[localVarOperationServerIndex]) === null || _c === void 0 ? void 0 : _c.url;
                return (axios, basePath)=>(0, __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$clients$2f$projeto$2d$pam$2f$dist$2f$esm$2f$common$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["createRequestFunction"])(localVarAxiosArgs, __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$clients$2f$projeto$2d$pam$2f$node_modules$2f$axios$2f$lib$2f$axios$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$clients$2f$projeto$2d$pam$2f$dist$2f$esm$2f$base$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["BASE_PATH"], configuration)(axios, localVarOperationServerBasePath || basePath);
            });
        },
        /**
         *
         * @param {number} id ID do catalogo
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */ turbinesControllerRemove (id, options) {
            var _a, _b, _c;
            return __awaiter(this, void 0, void 0, function*() {
                const localVarAxiosArgs = yield localVarAxiosParamCreator.turbinesControllerRemove(id, options);
                const localVarOperationServerIndex = (_a = configuration === null || configuration === void 0 ? void 0 : configuration.serverIndex) !== null && _a !== void 0 ? _a : 0;
                const localVarOperationServerBasePath = (_c = (_b = __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$clients$2f$projeto$2d$pam$2f$dist$2f$esm$2f$base$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["operationServerMap"]['TurbineApi.turbinesControllerRemove']) === null || _b === void 0 ? void 0 : _b[localVarOperationServerIndex]) === null || _c === void 0 ? void 0 : _c.url;
                return (axios, basePath)=>(0, __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$clients$2f$projeto$2d$pam$2f$dist$2f$esm$2f$common$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["createRequestFunction"])(localVarAxiosArgs, __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$clients$2f$projeto$2d$pam$2f$node_modules$2f$axios$2f$lib$2f$axios$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$clients$2f$projeto$2d$pam$2f$dist$2f$esm$2f$base$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["BASE_PATH"], configuration)(axios, localVarOperationServerBasePath || basePath);
            });
        },
        /**
         *
         * @param {number} id ID do catalogo
         * @param {UpdateTurbineDto} updateTurbineDto
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */ turbinesControllerUpdate (id, updateTurbineDto, options) {
            var _a, _b, _c;
            return __awaiter(this, void 0, void 0, function*() {
                const localVarAxiosArgs = yield localVarAxiosParamCreator.turbinesControllerUpdate(id, updateTurbineDto, options);
                const localVarOperationServerIndex = (_a = configuration === null || configuration === void 0 ? void 0 : configuration.serverIndex) !== null && _a !== void 0 ? _a : 0;
                const localVarOperationServerBasePath = (_c = (_b = __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$clients$2f$projeto$2d$pam$2f$dist$2f$esm$2f$base$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["operationServerMap"]['TurbineApi.turbinesControllerUpdate']) === null || _b === void 0 ? void 0 : _b[localVarOperationServerIndex]) === null || _c === void 0 ? void 0 : _c.url;
                return (axios, basePath)=>(0, __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$clients$2f$projeto$2d$pam$2f$dist$2f$esm$2f$common$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["createRequestFunction"])(localVarAxiosArgs, __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$clients$2f$projeto$2d$pam$2f$node_modules$2f$axios$2f$lib$2f$axios$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$clients$2f$projeto$2d$pam$2f$dist$2f$esm$2f$base$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["BASE_PATH"], configuration)(axios, localVarOperationServerBasePath || basePath);
            });
        }
    };
};
_c7 = TurbineApiFp;
const TurbineApiFactory = function(configuration, basePath, axios) {
    const localVarFp = TurbineApiFp(configuration);
    return {
        /**
         *
         * @param {CreateTurbineDto} createTurbineDto
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */ turbinesControllerCreate (createTurbineDto, options) {
            return localVarFp.turbinesControllerCreate(createTurbineDto, options).then((request)=>request(axios, basePath));
        },
        /**
         *
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */ turbinesControllerFindAll (options) {
            return localVarFp.turbinesControllerFindAll(options).then((request)=>request(axios, basePath));
        },
        /**
         *
         * @param {number} id ID do catalogo
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */ turbinesControllerFindOne (id, options) {
            return localVarFp.turbinesControllerFindOne(id, options).then((request)=>request(axios, basePath));
        },
        /**
         *
         * @param {number} id ID do catalogo
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */ turbinesControllerRemove (id, options) {
            return localVarFp.turbinesControllerRemove(id, options).then((request)=>request(axios, basePath));
        },
        /**
         *
         * @param {number} id ID do catalogo
         * @param {UpdateTurbineDto} updateTurbineDto
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */ turbinesControllerUpdate (id, updateTurbineDto, options) {
            return localVarFp.turbinesControllerUpdate(id, updateTurbineDto, options).then((request)=>request(axios, basePath));
        }
    };
};
_c8 = TurbineApiFactory;
class TurbineApi extends __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$clients$2f$projeto$2d$pam$2f$dist$2f$esm$2f$base$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["BaseAPI"] {
    /**
     *
     * @param {CreateTurbineDto} createTurbineDto
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     * @memberof TurbineApi
     */ turbinesControllerCreate(createTurbineDto, options) {
        return TurbineApiFp(this.configuration).turbinesControllerCreate(createTurbineDto, options).then((request)=>request(this.axios, this.basePath));
    }
    /**
     *
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     * @memberof TurbineApi
     */ turbinesControllerFindAll(options) {
        return TurbineApiFp(this.configuration).turbinesControllerFindAll(options).then((request)=>request(this.axios, this.basePath));
    }
    /**
     *
     * @param {number} id ID do catalogo
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     * @memberof TurbineApi
     */ turbinesControllerFindOne(id, options) {
        return TurbineApiFp(this.configuration).turbinesControllerFindOne(id, options).then((request)=>request(this.axios, this.basePath));
    }
    /**
     *
     * @param {number} id ID do catalogo
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     * @memberof TurbineApi
     */ turbinesControllerRemove(id, options) {
        return TurbineApiFp(this.configuration).turbinesControllerRemove(id, options).then((request)=>request(this.axios, this.basePath));
    }
    /**
     *
     * @param {number} id ID do catalogo
     * @param {UpdateTurbineDto} updateTurbineDto
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     * @memberof TurbineApi
     */ turbinesControllerUpdate(id, updateTurbineDto, options) {
        return TurbineApiFp(this.configuration).turbinesControllerUpdate(id, updateTurbineDto, options).then((request)=>request(this.axios, this.basePath));
    }
}
const TurbinesCatalogApiAxiosParamCreator = function(configuration) {
    return {
        /**
         *
         * @param {CreateTurbineCatalogDto} createTurbineCatalogDto
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */ turbineCatalogControllerCreate: (createTurbineCatalogDto, options = {})=>__awaiter(this, void 0, void 0, function*() {
                // verify required parameter 'createTurbineCatalogDto' is not null or undefined
                (0, __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$clients$2f$projeto$2d$pam$2f$dist$2f$esm$2f$common$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["assertParamExists"])('turbineCatalogControllerCreate', 'createTurbineCatalogDto', createTurbineCatalogDto);
                const localVarPath = `/turbine-catalog`;
                // use dummy base URL string because the URL constructor only accepts absolute URLs.
                const localVarUrlObj = new URL(localVarPath, __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$clients$2f$projeto$2d$pam$2f$dist$2f$esm$2f$common$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["DUMMY_BASE_URL"]);
                let baseOptions;
                if (configuration) {
                    baseOptions = configuration.baseOptions;
                }
                const localVarRequestOptions = Object.assign(Object.assign({
                    method: 'POST'
                }, baseOptions), options);
                const localVarHeaderParameter = {};
                const localVarQueryParameter = {};
                localVarHeaderParameter['Content-Type'] = 'application/json';
                (0, __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$clients$2f$projeto$2d$pam$2f$dist$2f$esm$2f$common$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["setSearchParams"])(localVarUrlObj, localVarQueryParameter);
                let headersFromBaseOptions = baseOptions && baseOptions.headers ? baseOptions.headers : {};
                localVarRequestOptions.headers = Object.assign(Object.assign(Object.assign({}, localVarHeaderParameter), headersFromBaseOptions), options.headers);
                localVarRequestOptions.data = (0, __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$clients$2f$projeto$2d$pam$2f$dist$2f$esm$2f$common$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["serializeDataIfNeeded"])(createTurbineCatalogDto, localVarRequestOptions, configuration);
                return {
                    url: (0, __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$clients$2f$projeto$2d$pam$2f$dist$2f$esm$2f$common$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["toPathString"])(localVarUrlObj),
                    options: localVarRequestOptions
                };
            }),
        /**
         *
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */ turbineCatalogControllerFindAll: (options = {})=>__awaiter(this, void 0, void 0, function*() {
                const localVarPath = `/turbine-catalog`;
                // use dummy base URL string because the URL constructor only accepts absolute URLs.
                const localVarUrlObj = new URL(localVarPath, __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$clients$2f$projeto$2d$pam$2f$dist$2f$esm$2f$common$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["DUMMY_BASE_URL"]);
                let baseOptions;
                if (configuration) {
                    baseOptions = configuration.baseOptions;
                }
                const localVarRequestOptions = Object.assign(Object.assign({
                    method: 'GET'
                }, baseOptions), options);
                const localVarHeaderParameter = {};
                const localVarQueryParameter = {};
                (0, __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$clients$2f$projeto$2d$pam$2f$dist$2f$esm$2f$common$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["setSearchParams"])(localVarUrlObj, localVarQueryParameter);
                let headersFromBaseOptions = baseOptions && baseOptions.headers ? baseOptions.headers : {};
                localVarRequestOptions.headers = Object.assign(Object.assign(Object.assign({}, localVarHeaderParameter), headersFromBaseOptions), options.headers);
                return {
                    url: (0, __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$clients$2f$projeto$2d$pam$2f$dist$2f$esm$2f$common$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["toPathString"])(localVarUrlObj),
                    options: localVarRequestOptions
                };
            }),
        /**
         *
         * @param {number} id ID do catalogo
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */ turbineCatalogControllerFindOne: (id, options = {})=>__awaiter(this, void 0, void 0, function*() {
                // verify required parameter 'id' is not null or undefined
                (0, __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$clients$2f$projeto$2d$pam$2f$dist$2f$esm$2f$common$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["assertParamExists"])('turbineCatalogControllerFindOne', 'id', id);
                const localVarPath = `/turbine-catalog/{id}`.replace(`{${"id"}}`, encodeURIComponent(String(id)));
                // use dummy base URL string because the URL constructor only accepts absolute URLs.
                const localVarUrlObj = new URL(localVarPath, __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$clients$2f$projeto$2d$pam$2f$dist$2f$esm$2f$common$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["DUMMY_BASE_URL"]);
                let baseOptions;
                if (configuration) {
                    baseOptions = configuration.baseOptions;
                }
                const localVarRequestOptions = Object.assign(Object.assign({
                    method: 'GET'
                }, baseOptions), options);
                const localVarHeaderParameter = {};
                const localVarQueryParameter = {};
                (0, __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$clients$2f$projeto$2d$pam$2f$dist$2f$esm$2f$common$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["setSearchParams"])(localVarUrlObj, localVarQueryParameter);
                let headersFromBaseOptions = baseOptions && baseOptions.headers ? baseOptions.headers : {};
                localVarRequestOptions.headers = Object.assign(Object.assign(Object.assign({}, localVarHeaderParameter), headersFromBaseOptions), options.headers);
                return {
                    url: (0, __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$clients$2f$projeto$2d$pam$2f$dist$2f$esm$2f$common$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["toPathString"])(localVarUrlObj),
                    options: localVarRequestOptions
                };
            }),
        /**
         *
         * @param {number} id ID do catalogo
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */ turbineCatalogControllerRemove: (id, options = {})=>__awaiter(this, void 0, void 0, function*() {
                // verify required parameter 'id' is not null or undefined
                (0, __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$clients$2f$projeto$2d$pam$2f$dist$2f$esm$2f$common$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["assertParamExists"])('turbineCatalogControllerRemove', 'id', id);
                const localVarPath = `/turbine-catalog/{id}`.replace(`{${"id"}}`, encodeURIComponent(String(id)));
                // use dummy base URL string because the URL constructor only accepts absolute URLs.
                const localVarUrlObj = new URL(localVarPath, __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$clients$2f$projeto$2d$pam$2f$dist$2f$esm$2f$common$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["DUMMY_BASE_URL"]);
                let baseOptions;
                if (configuration) {
                    baseOptions = configuration.baseOptions;
                }
                const localVarRequestOptions = Object.assign(Object.assign({
                    method: 'DELETE'
                }, baseOptions), options);
                const localVarHeaderParameter = {};
                const localVarQueryParameter = {};
                (0, __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$clients$2f$projeto$2d$pam$2f$dist$2f$esm$2f$common$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["setSearchParams"])(localVarUrlObj, localVarQueryParameter);
                let headersFromBaseOptions = baseOptions && baseOptions.headers ? baseOptions.headers : {};
                localVarRequestOptions.headers = Object.assign(Object.assign(Object.assign({}, localVarHeaderParameter), headersFromBaseOptions), options.headers);
                return {
                    url: (0, __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$clients$2f$projeto$2d$pam$2f$dist$2f$esm$2f$common$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["toPathString"])(localVarUrlObj),
                    options: localVarRequestOptions
                };
            }),
        /**
         *
         * @param {number} id ID do catalogo
         * @param {UpdateTurbineCatalogDto} updateTurbineCatalogDto
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */ turbineCatalogControllerUpdate: (id, updateTurbineCatalogDto, options = {})=>__awaiter(this, void 0, void 0, function*() {
                // verify required parameter 'id' is not null or undefined
                (0, __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$clients$2f$projeto$2d$pam$2f$dist$2f$esm$2f$common$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["assertParamExists"])('turbineCatalogControllerUpdate', 'id', id);
                // verify required parameter 'updateTurbineCatalogDto' is not null or undefined
                (0, __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$clients$2f$projeto$2d$pam$2f$dist$2f$esm$2f$common$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["assertParamExists"])('turbineCatalogControllerUpdate', 'updateTurbineCatalogDto', updateTurbineCatalogDto);
                const localVarPath = `/turbine-catalog/{id}`.replace(`{${"id"}}`, encodeURIComponent(String(id)));
                // use dummy base URL string because the URL constructor only accepts absolute URLs.
                const localVarUrlObj = new URL(localVarPath, __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$clients$2f$projeto$2d$pam$2f$dist$2f$esm$2f$common$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["DUMMY_BASE_URL"]);
                let baseOptions;
                if (configuration) {
                    baseOptions = configuration.baseOptions;
                }
                const localVarRequestOptions = Object.assign(Object.assign({
                    method: 'PATCH'
                }, baseOptions), options);
                const localVarHeaderParameter = {};
                const localVarQueryParameter = {};
                localVarHeaderParameter['Content-Type'] = 'application/json';
                (0, __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$clients$2f$projeto$2d$pam$2f$dist$2f$esm$2f$common$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["setSearchParams"])(localVarUrlObj, localVarQueryParameter);
                let headersFromBaseOptions = baseOptions && baseOptions.headers ? baseOptions.headers : {};
                localVarRequestOptions.headers = Object.assign(Object.assign(Object.assign({}, localVarHeaderParameter), headersFromBaseOptions), options.headers);
                localVarRequestOptions.data = (0, __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$clients$2f$projeto$2d$pam$2f$dist$2f$esm$2f$common$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["serializeDataIfNeeded"])(updateTurbineCatalogDto, localVarRequestOptions, configuration);
                return {
                    url: (0, __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$clients$2f$projeto$2d$pam$2f$dist$2f$esm$2f$common$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["toPathString"])(localVarUrlObj),
                    options: localVarRequestOptions
                };
            })
    };
};
_c9 = TurbinesCatalogApiAxiosParamCreator;
const TurbinesCatalogApiFp = function(configuration) {
    const localVarAxiosParamCreator = TurbinesCatalogApiAxiosParamCreator(configuration);
    return {
        /**
         *
         * @param {CreateTurbineCatalogDto} createTurbineCatalogDto
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */ turbineCatalogControllerCreate (createTurbineCatalogDto, options) {
            var _a, _b, _c;
            return __awaiter(this, void 0, void 0, function*() {
                const localVarAxiosArgs = yield localVarAxiosParamCreator.turbineCatalogControllerCreate(createTurbineCatalogDto, options);
                const localVarOperationServerIndex = (_a = configuration === null || configuration === void 0 ? void 0 : configuration.serverIndex) !== null && _a !== void 0 ? _a : 0;
                const localVarOperationServerBasePath = (_c = (_b = __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$clients$2f$projeto$2d$pam$2f$dist$2f$esm$2f$base$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["operationServerMap"]['TurbinesCatalogApi.turbineCatalogControllerCreate']) === null || _b === void 0 ? void 0 : _b[localVarOperationServerIndex]) === null || _c === void 0 ? void 0 : _c.url;
                return (axios, basePath)=>(0, __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$clients$2f$projeto$2d$pam$2f$dist$2f$esm$2f$common$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["createRequestFunction"])(localVarAxiosArgs, __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$clients$2f$projeto$2d$pam$2f$node_modules$2f$axios$2f$lib$2f$axios$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$clients$2f$projeto$2d$pam$2f$dist$2f$esm$2f$base$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["BASE_PATH"], configuration)(axios, localVarOperationServerBasePath || basePath);
            });
        },
        /**
         *
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */ turbineCatalogControllerFindAll (options) {
            var _a, _b, _c;
            return __awaiter(this, void 0, void 0, function*() {
                const localVarAxiosArgs = yield localVarAxiosParamCreator.turbineCatalogControllerFindAll(options);
                const localVarOperationServerIndex = (_a = configuration === null || configuration === void 0 ? void 0 : configuration.serverIndex) !== null && _a !== void 0 ? _a : 0;
                const localVarOperationServerBasePath = (_c = (_b = __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$clients$2f$projeto$2d$pam$2f$dist$2f$esm$2f$base$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["operationServerMap"]['TurbinesCatalogApi.turbineCatalogControllerFindAll']) === null || _b === void 0 ? void 0 : _b[localVarOperationServerIndex]) === null || _c === void 0 ? void 0 : _c.url;
                return (axios, basePath)=>(0, __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$clients$2f$projeto$2d$pam$2f$dist$2f$esm$2f$common$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["createRequestFunction"])(localVarAxiosArgs, __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$clients$2f$projeto$2d$pam$2f$node_modules$2f$axios$2f$lib$2f$axios$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$clients$2f$projeto$2d$pam$2f$dist$2f$esm$2f$base$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["BASE_PATH"], configuration)(axios, localVarOperationServerBasePath || basePath);
            });
        },
        /**
         *
         * @param {number} id ID do catalogo
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */ turbineCatalogControllerFindOne (id, options) {
            var _a, _b, _c;
            return __awaiter(this, void 0, void 0, function*() {
                const localVarAxiosArgs = yield localVarAxiosParamCreator.turbineCatalogControllerFindOne(id, options);
                const localVarOperationServerIndex = (_a = configuration === null || configuration === void 0 ? void 0 : configuration.serverIndex) !== null && _a !== void 0 ? _a : 0;
                const localVarOperationServerBasePath = (_c = (_b = __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$clients$2f$projeto$2d$pam$2f$dist$2f$esm$2f$base$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["operationServerMap"]['TurbinesCatalogApi.turbineCatalogControllerFindOne']) === null || _b === void 0 ? void 0 : _b[localVarOperationServerIndex]) === null || _c === void 0 ? void 0 : _c.url;
                return (axios, basePath)=>(0, __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$clients$2f$projeto$2d$pam$2f$dist$2f$esm$2f$common$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["createRequestFunction"])(localVarAxiosArgs, __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$clients$2f$projeto$2d$pam$2f$node_modules$2f$axios$2f$lib$2f$axios$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$clients$2f$projeto$2d$pam$2f$dist$2f$esm$2f$base$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["BASE_PATH"], configuration)(axios, localVarOperationServerBasePath || basePath);
            });
        },
        /**
         *
         * @param {number} id ID do catalogo
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */ turbineCatalogControllerRemove (id, options) {
            var _a, _b, _c;
            return __awaiter(this, void 0, void 0, function*() {
                const localVarAxiosArgs = yield localVarAxiosParamCreator.turbineCatalogControllerRemove(id, options);
                const localVarOperationServerIndex = (_a = configuration === null || configuration === void 0 ? void 0 : configuration.serverIndex) !== null && _a !== void 0 ? _a : 0;
                const localVarOperationServerBasePath = (_c = (_b = __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$clients$2f$projeto$2d$pam$2f$dist$2f$esm$2f$base$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["operationServerMap"]['TurbinesCatalogApi.turbineCatalogControllerRemove']) === null || _b === void 0 ? void 0 : _b[localVarOperationServerIndex]) === null || _c === void 0 ? void 0 : _c.url;
                return (axios, basePath)=>(0, __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$clients$2f$projeto$2d$pam$2f$dist$2f$esm$2f$common$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["createRequestFunction"])(localVarAxiosArgs, __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$clients$2f$projeto$2d$pam$2f$node_modules$2f$axios$2f$lib$2f$axios$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$clients$2f$projeto$2d$pam$2f$dist$2f$esm$2f$base$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["BASE_PATH"], configuration)(axios, localVarOperationServerBasePath || basePath);
            });
        },
        /**
         *
         * @param {number} id ID do catalogo
         * @param {UpdateTurbineCatalogDto} updateTurbineCatalogDto
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */ turbineCatalogControllerUpdate (id, updateTurbineCatalogDto, options) {
            var _a, _b, _c;
            return __awaiter(this, void 0, void 0, function*() {
                const localVarAxiosArgs = yield localVarAxiosParamCreator.turbineCatalogControllerUpdate(id, updateTurbineCatalogDto, options);
                const localVarOperationServerIndex = (_a = configuration === null || configuration === void 0 ? void 0 : configuration.serverIndex) !== null && _a !== void 0 ? _a : 0;
                const localVarOperationServerBasePath = (_c = (_b = __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$clients$2f$projeto$2d$pam$2f$dist$2f$esm$2f$base$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["operationServerMap"]['TurbinesCatalogApi.turbineCatalogControllerUpdate']) === null || _b === void 0 ? void 0 : _b[localVarOperationServerIndex]) === null || _c === void 0 ? void 0 : _c.url;
                return (axios, basePath)=>(0, __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$clients$2f$projeto$2d$pam$2f$dist$2f$esm$2f$common$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["createRequestFunction"])(localVarAxiosArgs, __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$clients$2f$projeto$2d$pam$2f$node_modules$2f$axios$2f$lib$2f$axios$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$clients$2f$projeto$2d$pam$2f$dist$2f$esm$2f$base$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["BASE_PATH"], configuration)(axios, localVarOperationServerBasePath || basePath);
            });
        }
    };
};
_c10 = TurbinesCatalogApiFp;
const TurbinesCatalogApiFactory = function(configuration, basePath, axios) {
    const localVarFp = TurbinesCatalogApiFp(configuration);
    return {
        /**
         *
         * @param {CreateTurbineCatalogDto} createTurbineCatalogDto
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */ turbineCatalogControllerCreate (createTurbineCatalogDto, options) {
            return localVarFp.turbineCatalogControllerCreate(createTurbineCatalogDto, options).then((request)=>request(axios, basePath));
        },
        /**
         *
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */ turbineCatalogControllerFindAll (options) {
            return localVarFp.turbineCatalogControllerFindAll(options).then((request)=>request(axios, basePath));
        },
        /**
         *
         * @param {number} id ID do catalogo
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */ turbineCatalogControllerFindOne (id, options) {
            return localVarFp.turbineCatalogControllerFindOne(id, options).then((request)=>request(axios, basePath));
        },
        /**
         *
         * @param {number} id ID do catalogo
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */ turbineCatalogControllerRemove (id, options) {
            return localVarFp.turbineCatalogControllerRemove(id, options).then((request)=>request(axios, basePath));
        },
        /**
         *
         * @param {number} id ID do catalogo
         * @param {UpdateTurbineCatalogDto} updateTurbineCatalogDto
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */ turbineCatalogControllerUpdate (id, updateTurbineCatalogDto, options) {
            return localVarFp.turbineCatalogControllerUpdate(id, updateTurbineCatalogDto, options).then((request)=>request(axios, basePath));
        }
    };
};
_c11 = TurbinesCatalogApiFactory;
class TurbinesCatalogApi extends __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$clients$2f$projeto$2d$pam$2f$dist$2f$esm$2f$base$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["BaseAPI"] {
    /**
     *
     * @param {CreateTurbineCatalogDto} createTurbineCatalogDto
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     * @memberof TurbinesCatalogApi
     */ turbineCatalogControllerCreate(createTurbineCatalogDto, options) {
        return TurbinesCatalogApiFp(this.configuration).turbineCatalogControllerCreate(createTurbineCatalogDto, options).then((request)=>request(this.axios, this.basePath));
    }
    /**
     *
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     * @memberof TurbinesCatalogApi
     */ turbineCatalogControllerFindAll(options) {
        return TurbinesCatalogApiFp(this.configuration).turbineCatalogControllerFindAll(options).then((request)=>request(this.axios, this.basePath));
    }
    /**
     *
     * @param {number} id ID do catalogo
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     * @memberof TurbinesCatalogApi
     */ turbineCatalogControllerFindOne(id, options) {
        return TurbinesCatalogApiFp(this.configuration).turbineCatalogControllerFindOne(id, options).then((request)=>request(this.axios, this.basePath));
    }
    /**
     *
     * @param {number} id ID do catalogo
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     * @memberof TurbinesCatalogApi
     */ turbineCatalogControllerRemove(id, options) {
        return TurbinesCatalogApiFp(this.configuration).turbineCatalogControllerRemove(id, options).then((request)=>request(this.axios, this.basePath));
    }
    /**
     *
     * @param {number} id ID do catalogo
     * @param {UpdateTurbineCatalogDto} updateTurbineCatalogDto
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     * @memberof TurbinesCatalogApi
     */ turbineCatalogControllerUpdate(id, updateTurbineCatalogDto, options) {
        return TurbinesCatalogApiFp(this.configuration).turbineCatalogControllerUpdate(id, updateTurbineCatalogDto, options).then((request)=>request(this.axios, this.basePath));
    }
}
var _c, _c1, _c2, _c3, _c4, _c5, _c6, _c7, _c8, _c9, _c10, _c11;
__turbopack_context__.k.register(_c, "AppApiAxiosParamCreator");
__turbopack_context__.k.register(_c1, "AppApiFp");
__turbopack_context__.k.register(_c2, "AppApiFactory");
__turbopack_context__.k.register(_c3, "SimulationApiAxiosParamCreator");
__turbopack_context__.k.register(_c4, "SimulationApiFp");
__turbopack_context__.k.register(_c5, "SimulationApiFactory");
__turbopack_context__.k.register(_c6, "TurbineApiAxiosParamCreator");
__turbopack_context__.k.register(_c7, "TurbineApiFp");
__turbopack_context__.k.register(_c8, "TurbineApiFactory");
__turbopack_context__.k.register(_c9, "TurbinesCatalogApiAxiosParamCreator");
__turbopack_context__.k.register(_c10, "TurbinesCatalogApiFp");
__turbopack_context__.k.register(_c11, "TurbinesCatalogApiFactory");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/frontend/clients/projeto-pam/dist/esm/base.js [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "BASE_PATH",
    ()=>BASE_PATH,
    "BaseAPI",
    ()=>BaseAPI,
    "COLLECTION_FORMATS",
    ()=>COLLECTION_FORMATS,
    "RequiredError",
    ()=>RequiredError,
    "operationServerMap",
    ()=>operationServerMap
]);
/* tslint:disable */ /* eslint-disable */ /**
 * PAM
 * Documentação e testes interativos dos endpoints de Simulação, Turbinas e Catálogo
 *
 * The version of the OpenAPI document: 1.0
 *
 *
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 * Do not edit the class manually.
 */ var __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$clients$2f$projeto$2d$pam$2f$node_modules$2f$axios$2f$lib$2f$axios$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/frontend/clients/projeto-pam/node_modules/axios/lib/axios.js [app-client] (ecmascript)");
;
const BASE_PATH = "http://localhost".replace(/\/+$/, "");
const COLLECTION_FORMATS = {
    csv: ",",
    ssv: " ",
    tsv: "\t",
    pipes: "|"
};
class BaseAPI {
    constructor(configuration, basePath = BASE_PATH, axios = __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$clients$2f$projeto$2d$pam$2f$node_modules$2f$axios$2f$lib$2f$axios$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"]){
        var _a;
        this.basePath = basePath;
        this.axios = axios;
        if (configuration) {
            this.configuration = configuration;
            this.basePath = (_a = configuration.basePath) !== null && _a !== void 0 ? _a : basePath;
        }
    }
}
;
class RequiredError extends Error {
    constructor(field, msg){
        super(msg);
        this.field = field;
        this.name = "RequiredError";
    }
}
const operationServerMap = {};
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/frontend/clients/projeto-pam/dist/esm/common.js [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "DUMMY_BASE_URL",
    ()=>DUMMY_BASE_URL,
    "assertParamExists",
    ()=>assertParamExists,
    "createRequestFunction",
    ()=>createRequestFunction,
    "serializeDataIfNeeded",
    ()=>serializeDataIfNeeded,
    "setApiKeyToObject",
    ()=>setApiKeyToObject,
    "setBasicAuthToObject",
    ()=>setBasicAuthToObject,
    "setBearerAuthToObject",
    ()=>setBearerAuthToObject,
    "setOAuthToObject",
    ()=>setOAuthToObject,
    "setSearchParams",
    ()=>setSearchParams,
    "toPathString",
    ()=>toPathString
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$clients$2f$projeto$2d$pam$2f$dist$2f$esm$2f$base$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/frontend/clients/projeto-pam/dist/esm/base.js [app-client] (ecmascript)");
/* tslint:disable */ /* eslint-disable */ /**
 * PAM
 * Documentação e testes interativos dos endpoints de Simulação, Turbinas e Catálogo
 *
 * The version of the OpenAPI document: 1.0
 *
 *
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 * Do not edit the class manually.
 */ var __awaiter = ("TURBOPACK compile-time value", void 0) && ("TURBOPACK compile-time value", void 0).__awaiter || function(thisArg, _arguments, P, generator) {
    function adopt(value) {
        return value instanceof P ? value : new P(function(resolve) {
            resolve(value);
        });
    }
    return new (P || (P = Promise))(function(resolve, reject) {
        function fulfilled(value) {
            try {
                step(generator.next(value));
            } catch (e) {
                reject(e);
            }
        }
        function rejected(value) {
            try {
                step(generator["throw"](value));
            } catch (e) {
                reject(e);
            }
        }
        function step(result) {
            result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected);
        }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
;
const DUMMY_BASE_URL = 'https://example.com';
const assertParamExists = function(functionName, paramName, paramValue) {
    if (paramValue === null || paramValue === undefined) {
        throw new __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$clients$2f$projeto$2d$pam$2f$dist$2f$esm$2f$base$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["RequiredError"](paramName, `Required parameter ${paramName} was null or undefined when calling ${functionName}.`);
    }
};
const setApiKeyToObject = function(object, keyParamName, configuration) {
    return __awaiter(this, void 0, void 0, function*() {
        if (configuration && configuration.apiKey) {
            const localVarApiKeyValue = typeof configuration.apiKey === 'function' ? yield configuration.apiKey(keyParamName) : yield configuration.apiKey;
            object[keyParamName] = localVarApiKeyValue;
        }
    });
};
const setBasicAuthToObject = function(object, configuration) {
    if (configuration && (configuration.username || configuration.password)) {
        object["auth"] = {
            username: configuration.username,
            password: configuration.password
        };
    }
};
const setBearerAuthToObject = function(object, configuration) {
    return __awaiter(this, void 0, void 0, function*() {
        if (configuration && configuration.accessToken) {
            const accessToken = typeof configuration.accessToken === 'function' ? yield configuration.accessToken() : yield configuration.accessToken;
            object["Authorization"] = "Bearer " + accessToken;
        }
    });
};
const setOAuthToObject = function(object, name, scopes, configuration) {
    return __awaiter(this, void 0, void 0, function*() {
        if (configuration && configuration.accessToken) {
            const localVarAccessTokenValue = typeof configuration.accessToken === 'function' ? yield configuration.accessToken(name, scopes) : yield configuration.accessToken;
            object["Authorization"] = "Bearer " + localVarAccessTokenValue;
        }
    });
};
function setFlattenedQueryParams(urlSearchParams, parameter, key = "") {
    if (parameter == null) return;
    if (typeof parameter === "object") {
        if (Array.isArray(parameter)) {
            parameter.forEach((item)=>setFlattenedQueryParams(urlSearchParams, item, key));
        } else {
            Object.keys(parameter).forEach((currentKey)=>setFlattenedQueryParams(urlSearchParams, parameter[currentKey], `${key}${key !== '' ? '.' : ''}${currentKey}`));
        }
    } else {
        if (urlSearchParams.has(key)) {
            urlSearchParams.append(key, parameter);
        } else {
            urlSearchParams.set(key, parameter);
        }
    }
}
const setSearchParams = function(url, ...objects) {
    const searchParams = new URLSearchParams(url.search);
    setFlattenedQueryParams(searchParams, objects);
    url.search = searchParams.toString();
};
const serializeDataIfNeeded = function(value, requestOptions, configuration) {
    const nonString = typeof value !== 'string';
    const needsSerialization = nonString && configuration && configuration.isJsonMime ? configuration.isJsonMime(requestOptions.headers['Content-Type']) : nonString;
    return needsSerialization ? JSON.stringify(value !== undefined ? value : {}) : value || "";
};
const toPathString = function(url) {
    return url.pathname + url.search + url.hash;
};
const createRequestFunction = function(axiosArgs, globalAxios, BASE_PATH, configuration) {
    return (axios = globalAxios, basePath = BASE_PATH)=>{
        var _a;
        const axiosRequestArgs = Object.assign(Object.assign({}, axiosArgs.options), {
            url: (axios.defaults.baseURL ? '' : (_a = configuration === null || configuration === void 0 ? void 0 : configuration.basePath) !== null && _a !== void 0 ? _a : basePath) + axiosArgs.url
        });
        return axios.request(axiosRequestArgs);
    };
};
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/frontend/clients/projeto-pam/dist/esm/configuration.js [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

/* tslint:disable */ /* eslint-disable */ /**
 * PAM
 * Documentação e testes interativos dos endpoints de Simulação, Turbinas e Catálogo
 *
 * The version of the OpenAPI document: 1.0
 *
 *
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 * Do not edit the class manually.
 */ __turbopack_context__.s([
    "Configuration",
    ()=>Configuration
]);
class Configuration {
    constructor(param = {}){
        this.apiKey = param.apiKey;
        this.username = param.username;
        this.password = param.password;
        this.accessToken = param.accessToken;
        this.basePath = param.basePath;
        this.serverIndex = param.serverIndex;
        this.baseOptions = param.baseOptions;
        this.formDataCtor = param.formDataCtor;
    }
    /**
     * Check if the given MIME is a JSON MIME.
     * JSON MIME examples:
     *   application/json
     *   application/json; charset=UTF8
     *   APPLICATION/JSON
     *   application/vnd.company+json
     * @param mime - MIME (Multipurpose Internet Mail Extensions)
     * @return True if the given MIME is JSON, false otherwise.
     */ isJsonMime(mime) {
        const jsonMime = new RegExp('^(application\/json|[^;/ \t]+\/[^;/ \t]+[+]json)[ \t]*(;.*)?$', 'i');
        return mime !== null && (jsonMime.test(mime) || mime.toLowerCase() === 'application/json-patch+json');
    }
}
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/frontend/hooks/use-simulation.ts [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "useSimulation",
    ()=>useSimulation
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$lib$2f$api$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/frontend/lib/api.ts [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f40$tanstack$2f$react$2d$query$2f$build$2f$modern$2f$useMutation$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/frontend/node_modules/@tanstack/react-query/build/modern/useMutation.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f40$tanstack$2f$react$2d$query$2f$build$2f$modern$2f$useQuery$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/frontend/node_modules/@tanstack/react-query/build/modern/useQuery.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f40$tanstack$2f$react$2d$query$2f$build$2f$modern$2f$QueryClientProvider$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/frontend/node_modules/@tanstack/react-query/build/modern/QueryClientProvider.js [app-client] (ecmascript)");
var _s = __turbopack_context__.k.signature();
"use client";
;
;
function useSimulation() {
    _s();
    const queryClient = (0, __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f40$tanstack$2f$react$2d$query$2f$build$2f$modern$2f$QueryClientProvider$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useQueryClient"])();
    const refreshData = async ()=>{
        await Promise.all([
            queryClient.invalidateQueries({
                queryKey: [
                    "simulation"
                ]
            }),
            queryClient.invalidateQueries({
                queryKey: [
                    "turbine"
                ]
            })
        ]);
    };
    const query = (0, __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f40$tanstack$2f$react$2d$query$2f$build$2f$modern$2f$useQuery$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useQuery"])({
        queryKey: [
            "simulation"
        ],
        queryFn: {
            "useSimulation.useQuery[query]": async ()=>{
                const response = await __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$lib$2f$api$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["simulationApi"].simulationControllerFindAll();
                return response.data;
            }
        }["useSimulation.useQuery[query]"]
    });
    const createMutation = (0, __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f40$tanstack$2f$react$2d$query$2f$build$2f$modern$2f$useMutation$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useMutation"])({
        mutationFn: {
            "useSimulation.useMutation[createMutation]": async (payload)=>{
                const response = await __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$lib$2f$api$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["simulationApi"].simulationControllerCreate(payload);
                return response.data;
            }
        }["useSimulation.useMutation[createMutation]"],
        onSuccess: refreshData
    });
    const updateMutation = (0, __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f40$tanstack$2f$react$2d$query$2f$build$2f$modern$2f$useMutation$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useMutation"])({
        mutationFn: {
            "useSimulation.useMutation[updateMutation]": async ({ id, payload })=>{
                const response = await __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$lib$2f$api$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["simulationApi"].simulationControllerUpdate(id, payload);
                return response.data;
            }
        }["useSimulation.useMutation[updateMutation]"],
        onSuccess: refreshData
    });
    const deleteMutation = (0, __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f40$tanstack$2f$react$2d$query$2f$build$2f$modern$2f$useMutation$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useMutation"])({
        mutationFn: {
            "useSimulation.useMutation[deleteMutation]": async (id)=>{
                const response = await __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$lib$2f$api$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["simulationApi"].simulationControllerRemove(id);
                return response.data;
            }
        }["useSimulation.useMutation[deleteMutation]"],
        onSuccess: refreshData
    });
    return {
        ...query,
        createSimulation: createMutation.mutateAsync,
        updateSimulation: updateMutation.mutateAsync,
        deleteSimulation: deleteMutation.mutateAsync,
        isCreating: createMutation.isPending,
        isUpdating: updateMutation.isPending,
        isDeleting: deleteMutation.isPending
    };
}
_s(useSimulation, "Ylzv7vMtIXAuJgLQWBSdy4Cb2h8=", false, function() {
    return [
        __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f40$tanstack$2f$react$2d$query$2f$build$2f$modern$2f$QueryClientProvider$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useQueryClient"],
        __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f40$tanstack$2f$react$2d$query$2f$build$2f$modern$2f$useQuery$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useQuery"],
        __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f40$tanstack$2f$react$2d$query$2f$build$2f$modern$2f$useMutation$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useMutation"],
        __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f40$tanstack$2f$react$2d$query$2f$build$2f$modern$2f$useMutation$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useMutation"],
        __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f40$tanstack$2f$react$2d$query$2f$build$2f$modern$2f$useMutation$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useMutation"]
    ];
});
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/frontend/hooks/use-turbine-catalog.ts [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "useTurbineCatalog",
    ()=>useTurbineCatalog
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$lib$2f$api$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/frontend/lib/api.ts [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f40$tanstack$2f$react$2d$query$2f$build$2f$modern$2f$useMutation$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/frontend/node_modules/@tanstack/react-query/build/modern/useMutation.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f40$tanstack$2f$react$2d$query$2f$build$2f$modern$2f$useQuery$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/frontend/node_modules/@tanstack/react-query/build/modern/useQuery.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f40$tanstack$2f$react$2d$query$2f$build$2f$modern$2f$QueryClientProvider$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/frontend/node_modules/@tanstack/react-query/build/modern/QueryClientProvider.js [app-client] (ecmascript)");
var _s = __turbopack_context__.k.signature();
"use client";
;
;
function useTurbineCatalog() {
    _s();
    const queryClient = (0, __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f40$tanstack$2f$react$2d$query$2f$build$2f$modern$2f$QueryClientProvider$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useQueryClient"])();
    const refreshCatalog = ()=>queryClient.invalidateQueries({
            queryKey: [
                "turbine-catalog"
            ]
        });
    const query = (0, __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f40$tanstack$2f$react$2d$query$2f$build$2f$modern$2f$useQuery$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useQuery"])({
        queryKey: [
            "turbine-catalog"
        ],
        queryFn: {
            "useTurbineCatalog.useQuery[query]": async ()=>{
                const response = await __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$lib$2f$api$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["turbineCatalogApi"].turbineCatalogControllerFindAll();
                return response.data;
            }
        }["useTurbineCatalog.useQuery[query]"]
    });
    const createMutation = (0, __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f40$tanstack$2f$react$2d$query$2f$build$2f$modern$2f$useMutation$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useMutation"])({
        mutationFn: {
            "useTurbineCatalog.useMutation[createMutation]": async (payload)=>{
                const response = await __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$lib$2f$api$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["turbineCatalogApi"].turbineCatalogControllerCreate(payload);
                return response.data;
            }
        }["useTurbineCatalog.useMutation[createMutation]"],
        onSuccess: refreshCatalog
    });
    const updateMutation = (0, __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f40$tanstack$2f$react$2d$query$2f$build$2f$modern$2f$useMutation$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useMutation"])({
        mutationFn: {
            "useTurbineCatalog.useMutation[updateMutation]": async ({ id, payload })=>{
                const response = await __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$lib$2f$api$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["turbineCatalogApi"].turbineCatalogControllerUpdate(id, payload);
                return response.data;
            }
        }["useTurbineCatalog.useMutation[updateMutation]"],
        onSuccess: refreshCatalog
    });
    const deleteMutation = (0, __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f40$tanstack$2f$react$2d$query$2f$build$2f$modern$2f$useMutation$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useMutation"])({
        mutationFn: {
            "useTurbineCatalog.useMutation[deleteMutation]": async (id)=>{
                const response = await __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$lib$2f$api$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["turbineCatalogApi"].turbineCatalogControllerRemove(id);
                return response.data;
            }
        }["useTurbineCatalog.useMutation[deleteMutation]"],
        onSuccess: refreshCatalog
    });
    return {
        ...query,
        createTurbineCatalog: createMutation.mutateAsync,
        updateTurbineCatalog: updateMutation.mutateAsync,
        deleteTurbineCatalog: deleteMutation.mutateAsync,
        isCreating: createMutation.isPending,
        isUpdating: updateMutation.isPending,
        isDeleting: deleteMutation.isPending
    };
}
_s(useTurbineCatalog, "Ylzv7vMtIXAuJgLQWBSdy4Cb2h8=", false, function() {
    return [
        __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f40$tanstack$2f$react$2d$query$2f$build$2f$modern$2f$QueryClientProvider$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useQueryClient"],
        __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f40$tanstack$2f$react$2d$query$2f$build$2f$modern$2f$useQuery$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useQuery"],
        __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f40$tanstack$2f$react$2d$query$2f$build$2f$modern$2f$useMutation$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useMutation"],
        __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f40$tanstack$2f$react$2d$query$2f$build$2f$modern$2f$useMutation$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useMutation"],
        __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f40$tanstack$2f$react$2d$query$2f$build$2f$modern$2f$useMutation$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useMutation"]
    ];
});
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/frontend/hooks/use-turbine.ts [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "useTurbine",
    ()=>useTurbine
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$lib$2f$api$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/frontend/lib/api.ts [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f40$tanstack$2f$react$2d$query$2f$build$2f$modern$2f$useMutation$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/frontend/node_modules/@tanstack/react-query/build/modern/useMutation.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f40$tanstack$2f$react$2d$query$2f$build$2f$modern$2f$useQuery$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/frontend/node_modules/@tanstack/react-query/build/modern/useQuery.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f40$tanstack$2f$react$2d$query$2f$build$2f$modern$2f$QueryClientProvider$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/frontend/node_modules/@tanstack/react-query/build/modern/QueryClientProvider.js [app-client] (ecmascript)");
var _s = __turbopack_context__.k.signature();
"use client";
;
;
function useTurbine() {
    _s();
    const queryClient = (0, __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f40$tanstack$2f$react$2d$query$2f$build$2f$modern$2f$QueryClientProvider$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useQueryClient"])();
    const refreshData = async ()=>{
        await Promise.all([
            queryClient.invalidateQueries({
                queryKey: [
                    "turbine"
                ]
            }),
            queryClient.invalidateQueries({
                queryKey: [
                    "simulation"
                ]
            })
        ]);
    };
    const query = (0, __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f40$tanstack$2f$react$2d$query$2f$build$2f$modern$2f$useQuery$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useQuery"])({
        queryKey: [
            "turbine"
        ],
        queryFn: {
            "useTurbine.useQuery[query]": async ()=>{
                const response = await __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$lib$2f$api$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["turbinesApi"].turbinesControllerFindAll();
                return response.data;
            }
        }["useTurbine.useQuery[query]"]
    });
    const createMutation = (0, __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f40$tanstack$2f$react$2d$query$2f$build$2f$modern$2f$useMutation$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useMutation"])({
        mutationFn: {
            "useTurbine.useMutation[createMutation]": async (payload)=>{
                const response = await __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$lib$2f$api$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["turbinesApi"].turbinesControllerCreate(payload);
                return response.data;
            }
        }["useTurbine.useMutation[createMutation]"],
        onSuccess: refreshData
    });
    const updateMutation = (0, __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f40$tanstack$2f$react$2d$query$2f$build$2f$modern$2f$useMutation$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useMutation"])({
        mutationFn: {
            "useTurbine.useMutation[updateMutation]": async ({ id, payload })=>{
                const response = await __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$lib$2f$api$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["turbinesApi"].turbinesControllerUpdate(id, payload);
                return response.data;
            }
        }["useTurbine.useMutation[updateMutation]"],
        onSuccess: refreshData
    });
    const deleteMutation = (0, __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f40$tanstack$2f$react$2d$query$2f$build$2f$modern$2f$useMutation$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useMutation"])({
        mutationFn: {
            "useTurbine.useMutation[deleteMutation]": async (id)=>{
                const response = await __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$lib$2f$api$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["turbinesApi"].turbinesControllerRemove(id);
                return response.data;
            }
        }["useTurbine.useMutation[deleteMutation]"],
        onSuccess: refreshData
    });
    return {
        ...query,
        createTurbine: createMutation.mutateAsync,
        updateTurbine: updateMutation.mutateAsync,
        deleteTurbine: deleteMutation.mutateAsync,
        isCreating: createMutation.isPending,
        isUpdating: updateMutation.isPending,
        isDeleting: deleteMutation.isPending
    };
}
_s(useTurbine, "Ylzv7vMtIXAuJgLQWBSdy4Cb2h8=", false, function() {
    return [
        __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f40$tanstack$2f$react$2d$query$2f$build$2f$modern$2f$QueryClientProvider$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useQueryClient"],
        __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f40$tanstack$2f$react$2d$query$2f$build$2f$modern$2f$useQuery$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useQuery"],
        __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f40$tanstack$2f$react$2d$query$2f$build$2f$modern$2f$useMutation$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useMutation"],
        __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f40$tanstack$2f$react$2d$query$2f$build$2f$modern$2f$useMutation$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useMutation"],
        __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f40$tanstack$2f$react$2d$query$2f$build$2f$modern$2f$useMutation$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useMutation"]
    ];
});
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/frontend/lib/api.ts [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "simulationApi",
    ()=>simulationApi,
    "turbineCatalogApi",
    ()=>turbineCatalogApi,
    "turbinesApi",
    ()=>turbinesApi
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$next$2f$dist$2f$build$2f$polyfills$2f$process$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = /*#__PURE__*/ __turbopack_context__.i("[project]/frontend/node_modules/next/dist/build/polyfills/process.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$clients$2f$projeto$2d$pam$2f$dist$2f$esm$2f$configuration$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/frontend/clients/projeto-pam/dist/esm/configuration.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$clients$2f$projeto$2d$pam$2f$dist$2f$esm$2f$api$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/frontend/clients/projeto-pam/dist/esm/api.js [app-client] (ecmascript)");
;
const apiConfiguration = new __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$clients$2f$projeto$2d$pam$2f$dist$2f$esm$2f$configuration$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Configuration"]({
    basePath: __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$next$2f$dist$2f$build$2f$polyfills$2f$process$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].env.NEXT_PUBLIC_API_URL || 'http://localhost:4000'
});
const turbinesApi = new __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$clients$2f$projeto$2d$pam$2f$dist$2f$esm$2f$api$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["TurbineApi"](apiConfiguration);
const turbineCatalogApi = new __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$clients$2f$projeto$2d$pam$2f$dist$2f$esm$2f$api$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["TurbinesCatalogApi"](apiConfiguration);
const simulationApi = new __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$clients$2f$projeto$2d$pam$2f$dist$2f$esm$2f$api$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["SimulationApi"](apiConfiguration);
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
]);

//# sourceMappingURL=frontend_1_paw0e._.js.map