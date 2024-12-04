import { booleanAttribute, Component, Input } from '@angular/core';

@Component({
  selector: 'shared-title',
  imports: [],
  template: `
    <h1 class="text-3xl mb-5">{{ title }} - {{ withShadow }}</h1>
  `,
})
export class TitleComponent {

  @Input({ required: true })
  public title!: string;

  @Input({
    transform: booleanAttribute // If exist then is true
  })
  public withShadow: boolean = false;

}
