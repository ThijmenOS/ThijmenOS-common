import { ApplicationMetaData } from "./applicationtypes";
import { MimeTypes } from "./filesystemtypes";

export type SystemSettings = { sounds: any; notifications: any; storage: any };
export type PersonalisationSettings = { background: string };
export type AppSettings = {
  installedApps: Array<ApplicationMetaData>;
  defaultApps: { [key in MimeTypes]: string };
};
export type AccountSettings = any;

export type OSSettings = {
  system: SystemSettings;
  personalisation: PersonalisationSettings;
  apps: AppSettings;
  accounts: AccountSettings;
};

export type AppMetaData = {
  name: string;
  description: string;
  category: string;
  autostart: boolean;
  version: string;
  icon: string;
  exelocation: string;
  mimeTypes: Array<MimeTypes>;
};
