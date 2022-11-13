import axios from "axios";
import IUserGithub from "src/interfaces/User";
import IRepositories from "src/interfaces/Repository";

const api = axios.create({
  baseURL: "https://api.github.com",
  headers: {
    authorization: "token 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",
  },
});

export const getUsers = async (data: string): Promise<IUserGithub> => {
  const response = await api.get<IUserGithub>(`/users/${data}`);
  return response.data;
};

export const getRepositories = async (
  data: string
): Promise<IRepositories[]> => {
  const response = await api.get<IRepositories[]>(`/users/${data}/repos`);
  return response.data;
};
