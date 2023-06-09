import { defineComponent, toRefs } from 'vue'
import type { PropType } from 'vue'
import type TeamData from '../../types/teamData'

export default defineComponent({
  name: 'Profile',
  props: {
    mate: {
      required: true,
      type: Object as PropType<TeamData>,
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
