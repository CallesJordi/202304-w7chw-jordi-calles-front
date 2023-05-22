import axios from "axios";
import { useCallback } from "react";
import { UserCredentials } from "../../types";

export const apiUrl = import.meta.env.VITE_APP_URL;

const useUser = () => {
  const getUserToken = useCallback(
    async (userCredentials: UserCredentials): Promise<string> => {
      try {
        const {
          data: { token },
        } = await axios.post<{ token: string }>(
          `${apiUrl}user/login`,
          userCredentials
        );
        return token;
      } catch (error) {
        throw new Error("Wrong credentials");
      }
    },
    []
  );

  return {
    getUserToken,
  };
};

export default useUser;
