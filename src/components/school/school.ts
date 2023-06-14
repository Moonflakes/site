import { defineComponent } from 'vue'
import { useFormattedDateRange } from '../../composables/hooks'

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
    return useFormattedDateRange(props)
  },
})
