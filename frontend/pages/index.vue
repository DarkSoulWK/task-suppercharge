<script setup lang="ts">
definePageMeta({
  title: "Dashboard",
  layout: "collapse",
  // middleware: 'auth',
});

const statics = [
  {
    name: "Total Companies",
    number: 10,
  },
  {
    name: "Total Tickets",
    number: 20,
  },
  {
    name: "Team Pending",
    number: 35,
  },
  {
    name: "In progress",
    number: 5,
  },
  {
    name: "Client Pending",
    number: 70,
  },
  {
    name: "Completed",
    number: 300,
  },
];
</script>

<template>
  <div>
    Support Tickets
    <div class="grid grid-cols-6 gap-4">
      <BaseCard class="p-4" v-for="(item, index) in statics" :key="index">
        <span class="text-6xl"> {{ item.number }} </span>
        <p>{{ item.name }}</p>
      </BaseCard>
    </div>
    <!-- Padre -->
  </div>
</template>
