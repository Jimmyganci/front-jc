import axios from "axios";
import { TypeInputLogin, TypeLink, TypeTheme } from "../types/types";

const API_URL = import.meta.env.DEV
  ? "http://localhost:1234"
  : "https://api-jc.herokuapp.com";
const API_KEY = import.meta.env.VITE_API_KEY;
console.log(API_URL);

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
      .then((res: any) => res),
};

export const links = {
  getAllLinks: (): Promise<TypeLink[]> =>
    axios.get(`${API_URL}/links?API_KEY=${API_KEY}`).then((res) => res.data),
  updateLink: (id: number, data: TypeLink) =>
    axios
      .put(`${API_URL}/links/${id}?API_KEY=${API_KEY}`, { ...data })
      .then((res: any) => res),
  createLink: (data: TypeLink) =>
    axios
      .post(`${API_URL}/links?API_KEY=${API_KEY}`, { ...data })
      .then((res) => res),
};

export const themes = {
  getAllThemes: (): Promise<TypeTheme[]> =>
    axios.get(`${API_URL}/themes?API_KEY=${API_KEY}`).then((res) => res.data),
  getOneTheme: (idTheme: number): Promise<TypeTheme> =>
    axios
      .get(`${API_URL}/themes/${idTheme}?API_KEY=${API_KEY}`)
      .then((res) => res.data),
};

export default API_URL;
