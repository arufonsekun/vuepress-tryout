import comp from "/home/arufonsekun/workspace/AlTech/vuepress-starter/docs/.vuepress/.temp/pages/app/1.0.html.vue"
const data = JSON.parse("{\"path\":\"/app/1.0.html\",\"title\":\"1.0\",\"lang\":\"pt-BR\",\"frontmatter\":{},\"headers\":[{\"level\":2,\"title\":\"Correções de bugs\",\"slug\":\"correcoes-de-bugs\",\"link\":\"#correcoes-de-bugs\",\"children\":[]},{\"level\":2,\"title\":\"Feature tal\",\"slug\":\"feature-tal\",\"link\":\"#feature-tal\",\"children\":[]},{\"level\":2,\"title\":\"Etc\",\"slug\":\"etc\",\"link\":\"#etc\",\"children\":[]},{\"level\":2,\"title\":\"Layouts and customization\",\"slug\":\"layouts-and-customization\",\"link\":\"#layouts-and-customization\",\"children\":[]}],\"git\":{},\"filePathRelative\":\"app/1.0.md\"}")
export { comp, data }

if (import.meta.webpackHot) {
  import.meta.webpackHot.accept()
  if (__VUE_HMR_RUNTIME__.updatePageData) {
    __VUE_HMR_RUNTIME__.updatePageData(data)
  }
}

if (import.meta.hot) {
  import.meta.hot.accept(({ data }) => {
    __VUE_HMR_RUNTIME__.updatePageData(data)
  })
}
