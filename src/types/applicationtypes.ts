export enum ApplicationMetaDataFields {
  applicationIdentifier = "applicationIdentifier",
  title = "title",
  iconLocation = "iconLocation",
  exeLocation = "exeLocation",
  mimeTypes = "mimeTypes",
}

export interface IconMetadataShape {
  title: string;
  iconLocation?: string;
  exeLocation: string;
}

export interface ApplicationMetaData extends IconMetadataShape {
  applicationIdentifier: string;
  mimeTypes: Array<string>;
}

export class IconMetadata implements IconMetadataShape {
  title: string;
  iconLocation?: string;
  exeLocation: string;

  constructor(props: IconMetadataShape) {
    this.title = props.title;
    this.iconLocation = props.iconLocation;
    this.exeLocation = props.exeLocation;
  }
}

export type ApplicationMetaDataObject = {
  [key in ApplicationMetaDataFields]: any;
};
