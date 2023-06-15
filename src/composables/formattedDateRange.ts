import { computed } from 'vue'

type DateRange = {
  dateFrom: string
  dateTo: string
}

function formattedDate (date: Date | string): string {
  const dateTime = new Date(date)
  const month = dateTime.toLocaleString('default', { month: 'long' })
  const year = dateTime.getFullYear()

  return `${month} ${year}`
}

const useFormattedDateRange = ({ dateFrom, dateTo }: DateRange) => {
  const formattedDateFrom = computed(() => formattedDate(dateFrom))
  const formattedDateTo = computed(() => formattedDate(dateTo))

  return {
    formattedDateFrom,
    formattedDateTo,
  }
}

export default useFormattedDateRange
