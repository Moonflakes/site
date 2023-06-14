import { defineComponent } from 'vue'
import Business from '../business/Business.vue'
import { type TeamData } from '../business/business'
import { useFormattedDateRange } from '../../composables/hooks'

interface BusinessData {
  name: string
  team: TeamData[]
  number: number
  stack: string[]
  logo: string
}

export default defineComponent({
  name: 'Internship',
  components: {
    Business,
  },
  props: {
    city: {
      required: true,
      type: String,
    },
    dateFrom: {
      required: true,
      type: Date,
    },
    dateTo: {
      required: true,
      type: Date,
    },
    business: {
      required: true,
      type: Object as Proptype<BusinessData>,
    },
  },
  setup (props) {
    return useFormattedDateRange(props)
  },
})
