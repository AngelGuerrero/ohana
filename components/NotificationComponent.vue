<template>
  <Teleport to="body">
    <div class="fixed top-4 right-4 z-[9999] space-y-2">
      <TransitionGroup name="notification" tag="div" class="space-y-2">
        <div
          v-for="notification in notifications"
          :key="notification.id"
          :class="[
            'flex items-center space-x-3 px-4 py-3 rounded-lg shadow-lg max-w-sm transition-all duration-300 transform',
            getNotificationClasses(notification.type),
          ]"
        >
          <!-- Icon -->
          <div class="flex-shrink-0">
            <span :class="getIconClasses(notification.type)">
              {{ getIcon(notification.type) }}
            </span>
          </div>

          <!-- Message -->
          <div class="flex-1 min-w-0">
            <p class="text-sm font-medium">
              {{ notification.message }}
            </p>
          </div>

          <!-- Close button -->
          <button
            @click="removeNotification(notification.id)"
            class="flex-shrink-0 text-current transition-opacity opacity-70 hover:opacity-100"
          >
            <span class="text-lg">×</span>
          </button>
        </div>
      </TransitionGroup>
    </div>
  </Teleport>
</template>

<script setup lang="ts">
  import { useNotificationStore } from '~/stores/useNotification';
  import type { Notification } from '~/stores/useNotification';
  import { storeToRefs } from 'pinia';

  const notificationStore = useNotificationStore();

  const { notifications } = storeToRefs(notificationStore);
  const { removeNotification } = notificationStore;

  const getNotificationClasses = (type: Notification['type']) => {
    const baseClasses = 'text-white';

    switch (type) {
      case 'success':
        return `${baseClasses} bg-green-500`;
      case 'error':
        return `${baseClasses} bg-red-500`;
      case 'warning':
        return `${baseClasses} bg-yellow-500`;
      case 'info':
        return `${baseClasses} bg-blue-500`;
      default:
        return `${baseClasses} bg-gray-500`;
    }
  };

  const getIconClasses = (type: Notification['type']) => {
    const baseClasses = 'text-xl';

    switch (type) {
      case 'success':
        return `${baseClasses} text-green-100`;
      case 'error':
        return `${baseClasses} text-red-100`;
      case 'warning':
        return `${baseClasses} text-yellow-100`;
      case 'info':
        return `${baseClasses} text-blue-100`;
      default:
        return `${baseClasses} text-gray-100`;
    }
  };

  const getIcon = (type: Notification['type']) => {
    switch (type) {
      case 'success':
        return '✅';
      case 'error':
        return '❌';
      case 'warning':
        return '⚠️';
      case 'info':
        return 'ℹ️';
      default:
        return '📢';
    }
  };
</script>

<style scoped>
  .notification-enter-active,
  .notification-leave-active {
    transition: all 0.3s ease;
  }

  .notification-enter-from {
    opacity: 0;
    transform: translateX(100%);
  }

  .notification-leave-to {
    opacity: 0;
    transform: translateX(100%);
  }

  .notification-move {
    transition: transform 0.3s ease;
  }
</style>
