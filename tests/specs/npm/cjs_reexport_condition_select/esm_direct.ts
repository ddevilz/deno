// ESM importing directly from the dual-build package.
// Should resolve via "import" condition -> dist/index.module.js
// Fragment must be present.
import { Component, options, Fragment } from "npm:@denotest/cjs-missing-named-export@1";

console.log(Component);
console.log(options);
console.log(Fragment);
