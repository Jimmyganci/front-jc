import axios from "axios";
import { TypeInputLogin } from "../types/types";

const auth = {
  loggedIn: ({ email, password }: TypeInputLogin): Promise<TypeInputLogin> =>
    axios
      .post(
        "http://localhost:1234/auth?API_KEY=mYsimpletoKenreaLlyverHadtofiNd45654everYday",
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
