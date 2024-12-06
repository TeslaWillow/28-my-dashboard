import { computed, inject, Injectable, signal } from '@angular/core';
import { User, UserResponse } from '../interfaces/req-res.interface';
import { HttpClient } from '@angular/common/http';
import { delay } from 'rxjs';

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
    this._http.get<UserResponse>(this.baseUrl)
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

}
