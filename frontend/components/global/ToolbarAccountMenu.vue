<script setup lang="ts">
import { Menu, MenuButton, MenuItem, MenuItems } from '@headlessui/vue'
import { authStore } from '~/stores/auth'

const router = useRouter()
const { setSession, session } = authStore()
const toaster = useToaster()
const handleLogout = async () => {
  const { error } = await useRatingFetch({
    url: '/logout',
    method: 'DELETE',
  })

  if (error.value) {
    toaster.clearAll()
    toaster.show({
      title: 'Error',
      message: `Error connecting to server`,
      color: 'danger',
      icon: 'lucide:alert-octagon',
      closable: true,
    })
    return
  }

  setSession({
    token: null,
    user: null,
  })

  toaster.clearAll()
  toaster.show({
    title: 'Success',
    message: `You have been logged out`,
    color: 'success',
    icon: 'ph:user-circle-fill',
    closable: true,
  })

  navigateTo('/auth/login')
}
</script>

<template>
  <div class="group inline-flex items-center justify-center text-right z-[200]">
    <Menu as="div" class="relative h-9 w-9 text-left" v-slot="{ close }">
      <MenuButton as="template">
        <button
          type="button"
          class="inline-flex h-9 w-9 items-center justify-center rounded-full ring-1 ring-transparent transition-all duration-300 group-hover:ring-primary-500 group-hover:ring-offset-4 dark:ring-offset-muted-900"
        >
          <div
            class="relative inline-flex h-9 w-9 items-center justify-center rounded-full"
          >
            <img
              src="/img/icons/SCIcon.svg"
              class="max-w-full rounded-full object-cover shadow-sm dark:border-transparent"
              alt=""
            />
          </div>
        </button>
      </MenuButton>

      <Transition
        enter-active-class="transition duration-100 ease-out"
        enter-from-class="transform scale-95 opacity-0"
        enter-to-class="transform scale-100 opacity-100"
        leave-active-class="transition duration-75 ease-in"
        leave-from-class="transform scale-100 opacity-100"
        leave-to-class="transform scale-95 opacity-0"
      >
        <MenuItems
          class="absolute end-0 mt-2 w-64 origin-top-right divide-y divide-muted-100 rounded-md border border-muted-200 bg-white shadow-lg focus:outline-none dark:divide-muted-700 dark:border-muted-700 dark:bg-muted-800"
        >
          <div class="p-6 text-center">
            <div
              class="relative mx-auto flex h-20 w-20 items-center justify-center rounded-full"
            >
              <img
                src="/img/icons/SCIcon.svg"
                class="max-w-full rounded-full object-cover shadow-sm dark:border-transparent"
                alt=""
              />
            </div>
            <div class="mt-3">
              <h6
                class="font-heading text-sm font-medium text-muted-800 dark:text-white"
              >
              {{ session.user.name }}
              </h6>
              <p class="mb-4 font-sans text-xs text-muted-400"> {{ session.user.role.name }} </p>
              <BaseButton
                to="/profile/profile-edit"
                shape="curved"
                class="w-full"
                @click.passive="close"
                >Manage Account</BaseButton
              >
            </div>
          </div>
          <div class="p-6">
            <BaseButton
              shape="curved"
              class="w-full"
              @click.passive="handleLogout"
            >
              Logout
            </BaseButton>
          </div>
        </MenuItems>
      </Transition>
    </Menu>
  </div>
</template>