export enum ApplicationMetaDataFields {
  applicationIdentifier = "applicationIdentifier",
  title = "title",
  iconLocation = "iconLocation",
  exeLocation = "exeLocation",
  mimeTypes = "mimeTypes",
}

export type ApplicationMetaData = {
  applicationIdentifier: string;
  title: string;
  iconLocation: string;
  exeLocation: string;
  mimeTypes: Array<string>;
};

export type ApplicationMetaDataObject = {
  [key in ApplicationMetaDataFields]: any;
};

export type Mkdir = {
  directoryPath: string;
  name: string;
};

export type Directory = {
  filePath: string;
  isDir: boolean;
};

export type Path = string;

export enum MimeTypes {
  txt = "txt",
  thijm = "thijm",
}

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

export enum ClassOperation {
  ADD,
  REMOVE,
}
