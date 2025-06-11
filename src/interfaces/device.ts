/*
  Naming of these two interfaces may change. At the moment it's about protecting my sanity.

  ServerBoundDevice and ClientBoundDevice are potential candidate. Ideally change on the backend would happen.
 */

export interface OutgoingDevice {
  hostname: string;
  device_type: string;
  os_type: string;
  owner_name: string;
}

export interface IncomingDevice {
  hostname: string;
  device_type: string;
  os_type: string;
  owner: string;
}
