function formattedDate (date: Date | string): string {
  const dateTime = new Date(date)
  const month = dateTime.toLocaleString('default', { month: 'long' })
  const year = dateTime.getFullYear()
  return `${month} ${year}`
}

const useFormattedDateRange = ({ dateFrom, dateTo }): object => {
  const formattedDateFrom = formattedDate(dateFrom)
  const formattedDateTo = formattedDate(dateTo)
  return {
    formattedDateFrom,
    formattedDateTo,
  }
}

export { useFormattedDateRange }
