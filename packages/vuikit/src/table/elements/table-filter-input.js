import { mergeData } from '@vuikit/core/utils/vue'

export default {
  functional: true,
  props: {
    value: {
      type: String,
      default: ''
    }
  },
  render (h, { props, data, listeners }) {
    const { value } = props

    return h('input', mergeData(data, {
      class: 'uk-input uk-form-small uk-width-1-1',
      attrs: { type: 'text' },
      domProps: { value }
    }))
  }
}