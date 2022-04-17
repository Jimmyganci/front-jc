import axios from "axios";
import dotenv from "dotenv";
import { TypeInputLogin } from "../types/types";

dotenv.config();

const API_URL =
  process.env.REACT_APP_ENV === "dev"
    ? "http://localhost:1234"
    : "https://api-jc.herokuapp.com";

const auth = {
  loggedIn: ({ email, password }: TypeInputLogin): Promise<TypeInputLogin> =>
    axios
      .post(
        `${API_URL}/auth?API_KEY=${process.env.REACT_APP_API_KEY}`,
        { email, password },
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          withCredentials: true,
        }
      )
      .then((res) => res.data),
};

export default auth;
