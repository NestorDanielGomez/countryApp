import { CommonModule } from '@angular/common';
import { ChangeDetectionStrategy, Component } from '@angular/core';

@Component({
  selector: 'shared-contact-page',
  standalone: true,
  imports: [
    CommonModule,
  ],
  template: `<p>contactPage works!</p>`,
  styleUrl: './contactPage.component.css',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class ContactPageComponent { }
