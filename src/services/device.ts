import { fetchAllDevices, saveDevice } from '@/repositories/device.ts'
import type { OutgoingDevice } from '@/interfaces/device.ts'

export async function getAllDevices() {
  return fetchAllDevices();
}

export async function createDevice(device: OutgoingDevice) {
  return saveDevice(device);
}
