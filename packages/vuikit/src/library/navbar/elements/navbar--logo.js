import { mergeData } from 'vuikit/src/util/vue'

export default {
  functional: true,
  render (h, { data, children }) {
    return h('span', mergeData(data, {
      class: 'uk-navbar-item uk-logo'
    }), children)
  }
}
