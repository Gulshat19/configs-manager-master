declare interface User {
  _id: string;
  username: string;
  token: string;
}

declare interface Config {
  _id: string;
  name: string;
  sections: Section[];
  created: Date;
  updated: Date;
  owner: Owner;
}

declare interface Section {
  _id: string;
  name: string;
  fields: Field[];
  created: Date;
  updated: Date;
}

declare interface Field {
  _id: string;
  name: string;
  type: string;
  value: boolean | string | number | Array;
}


