export enum access {
  r = "r",
  w = "w",
  x = "x",
}

export type UserAccessEntry = {
  object: string;
  owner: string;
  group: string;
  userAccess: Array<access>;
  groupAccess: Array<access>;
  otherAccess: Array<access>;
};
