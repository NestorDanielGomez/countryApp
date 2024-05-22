import { CommonModule } from '@angular/common';
import { ChangeDetectionStrategy, Component, OnInit } from '@angular/core';
import { SharedModule } from '../../../shared/shared.module';
import { CountriesService } from '../../services/countries.service';
import { Country } from '../../interfaces/country.interface';
import { CountryTableComponent } from '../../components/countryTable/countryTable.component';

@Component({
  selector: 'app-by-capital-page',
  standalone: true,
  imports: [CommonModule, SharedModule, CountryTableComponent],
  templateUrl: './byCapitalPage.component.html',
  styleUrl: './byCapitalPage.component.css',
  changeDetection: ChangeDetectionStrategy.Default,
})
export class ByCapitalPageComponent implements OnInit {
  public countries: Country[] = [];
  public isLoading: boolean = false;
  public initialValue: string = '';

  constructor(private countryService: CountriesService) {}

  ngOnInit(): void {
    this.countries = this.countryService.cacheStore.byCapital.countries;
    this.initialValue = this.countryService.cacheStore.byCapital.term;
  }

  searchByCapital(term: string): void {
    this.isLoading = true;

    this.countryService.searchCapital(term).subscribe((countriesApi) => {
      this.countries = countriesApi;
      this.isLoading = false;
    });
  }
}
