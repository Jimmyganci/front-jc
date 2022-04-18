export type TypeInputLogin = {
  email: string;
  password: string;
};

export type TypeFormLogin = {
  name: string;
  required: boolean;
  messageError: string;
  placeHolder: string;
};

export type TypeLink = {
  id: number;
  title: string;
  url: string;
  idTheme: number;
};
