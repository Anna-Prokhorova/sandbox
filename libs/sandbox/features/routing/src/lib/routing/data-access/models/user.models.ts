export interface GitUser {
  id: number;
  login: string;
  avatar_url: string;
}

export interface GitUserDetailed extends GitUser {
  company: string;
  location: string;
  name: string;
  followers: number;
  public_repos: number;
  html_url: string;
}
