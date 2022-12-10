export enum ApplicationMetaDataFields {
  applicationIdentifier = "applicationIdentifier",
  title = "title",
  iconLocation = "iconLocation",
  exeLocation = "exeLocation",
  mimeTypes = "mimeTypes",
  permissions = "permissions",
}

export interface IconMetadataShape {
  id: string;
  name: string;
  icon?: string;
  exeLocation: string;
}

export interface ApplicationMetaData extends IconMetadataShape {
  applicationIdentifier: string;
  mimeTypes: Array<string>;
  version: string;
  autostart: boolean;
  category: string;
  description: string;
}

export class IconMetadata implements IconMetadataShape {
  id: string;
  name: string;
  icon?: string;
  exeLocation: string;

  constructor(props: IconMetadataShape) {
    this.id = props.id;
    this.name = props.name;
    this.icon = props.icon;
    this.exeLocation = props.exeLocation;
  }
}

export type ApplicationMetaDataObject = {
  [key in ApplicationMetaDataFields]: any;
};
