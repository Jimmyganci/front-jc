export type TypeInputLogin = {
  email: string;
  password: string;
};

export type TypeFormLogin = {
  name: string;
  type: string;
  required: boolean;
  messageError: string;
  placeHolder: string;
};

export type TypeInput = {
  type: string;
  placeHolder: string;
  name: string;
  required: boolean;
  register: any;
  selectData: any;
  watch: any;
};

export type TypeLink = {
  id: number;
  title: string;
  url: string;
  idTheme: number;
  active: boolean;
};

export type TypeTheme = {
  id: number;
  name: string;
  active: boolean;
};

export type TypeUser = {
  id: number;
  email: string;
  password: string;
  active: boolean;
  firstname: string;
  lastname: string;
  admin: boolean;
};
