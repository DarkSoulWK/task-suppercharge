import { defineStore } from 'pinia'

export const darkModeStore = defineStore(
  'darkMode',
  () => {
    const isDarkmode = ref(false)

    const toggleDarkmode = () => {
      isDarkmode.value = !isDarkmode.value
    }

    return { isDarkmode, toggleDarkmode }
  },
  { persist: { storage: persistedState.cookies } }
)
