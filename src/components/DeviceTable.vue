<script setup lang="ts">
  import type { IncomingDevice } from '@/interfaces/device.ts'

  defineProps<{
    devices: IncomingDevice[]
  }>()
</script>

<template>
  <table v-if="devices.length > 0">
      <thead>
        <tr>
          <th>Hostname</th>
          <th>Device type</th>
          <th>Operating system</th>
          <th>Owner name</th>
        </tr>
      </thead>
      <tbody>
        <tr v-for="(device, idx) in devices" v-bind:key="idx">
          <td>{{ device.hostname }}</td>
          <td>{{ device.device_type }}</td>
          <td>{{ device.os_type }}</td>
          <td>{{ device.owner }}</td>
        </tr>
      </tbody>
    </table>
    <section v-else>
      No devices available
    </section>
</template>

<style scoped>

</style>
