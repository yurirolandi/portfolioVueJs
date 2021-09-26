import { requestGitHub } from "./api";

export const gitHubServices = {
  getUser: () => {
    const url = "/users/yurirolandi";

    return requestGitHub.get(url).then((response) => response.data);
  },
  getUserRepositories: () => {
    const url = "/users/yurirolandi/repos";

    return requestGitHub.get(url).then((response) => response.data);
  },
};
