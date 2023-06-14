import { defineComponent, computed } from 'vue'
import { useFormatedDate } from '../hooks'

export default defineComponent({
  name: 'SchoolItem',
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
  },
  setup (props) {
    const formattedDateFrom = computed(() => useFormatedDate(props.dateFrom))
    const formattedDateTo = computed(() => useFormatedDate(props.dateTo))

    return {
      formattedDateFrom,
      formattedDateTo,
    }
  },
})
