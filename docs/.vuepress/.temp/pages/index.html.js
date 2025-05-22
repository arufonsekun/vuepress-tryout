import comp from "/home/arufonsekun/workspace/AlTech/vuepress-starter/docs/.vuepress/.temp/pages/index.html.vue"
const data = JSON.parse("{\"path\":\"/\",\"title\":\"Home\",\"lang\":\"pt-BR\",\"frontmatter\":{\"home\":true,\"title\":\"Home\",\"heroImage\":\"logo.png\",\"actions\":[{\"text\":\"Webapp\",\"link\":\"/web/1.0.html\",\"type\":\"primary\"},{\"text\":\"Aplicativo\",\"link\":\"/app/1.0.html\",\"type\":\"primary\"}],\"footer\":\"Licença MIT | Todos os direitos reservados © 2024-2025 ALTecnologia\"},\"headers\":[],\"git\":{\"updatedTime\":1747876041000,\"contributors\":[{\"name\":\"Junior Vitor Ramisch\",\"username\":\"\",\"email\":\"junior.ramisch@gmail.com\",\"commits\":2}],\"changelog\":[{\"hash\":\"f448b8ea5087801ad14b2e06297e48d022e006e1\",\"time\":1747876041000,\"email\":\"junior.ramisch@gmail.com\",\"author\":\"Junior Vitor Ramisch\",\"message\":\"chore: fix images path\"},{\"hash\":\"7734b4785d8c700a6855f42544292a794d14e73b\",\"time\":1747873739000,\"email\":\"junior.ramisch@gmail.com\",\"author\":\"Junior Vitor Ramisch\",\"message\":\"Initial commit\"}]},\"filePathRelative\":\"README.md\"}")
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
