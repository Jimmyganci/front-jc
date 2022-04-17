import axios from "axios";
import { TypeInputLogin } from "../types/types";

const API_URL = import.meta.env.VITE_API_URL || "http://localhost:1234";
const API_KEY = import.meta.env.VITE_API_KEY;

export const auth = {
  loggedIn: ({ email, password }: TypeInputLogin): Promise<TypeInputLogin> =>
    axios
      .post(
        `${API_URL}/auth?API_KEY=${API_KEY}`,
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

export const links = {
  getAllLinks: () => axios.get(`${API_URL}/links?API_KEY=${API_KEY}`),
};

export default API_URL;
