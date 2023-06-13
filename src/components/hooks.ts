export function useFormatedDate (date: Date | string): string {
  const dateTime = new Date(date)
  const month = dateTime.toLocaleString('default', { month: 'long' })
  const year = dateTime.getFullYear()
  return `${month} ${year}`
}
