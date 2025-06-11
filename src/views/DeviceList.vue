<script setup lang="ts">
  import DeviceTable from '@/components/DeviceTable.vue'
  import { useDeviceStore } from '@/stores/device.ts'

  const deviceStore = useDeviceStore();
  deviceStore.fetchDevices();
</script>

<template>
  <main>
    <h1>List of devices</h1>
    <RouterLink to="/new">Add new device</RouterLink>
    <DeviceTable :devices="deviceStore.list"></DeviceTable>
  </main>
</template>

<style scoped>

</style>
