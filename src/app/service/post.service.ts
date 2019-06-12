import { Injectable } from '@angular/core';
import { environment } from './../../environments/environment';
import { HttpClient, HttpHeaders } from '@angular/common/http';

@Injectable()
export class PostService {

  api = environment.api;

  constructor(private http: HttpClient) { }

  /**
   * Get all data of Posts
   */
  public getPostService() {
    return this.http.get(this.api + 'posts').toPromise();
  }

  /**
   * add data service
   * @param data
   */
  public postDataService(data) {
    const headers = new HttpHeaders();
    headers.append('Content-Type', 'application/json');
    return this.http.post(this.api + 'posts', data, { headers: headers }).toPromise();
  }

  /**
   * Get post by Id
   */
  public postById(id) {
    return this.http.get(this.api + 'posts/' + id);
  }
  /**
   * Update the form data
   */
  public updatePostService(id, data) {
    const headers = new HttpHeaders();
    headers.append('Content-Type', 'application/json');
    return this.http.put(this.api + 'posts/' +  id , data, { headers: headers });
  }

  /**
   * Delete the posts from userId
   */
  public deletePostService(id) {
    return this.http.delete(this.api + 'posts/' + id);
  }
}
