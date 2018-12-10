import Vue from 'vue'
import VueI18n from 'vue-i18n'
import locale from 'element-ui/lib/locale'
import elementZhCNLocale from 'element-ui/lib/locale/lang/zh-CN' // 简体中文
import elementEnLocale from 'element-ui/lib/locale/lang/en' // 英文
import zhCNLocale from './lang/zh_CN'
import zhEnLocale from './lang/en'

Vue.use(VueI18n)

const messages = {
  zh_CN: {
    ...zhCNLocale,
    ...elementZhCNLocale
  },
  en: {
    ...zhEnLocale,
    ...elementEnLocale
  }
}

const i18n = new VueI18n({
  locale: localStorage.lang || 'zh_CN', // set locale 
  messages // set locale messages
})

locale.i18n((key, value) => i18n.t(key, value))

export default i18n
