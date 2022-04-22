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
];

export default formUser;
