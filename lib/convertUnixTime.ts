import { DateTime } from 'luxon'

export const convertUnixTime = (
  unixTime: number,
  type: string = 'seconds',
  showSeconds: boolean = false,
  clock: string = '12'
) => {
  if (type == 'seconds' || type == 's') {
    return DateTime.fromSeconds(unixTime).toFormat(
      `${
        showSeconds
          ? `${clock == '12' ? 'h:mm:ss a' : clock == '24' ? 'H:mm:ss' : ''}`
          : `${clock == '12' ? 'h:mm a' : clock == '24' ? 'H:mm' : ''}`
      }`
    )
  } else if (type == 'milliseconds' || type == 'm') {
    return DateTime.fromMillis(unixTime).toFormat(
      `${
        showSeconds
          ? `${clock == '12' ? 'h:mm:ss a' : clock == '24' ? 'H:mm:ss' : ''}`
          : `${clock == '12' ? 'h:mm a' : clock == '24' ? 'H:mm' : ''}`
      }`
    )
  }
}
