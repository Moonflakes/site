import { defineComponent } from 'vue'

export default defineComponent({
  name: 'Profil',
  props: {
    name: {
      required: true,
      type: String,
    },
    job: {
      required: true,
      type: String,
    },
    image: {
      required: true,
      type: String,
    },
    show: {
      require: false,
      type: Boolean,
      default: false,
    },
  },
  setup (props) {
    return {
    }
  },
})
