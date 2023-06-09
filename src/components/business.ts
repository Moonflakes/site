import { defineComponent, ref } from 'vue'
import ChipItem from './Chip.vue'
import Profil from './Profil.vue'

export default defineComponent({
  name: 'Business',
  components: {
    ChipItem,
    Profil,
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
      default: 0,
    },
    stack: {
      required: true,
      type: Array,
    },
    logo: {
      require: false,
      type: String,
    },
    team: {
      required: true,
      type: Array,
      default: () => {
        return [{
          name: '',
          job: '',
          image: '',
          tag: '',
        }]
      },
    },
  },
  setup (props) {
    const teamState = (tag: string, buttonFilter: string): boolean => {
      if (buttonFilter === 'all') { return true } else if (tag === buttonFilter) { return true }
      return false
    }

    const buttonFilter = ref('principal')
    return {
      teamState,
      buttonFilter,
    }
  },
})
