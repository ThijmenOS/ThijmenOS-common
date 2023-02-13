import { ApplicationMetaData } from "./applicationtypes";
import { MimeTypes } from "./filesystemtypes";

export type User = {
  userId: string;
  username: string;
  email: string;
  password: string;
  pincode?: string;
  preferences: Personal;
};

export type Sound = {
  volume: number;
  inputDevice: any;
  outputDevice: any;
  volumeMixer: any;
};

export type Storage = any;

export type Bluetooth = any;

export type Network = any;

export type Personal = {
  background: string;
  colors: any;
  themes: any;
  lockscreen: any;
  startMenu: any;
  fonts: any;
};

export type Applications = {
  installedApplications: Array<ApplicationMetaData>;
  defaultApplications: { [key in MimeTypes]: string };
  startupApplications: any;
};

export type Accounts = Array<User>;

export type OSSettings = {
  sound: Sound;
  storage: Storage;
  bluetooth: Bluetooth;
  network: Network;
  applications: Applications;
  accounts: Accounts;
};
