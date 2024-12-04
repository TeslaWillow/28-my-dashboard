import { CommonModule } from '@angular/common';
import { Component, Input } from '@angular/core';

@Component({
  selector: 'shared-heavy-loaders-fast',
  imports: [CommonModule],
  template: `
    <section [ngClass]="['w-flull', cssClass]">
      <ng-content />
    </section>
  `,
})
export class HeavyLoadersFastComponent {
  @Input({ required: true })
  public cssClass!: string;

  constructor() {
    console.log('HeavyLoader Fast Creado');
  }

}
