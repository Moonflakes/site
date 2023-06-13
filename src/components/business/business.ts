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
      required: true,
      type: String,
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
    const buttonFilter = ref('principal')
    const switchMate = (team: string): void => {
      buttonFilter.value = team
    }
    const mateIsShown = (tag: string): boolean => {
      if (buttonFilter.value === 'all' || tag === buttonFilter.value) { return true }
      return false
    }

    return {
      buttonFilter,
      switchMate,
      mateIsShown,
    }
  },
})
