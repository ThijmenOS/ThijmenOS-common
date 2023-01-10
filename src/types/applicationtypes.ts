import { Permissions } from "../settings";
import { MimeTypes } from "./filesystemtypes";

export enum ApplicationMetaDataFields {
  applicationIdentifier = "applicationIdentifier",
  title = "title",
  iconLocation = "iconLocation",
  exeLocation = "exeLocation",
  mimeTypes = "mimeTypes",
  permissions = "permissions",
}

export interface IconMetadataShape {
  name: string;
  iconLocation?: string;
  exeLocation: string;
  mimeType: MimeTypes;
}

export interface ApplicationMetaData extends IconMetadataShape {
  applicationIdentifier: string;
  name: string;
  iconLocation: string;
  exeLocation: string;
  mimeTypes: Array<MimeTypes>;
  permissions: Array<Permissions>;
}

export class IconMetadata implements IconMetadataShape {
  name: string;
  icon?: string;
  exeLocation: string;
  mimeType: MimeTypes;

  constructor(props: IconMetadataShape) {
    this.name = props.name;
    this.icon = props.iconLocation;
    this.exeLocation = props.exeLocation;
    this.mimeType = props.mimeType;
  }
}

export type ApplicationMetaDataObject = {
  [key in ApplicationMetaDataFields]: any;
};
