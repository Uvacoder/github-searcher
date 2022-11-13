import axios from "axios";
import IUserGithub from "src/interfaces/User";
import IRepositories from "src/interfaces/Repository";

const api = axios.create({
  baseURL: "https://api.github.com",
});

export const getUsers = async (data: string) => {
  const response = await api.get<IUserGithub>(`/users/${data}`);
  return response.data as IUserGithub;
};

export const getRepositories = async (data: string) => {
  const response = await api.get<IRepositories>(`/users/${data}/repos`);
  return response.data as IRepositories;
};
