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
"[project]/frontend/app/forms/turbine-catalog/create-edit-turbine-catalog-form.tsx [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>CreateEditTurbineCatalogForm
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/frontend/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f40$hookform$2f$resolvers$2f$zod$2f$dist$2f$zod$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/frontend/node_modules/@hookform/resolvers/zod/dist/zod.mjs [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$react$2d$hook$2d$form$2f$dist$2f$index$2e$esm$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/frontend/node_modules/react-hook-form/dist/index.esm.mjs [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f40$mui$2f$material$2f$Box$2f$Box$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Box$3e$__ = __turbopack_context__.i("[project]/frontend/node_modules/@mui/material/Box/Box.mjs [app-client] (ecmascript) <export default as Box>");
var __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f40$mui$2f$material$2f$Button$2f$Button$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Button$3e$__ = __turbopack_context__.i("[project]/frontend/node_modules/@mui/material/Button/Button.mjs [app-client] (ecmascript) <export default as Button>");
var __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f40$mui$2f$material$2f$CircularProgress$2f$CircularProgress$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__CircularProgress$3e$__ = __turbopack_context__.i("[project]/frontend/node_modules/@mui/material/CircularProgress/CircularProgress.mjs [app-client] (ecmascript) <export default as CircularProgress>");
var __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f40$mui$2f$material$2f$TextField$2f$TextField$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__TextField$3e$__ = __turbopack_context__.i("[project]/frontend/node_modules/@mui/material/TextField/TextField.mjs [app-client] (ecmascript) <export default as TextField>");
var __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$app$2f$forms$2f$turbine$2d$catalog$2f$schema$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/frontend/app/forms/turbine-catalog/schema.ts [app-client] (ecmascript)");
;
var _s = __turbopack_context__.k.signature();
"use client";
;
;
;
;
function CreateEditTurbineCatalogForm({ initialValues, onSubmit, isLoading, isEditing = false }) {
    _s();
    const { control, handleSubmit, formState: { errors } } = (0, __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$react$2d$hook$2d$form$2f$dist$2f$index$2e$esm$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useForm"])({
        resolver: (0, __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f40$hookform$2f$resolvers$2f$zod$2f$dist$2f$zod$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["zodResolver"])(__TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$app$2f$forms$2f$turbine$2d$catalog$2f$schema$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["turbineCatalogSchema"]),
        defaultValues: {
            name: initialValues?.name ?? "",
            manufacturer: initialValues?.manufacturer ?? "",
            nominalPower: initialValues?.nominalPower ?? "",
            rotorDiameter: initialValues?.rotorDiameter ?? ""
        }
    });
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f40$mui$2f$material$2f$Box$2f$Box$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Box$3e$__["Box"], {
        component: "form",
        onSubmit: handleSubmit(onSubmit),
        noValidate: true,
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f40$mui$2f$material$2f$Box$2f$Box$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Box$3e$__["Box"], {
                className: "modal-form-body",
                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f40$mui$2f$material$2f$Box$2f$Box$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Box$3e$__["Box"], {
                    className: "modal-form-grid",
                    children: [
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f40$mui$2f$material$2f$Box$2f$Box$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Box$3e$__["Box"], {
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f40$mui$2f$material$2f$Box$2f$Box$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Box$3e$__["Box"], {
                                    component: "label",
                                    htmlFor: "catalog-name",
                                    className: "modal-field-label",
                                    children: "Nome"
                                }, void 0, false, {
                                    fileName: "[project]/frontend/app/forms/turbine-catalog/create-edit-turbine-catalog-form.tsx",
                                    lineNumber: 31,
                                    columnNumber: 25
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$react$2d$hook$2d$form$2f$dist$2f$index$2e$esm$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Controller"], {
                                    name: "name",
                                    control: control,
                                    render: ({ field: { ref, ...field } })=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f40$mui$2f$material$2f$TextField$2f$TextField$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__TextField$3e$__["TextField"], {
                                            ...field,
                                            id: "catalog-name",
                                            inputRef: ref,
                                            fullWidth: true,
                                            disabled: isLoading,
                                            error: !!errors.name,
                                            helperText: errors.name?.message,
                                            placeholder: "Nome da turbina..."
                                        }, void 0, false, {
                                            fileName: "[project]/frontend/app/forms/turbine-catalog/create-edit-turbine-catalog-form.tsx",
                                            lineNumber: 33,
                                            columnNumber: 29
                                        }, this)
                                }, void 0, false, {
                                    fileName: "[project]/frontend/app/forms/turbine-catalog/create-edit-turbine-catalog-form.tsx",
                                    lineNumber: 32,
                                    columnNumber: 25
                                }, this)
                            ]
                        }, void 0, true, {
                            fileName: "[project]/frontend/app/forms/turbine-catalog/create-edit-turbine-catalog-form.tsx",
                            lineNumber: 30,
                            columnNumber: 21
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f40$mui$2f$material$2f$Box$2f$Box$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Box$3e$__["Box"], {
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f40$mui$2f$material$2f$Box$2f$Box$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Box$3e$__["Box"], {
                                    component: "label",
                                    htmlFor: "catalog-manufacturer",
                                    className: "modal-field-label",
                                    children: "Fabricante"
                                }, void 0, false, {
                                    fileName: "[project]/frontend/app/forms/turbine-catalog/create-edit-turbine-catalog-form.tsx",
                                    lineNumber: 38,
                                    columnNumber: 25
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$react$2d$hook$2d$form$2f$dist$2f$index$2e$esm$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Controller"], {
                                    name: "manufacturer",
                                    control: control,
                                    render: ({ field: { ref, ...field } })=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f40$mui$2f$material$2f$TextField$2f$TextField$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__TextField$3e$__["TextField"], {
                                            ...field,
                                            id: "catalog-manufacturer",
                                            inputRef: ref,
                                            fullWidth: true,
                                            disabled: isLoading,
                                            error: !!errors.manufacturer,
                                            helperText: errors.manufacturer?.message,
                                            placeholder: "Nome do fabricante..."
                                        }, void 0, false, {
                                            fileName: "[project]/frontend/app/forms/turbine-catalog/create-edit-turbine-catalog-form.tsx",
                                            lineNumber: 40,
                                            columnNumber: 29
                                        }, this)
                                }, void 0, false, {
                                    fileName: "[project]/frontend/app/forms/turbine-catalog/create-edit-turbine-catalog-form.tsx",
                                    lineNumber: 39,
                                    columnNumber: 25
                                }, this)
                            ]
                        }, void 0, true, {
                            fileName: "[project]/frontend/app/forms/turbine-catalog/create-edit-turbine-catalog-form.tsx",
                            lineNumber: 37,
                            columnNumber: 21
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f40$mui$2f$material$2f$Box$2f$Box$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Box$3e$__["Box"], {
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f40$mui$2f$material$2f$Box$2f$Box$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Box$3e$__["Box"], {
                                    component: "label",
                                    htmlFor: "catalog-power",
                                    className: "modal-field-label",
                                    children: "Potência (MW)"
                                }, void 0, false, {
                                    fileName: "[project]/frontend/app/forms/turbine-catalog/create-edit-turbine-catalog-form.tsx",
                                    lineNumber: 45,
                                    columnNumber: 25
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$react$2d$hook$2d$form$2f$dist$2f$index$2e$esm$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Controller"], {
                                    name: "nominalPower",
                                    control: control,
                                    render: ({ field: { ref, ...field } })=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f40$mui$2f$material$2f$TextField$2f$TextField$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__TextField$3e$__["TextField"], {
                                            ...field,
                                            id: "catalog-power",
                                            inputRef: ref,
                                            fullWidth: true,
                                            disabled: isLoading,
                                            error: !!errors.nominalPower,
                                            helperText: errors.nominalPower?.message,
                                            placeholder: "15.0",
                                            onChange: (e)=>{
                                                const onlyNumbers = e.target.value.replace(/\D/g, "");
                                                field.onChange(onlyNumbers);
                                            }
                                        }, void 0, false, {
                                            fileName: "[project]/frontend/app/forms/turbine-catalog/create-edit-turbine-catalog-form.tsx",
                                            lineNumber: 50,
                                            columnNumber: 33
                                        }, this)
                                }, void 0, false, {
                                    fileName: "[project]/frontend/app/forms/turbine-catalog/create-edit-turbine-catalog-form.tsx",
                                    lineNumber: 46,
                                    columnNumber: 25
                                }, this)
                            ]
                        }, void 0, true, {
                            fileName: "[project]/frontend/app/forms/turbine-catalog/create-edit-turbine-catalog-form.tsx",
                            lineNumber: 44,
                            columnNumber: 21
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f40$mui$2f$material$2f$Box$2f$Box$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Box$3e$__["Box"], {
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f40$mui$2f$material$2f$Box$2f$Box$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Box$3e$__["Box"], {
                                    component: "label",
                                    htmlFor: "catalog-diameter",
                                    className: "modal-field-label",
                                    children: "Diâmetro do rotor (m)"
                                }, void 0, false, {
                                    fileName: "[project]/frontend/app/forms/turbine-catalog/create-edit-turbine-catalog-form.tsx",
                                    lineNumber: 68,
                                    columnNumber: 25
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$react$2d$hook$2d$form$2f$dist$2f$index$2e$esm$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Controller"], {
                                    name: "rotorDiameter",
                                    control: control,
                                    render: ({ field: { ref, ...field } })=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f40$mui$2f$material$2f$TextField$2f$TextField$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__TextField$3e$__["TextField"], {
                                            ...field,
                                            id: "catalog-diameter",
                                            inputRef: ref,
                                            fullWidth: true,
                                            disabled: isLoading,
                                            error: !!errors.rotorDiameter,
                                            helperText: errors.rotorDiameter?.message,
                                            placeholder: "236",
                                            onChange: (e)=>{
                                                const onlyNumbers = e.target.value.replace(/\D/g, "");
                                                field.onChange(onlyNumbers);
                                            }
                                        }, void 0, false, {
                                            fileName: "[project]/frontend/app/forms/turbine-catalog/create-edit-turbine-catalog-form.tsx",
                                            lineNumber: 70,
                                            columnNumber: 29
                                        }, this)
                                }, void 0, false, {
                                    fileName: "[project]/frontend/app/forms/turbine-catalog/create-edit-turbine-catalog-form.tsx",
                                    lineNumber: 69,
                                    columnNumber: 25
                                }, this)
                            ]
                        }, void 0, true, {
                            fileName: "[project]/frontend/app/forms/turbine-catalog/create-edit-turbine-catalog-form.tsx",
                            lineNumber: 67,
                            columnNumber: 21
                        }, this)
                    ]
                }, void 0, true, {
                    fileName: "[project]/frontend/app/forms/turbine-catalog/create-edit-turbine-catalog-form.tsx",
                    lineNumber: 29,
                    columnNumber: 17
                }, this)
            }, void 0, false, {
                fileName: "[project]/frontend/app/forms/turbine-catalog/create-edit-turbine-catalog-form.tsx",
                lineNumber: 28,
                columnNumber: 13
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f40$mui$2f$material$2f$Box$2f$Box$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Box$3e$__["Box"], {
                className: "modal-form-footer",
                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f40$mui$2f$material$2f$Button$2f$Button$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Button$3e$__["Button"], {
                    type: "submit",
                    disabled: isLoading,
                    children: isLoading ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f40$mui$2f$material$2f$CircularProgress$2f$CircularProgress$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__CircularProgress$3e$__["CircularProgress"], {
                        size: 20,
                        color: "inherit"
                    }, void 0, false, {
                        fileName: "[project]/frontend/app/forms/turbine-catalog/create-edit-turbine-catalog-form.tsx",
                        lineNumber: 78,
                        columnNumber: 34
                    }, this) : isEditing ? "Salvar alterações" : "+ Criar"
                }, void 0, false, {
                    fileName: "[project]/frontend/app/forms/turbine-catalog/create-edit-turbine-catalog-form.tsx",
                    lineNumber: 77,
                    columnNumber: 17
                }, this)
            }, void 0, false, {
                fileName: "[project]/frontend/app/forms/turbine-catalog/create-edit-turbine-catalog-form.tsx",
                lineNumber: 76,
                columnNumber: 13
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/frontend/app/forms/turbine-catalog/create-edit-turbine-catalog-form.tsx",
        lineNumber: 27,
        columnNumber: 9
    }, this);
}
_s(CreateEditTurbineCatalogForm, "ZDztZu9y6/DOs5+RCG3JVEyz7Ag=", false, function() {
    return [
        __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$react$2d$hook$2d$form$2f$dist$2f$index$2e$esm$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useForm"]
    ];
});
_c = CreateEditTurbineCatalogForm;
var _c;
__turbopack_context__.k.register(_c, "CreateEditTurbineCatalogForm");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/frontend/app/forms/turbine-catalog/format-payload.tsx [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "formatTurbineCatalogPayload",
    ()=>formatTurbineCatalogPayload
]);
function formatTurbineCatalogPayload(values) {
    return {
        name: values.name.trim(),
        manufacturer: values.manufacturer.trim(),
        nominal_power: values.nominalPower,
        rotor_diameter: values.rotorDiameter
    };
}
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/frontend/app/forms/turbine-catalog/schema.ts [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "turbineCatalogSchema",
    ()=>turbineCatalogSchema
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$zod$2f$v4$2f$classic$2f$external$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__$2a$__as__z$3e$__ = __turbopack_context__.i("[project]/frontend/node_modules/zod/v4/classic/external.js [app-client] (ecmascript) <export * as z>");
;
const turbineCatalogSchema = __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$zod$2f$v4$2f$classic$2f$external$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__$2a$__as__z$3e$__["z"].object({
    name: __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$zod$2f$v4$2f$classic$2f$external$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__$2a$__as__z$3e$__["z"].string().min(1, {
        message: "O nome do modelo é obrigatório"
    }),
    manufacturer: __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$zod$2f$v4$2f$classic$2f$external$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__$2a$__as__z$3e$__["z"].string().min(1, {
        message: "O fabricante do modelo é obrigatório"
    }),
    nominalPower: __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$zod$2f$v4$2f$classic$2f$external$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__$2a$__as__z$3e$__["z"].string().min(1, {
        message: "A potência nominal do modelo é obrigatória"
    }).refine((val)=>!isNaN(Number(val)) && Number(val) > 0, "Insira uma potência válida maior que zero").transform((val)=>Number(val)),
    rotorDiameter: __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$zod$2f$v4$2f$classic$2f$external$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__$2a$__as__z$3e$__["z"].string().min(1, {
        message: "O diâmetro do rotor do modelo é obrigatório"
    }).refine((val)=>!isNaN(Number(val)) && Number(val) > 0, "Insira um diâmetro válido maior que zero").transform((val)=>Number(val))
});
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/frontend/app/turbine-catalog/client-turbine-catalog.tsx [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>ClientTurbineCatalog
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/frontend/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$app$2f$components$2f$Card$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/frontend/app/components/Card.tsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$hooks$2f$use$2d$turbine$2d$catalog$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/frontend/hooks/use-turbine-catalog.ts [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$react$2d$hook$2d$form$2f$dist$2f$index$2e$esm$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/frontend/node_modules/react-hook-form/dist/index.esm.mjs [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f40$mui$2f$material$2f$TextField$2f$TextField$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/frontend/node_modules/@mui/material/TextField/TextField.mjs [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f40$mui$2f$material$2f$CircularProgress$2f$CircularProgress$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/frontend/node_modules/@mui/material/CircularProgress/CircularProgress.mjs [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f40$mui$2f$material$2f$Alert$2f$Alert$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/frontend/node_modules/@mui/material/Alert/Alert.mjs [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f40$mui$2f$material$2f$Button$2f$Button$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/frontend/node_modules/@mui/material/Button/Button.mjs [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f40$mui$2f$material$2f$TableContainer$2f$TableContainer$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/frontend/node_modules/@mui/material/TableContainer/TableContainer.mjs [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f40$mui$2f$material$2f$Table$2f$Table$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/frontend/node_modules/@mui/material/Table/Table.mjs [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f40$mui$2f$material$2f$TableHead$2f$TableHead$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/frontend/node_modules/@mui/material/TableHead/TableHead.mjs [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f40$mui$2f$material$2f$TableRow$2f$TableRow$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/frontend/node_modules/@mui/material/TableRow/TableRow.mjs [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f40$mui$2f$material$2f$TableCell$2f$TableCell$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/frontend/node_modules/@mui/material/TableCell/TableCell.mjs [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f40$mui$2f$material$2f$TableBody$2f$TableBody$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/frontend/node_modules/@mui/material/TableBody/TableBody.mjs [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f40$mui$2f$material$2f$Box$2f$Box$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/frontend/node_modules/@mui/material/Box/Box.mjs [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f40$mui$2f$material$2f$Dialog$2f$Dialog$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/frontend/node_modules/@mui/material/Dialog/Dialog.mjs [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$app$2f$forms$2f$turbine$2d$catalog$2f$format$2d$payload$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/frontend/app/forms/turbine-catalog/format-payload.tsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/frontend/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f40$mui$2f$material$2f$DialogTitle$2f$DialogTitle$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/frontend/node_modules/@mui/material/DialogTitle/DialogTitle.mjs [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f40$mui$2f$material$2f$IconButton$2f$IconButton$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/frontend/node_modules/@mui/material/IconButton/IconButton.mjs [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f40$mui$2f$icons$2d$material$2f$Close$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/frontend/node_modules/@mui/icons-material/Close.mjs [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f40$mui$2f$material$2f$DialogContent$2f$DialogContent$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/frontend/node_modules/@mui/material/DialogContent/DialogContent.mjs [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$app$2f$forms$2f$turbine$2d$catalog$2f$create$2d$edit$2d$turbine$2d$catalog$2d$form$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/frontend/app/forms/turbine-catalog/create-edit-turbine-catalog-form.tsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f40$mui$2f$material$2f$DialogActions$2f$DialogActions$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/frontend/node_modules/@mui/material/DialogActions/DialogActions.mjs [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f40$mui$2f$icons$2d$material$2f$EditOutlined$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/frontend/node_modules/@mui/icons-material/EditOutlined.mjs [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f40$mui$2f$icons$2d$material$2f$Delete$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/frontend/node_modules/@mui/icons-material/Delete.mjs [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$axios$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__ = __turbopack_context__.i("[project]/frontend/node_modules/axios/index.js [app-client] (ecmascript) <locals>");
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
;
;
function getErrorMessage(error) {
    if ((0, __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$axios$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__["isAxiosError"])(error)) {
        const message = error.response?.data?.message;
        if (typeof message === "string") return message;
        if (Array.isArray(message)) return message.join(" ");
    }
    return "Não foi possível concluir a operação. Tente novamente.";
}
function ClientTurbineCatalog() {
    _s();
    const { data: catalog = [], isPending, isError, refetch, createTurbineCatalog, isCreating, updateTurbineCatalog, isUpdating, deleteTurbineCatalog, isDeleting } = (0, __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$hooks$2f$use$2d$turbine$2d$catalog$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useTurbineCatalog"])();
    const [isModalOpen, setIsModalOpen] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(false);
    const [editingModel, setEditingModel] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(null);
    const [modelToDelete, setModelToDelete] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(null);
    const [formError, setFormError] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(null);
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
    const filteredCatalog = catalog.filter((model)=>{
        const name = model.name.toLocaleLowerCase("pt-BR");
        const manufacture = model.manufacturer.toLocaleLowerCase("pt-BR");
        return name.includes(term) || manufacture.includes(term);
    });
    const openCreateModal = ()=>{
        setEditingModel(null);
        setFormError(null);
        setIsModalOpen(true);
    };
    const openEditModal = (model)=>{
        setEditingModel(model);
        setFormError(null);
        setIsModalOpen(true);
    };
    const closeModal = ()=>{
        if (!isSaving) setIsModalOpen(false);
    };
    const openDeleteModal = (model)=>{
        setDeleteError(null);
        setModelToDelete(model);
    };
    const closeDeleteModal = ()=>{
        if (!isDeleting) setModelToDelete(null);
    };
    const handleSubmit = async (values)=>{
        if (isSaving) return;
        setFormError(null);
        try {
            const payload = (0, __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$app$2f$forms$2f$turbine$2d$catalog$2f$format$2d$payload$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["formatTurbineCatalogPayload"])(values);
            if (editingModel) {
                await updateTurbineCatalog({
                    id: editingModel.id,
                    payload
                });
            } else {
                await createTurbineCatalog(payload);
            }
            setIsModalOpen(false);
        } catch (error) {
            setFormError(getErrorMessage(error));
        }
    };
    const handleDelete = async ()=>{
        if (!modelToDelete || isDeleting) return;
        setDeleteError(null);
        try {
            await deleteTurbineCatalog(modelToDelete.id);
            setModelToDelete(null);
        } catch (error) {
            setDeleteError(getErrorMessage(error));
        }
    };
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f40$mui$2f$material$2f$Box$2f$Box$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h1", {
                className: "text-2xl font-bold text-[#044947]",
                children: "Catálogo de turbinas"
            }, void 0, false, {
                fileName: "[project]/frontend/app/turbine-catalog/client-turbine-catalog.tsx",
                lineNumber: 130,
                columnNumber: 13
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                className: "text-[#64748B] font-light pb-4 pt-1",
                children: "Cadastre e gerencie todos os modelos de turbinas"
            }, void 0, false, {
                fileName: "[project]/frontend/app/turbine-catalog/client-turbine-catalog.tsx",
                lineNumber: 131,
                columnNumber: 13
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f40$mui$2f$material$2f$Box$2f$Box$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                className: "pt-2 w-82",
                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$app$2f$components$2f$Card$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Card"], {
                    label: "Total:",
                    unit: "modelos de turbina",
                    value: isPending || isError ? "-" : catalog.length
                }, void 0, false, {
                    fileName: "[project]/frontend/app/turbine-catalog/client-turbine-catalog.tsx",
                    lineNumber: 135,
                    columnNumber: 17
                }, this)
            }, void 0, false, {
                fileName: "[project]/frontend/app/turbine-catalog/client-turbine-catalog.tsx",
                lineNumber: 134,
                columnNumber: 13
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f40$mui$2f$material$2f$Box$2f$Box$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                className: "mt-5 border border-gray-200 p-3 bg-white rounded-xl",
                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f40$mui$2f$material$2f$Box$2f$Box$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                    className: "flex justify-between",
                    children: [
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f40$mui$2f$material$2f$Box$2f$Box$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                            className: "w-full max-w-md",
                            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$react$2d$hook$2d$form$2f$dist$2f$index$2e$esm$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Controller"], {
                                name: "search",
                                control: control,
                                render: ({ field: { ref, ...field } })=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f40$mui$2f$material$2f$TextField$2f$TextField$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                                        ...field,
                                        inputRef: ref,
                                        label: "Procurar no catálogo de turbinas...",
                                        placeholder: "Nome ou fabricante",
                                        size: "small",
                                        fullWidth: true
                                    }, void 0, false, {
                                        fileName: "[project]/frontend/app/turbine-catalog/client-turbine-catalog.tsx",
                                        lineNumber: 142,
                                        columnNumber: 29
                                    }, this)
                            }, void 0, false, {
                                fileName: "[project]/frontend/app/turbine-catalog/client-turbine-catalog.tsx",
                                lineNumber: 141,
                                columnNumber: 25
                            }, this)
                        }, void 0, false, {
                            fileName: "[project]/frontend/app/turbine-catalog/client-turbine-catalog.tsx",
                            lineNumber: 140,
                            columnNumber: 21
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f40$mui$2f$material$2f$Button$2f$Button$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                            variant: "contained",
                            onClick: openCreateModal,
                            disabled: isBusy,
                            children: "+ Cadastrar Modelo"
                        }, void 0, false, {
                            fileName: "[project]/frontend/app/turbine-catalog/client-turbine-catalog.tsx",
                            lineNumber: 145,
                            columnNumber: 21
                        }, this)
                    ]
                }, void 0, true, {
                    fileName: "[project]/frontend/app/turbine-catalog/client-turbine-catalog.tsx",
                    lineNumber: 139,
                    columnNumber: 17
                }, this)
            }, void 0, false, {
                fileName: "[project]/frontend/app/turbine-catalog/client-turbine-catalog.tsx",
                lineNumber: 138,
                columnNumber: 13
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f40$mui$2f$material$2f$Box$2f$Box$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                children: isPending ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f40$mui$2f$material$2f$Box$2f$Box$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                    role: "status",
                    className: "flex items-center gap-3 p-6",
                    children: [
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f40$mui$2f$material$2f$CircularProgress$2f$CircularProgress$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                            size: 24
                        }, void 0, false, {
                            fileName: "[project]/frontend/app/turbine-catalog/client-turbine-catalog.tsx",
                            lineNumber: 152,
                            columnNumber: 25
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                            children: "Carregando Catálogo..."
                        }, void 0, false, {
                            fileName: "[project]/frontend/app/turbine-catalog/client-turbine-catalog.tsx",
                            lineNumber: 153,
                            columnNumber: 25
                        }, this)
                    ]
                }, void 0, true, {
                    fileName: "[project]/frontend/app/turbine-catalog/client-turbine-catalog.tsx",
                    lineNumber: 151,
                    columnNumber: 21
                }, this) : isError ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f40$mui$2f$material$2f$Alert$2f$Alert$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                    severity: "error",
                    action: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f40$mui$2f$material$2f$Button$2f$Button$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                        color: "inherit",
                        onClick: ()=>void refetch(),
                        children: "Tentar novamente"
                    }, void 0, false, {
                        fileName: "[project]/frontend/app/turbine-catalog/client-turbine-catalog.tsx",
                        lineNumber: 156,
                        columnNumber: 53
                    }, this),
                    children: "Não foi possível carregar o catálogo."
                }, void 0, false, {
                    fileName: "[project]/frontend/app/turbine-catalog/client-turbine-catalog.tsx",
                    lineNumber: 156,
                    columnNumber: 21
                }, this) : /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f40$mui$2f$material$2f$Box$2f$Box$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                    className: "overflow-hidden bg-white rounded-xl border border-gray-200 mt-5",
                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f40$mui$2f$material$2f$TableContainer$2f$TableContainer$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f40$mui$2f$material$2f$Table$2f$Table$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                            "aria-label": "Catálogo de turbinas",
                            className: "min-w-175",
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f40$mui$2f$material$2f$TableHead$2f$TableHead$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f40$mui$2f$material$2f$TableRow$2f$TableRow$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                                        className: "bg-slate-50",
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f40$mui$2f$material$2f$TableCell$2f$TableCell$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                                                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                    className: "text-xs font-semibold font-sans uppercase text-gray-400",
                                                    children: "Nome da turbina"
                                                }, void 0, false, {
                                                    fileName: "[project]/frontend/app/turbine-catalog/client-turbine-catalog.tsx",
                                                    lineNumber: 166,
                                                    columnNumber: 45
                                                }, this)
                                            }, void 0, false, {
                                                fileName: "[project]/frontend/app/turbine-catalog/client-turbine-catalog.tsx",
                                                lineNumber: 165,
                                                columnNumber: 41
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f40$mui$2f$material$2f$TableCell$2f$TableCell$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                                                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                    className: "text-xs font-semibold font-sans uppercase text-gray-400",
                                                    children: "Data de criação"
                                                }, void 0, false, {
                                                    fileName: "[project]/frontend/app/turbine-catalog/client-turbine-catalog.tsx",
                                                    lineNumber: 169,
                                                    columnNumber: 45
                                                }, this)
                                            }, void 0, false, {
                                                fileName: "[project]/frontend/app/turbine-catalog/client-turbine-catalog.tsx",
                                                lineNumber: 168,
                                                columnNumber: 41
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f40$mui$2f$material$2f$TableCell$2f$TableCell$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                                                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                    className: "text-xs font-semibold font-sans uppercase text-gray-400",
                                                    children: "Potência"
                                                }, void 0, false, {
                                                    fileName: "[project]/frontend/app/turbine-catalog/client-turbine-catalog.tsx",
                                                    lineNumber: 172,
                                                    columnNumber: 45
                                                }, this)
                                            }, void 0, false, {
                                                fileName: "[project]/frontend/app/turbine-catalog/client-turbine-catalog.tsx",
                                                lineNumber: 171,
                                                columnNumber: 41
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f40$mui$2f$material$2f$TableCell$2f$TableCell$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                                                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                    className: "text-xs font-semibold font-sans uppercase text-gray-400",
                                                    children: "Diâmetro"
                                                }, void 0, false, {
                                                    fileName: "[project]/frontend/app/turbine-catalog/client-turbine-catalog.tsx",
                                                    lineNumber: 175,
                                                    columnNumber: 45
                                                }, this)
                                            }, void 0, false, {
                                                fileName: "[project]/frontend/app/turbine-catalog/client-turbine-catalog.tsx",
                                                lineNumber: 174,
                                                columnNumber: 41
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f40$mui$2f$material$2f$TableCell$2f$TableCell$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                                                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                    className: "text-xs font-semibold font-sans uppercase text-gray-400",
                                                    children: "Fabricante"
                                                }, void 0, false, {
                                                    fileName: "[project]/frontend/app/turbine-catalog/client-turbine-catalog.tsx",
                                                    lineNumber: 178,
                                                    columnNumber: 45
                                                }, this)
                                            }, void 0, false, {
                                                fileName: "[project]/frontend/app/turbine-catalog/client-turbine-catalog.tsx",
                                                lineNumber: 177,
                                                columnNumber: 41
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f40$mui$2f$material$2f$TableCell$2f$TableCell$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                                                align: "right",
                                                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                    className: "text-xs font-semibold font-sans uppercase text-gray-400"
                                                }, void 0, false, {
                                                    fileName: "[project]/frontend/app/turbine-catalog/client-turbine-catalog.tsx",
                                                    lineNumber: 181,
                                                    columnNumber: 45
                                                }, this)
                                            }, void 0, false, {
                                                fileName: "[project]/frontend/app/turbine-catalog/client-turbine-catalog.tsx",
                                                lineNumber: 180,
                                                columnNumber: 41
                                            }, this)
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/frontend/app/turbine-catalog/client-turbine-catalog.tsx",
                                        lineNumber: 164,
                                        columnNumber: 37
                                    }, this)
                                }, void 0, false, {
                                    fileName: "[project]/frontend/app/turbine-catalog/client-turbine-catalog.tsx",
                                    lineNumber: 163,
                                    columnNumber: 33
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f40$mui$2f$material$2f$TableBody$2f$TableBody$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                                    children: filteredCatalog.length === 0 ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f40$mui$2f$material$2f$TableRow$2f$TableRow$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f40$mui$2f$material$2f$TableCell$2f$TableCell$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                                            colSpan: 6,
                                            align: "center",
                                            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                className: "py-6 text-slate-500",
                                                children: catalog.length === 0 ? "Nenhum modelo cadastrado." : "Nenhum modelo encontrado para essa busca."
                                            }, void 0, false, {
                                                fileName: "[project]/frontend/app/turbine-catalog/client-turbine-catalog.tsx",
                                                lineNumber: 190,
                                                columnNumber: 49
                                            }, this)
                                        }, void 0, false, {
                                            fileName: "[project]/frontend/app/turbine-catalog/client-turbine-catalog.tsx",
                                            lineNumber: 189,
                                            columnNumber: 45
                                        }, this)
                                    }, void 0, false, {
                                        fileName: "[project]/frontend/app/turbine-catalog/client-turbine-catalog.tsx",
                                        lineNumber: 188,
                                        columnNumber: 41
                                    }, this) : filteredCatalog.map((model)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f40$mui$2f$material$2f$TableRow$2f$TableRow$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                                            hover: true,
                                            children: [
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f40$mui$2f$material$2f$TableCell$2f$TableCell$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                                                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                        className: "font-semibold font-sans text-[#044947]",
                                                        children: model.name
                                                    }, void 0, false, {
                                                        fileName: "[project]/frontend/app/turbine-catalog/client-turbine-catalog.tsx",
                                                        lineNumber: 199,
                                                        columnNumber: 53
                                                    }, this)
                                                }, void 0, false, {
                                                    fileName: "[project]/frontend/app/turbine-catalog/client-turbine-catalog.tsx",
                                                    lineNumber: 198,
                                                    columnNumber: 49
                                                }, this),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f40$mui$2f$material$2f$TableCell$2f$TableCell$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                                                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                        className: "font-mono text-xs text-gray-600",
                                                        children: model.created_at.slice(0, 10)
                                                    }, void 0, false, {
                                                        fileName: "[project]/frontend/app/turbine-catalog/client-turbine-catalog.tsx",
                                                        lineNumber: 202,
                                                        columnNumber: 53
                                                    }, this)
                                                }, void 0, false, {
                                                    fileName: "[project]/frontend/app/turbine-catalog/client-turbine-catalog.tsx",
                                                    lineNumber: 201,
                                                    columnNumber: 49
                                                }, this),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f40$mui$2f$material$2f$TableCell$2f$TableCell$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                                                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                        className: "font-semibold font-sans text-[#044947]",
                                                        children: [
                                                            model.nominal_power,
                                                            " MW"
                                                        ]
                                                    }, void 0, true, {
                                                        fileName: "[project]/frontend/app/turbine-catalog/client-turbine-catalog.tsx",
                                                        lineNumber: 205,
                                                        columnNumber: 53
                                                    }, this)
                                                }, void 0, false, {
                                                    fileName: "[project]/frontend/app/turbine-catalog/client-turbine-catalog.tsx",
                                                    lineNumber: 204,
                                                    columnNumber: 49
                                                }, this),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f40$mui$2f$material$2f$TableCell$2f$TableCell$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                                                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                        className: "font-semibold font-sans text-[#044947]",
                                                        children: [
                                                            model.rotor_diameter,
                                                            " m"
                                                        ]
                                                    }, void 0, true, {
                                                        fileName: "[project]/frontend/app/turbine-catalog/client-turbine-catalog.tsx",
                                                        lineNumber: 208,
                                                        columnNumber: 53
                                                    }, this)
                                                }, void 0, false, {
                                                    fileName: "[project]/frontend/app/turbine-catalog/client-turbine-catalog.tsx",
                                                    lineNumber: 207,
                                                    columnNumber: 49
                                                }, this),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f40$mui$2f$material$2f$TableCell$2f$TableCell$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                                                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                        className: "font-semibold font-sans text-[#044947]",
                                                        children: model.manufacturer
                                                    }, void 0, false, {
                                                        fileName: "[project]/frontend/app/turbine-catalog/client-turbine-catalog.tsx",
                                                        lineNumber: 211,
                                                        columnNumber: 53
                                                    }, this)
                                                }, void 0, false, {
                                                    fileName: "[project]/frontend/app/turbine-catalog/client-turbine-catalog.tsx",
                                                    lineNumber: 210,
                                                    columnNumber: 49
                                                }, this),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f40$mui$2f$material$2f$TableCell$2f$TableCell$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                                                    align: "right",
                                                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f40$mui$2f$material$2f$Box$2f$Box$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                                                        className: "flex justify-end gap-1",
                                                        children: [
                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f40$mui$2f$material$2f$IconButton$2f$IconButton$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                                                                size: "small",
                                                                title: "Editar modelo",
                                                                "aria-label": `Editar ${model.name}`,
                                                                disabled: isBusy,
                                                                onClick: ()=>openEditModal(model),
                                                                sx: {
                                                                    color: "#94A3B8",
                                                                    "&:hover": {
                                                                        color: "#044947"
                                                                    }
                                                                },
                                                                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f40$mui$2f$icons$2d$material$2f$EditOutlined$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                                                                    fontSize: "small"
                                                                }, void 0, false, {
                                                                    fileName: "[project]/frontend/app/turbine-catalog/client-turbine-catalog.tsx",
                                                                    lineNumber: 216,
                                                                    columnNumber: 61
                                                                }, this)
                                                            }, void 0, false, {
                                                                fileName: "[project]/frontend/app/turbine-catalog/client-turbine-catalog.tsx",
                                                                lineNumber: 215,
                                                                columnNumber: 57
                                                            }, this),
                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f40$mui$2f$material$2f$IconButton$2f$IconButton$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                                                                size: "small",
                                                                title: "Excluir modelo",
                                                                "aria-label": `Excluir ${model.name}`,
                                                                disabled: isBusy,
                                                                onClick: ()=>openDeleteModal(model),
                                                                sx: {
                                                                    color: "#94A3B8",
                                                                    "&:hover": {
                                                                        color: "#C62828"
                                                                    }
                                                                },
                                                                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f40$mui$2f$icons$2d$material$2f$Delete$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                                                                    fontSize: "small"
                                                                }, void 0, false, {
                                                                    fileName: "[project]/frontend/app/turbine-catalog/client-turbine-catalog.tsx",
                                                                    lineNumber: 219,
                                                                    columnNumber: 61
                                                                }, this)
                                                            }, void 0, false, {
                                                                fileName: "[project]/frontend/app/turbine-catalog/client-turbine-catalog.tsx",
                                                                lineNumber: 218,
                                                                columnNumber: 57
                                                            }, this)
                                                        ]
                                                    }, void 0, true, {
                                                        fileName: "[project]/frontend/app/turbine-catalog/client-turbine-catalog.tsx",
                                                        lineNumber: 214,
                                                        columnNumber: 53
                                                    }, this)
                                                }, void 0, false, {
                                                    fileName: "[project]/frontend/app/turbine-catalog/client-turbine-catalog.tsx",
                                                    lineNumber: 213,
                                                    columnNumber: 49
                                                }, this)
                                            ]
                                        }, model.id, true, {
                                            fileName: "[project]/frontend/app/turbine-catalog/client-turbine-catalog.tsx",
                                            lineNumber: 197,
                                            columnNumber: 45
                                        }, this))
                                }, void 0, false, {
                                    fileName: "[project]/frontend/app/turbine-catalog/client-turbine-catalog.tsx",
                                    lineNumber: 186,
                                    columnNumber: 33
                                }, this)
                            ]
                        }, void 0, true, {
                            fileName: "[project]/frontend/app/turbine-catalog/client-turbine-catalog.tsx",
                            lineNumber: 162,
                            columnNumber: 29
                        }, this)
                    }, void 0, false, {
                        fileName: "[project]/frontend/app/turbine-catalog/client-turbine-catalog.tsx",
                        lineNumber: 161,
                        columnNumber: 25
                    }, this)
                }, void 0, false, {
                    fileName: "[project]/frontend/app/turbine-catalog/client-turbine-catalog.tsx",
                    lineNumber: 160,
                    columnNumber: 21
                }, this)
            }, void 0, false, {
                fileName: "[project]/frontend/app/turbine-catalog/client-turbine-catalog.tsx",
                lineNumber: 149,
                columnNumber: 13
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f40$mui$2f$material$2f$Dialog$2f$Dialog$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                open: isModalOpen,
                "aria-labelledby": "create-catalog-title",
                onClose: closeModal,
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f40$mui$2f$material$2f$DialogTitle$2f$DialogTitle$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                        id: "create-catalog-title",
                        children: [
                            editingModel ? "Editar modelo de turbina" : "Cadastre um novo modelo de turbina",
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f40$mui$2f$material$2f$IconButton$2f$IconButton$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                                "aria-label": "Fechar",
                                onClick: closeModal,
                                disabled: isSaving,
                                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f40$mui$2f$icons$2d$material$2f$Close$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {}, void 0, false, {
                                    fileName: "[project]/frontend/app/turbine-catalog/client-turbine-catalog.tsx",
                                    lineNumber: 237,
                                    columnNumber: 25
                                }, this)
                            }, void 0, false, {
                                fileName: "[project]/frontend/app/turbine-catalog/client-turbine-catalog.tsx",
                                lineNumber: 236,
                                columnNumber: 21
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/frontend/app/turbine-catalog/client-turbine-catalog.tsx",
                        lineNumber: 234,
                        columnNumber: 17
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f40$mui$2f$material$2f$DialogContent$2f$DialogContent$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                        children: [
                            formError && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f40$mui$2f$material$2f$Alert$2f$Alert$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                                severity: "error",
                                className: "mx-6 mt-4",
                                children: formError
                            }, void 0, false, {
                                fileName: "[project]/frontend/app/turbine-catalog/client-turbine-catalog.tsx",
                                lineNumber: 241,
                                columnNumber: 35
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f40$mui$2f$material$2f$Box$2f$Box$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                                children: isModalOpen && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$app$2f$forms$2f$turbine$2d$catalog$2f$create$2d$edit$2d$turbine$2d$catalog$2d$form$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                                    initialValues: editingModel ? {
                                        name: editingModel.name,
                                        manufacturer: editingModel.manufacturer,
                                        nominalPower: String(editingModel.nominal_power),
                                        rotorDiameter: String(editingModel.rotor_diameter)
                                    } : undefined,
                                    onSubmit: handleSubmit,
                                    isLoading: isSaving,
                                    isEditing: editingModel !== null
                                }, editingModel?.id ?? "create", false, {
                                    fileName: "[project]/frontend/app/turbine-catalog/client-turbine-catalog.tsx",
                                    lineNumber: 244,
                                    columnNumber: 29
                                }, this)
                            }, void 0, false, {
                                fileName: "[project]/frontend/app/turbine-catalog/client-turbine-catalog.tsx",
                                lineNumber: 242,
                                columnNumber: 21
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/frontend/app/turbine-catalog/client-turbine-catalog.tsx",
                        lineNumber: 240,
                        columnNumber: 17
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/frontend/app/turbine-catalog/client-turbine-catalog.tsx",
                lineNumber: 233,
                columnNumber: 13
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f40$mui$2f$material$2f$Dialog$2f$Dialog$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                open: modelToDelete !== null,
                "aria-labelledby": "delete-catalog-title",
                "aria-describedby": "delete-catalog-description",
                onClose: closeDeleteModal,
                maxWidth: "xs",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f40$mui$2f$material$2f$DialogTitle$2f$DialogTitle$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                        id: "delete-catalog-title",
                        children: [
                            "Excluir modelo",
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f40$mui$2f$material$2f$IconButton$2f$IconButton$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                                "aria-label": "Fechar confirmação",
                                onClick: closeDeleteModal,
                                disabled: isDeleting,
                                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f40$mui$2f$icons$2d$material$2f$Close$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {}, void 0, false, {
                                    fileName: "[project]/frontend/app/turbine-catalog/client-turbine-catalog.tsx",
                                    lineNumber: 254,
                                    columnNumber: 25
                                }, this)
                            }, void 0, false, {
                                fileName: "[project]/frontend/app/turbine-catalog/client-turbine-catalog.tsx",
                                lineNumber: 253,
                                columnNumber: 21
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/frontend/app/turbine-catalog/client-turbine-catalog.tsx",
                        lineNumber: 251,
                        columnNumber: 17
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f40$mui$2f$material$2f$DialogContent$2f$DialogContent$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f40$mui$2f$material$2f$Box$2f$Box$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                            className: "modal-form-body",
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                    id: "delete-catalog-description",
                                    className: "m-0 text-sm leading-6 text-[#64748B]",
                                    children: [
                                        "Deseja excluir o modelo ",
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("strong", {
                                            className: "text-[#044947]",
                                            children: modelToDelete?.name
                                        }, void 0, false, {
                                            fileName: "[project]/frontend/app/turbine-catalog/client-turbine-catalog.tsx",
                                            lineNumber: 260,
                                            columnNumber: 53
                                        }, this),
                                        "? Esta ação não pode ser desfeita."
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/frontend/app/turbine-catalog/client-turbine-catalog.tsx",
                                    lineNumber: 259,
                                    columnNumber: 25
                                }, this),
                                deleteError && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f40$mui$2f$material$2f$Alert$2f$Alert$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                                    severity: "error",
                                    children: deleteError
                                }, void 0, false, {
                                    fileName: "[project]/frontend/app/turbine-catalog/client-turbine-catalog.tsx",
                                    lineNumber: 262,
                                    columnNumber: 41
                                }, this)
                            ]
                        }, void 0, true, {
                            fileName: "[project]/frontend/app/turbine-catalog/client-turbine-catalog.tsx",
                            lineNumber: 258,
                            columnNumber: 21
                        }, this)
                    }, void 0, false, {
                        fileName: "[project]/frontend/app/turbine-catalog/client-turbine-catalog.tsx",
                        lineNumber: 257,
                        columnNumber: 17
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f40$mui$2f$material$2f$DialogActions$2f$DialogActions$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                        sx: {
                            borderTop: "1px solid #E1ECEE",
                            padding: "16px 24px",
                            gap: 1
                        },
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f40$mui$2f$material$2f$Button$2f$Button$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                                variant: "outlined",
                                onClick: closeDeleteModal,
                                disabled: isDeleting,
                                autoFocus: true,
                                children: "Cancelar"
                            }, void 0, false, {
                                fileName: "[project]/frontend/app/turbine-catalog/client-turbine-catalog.tsx",
                                lineNumber: 266,
                                columnNumber: 21
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f40$mui$2f$material$2f$Button$2f$Button$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                                variant: "contained",
                                color: "error",
                                onClick: handleDelete,
                                disabled: isDeleting,
                                children: isDeleting ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f40$mui$2f$material$2f$CircularProgress$2f$CircularProgress$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                                    size: 20,
                                    color: "inherit"
                                }, void 0, false, {
                                    fileName: "[project]/frontend/app/turbine-catalog/client-turbine-catalog.tsx",
                                    lineNumber: 268,
                                    columnNumber: 39
                                }, this) : "Excluir"
                            }, void 0, false, {
                                fileName: "[project]/frontend/app/turbine-catalog/client-turbine-catalog.tsx",
                                lineNumber: 267,
                                columnNumber: 21
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/frontend/app/turbine-catalog/client-turbine-catalog.tsx",
                        lineNumber: 265,
                        columnNumber: 17
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/frontend/app/turbine-catalog/client-turbine-catalog.tsx",
                lineNumber: 250,
                columnNumber: 13
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/frontend/app/turbine-catalog/client-turbine-catalog.tsx",
        lineNumber: 129,
        columnNumber: 9
    }, this);
}
_s(ClientTurbineCatalog, "kuRDXiKiBtHto9+gSeVECX+I3iU=", false, function() {
    return [
        __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$hooks$2f$use$2d$turbine$2d$catalog$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useTurbineCatalog"],
        __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$react$2d$hook$2d$form$2f$dist$2f$index$2e$esm$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useForm"],
        __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$react$2d$hook$2d$form$2f$dist$2f$index$2e$esm$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useWatch"]
    ];
});
_c = ClientTurbineCatalog;
var _c;
__turbopack_context__.k.register(_c, "ClientTurbineCatalog");
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

//# sourceMappingURL=frontend_034gcfo._.js.map