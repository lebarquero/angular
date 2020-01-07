import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
// import 'rxjs/add/operator/toPromise';

import { GitSearch } from './git-search';
import { GitUser } from './git-user';

@Injectable()
export class GitSearchService {
  cachedValues: Array<{
    [query: string]: GitSearch
  }> = [];

  constructor(private http: HttpClient) {
  }

  gitSearch = (query: string): Promise<GitSearch> => {
    let promise = new Promise<GitSearch>((resolve, reject) => {
      if (this.cachedValues[query]) {
        resolve(this.cachedValues[query]);
      }
      else {
        this.http.get('https://api.github.com/search/repositories?q=' + query)
        .toPromise()
        .then((response) => {
          resolve(response as GitSearch);
        }, (error) => {
          reject(error);
        });
      }
    });
    return promise;
  }

  gitUsers = (query: string): Promise<GitUser> => {
    let promise = new Promise<GitUser>((resolve, reject) => {
      this.http.get('https://api.github.com/search/users?q=' + query)
      .toPromise()
      .then((response) => {
        resolve(response as GitUser)
      }, (error) => {
        reject(error);
      });
    });
    return promise;
  }
}
