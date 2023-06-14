function formatedDate (date: Date | string): string {
  const dateTime = new Date(date)
  const month = dateTime.toLocaleString('default', { month: 'long' })
  const year = dateTime.getFullYear()
  return `${month} ${year}`
}

export const useFormattedDateRange = ({ dateFrom, dateTo }): object => {
  const formattedDateFrom = formatedDate(dateFrom)
  const formattedDateTo = formatedDate(dateTo)
  return {
    formattedDateFrom,
    formattedDateTo,
  }
}
