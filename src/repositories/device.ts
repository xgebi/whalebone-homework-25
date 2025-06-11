import type { IncomingDevice, OutgoingDevice } from '@/interfaces/device.ts'


export async function fetchAllDevices(): Promise<IncomingDevice[]> {
  const response = await fetch('http://localhost:8081/list', {
    method: 'GET',
    headers: {
      Authorization: "devices-storage"
    }
  });
  if (response.ok) {
    return response.json();
  }
  return [];
}

export async function saveDevice(device: OutgoingDevice): Promise<string> {
  const response = await fetch('http://localhost:8081/save', {
    method: 'POST',
    headers: {
      Authorization: "devices-storage"
    },
    body: JSON.stringify(device),
  });
  if (response.ok) {
    return response.json();
  }
  return "fail";
}
