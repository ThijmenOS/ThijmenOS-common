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

enum Access {
  r = "r",
  w = "w",
  x = "x",
}

export interface AccessObject {
  path: string;
  userId: string;
  userAccess: Map<Access, boolean>;
  groupId: string;
  groupAccess: Map<Access, boolean>;
}
