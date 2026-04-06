// CJS build — Component and options are statically detectable by deno_ast.
// Fragment is exported via a multi-statement getter that deno_ast marks as
// "unsafe" (side-effect-ful), so it is excluded from the static export list.
// Fragment IS accessible at runtime when the generated ESM wrapper reads mod["Fragment"].
"use strict";
exports.Component = "Component-from-cjs";
exports.options = "options-from-cjs";
// This getter has a two-statement body so deno_ast treats it as an unsafe getter
// and excludes "Fragment" from the statically-derived exports list.
Object.defineProperty(exports, "Fragment", {
  enumerable: true,
  get: function () {
    var value = "Fragment-from-cjs";
    return value;
  },
});
