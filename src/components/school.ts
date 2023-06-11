import { defineComponent, computed } from 'vue'

export default defineComponent({
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
  },
  setup (props) {
    const formatedDate = (date: Date | string): string => {
      // eslint-disable-next-line @typescript-eslint/naming-convention
      //   const date_regex = /^(0[1-9]|1[0-2])\/(0[1-9]|1\d|2\d|3[01])\/(19|20)\d{2}$/
      //   if (!(date_regex.test(date))) {
      //     return 'la date doit être sous format \'dd/mm/yyyy\''
      //   }
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
