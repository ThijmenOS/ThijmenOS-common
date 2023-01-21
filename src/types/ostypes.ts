import { ApplicationMetaData } from "./applicationtypes";
import { MimeTypes } from "./filesystemtypes";

export type SystemSettings = { sounds: any; notifications: any; storage: any };
export type PersonalisationSettings = { background: string };
export type AppSettings = {
  installedApps: Array<ApplicationMetaData>;
  defaultApps: { [key in MimeTypes]: string };
};
export type User = {
  userId: string;
  username: string;
  email: string;
  password: string;
  pincode?: string;
};
export type AccountSettings = Array<User>;

export type OSSettings = {
  system: SystemSettings;
  personalisation: PersonalisationSettings;
  apps: AppSettings;
  accounts: AccountSettings;
};
