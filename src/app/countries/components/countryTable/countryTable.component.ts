import { CommonModule } from '@angular/common';
import { ChangeDetectionStrategy, Component, Input } from '@angular/core';
import { Country } from '../../interfaces/country.interface';
import { RouterModule } from '@angular/router';

@Component({
  selector: 'countries-table',
  standalone: true,
  imports: [CommonModule, RouterModule],
  templateUrl: './countryTable.component.html',
  styleUrl: './countryTable.component.css',
  changeDetection: ChangeDetectionStrategy.Default,
})
export class CountryTableComponent {
  @Input()
  public countries: Country[] = [];
}
