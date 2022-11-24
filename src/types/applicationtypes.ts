export enum ApplicationMetaDataFields {
  applicationIdentifier = "applicationIdentifier",
  title = "title",
  iconLocation = "iconLocation",
  exeLocation = "exeLocation",
  mimeTypes = "mimeTypes",
}

export interface IconMetadataShape {
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
