<script setup lang="ts">
const { isMobileOpen, isOpen } = useCollapse()

const isSearchOpen = useState('search-open', () => false)
</script>

<template>
  <div class="flex h-16 w-full items-center justify-between px-6">
    <div class="flex size-16 items-center justify-center transition-all duration-500" :class="isOpen ? 'w-32 pt-6' : 'w-14 -ml-2'">
			<slot name="logo">
				<Logo class="w-full" :class="isOpen ? 'h-16' : 'text-primary-500 h-12'" />
			</slot>
		</div>

    <!--Mobile button-->
    <button
      type="button"
      class="nui-mask nui-mask-blob flex h-10 w-10 cursor-pointer items-center justify-center text-muted-700 transition-colors duration-300 hover:bg-muted-200 dark:text-muted-400 dark:hover:bg-muted-800 lg:hidden"
      @click="isMobileOpen = false"
    >
      <Icon name="lucide:arrow-left" class="h-5 w-5" />
    </button>
  </div>
</template>
