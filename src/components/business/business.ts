import { defineComponent, ref } from 'vue'
import ChipItem from '../chip/Chip.vue'
import Profile from '../profile/Profile.vue'

interface TeamData {
  name: string
  jon: string
  image: string
  tag: string
}

export default defineComponent({
  name: 'Business',
  components: {
    ChipItem,
    Profile,
  },
  props: {
    name: {
      required: false,
      type: String,
      default: 'Paris',
    },
    number: {
      required: true,
      type: Number,
    },
    stack: {
      required: true,
      type: Array,
    },
    logo: {
      require: false,
      type: String,
      default: '',
    },
    team: {
      required: true,
      type: Array as Proptype<TeamData[]>,
    },
  },
  setup (props) {
    const teamState = (tag: string, buttonFilter: string): boolean => {
      if (buttonFilter === 'all') { return true } else if (tag === buttonFilter) { return true }
      return false
    }

    const switchMate = (team: string): void => {
      buttonFilter.value = team
    }

    const buttonFilter = ref('principal')

    return {
      teamState,
      buttonFilter,
      switchMate,
    }
  },
})
