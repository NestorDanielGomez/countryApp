import { CommonModule } from '@angular/common';
import { ChangeDetectionStrategy, Component } from '@angular/core';

@Component({
  selector: 'shared-about-page',
  standalone: true,
  imports: [
    CommonModule,
  ],
  template: `<p>AboutPage works!</p>`,
  styleUrl: './AboutPage.component.css',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class AboutPageComponent { }
