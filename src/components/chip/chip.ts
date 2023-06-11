import { defineComponent } from 'vue'

export default defineComponent({
  name: 'ChipItem',
  props: {
    chipName: {
      required: true,
      type: String,
    },
  },
  setup (props) {
    return {
    }
  },
})
