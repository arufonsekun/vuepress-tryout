import comp from "/home/arufonsekun/workspace/AlTech/vuepress-starter/docs/.vuepress/.temp/pages/index.html.vue"
const data = JSON.parse("{\"path\":\"/\",\"title\":\"Home\",\"lang\":\"pt-BR\",\"frontmatter\":{\"home\":true,\"title\":\"Home\",\"heroImage\":\"./images/logo.png\",\"actions\":[{\"text\":\"Ver atualizações do Webapp\",\"link\":\"/web/1.0.html\",\"type\":\"primary\"},{\"text\":\"Ver atualizações Aplicativo\",\"link\":\"/app/1.0.html\",\"type\":\"primary\"}],\"footer\":\"Licença MIT | Todos os direitos reservados © 2024-2025 ALTecnologia\"},\"headers\":[],\"git\":{},\"filePathRelative\":\"README.md\"}")
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
