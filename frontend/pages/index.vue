<script setup lang="ts">
definePageMeta({
  title: "Dashboard",
  layout: "collapse",
  // middleware: 'auth',
});
</script>

<template>
  <div>
    Support Tickets
    <div class="grid grid-cols-6 gap-4">
      <BaseCard class="p-4">
        <span class="text-6xl"> 10 </span>
        <p>Total Companies</p>
      </BaseCard>
      <BaseCard class="p-4">
        <span class="text-6xl"> 20 </span>
        <p>Total Tickets</p>
      </BaseCard>
      <BaseCard class="p-4">
        <span class="text-6xl"> 35 </span>
        <p>Team Pending</p>
      </BaseCard>
      <BaseCard class="p-4">
        <span class="text-6xl"> 05 </span>
        <p>In progress</p>
      </BaseCard>
      <BaseCard class="p-4">
        <span class="text-6xl"> 70 </span>
        <p>Client Pending</p>
      </BaseCard>
      <BaseCard class="p-4">
        <span class="text-6xl"> 300 </span>
        <p>Completed</p>
      </BaseCard>
    </div>
    <!-- Padre -->
  </div>
</template>
