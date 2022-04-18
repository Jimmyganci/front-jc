import Form from "../layouts/form/Form";
import formLogin from "./loginData";
import { auth } from "../api/requests";

function LandingPage() {
  return (
    <div className="landingPage">
      <h1>Welcome</h1>
      <Form
        onSubmitRequest={auth.loggedIn}
        className="form"
        dataForm={formLogin}
        urlDestination="/admin/home"
      />
    </div>
  );
}

export default LandingPage;
