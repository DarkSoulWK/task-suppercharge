<script setup lang="ts">
const { isOpen } = useCollapse()
</script>

<template>
  <div
    class="flex h-16 w-full items-center gap-4 transition-all duration-150"
    :class="!isOpen ? 'px-2 justify-center' : 'px-6'"
  >
    <!--Account menu-->
    <AccountMenu />
    <span
      class="whitespace-nowrap font-sans text-sm text-muted-500 dark:text-muted-400/80"
      :class="!isOpen ? 'hidden' : 'block'"
    >
      My Account
    </span>
  </div>
</template>
