import { Request, Response } from 'express';
import { getGitHubRepos } from '../repositories/githubRepository';

export const getRepos = async (req: Request, res: Response) => {
  try {
    const repos = await getGitHubRepos(process.env.GITHUB_TOKEN as string);
    res.json(repos);
  } catch (error) {
    res.status(500).json({ error: 'Error fetching repositories' });
  }
};
