import { defineComponent, ref } from 'vue'

export default defineComponent({
  props: {
    msg: {
      required: false,
      type: String,
      default: 'Vite + Vue',
    },
  },
  setup (props) {
    const count = ref(1)

    return {
      count,
    }
  },
})
