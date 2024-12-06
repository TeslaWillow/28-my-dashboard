import { CommonModule } from '@angular/common';
import { Component, computed, inject } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { TitleComponent } from '@shared/title/title.component';
import { toSignal } from '@angular/core/rxjs-interop';
import { switchMap } from 'rxjs';
import { UsersService } from '@services/users.service';

@Component({
  imports: [CommonModule, TitleComponent],
  templateUrl: './user.component.html',
  styles: ``
})
export default class UserComponent {

  private route = inject( ActivatedRoute );
  private userService = inject( UsersService );

  // titleLabel
  public titleLabel = computed(() => {
    return !!this.user()
     ? `Información del usuario: ${this.user()?.first_name} ${this.user()?.last_name}`
     : `Espere...`
  });

  public user = toSignal(
    this.route.params.pipe(
      switchMap(
        ({id}) =>   this.userService.getUserById(id)
      ),
    )
  );

  constructor(

  ){}

}

