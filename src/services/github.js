import { requestGitHub } from "./api";

export const gitHubServices = {
  get: () => {
    const url = "urlAqui";

    return requestGitHub.get(url).then((response) => response.data);
  },
};
