import axios from "axios";
import { TypeInputLogin } from "../types/types";

const API_URL =
  import.meta.env.VITE_ENV === "dev"
    ? "http://localhost:1234"
    : "https://api-jc.herokuapp.com";

const auth = {
  loggedIn: ({ email, password }: TypeInputLogin): Promise<TypeInputLogin> => {
    console.log(API_URL);
    return axios
      .post(
        `${API_URL}/auth?API_KEY=${import.meta.env.VITE_API_KEY}`,
        { email, password },
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          withCredentials: true,
        }
      )
      .then((res) => res.data);
  },
};

export default auth;
