import { computed, inject, Injectable, signal } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { delay, map, Observable } from 'rxjs';

import type { UserResponse } from '../interfaces/user-res.interface';
import type { User, UsersResponse } from '../interfaces/req-res.interface';

interface State {
  users: User[];
  loading: boolean;
}

@Injectable({
  providedIn: 'root'
})
export class UsersService {

  private _http = inject(HttpClient);

  #state = signal<State>({
    loading: true,
    users: [],
  });
  public users   = computed(()=> this.#state().users  );
  public loading = computed(()=> this.#state().loading);

  public baseUrl: string = "https://reqres.in/api/users";

  constructor() {
    this._http.get<UsersResponse>(this.baseUrl)
      .pipe( delay(1500) )
      .subscribe({
        next: (res) => {
          this.#state.set({
            loading: false,
            users: res.data,
          });
        }
      });
  }

  getUserById(id:string): Observable<User>  {
    return this._http.get<UserResponse>(`${this.baseUrl}/${id}`)
      .pipe(
        delay(1500),
        map((res) => res.data)
      );
  }

}
