import { defineComponent } from 'vue'
import type { PropType } from 'vue'
import Business from '../business/Business.vue'
import type TeamData from '../../types/teamData'
import useFormattedDateRange from '../../composables/formattedDateRange'

type BusinessData = {
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
      type: Object as PropType<BusinessData>,
    },
  },
  setup (props) {
    const { formattedDateFrom, formattedDateTo } = useFormattedDateRange(props)

    return {
      formattedDateFrom,
      formattedDateTo,
    }
  },
})
