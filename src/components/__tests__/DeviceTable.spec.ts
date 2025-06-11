import { describe, expect, it } from 'vitest'
import { mount } from '@vue/test-utils'
import DeviceTable from '@/components/DeviceTable.vue'
import type { IncomingDevice } from '@/interfaces/device.ts'

describe('DeviceTable', () => {
  it('renders empty state', () => {
    const wrapper = mount(DeviceTable, { props: { devices: [] } })
    expect(wrapper.text()).toContain('No devices available')
  })

  it('renders table', () => {
    const device: IncomingDevice = {
      hostname: 'aland',
      device_type: "1u rack",
      os_type: "lin",
      owner: "tux"
    };
    const wrapper = mount(DeviceTable, { props: { devices: [device] } })
    expect(wrapper.text()).toContain(device.hostname)
    expect(wrapper.text()).toContain(device.device_type)
    expect(wrapper.text()).toContain(device.os_type)
    expect(wrapper.text()).toContain(device.owner)
  })
})
