export const siteData = JSON.parse("{\"base\":\"/vuepress-tryout/\",\"lang\":\"pt-BR\",\"title\":\"Avaliapp\",\"description\":\"O que há de novo no Avaliapp?\",\"head\":[[\"link\",{\"rel\":\"stylesheet\",\"href\":\"/styles/index.css\"}]],\"locales\":{}}")

if (import.meta.webpackHot) {
  import.meta.webpackHot.accept()
  if (__VUE_HMR_RUNTIME__.updateSiteData) {
    __VUE_HMR_RUNTIME__.updateSiteData(siteData)
  }
}

if (import.meta.hot) {
  import.meta.hot.accept(({ siteData }) => {
    __VUE_HMR_RUNTIME__.updateSiteData(siteData)
  })
}
