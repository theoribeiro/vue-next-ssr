# Vue 3.0.11 SSR error

## Steps to reproduce

1. Run build
    ```
    npm install
    npm run build
    ```
2. Try to render
    ```
    node render.js
    ```
3. Expected results:
    ```
    <main>
        <h1>App</h1>
        <div>Comp</div>
    </main>
    ```
4. Actual results
   ```
    [Vue warn]: resolveComponent can only be used in render() or setup().
    (node:22835) UnhandledPromiseRejectionWarning: TypeError: Cannot create property '__props' on string 'comp'
        at normalizePropsOptions (webpack://app/./node_modules/@vue/runtime-core/dist/runtime-core.cjs.js?:1737:30)
        at createComponentInstance (webpack://app/./node_modules/@vue/runtime-core/dist/runtime-core.cjs.js?:6379:23)
        at renderComponentVNode (webpack://app/./node_modules/@vue/server-renderer/dist/server-renderer.cjs.js?:159:22)
        at ssrRenderComponent (webpack://app/./node_modules/@vue/server-renderer/dist/server-renderer.cjs.js?:484:12)
        at ssrRender (webpack://app/./src/app.vue?./node_modules/vue-loader/dist/templateLoader.js??ruleSet%5B1%5D.rules%5B1%5D!./node_modules/vue-loader/dist/index.js??ruleSet%5B1%5D.rules%5B2%5D.use%5B0%5D:15:81)
        at renderComponentSubTree (/Users/theoribeiro/Dev/playground/vue-next-ssr/node_modules/@vue/server-renderer/dist/server-renderer.cjs.js:222:13)
        at renderComponentVNode (/Users/theoribeiro/Dev/playground/vue-next-ssr/node_modules/@vue/server-renderer/dist/server-renderer.cjs.js:173:16)
        at renderToString (/Users/theoribeiro/Dev/playground/vue-next-ssr/node_modules/@vue/server-renderer/dist/server-renderer.cjs.js:412:26)
        at Object.<anonymous> (/Users/theoribeiro/Dev/playground/vue-next-ssr/render.js:4:1)
        at Module._compile (internal/modules/cjs/loader.js:1075:30)
    (Use `node --trace-warnings ...` to show where the warning was created)
    (node:22835) UnhandledPromiseRejectionWarning: Unhandled promise rejection. This error originated either by throwing inside of an async function without a catch block, or by rejecting a promise which was not handled with .catch(). To terminate the node process on unhandled promise rejection, use the CLI flag `--unhandled-rejections=strict` (see https://nodejs.org/api/cli.html#cli_unhandled_rejections_mode). (rejection id: 2)
    (node:22835) [DEP0018] DeprecationWarning: Unhandled promise rejections are deprecated. In the future, promise rejections that are not handled will terminate the Node.js process with a non-zero exit code.
   ```