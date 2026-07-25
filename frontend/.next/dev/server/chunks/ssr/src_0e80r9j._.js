module.exports = [
"[project]/src/lib/api/client.ts [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "api",
    ()=>api
]);
const baseUrl = (("TURBOPACK compile-time value", "http://127.0.0.1:8000") ?? "http://127.0.0.1:8000").replace(/\/$/, "");
async function request(path, init) {
    const response = await fetch(`${baseUrl}${path}`, {
        ...init,
        headers: {
            "Content-Type": "application/json",
            ...init?.headers
        },
        cache: "no-store"
    });
    if (!response.ok) throw new Error("تعذر الاتصال بالخدمة. يرجى المحاولة مرة أخرى.");
    return response.json();
}
const api = {
    services: ()=>request("/api/services/"),
    projects: ()=>request("/api/projects/"),
    consultation: (payload)=>request("/api/consultation/", {
            method: "POST",
            body: JSON.stringify(payload)
        }),
    mediaUrl: (image)=>image ? image.startsWith("http") ? image : `${baseUrl}${image}` : null
};
}),
"[project]/src/components/consultation-form.tsx [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "ConsultationForm",
    ()=>ConsultationForm
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react-jsx-dev-runtime.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$api$2f$client$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/lib/api/client.ts [app-ssr] (ecmascript)");
"use client";
;
;
;
const initial = {
    name: "",
    email: "",
    phone: "",
    services_type: "",
    preferred_date: "",
    message: ""
};
function ConsultationForm() {
    const [form, setForm] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])(initial);
    const [state, setState] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])("idle");
    const update = (key, value)=>setForm((f)=>({
                ...f,
                [key]: value
            }));
    async function submit(e) {
        e.preventDefault();
        setState("sending");
        try {
            await __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$api$2f$client$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["api"].consultation(form);
            setForm(initial);
            setState("success");
        } catch  {
            setState("error");
        }
    }
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("form", {
        onSubmit: submit,
        className: "grid gap-7",
        noValidate: true,
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "grid gap-7 md:grid-cols-2",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("label", {
                        children: [
                            "الاسم",
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("input", {
                                required: true,
                                className: "field",
                                value: form.name,
                                onChange: (e)=>update("name", e.target.value)
                            }, void 0, false, {
                                fileName: "[project]/src/components/consultation-form.tsx",
                                lineNumber: 7,
                                columnNumber: 543
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/src/components/consultation-form.tsx",
                        lineNumber: 7,
                        columnNumber: 531
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("label", {
                        children: [
                            "البريد الإلكتروني",
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("input", {
                                required: true,
                                type: "email",
                                className: "field",
                                value: form.email,
                                onChange: (e)=>update("email", e.target.value)
                            }, void 0, false, {
                                fileName: "[project]/src/components/consultation-form.tsx",
                                lineNumber: 7,
                                columnNumber: 673
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/src/components/consultation-form.tsx",
                        lineNumber: 7,
                        columnNumber: 649
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("label", {
                        children: [
                            "رقم الهاتف",
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("input", {
                                required: true,
                                type: "tel",
                                pattern: "[0-9+\\\\s-]{7,20}",
                                className: "field",
                                value: form.phone,
                                onChange: (e)=>update("phone", e.target.value)
                            }, void 0, false, {
                                fileName: "[project]/src/components/consultation-form.tsx",
                                lineNumber: 7,
                                columnNumber: 811
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/src/components/consultation-form.tsx",
                        lineNumber: 7,
                        columnNumber: 794
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("label", {
                        children: [
                            "نوع الخدمة / المشروع",
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("input", {
                                required: true,
                                className: "field",
                                value: form.services_type,
                                onChange: (e)=>update("services_type", e.target.value)
                            }, void 0, false, {
                                fileName: "[project]/src/components/consultation-form.tsx",
                                lineNumber: 7,
                                columnNumber: 984
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/src/components/consultation-form.tsx",
                        lineNumber: 7,
                        columnNumber: 957
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("label", {
                        children: [
                            "التاريخ المفضّل",
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("input", {
                                required: true,
                                type: "date",
                                className: "field",
                                value: form.preferred_date,
                                onChange: (e)=>update("preferred_date", e.target.value)
                            }, void 0, false, {
                                fileName: "[project]/src/components/consultation-form.tsx",
                                lineNumber: 7,
                                columnNumber: 1130
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/src/components/consultation-form.tsx",
                        lineNumber: 7,
                        columnNumber: 1108
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/src/components/consultation-form.tsx",
                lineNumber: 7,
                columnNumber: 488
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("label", {
                children: [
                    "الرسالة",
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("textarea", {
                        required: true,
                        rows: 4,
                        className: "field resize-none",
                        value: form.message,
                        onChange: (e)=>update("message", e.target.value)
                    }, void 0, false, {
                        fileName: "[project]/src/components/consultation-form.tsx",
                        lineNumber: 7,
                        columnNumber: 1288
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/src/components/consultation-form.tsx",
                lineNumber: 7,
                columnNumber: 1274
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                disabled: state === "sending",
                className: "button button-solid w-fit disabled:opacity-50",
                children: state === "sending" ? "جارٍ الإرسال…" : "إرسال الطلب ←"
            }, void 0, false, {
                fileName: "[project]/src/components/consultation-form.tsx",
                lineNumber: 7,
                columnNumber: 1424
            }, this),
            state === "success" && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                className: "text-[#52604d]",
                children: "تم استلام طلبك. سنتواصل معك قريباً."
            }, void 0, false, {
                fileName: "[project]/src/components/consultation-form.tsx",
                lineNumber: 7,
                columnNumber: 1603
            }, this),
            state === "error" && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                className: "text-red-700",
                children: "تعذر إرسال الطلب حالياً. يرجى المحاولة مرة أخرى."
            }, void 0, false, {
                fileName: "[project]/src/components/consultation-form.tsx",
                lineNumber: 7,
                columnNumber: 1691
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/src/components/consultation-form.tsx",
        lineNumber: 7,
        columnNumber: 430
    }, this);
}
}),
];

//# sourceMappingURL=src_0e80r9j._.js.map