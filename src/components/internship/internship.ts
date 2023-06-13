import { defineComponent, computed } from 'vue'
import Business from '../business/Business.vue'
import { type TeamData } from '../business/business.ts'

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
    const formatedDate = (date: Date | string): string => {
      const dateTime = new Date(date)
      const month = dateTime.toLocaleString('default', { month: 'long' })
      const year = dateTime.getFullYear()
      return `${month} ${year}`
    }
    const formattedDateFrom = computed(() => formatedDate(props.dateFrom))
    const formattedDateTo = computed(() => formatedDate(props.dateTo))
    return {
      formattedDateFrom,
      formattedDateTo,
    }
  },
})
