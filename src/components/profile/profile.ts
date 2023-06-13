import { defineComponent } from 'vue'

export default defineComponent({
  name: 'Profile',
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
    mateIsShown: {
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
