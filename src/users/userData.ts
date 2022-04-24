const formUser = [
  {
    name: "email",
    type: "email",
    required: true,
    messageError: "Email is required!",
    placeHolder: "Your email...",
  },
  {
    name: "password",
    type: "password",
    required: true,
    messageError: "Password is required!",
    placeHolder: "Your password",
  },
  {
    name: "newPassword",
    type: "password",
    required: true,
    messageError: "Confirm your password!",
    placeHolder: "Your confirm password",
  },
  {
    name: "firstname",
    type: "text",
    required: true,
    messageError: "Firstname is required!",
    placeHolder: "Your firstname",
  },
  {
    name: "lastname",
    type: "text",
    required: true,
    messageError: "Lastname is required!",
    placeHolder: "Your lastname",
  },
];

export default formUser;
