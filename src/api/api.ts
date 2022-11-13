import axios from "axios";
import IUserGithub from "src/interfaces/User";
import IRepositories from "src/interfaces/Repository";

const api = axios.create({
  baseURL: "https://api.github.com",
});

export const getUsers = async (data: string): Promise<IUserGithub> => {
  const response = await api.get<IUserGithub>(`/users/${data}`);
  console.log("response");
  return response.data;
};

export const getRepositories = async (data: string): Promise<IRepositories> => {
  const response = await api.get<IRepositories>(`/users/${data}/repos`);
  console.log("response");
  return response.data;
};
