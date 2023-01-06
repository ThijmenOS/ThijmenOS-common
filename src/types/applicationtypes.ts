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
  icon?: string;
  exeLocation: string;
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

  constructor(props: IconMetadataShape) {
    this.name = props.name;
    this.icon = props.icon;
    this.exeLocation = props.exeLocation;
  }
}

export type ApplicationMetaDataObject = {
  [key in ApplicationMetaDataFields]: any;
};
