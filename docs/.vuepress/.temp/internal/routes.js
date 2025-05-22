export const redirects = JSON.parse("{}")

export const routes = Object.fromEntries([
  ["/", { loader: () => import(/* webpackChunkName: "index.html" */"/home/arufonsekun/workspace/AlTech/vuepress-starter/docs/.vuepress/.temp/pages/index.html.js"), meta: {"title":"Home"} }],
  ["/web/1.0.html", { loader: () => import(/* webpackChunkName: "web_1.0.html" */"/home/arufonsekun/workspace/AlTech/vuepress-starter/docs/.vuepress/.temp/pages/web/1.0.html.js"), meta: {"title":"1.0"} }],
  ["/app/1.0.html", { loader: () => import(/* webpackChunkName: "app_1.0.html" */"/home/arufonsekun/workspace/AlTech/vuepress-starter/docs/.vuepress/.temp/pages/app/1.0.html.js"), meta: {"title":"1.0"} }],
  ["/404.html", { loader: () => import(/* webpackChunkName: "404.html" */"/home/arufonsekun/workspace/AlTech/vuepress-starter/docs/.vuepress/.temp/pages/404.html.js"), meta: {"title":""} }],
]);

if (import.meta.webpackHot) {
  import.meta.webpackHot.accept()
  if (__VUE_HMR_RUNTIME__.updateRoutes) {
    __VUE_HMR_RUNTIME__.updateRoutes(routes)
  }
  if (__VUE_HMR_RUNTIME__.updateRedirects) {
    __VUE_HMR_RUNTIME__.updateRedirects(redirects)
  }
}

if (import.meta.hot) {
  import.meta.hot.accept(({ routes, redirects }) => {
    __VUE_HMR_RUNTIME__.updateRoutes(routes)
    __VUE_HMR_RUNTIME__.updateRedirects(redirects)
  })
}
