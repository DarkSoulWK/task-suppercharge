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

const colors = [
  "bg-red-500",
  "bg-blue-500",
  "bg-green-500",
  "bg-yellow-500",
  "bg-purple-500",
  "bg-pink-500",
];

const colorStatNumber = (name: string) => {
  return colors[name];
};
</script>

<template>
  <div>
    Support Tickets
    <div class="grid grid-cols-6 gap-4">
      <BaseCard class="p-4" v-for="(item, index) in statics" :key="index">
        <span class="text-6xl" :class="colorStatNumber(item.name)"> {{ item.number }} </span>
        <p>{{ item.name }}</p>
      </BaseCard>
    </div>
    <!-- Padre -->
  </div>
</template>
