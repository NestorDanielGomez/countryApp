import { CommonModule } from '@angular/common';
import { ChangeDetectionStrategy, Component } from '@angular/core';

@Component({
  selector: 'shared-loading-spinner',
  standalone: true,
  imports: [
    CommonModule,
  ],
  templateUrl: './loadingSpinner.component.html',
  styleUrl: './loadingSpinner.component.css',
  changeDetection: ChangeDetectionStrategy.Default,
})
export class LoadingSpinnerComponent { }
