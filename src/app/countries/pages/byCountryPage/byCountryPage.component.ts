import { CommonModule } from '@angular/common';
import { ChangeDetectionStrategy, Component, OnInit } from '@angular/core';
import { Country } from '../../interfaces/country.interface';
import { CountryTableComponent } from '../../components/countryTable/countryTable.component';
import { SharedModule } from '../../../shared/shared.module';
import { CountriesService } from '../../services/countries.service';

@Component({
  selector: 'app-by-country-page',
  standalone: true,
  imports: [CommonModule, SharedModule, CountryTableComponent],
  templateUrl: './byCountryPage.component.html',
  styleUrl: './byCountryPage.component.css',
  changeDetection: ChangeDetectionStrategy.Default,
})
export class ByCountryPageComponent implements OnInit {
  public countries: Country[] = [];
  public isLoading: boolean = false;
  public initialValue: string = '';

  constructor(private countryService: CountriesService) {}

  ngOnInit(): void {
    this.countries = this.countryService.cacheStore.byCountries.countries;
    this.initialValue = this.countryService.cacheStore.byCountries.term;
  }

  searchByCountry(term: string): void {
    this.isLoading = true;

    this.countryService.searchCountry(term).subscribe((countriesApi) => {
      this.countries = countriesApi;
      this.isLoading = false;
    });
  }
}
