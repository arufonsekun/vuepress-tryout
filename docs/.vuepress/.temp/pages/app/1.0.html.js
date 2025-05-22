import comp from "/home/arufonsekun/workspace/AlTech/vuepress-starter/docs/.vuepress/.temp/pages/app/1.0.html.vue"
const data = JSON.parse("{\"path\":\"/app/1.0.html\",\"title\":\"1.0\",\"lang\":\"pt-BR\",\"frontmatter\":{},\"headers\":[{\"level\":2,\"title\":\"Correções de bugs\",\"slug\":\"correcoes-de-bugs\",\"link\":\"#correcoes-de-bugs\",\"children\":[]},{\"level\":2,\"title\":\"Feature tal\",\"slug\":\"feature-tal\",\"link\":\"#feature-tal\",\"children\":[]},{\"level\":2,\"title\":\"Etc\",\"slug\":\"etc\",\"link\":\"#etc\",\"children\":[]},{\"level\":2,\"title\":\"Layouts and customization\",\"slug\":\"layouts-and-customization\",\"link\":\"#layouts-and-customization\",\"children\":[]}],\"git\":{\"updatedTime\":1747873739000,\"contributors\":[{\"name\":\"Junior Vitor Ramisch\",\"username\":\"\",\"email\":\"junior.ramisch@gmail.com\",\"commits\":1}],\"changelog\":[{\"hash\":\"7734b4785d8c700a6855f42544292a794d14e73b\",\"time\":1747873739000,\"email\":\"junior.ramisch@gmail.com\",\"author\":\"Junior Vitor Ramisch\",\"message\":\"Initial commit\"}]},\"filePathRelative\":\"app/1.0.md\"}")
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
