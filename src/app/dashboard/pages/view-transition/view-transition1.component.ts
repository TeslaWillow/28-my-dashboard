import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { TitleComponent } from '@shared/title/title.component';

@Component({
  imports: [CommonModule, TitleComponent],
  template: `
    <shared-title title="View Transition" />

    <section class="flex justify-start">
      <img
        srcset="https://picsum.photos/id/237/200/300"
        alt="Picsum"
        width="200"
        height="300"
        style="view-transition-name: hero1;"
      />

      <div
        class="bg-blue-800 w-32 h-32"
        style="view-transition-name: hero2;"
      ></div>

    </section>
  `,
})
export default class ViewTransitionComponent {

}
