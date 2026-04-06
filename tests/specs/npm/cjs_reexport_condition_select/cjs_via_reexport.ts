// ESM importing from a CJS wrapper that does require("@denotest/cjs-missing-named-export").
// The CJS reexport analyzer in analyze_reexports() resolves with hardcoded
// ResolutionMode::Require + ["deno","node","require","default"] conditions,
// which picks dist/index.js (the CJS build) instead of dist/index.module.js.
// Fragment is absent from the CJS build so it appears as undefined.
import { Component, options, Fragment } from "npm:@denotest/cjs-wrapper-for-missing-named-export@1";

console.log(Component);
console.log(options);
// This line reveals the bug: Fragment should be "Fragment-from-esm" if the
// correct "import" condition were selected. Instead it is undefined because
// the CJS build never exports Fragment and the wrapper only re-exports what
// static analysis finds.
console.log(Fragment);
