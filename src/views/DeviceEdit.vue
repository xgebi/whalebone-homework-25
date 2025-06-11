<script setup lang="ts">
import { createDevice } from '@/services/device.ts'
import { reactive, ref } from 'vue'
import { useRouter } from 'vue-router'
import type { OutgoingDevice } from '@/interfaces/device.ts'
import type { Errors } from '@/interfaces/errors.ts'

const router = useRouter();

const device = ref({
  hostname: '',
  device_type: '',
  os_type: '',
  owner_name: '',
})

const errors: Errors = reactive({ list: [] })

function checkDeviceCompat() {

}

async function formSubmitted(e: Event) {
  e.preventDefault()
  errors.list = [];
  Object.keys(device.value).forEach((key: string) => {
    if (device.value[key as keyof OutgoingDevice].length === 0) {
      errors.list.push(key);
    }
  })
  if (errors.list.length === 0) {
    await createDevice({
      hostname: device.value.hostname,
      device_type: device.value.device_type,
      os_type: device.value.os_type,
      owner_name: device.value.owner_name,
    })
    await router.push('/')
  }
}
</script>

<template>
  <main>
    <h1>Add new device</h1>
    <RouterLink to="/">Back to the list</RouterLink>
    <form @submit="formSubmitted">
      <div data-testid="error-hostname" class="error-box" v-if="errors.list.indexOf('hostname') >= 0">Hostname is empty</div>
      <div data-testid="error-device" class="error-box" v-if="errors.list.indexOf('device_type') >= 0">Device Type is empty</div>
      <div data-testid="error-os" class="error-box" v-if="errors.list.indexOf('os_type') >= 0">OS Type is empty</div>
      <div data-testid="error-owner" class="error-box" v-if="errors.list.indexOf('owner_name') >= 0">Owner Name is empty</div>
      <section>
        <label for="hostname">Hostname:</label>
        <input type="text" id="hostname" name="hostname" v-model="device.hostname" />
      </section>
      <section>
        <label for="deviceType">Device Type:</label>
        <select id="deviceType" v-model="device.device_type" @change="checkDeviceCompat">
          <option></option>
          <option value="pc">PC</option>
          <option value="laptop">Laptop</option>
          <option value="mobile">Mobile</option>
        </select>
      </section>
      <section>
        <label for="osType">Operating System Type:</label>
        <select id="osType" v-model="device.os_type" @change="checkDeviceCompat">
          <option></option>
          <option value="win" v-if="device.device_type !== 'mobile'">Windows</option>
          <option value="lin" v-if="device.device_type !== 'mobile'">Linux</option>
          <option value="macOS" v-if="device.device_type !== 'mobile'">Mac OS</option>
          <option value="iOS" v-if="device.device_type === 'mobile'">iOS</option>
          <option value="android" v-if="device.device_type === 'mobile'">Android</option>
        </select>
      </section>
      <section>
        <label for="ownerName">Owner name:</label>
        <input type="text" id="ownerName" name="ownerName" v-model="device.owner_name" />
      </section>
      <section>
        <button data-testid="add-device">Add</button>
      </section>
    </form>
  </main>
</template>

<style scoped></style>
