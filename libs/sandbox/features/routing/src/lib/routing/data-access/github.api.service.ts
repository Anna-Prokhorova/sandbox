import { HttpClient } from '@angular/common/http';
import { inject, Injectable } from '@angular/core';
import { GitUser, GitUserDetailed } from './models/user.models';
import { Observable } from 'rxjs';
import { GitRepo, GitRepoDetailed } from './models/repo.models';

@Injectable()
export class GithubApiService {
  private httpClient: HttpClient = inject(HttpClient);

  public getUsers(): Observable<GitUser[]> {
    return this.httpClient.get<GitUser[]>('https://api.github.com/users');
  }

  public getRepos(): Observable<GitRepo[]> {
    return this.httpClient.get<GitRepo[]>(
      'https://api.github.com/repositories'
    );
  }

  public getUser(login: string): Observable<GitUserDetailed> {
    return this.httpClient.get<GitUserDetailed>(
      `https://api.github.com/users/${login}`
    );
  }

  public getRepo(owner: string, name: string): Observable<GitRepoDetailed> {
    return this.httpClient.get<GitRepoDetailed>(
      `https://api.github.com/repos/${owner}/${name}`
    );
  }
}
