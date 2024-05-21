import { CommonModule } from '@angular/common';
import { ChangeDetectionStrategy, Component } from '@angular/core';
import { SharedModule } from '../../../shared/shared.module';
import { CountriesService } from '../../services/countries.service';
import { Country } from '../../interfaces/country';
import { CountryTableComponent } from '../../components/countryTable/countryTable.component';

@Component({
  selector: 'app-by-capital-page',
  standalone: true,
  imports: [
    CommonModule,
    SharedModule,
    CountryTableComponent
  ],
  templateUrl: './byCapitalPage.component.html',
  styleUrl: './byCapitalPage.component.css',
  changeDetection: ChangeDetectionStrategy.Default
})
export class ByCapitalPageComponent {

  public countries: Country[] = []

  constructor(private countryService: CountriesService){}

  searchByCapital(term: string): void{
    this.countryService.searchCapital(term)
    .subscribe(countriesApi =>{
      this.countries = countriesApi
    })
    }
}
