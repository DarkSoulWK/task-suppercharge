<template>
  <BaseThemeToggle :inverted="isDarkmode" @click="toggleDarkmode" />
</template>
<script lang="ts" setup>
import { darkModeStore } from '~/stores/darkmode'

const { isDarkmode, toggleDarkmode } = darkModeStore()
</script>
