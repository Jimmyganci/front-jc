import axios from "axios";
import { toast } from "react-toastify";
import { TypeInputLogin, TypeLink, TypeTheme, TypeUser } from "../types/types";

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
    axios.get(`${API_URL}/links?API_KEY=${API_KEY}`).then((res) => res.data),

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
    axios.get(`${API_URL}/themes?API_KEY=${API_KEY}`).then((res) => res.data),
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

export const users = {
  getAllUsers: (): Promise<TypeUser[]> =>
    axios.get(`${API_URL}/users?API_KEY=${API_KEY}`).then((res) => res.data),
  getOneUser: (id: number): Promise<TypeUser> =>
    axios
      .get(`${API_URL}/users/${id}?API_KEY=${API_KEY}`)
      .then((res) => res.data),
  createUser: (data: {
    email: string;
    password: string;
    newPassword: string;
  }) =>
    toast.promise(
      axios
        .post(`${API_URL}/users?API_KEY=${API_KEY}`, {
          email: data.email,
          password: data.password,
        })
        .then((res) => res),
      {
        pending: "Loading",
        success: "User created 👌",
        error: "Error 🤯",
      }
    ),

  updateUser: (id: number, data: TypeUser) =>
    toast.promise(
      axios
        .put(`${API_URL}/users/${id}?API_KEY=${API_KEY}`, { ...data })
        .then((res: any) => res),
      {
        pending: "Loading",
        success: "User updated 👌",
        error: "Error 🤯",
      }
    ),
  deleteUser: (id: number) =>
    toast.promise(
      axios
        .delete(`${API_URL}/users/${id}?API_KEY=${API_KEY}`)
        .then((res) => res),
      {
        pending: "Loading",
        success: "User deleted 👌",
        error: "Error 🤯",
      }
    ),
};

export default API_URL;
