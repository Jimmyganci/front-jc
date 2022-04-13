import Form from "../layouts/form/Form";

const formLogin = [
  {
    name: "email",
    required: true,
    messageError: "Email is required!",
    placeHolder: "Your email...",
  },
  {
    name: "password",
    required: true,
    messageError: "Password is required!",
    placeHolder: "Your password...",
  },
];

function LandingPage() {
  return (
    <div className="landingPage">
      <h1>Welcome</h1>
      <Form dataForm={formLogin} />
    </div>
  );
}

export default LandingPage;
