import { describe, expect, it, vi } from 'vitest'
import { getAllDevices, createDevice } from '@/services/device.ts'
import { fetchAllDevices, saveDevice } from '@/repositories/device.ts'
import type { OutgoingDevice } from '@/interfaces/device.ts'

const mocks = vi.hoisted(() => {
  return {
    fetchAllDevices: vi.fn(),
    saveDevice: vi.fn()
  }
});

vi.mock('@/repositories/device.ts', () => {
  return {
    fetchAllDevices: mocks.fetchAllDevices,
    saveDevice: mocks.saveDevice
  }
})

describe('Device service', () => {
  it('getAllDevices', () => {
    getAllDevices();
    expect(fetchAllDevices).toHaveBeenCalled();
  })

  it('createDevice', () => {
    const device: OutgoingDevice = {
      hostname: 'aland',
      device_type: "1u rack",
      os_type: "lin",
      owner_name: "tux"
    };
    createDevice(device);
    expect(saveDevice).toHaveBeenCalledWith(device);
  })
});
