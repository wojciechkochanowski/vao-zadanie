export function formatDate(timestamp: number, full: boolean = false){
  const a = new Date(timestamp)
  const year = a.getFullYear()
  const month = a.getMonth().toLocaleString('en-US', {
    minimumIntegerDigits: 2,
  })
  const date = a.getDate().toLocaleString('en-US', {
    minimumIntegerDigits: 2,
  })
  let time = date + '.' + month + '.' + year
  if (full){
    const hour = a.getHours()
    const min = a.getMinutes()
    const sec = a.getSeconds()
    time = time + ' ' + hour + ':' + min + ':' + sec 
  }
  return time
}