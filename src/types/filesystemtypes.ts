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
