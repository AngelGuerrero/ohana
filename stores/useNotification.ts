import { defineStore } from 'pinia'
import { ref } from 'vue'
import { v4 as uuidv4 } from 'uuid'
import moment from 'moment'

export interface Notification {
  id: string
  message: string
  type: 'success' | 'error' | 'warning' | 'info'
  duration?: number
  createdAt: Date
}

export const useNotificationStore = defineStore('notification', () => {
  const notifications = ref<Notification[]>([])

  const addNotification = (notification: Omit<Notification, 'id' | 'createdAt'>) => {
    const newNotification: Notification = {
      ...notification,
      id: uuidv4(),
      createdAt: moment().toDate(),
      duration: notification.duration || 3000
    }

    notifications.value.push(newNotification)

    // Auto remove after duration
    if (newNotification.duration && newNotification.duration > 0) {
      setTimeout(() => {
        removeNotification(newNotification.id)
      }, newNotification.duration)
    }
  }

  const removeNotification = (id: string) => {
    const index = notifications.value.findIndex(n => n.id === id)
    if (index > -1) {
      notifications.value.splice(index, 1)
    }
  }

  const clearAll = () => {
    notifications.value = []
  }

  // Convenience methods
  const showSuccess = (message: string, duration?: number) => {
    addNotification({ message, type: 'success', duration })
  }

  const showError = (message: string, duration?: number) => {
    addNotification({ message, type: 'error', duration })
  }

  const showWarning = (message: string, duration?: number) => {
    addNotification({ message, type: 'warning', duration })
  }

  const showInfo = (message: string, duration?: number) => {
    addNotification({ message, type: 'info', duration })
  }

  return {
    notifications,
    addNotification,
    removeNotification,
    clearAll,
    showSuccess,
    showError,
    showWarning,
    showInfo
  }
})
