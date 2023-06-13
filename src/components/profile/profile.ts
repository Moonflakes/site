import { defineComponent, toRefs } from 'vue'
import { type TeamData } from '../business/business.ts'

export default defineComponent({
  name: 'Profile',
  props: {
    mate: {
      required: true,
      type: Object as Proptype<TeamData>,
    },
  },
  setup (props) {
    const { name, job, image } = toRefs(props.mate)
    return {
      name,
      job,
      image,
    }
  },
})
