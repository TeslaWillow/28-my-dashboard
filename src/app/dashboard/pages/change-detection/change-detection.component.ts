import { CommonModule } from '@angular/common';
import { ChangeDetectionStrategy, Component, computed, signal } from '@angular/core';
import { TitleComponent } from '@shared/title/title.component';

@Component({
  imports: [CommonModule, TitleComponent],
  changeDetection: ChangeDetectionStrategy.OnPush, // Pendiente en menos ciclos de vida
  template: `
    <shared-title [title]="currentFramework()" />

    <pre>{{ frameworkSignal() | json }}</pre>
    <pre>{{ frameworkAsProperty | json }}</pre>
  `,
})
export default class ChangeDetectionComponent {

  public currentFramework = computed(
    () => `Change detection - ${this.frameworkSignal().name}`
  );

  public frameworkSignal = signal({
    name: 'Angular',
    releaseDate: 2016
  });

  public frameworkAsProperty = {
    name: 'Angular',
    releaseDate: 2016
  };

  constructor(){
    setTimeout(() => {
      // this.frameworkAsProperty.name = 'React';
      this.frameworkSignal.update( value => ({
        ...value,
        name: 'React',
      }));
      console.log('Hecho');
    }, 3000);
  }
}
