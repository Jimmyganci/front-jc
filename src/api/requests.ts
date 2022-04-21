import axios from "axios";
import { toast } from "react-toastify";
import { TypeInputLogin, TypeLink, TypeTheme } from "../types/types";

const API_URL = import.meta.env.DEV
  ? "http://localhost:1234"
  : "https://api-jc.herokuapp.com";
const API_KEY = import.meta.env.VITE_API_KEY;

export const auth = {
  loggedIn: ({ email, password }: TypeInputLogin): Promise<TypeInputLogin> =>
    toast.promise(
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
      {
        pending: "Loading",
        success: "You are login👌",
        error: "Error 🤯",
      }
    ),
};

export const links = {
  getAllLinks: (): Promise<TypeLink[]> =>
    toast.promise(
      axios.get(`${API_URL}/links?API_KEY=${API_KEY}`).then((res) => res.data),
      {
        pending: "Loading",
        success: "All links loaded 👌",
        error: "Error 🤯",
      }
    ),
  getOneLink: (id: number): Promise<TypeLink> =>
    axios
      .get(`${API_URL}/links/${id}?API_KEY=${API_KEY}`)
      .then((res) => res.data),
  updateLink: (id: number, data: TypeLink) =>
    toast.promise(
      axios
        .put(`${API_URL}/links/${id}?API_KEY=${API_KEY}`, { ...data })
        .then((res: any) => res),
      {
        pending: "Loading",
        success: "Link updated 👌",
        error: "Error 🤯",
      }
    ),
  createLink: (data: TypeLink) =>
    toast.promise(
      axios
        .post(`${API_URL}/links?API_KEY=${API_KEY}`, { ...data })
        .then((res) => res),
      {
        pending: "Loading",
        success: "Link created 👌",
        error: "Error 🤯",
      }
    ),
  deleteLink: (id: number) =>
    toast.promise(
      axios
        .delete(`${API_URL}/links/${id}?API_KEY=${API_KEY}`)
        .then((res) => res),
      {
        pending: "Loading",
        success: "Link deleted 👌",
        error: "Error 🤯",
      }
    ),
};

export const themes = {
  getAllThemes: (): Promise<TypeTheme[]> =>
    toast.promise(
      axios.get(`${API_URL}/themes?API_KEY=${API_KEY}`).then((res) => res.data),
      {
        pending: "Loading",
        success: "All themes loaded👌",
        error: "Error 🤯",
      }
    ),
  getOneTheme: (idTheme: number): Promise<TypeTheme> =>
    axios
      .get(`${API_URL}/themes/${idTheme}?API_KEY=${API_KEY}`)
      .then((res) => res.data),
  createTheme: (data: TypeTheme) =>
    toast.promise(
      axios
        .post(`${API_URL}/themes?API_KEY=${API_KEY}`, { ...data })
        .then((res) => res),
      {
        pending: "Loading",
        success: "Theme created 👌",
        error: "Error 🤯",
      }
    ),
  updateTheme: (id: number, data: TypeTheme) =>
    toast.promise(
      axios
        .put(`${API_URL}/themes/${id}?API_KEY=${API_KEY}`, { ...data })
        .then((res: any) => res),
      {
        pending: "Loading",
        success: "Theme updated 👌",
        error: "Error 🤯",
      }
    ),
  deleteTheme: (id: number) =>
    toast.promise(
      axios
        .delete(`${API_URL}/themes/${id}?API_KEY=${API_KEY}`)
        .then((res) => res),
      {
        pending: "Loading",
        success: "Theme deleted 👌",
        error: "Error 🤯",
      }
    ),
};

export default API_URL;
