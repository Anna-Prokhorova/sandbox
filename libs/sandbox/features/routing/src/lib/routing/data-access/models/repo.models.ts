export interface GitRepo {
  id: number;
  name: string;
  description: string;
  url: string;
  owner: {
    login: string;
  };
}

export interface GitRepoDetailed extends GitRepo {
  created_at: string;
  language: string;
  watchers: number;
  open_issues: number;
  html_url: string;
}
