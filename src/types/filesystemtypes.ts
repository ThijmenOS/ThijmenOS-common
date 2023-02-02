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
  dir = "dir",
}

export enum Access {
  r = "r",
  w = "w",
  x = "x",
}

export const AccessObjectError = "####";

export interface AccessObject {
  path: string;
  userId: string;
  userAccess: Map<Access, boolean>;
  groupId: string;
  groupAccess: Map<Access, boolean>;
}

export type AccessObjectMap = { [key in string]: AccessObject };
export type AccessMap = { [key in Access]: boolean };
