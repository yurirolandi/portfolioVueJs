import axios from "axios";

export const requestGitHub = axios.create({
  baseURL: process.env.VUE_APP_API,
});
