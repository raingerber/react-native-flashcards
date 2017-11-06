import {AsyncStorage} from 'react-native'
import {Notifications, Permissions} from 'expo'

const NOTIFICATION_KEY = 'react-native-flashcards:notifications'

function createNotification () {
  return {
    title: 'Take a quiz!',
    body: 'Don\'t forget to quiz yourself today!',
    ios: {
      sound: true
    },
    android: {
      sound: true,
      priority: 'high',
      sticky: false,
      vibrate: true
    }
  }
}

function clearLocalNotification () {
  return AsyncStorage.removeItem(NOTIFICATION_KEY)
    .then(() => Notifications.cancelAllScheduledNotificationsAsync())
}

// date for next day at 8:00
function getDate () {
  const d = new Date()
  d.setDate(d.getDate() + 1)
  d.setHours(20)
  d.setMinutes(0)
  return d
}

function setLocalNotification () {
  return AsyncStorage.getItem(NOTIFICATION_KEY)
    .then(JSON.parse)
    .then((data) => {
      return data === null ? Permissions.askAsync(Permissions.NOTIFICATIONS) : {}
    })
    .then(({status}) => {
      if (status !== 'granted') {
        return
      }

      Notifications.cancelAllScheduledNotificationsAsync()
      Notifications.scheduleLocalNotificationAsync(
        createNotification(),
        {
          time: getDate(),
          repeat: 'day'
        }
      )

      AsyncStorage.setItem(NOTIFICATION_KEY, JSON.stringify(true))
    })
}

export {
  clearLocalNotification,
  createNotification,
  setLocalNotification
}
