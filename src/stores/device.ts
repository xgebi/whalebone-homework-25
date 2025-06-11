import { ref, type Ref } from 'vue'
import { defineStore } from 'pinia'
import { getAllDevices } from '@/services/device.ts'
import type { IncomingDevice } from '@/interfaces/device.ts'

export const useDeviceStore = defineStore('counter', () => {
  const list: Ref<IncomingDevice[]> = ref([])
  async function fetchDevices() {
    list.value = await getAllDevices();
  }

  return { list, fetchDevices }
})
