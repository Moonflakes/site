import { defineComponent, computed } from 'vue'
import Business from './Business.vue'

export default defineComponent({
  name: 'Internship',
  components: {
    Business,
  },
  props: {
    city: {
      required: true,
      type: String,
      default: 'Paris',
    },
    dateFrom: {
      required: true,
      type: Date,
      default: '',
    },
    dateTo: {
      required: true,
      type: Date,
      default: '',
    },
    business: {
      required: true,
      type: Object,
      default: () => {
        return {
          name: '',
          team: [{
            name: '',
            job: '',
            image: '',
            tag: '',
          }],
          number: 0,
          stack: [],
          logo: '',
        }
      },
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
