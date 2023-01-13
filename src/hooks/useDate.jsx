import { useContext, useEffect } from 'react'
import { Context } from '../context'

function useDate () {
  const { tomorrow, setTomorrow, dayAfterTomorrow, setDayAfterTomorrow } =
    useContext(Context)
  const days = [
    'Sunday',
    'Monday',
    'Tuesday',
    'Wednesday',
    'Thursday',
    'Friday',
    'Saturday'
  ]
  const months = [
    'January',
    'February',
    'March',
    'April',
    'May',
    'June',
    'July',
    'August',
    'September',
    'October',
    'November',
    'December'
  ]
  const f = new Date()
  const day = days[f.getDay()]
  const date = f.getDate()
  const month = months[f.getMonth()]
  useEffect(() => {
    const lastDay = () => {
      if (days[f.getDay() + 1] === undefined) {
        setTomorrow(days[0])
      } else {
        setTomorrow(days[f.getDay() + 1])
      }
      if (days[f.getDay() + 2] === undefined) {
        setDayAfterTomorrow(days[0])
      } else {
        setDayAfterTomorrow(days[f.getDay() + 2])
      }
    }
    lastDay()
  }, [tomorrow, dayAfterTomorrow])
  return { day, date, month }
}

export { useDate }
