import axios from 'axios';

export const getGitHubRepos = async (token: string) => {
  const response = await axios.get('https://api.github.com/user/repos', {
    headers: {
      Authorization: `Bearer ${token}`
    }
  });
  return response.data;
};
