const formLink = [
  {
    name: "title",
    type: "text",
    required: true,
    messageError: "Title is required!",
    placeHolder: "Link's title",
  },
  {
    name: "url",
    type: "text",
    required: true,
    messageError: "Url is required!",
    placeHolder: "Link's Url",
  },
  {
    name: "idTheme",
    type: "select",
    required: true,
    messageError: "Theme is required!",
    placeHolder: "Link's Theme",
  },
];

export default formLink;
